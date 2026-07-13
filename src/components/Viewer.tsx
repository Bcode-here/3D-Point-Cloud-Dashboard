import "./Viewer.css";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    OrbitControls,
    Grid,
    GizmoHelper,
    GizmoViewport,
} from "@react-three/drei";

import {
    Suspense,
    useEffect,
    useRef,
} from "react";

import * as THREE from "three";

import { usePLYLoader } from "../hooks/usePLYLoader";
import { useViewer } from "../context/ViewerContext";
import Loading from "./Loading.tsx";



function PointCloud() {
    const {
        pointSize,
        opacity,
        setLoading,
        setTotalPoints,
    } = useViewer();

    const plyUrl =
        "https://my.microsoftpersonalcontent.com/personal/d9506e14cec54de4/_layouts/15/download.aspx?UniqueId=ebec454f-8e02-4d49-9b0d-c81279a8ae37&Translate=false&ApiVersion=2.0";

    const { geometry, material } = usePLYLoader(plyUrl);

    // Transform geometry ONLY ONCE
    useEffect(() => {
        geometry.computeBoundingBox();

        const box = geometry.boundingBox;
        if (!box) return;

        const center = new THREE.Vector3();
        box.getCenter(center);

        // Center model
        geometry.translate(
            -center.x,
            -center.y,
            -center.z
        );

        // Scale model
        const size = new THREE.Vector3();
        box.getSize(size);

        const maxDim = Math.max(
            size.x,
            size.y,
            size.z
        );

        const scale = 120 / maxDim;

        geometry.scale(scale, scale, scale);

        // Rotate from LiDAR Z-Up → Three.js Y-Up
        geometry.rotateX(-Math.PI / 2);

        // Uncomment ONLY if road is still vertical
        // geometry.rotateZ(Math.PI / 2);

        geometry.computeBoundingSphere();

    }, [geometry]);

    // Update material ONLY
    useEffect(() => {
        material.size = pointSize * 0.02;
        material.opacity = opacity;
        material.transparent = opacity < 1;
        material.needsUpdate = true;
    }, [pointSize, opacity, material]);

    // Update info panel
    useEffect(() => {
        setLoading(false);

        if (geometry.attributes.position) {
            setTotalPoints(
                geometry.attributes.position.count
            );
        }
    }, [geometry, setLoading, setTotalPoints]);

    return (
        <points
            geometry={geometry}
            material={material}
        />
    );
}



function CameraTracker() {
    const { camera } = useThree();
    const { setCameraPosition } = useViewer();

    const previous = useRef({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
    });

    useFrame(() => {
        if (
            Math.abs(camera.position.x - previous.current.x) > 0.01 ||
            Math.abs(camera.position.y - previous.current.y) > 0.01 ||
            Math.abs(camera.position.z - previous.current.z) > 0.01
        ) {
            previous.current = {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z,
            };

            setCameraPosition({
                x: Number(camera.position.x.toFixed(2)),
                y: Number(camera.position.y.toFixed(2)),
                z: Number(camera.position.z.toFixed(2)),
            });
        }
    });

    return null;
}

function Scene() {
    const controlsRef = useRef<any>(null);

    const {
        background,
        showGrid,
        showAxes,
        setResetCamera,
    } = useViewer();

    useEffect(() => {
        setResetCamera(() => () => {
            if (!controlsRef.current) return;
            controlsRef.current.reset();
        });
    }, [setResetCamera]);

    return (
        <>
            <color attach="background" args={[background]} />
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />

            {showGrid && (
                <Grid
                    args={[200, 200]}
                    cellSize={1}
                    sectionSize={10}
                    fadeDistance={150}
                />
            )}

            {showAxes && <axesHelper args={[10]} />}

            <Suspense fallback={<Loading />}>
                <PointCloud />
            </Suspense>

            <CameraTracker />

            <OrbitControls
                ref={controlsRef}
                makeDefault
                enableDamping
                dampingFactor={0.15}
                rotateSpeed={0.6}
                zoomSpeed={0.9}
                panSpeed={0.8}

                target={[0, 0, 0]}

                minDistance={20}
                maxDistance={1000}

                screenSpacePanning={false}
            />

            <GizmoHelper
                alignment="bottom-right"
                margin={[80, 80]}
            >
                <GizmoViewport />
            </GizmoHelper>
        </>
    );
}

export default function Viewer() {
    return (
        <div className="viewer">
            <Canvas
                gl={{ antialias: true }}
                camera={{
                    position: [180, 90, 80],
                    fov: 40,
                    near: 0.1,
                    far: 5000,
                }}
                style={{ width: "100%", height: "100%" }}
            >
                <Scene />
            </Canvas>

            <div className="viewer-overlay">
                <div className="overlay-content">
                    <h3>3D Point Cloud Viewer</h3>
                    <p>🖱 Left Click + Drag : Rotate</p>
                    <p>🖱 Right Click + Drag : Pan</p>
                    <p>🔍 Mouse Wheel : Zoom</p>
                    <p className="dataset">
                        Dataset:
                        <strong> Road_Design_Charholi.ply</strong>
                    </p>
                </div>
            </div>
        </div >
    );
}