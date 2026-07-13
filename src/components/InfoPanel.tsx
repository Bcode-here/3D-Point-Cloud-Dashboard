import "./InfoPanel.css";

import {
    Database,
    Camera,
    Activity,
    Box,
    Layers3,
} from "lucide-react";

import { useViewer } from "../context/ViewerContext";

export default function InfoPanel() {

    const {

        loading,

        totalPoints,

        pointSize,

        opacity,

        cameraPosition,

    } = useViewer();

    return (

        <div className="info-panel">

            <h3>Viewer Information</h3>

            <div className="info-card">

                <Database size={20} />

                <div>

                    <h4>Dataset</h4>

                    <p>

                        Road_Design_Charholi.ply

                    </p>

                </div>

            </div>

            <div className="info-card">

                <Activity size={20} />

                <div>

                    <h4>Status</h4>

                    <p className={loading ? "loading" : "success"}>

                        {loading ? "Loading..." : "Loaded"}

                    </p>

                </div>

            </div>

            <div className="info-card">

                <Layers3 size={20} />

                <div>

                    <h4>Total Points</h4>

                    <p>

                        {totalPoints.toLocaleString()}

                    </p>

                </div>

            </div>

            <div className="info-card">

                <Camera size={20} />

                <div>

                    <h4>Camera Position</h4>

                    <p>

                        X : {cameraPosition.x}

                        <br />

                        Y : {cameraPosition.y}

                        <br />

                        Z : {cameraPosition.z}

                    </p>

                </div>

            </div>

            <div className="info-card">

                <Box size={20} />

                <div>

                    <h4>Point Size</h4>

                    <p>

                        {pointSize}px

                    </p>

                </div>

            </div>

            <div className="info-card">

                <Activity size={20} />

                <div>

                    <h4>Opacity</h4>

                    <p>

                        {Math.round(opacity * 100)}%

                    </p>

                </div>

            </div>

        </div>

    );

}