import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "three-stdlib";
import * as THREE from "three";
import { useMemo } from "react";

export function usePLYLoader(url: string) {
    const geometry = useLoader(PLYLoader, url);

    geometry.computeBoundingSphere();
    geometry.center();

    const material = useMemo(() => {
        return new THREE.PointsMaterial({
            color: "#ffffff",
            size: 0.08,
            sizeAttenuation: true,
            transparent: true,
            opacity: 1,
        });
    }, []);

    return { geometry, material };
}