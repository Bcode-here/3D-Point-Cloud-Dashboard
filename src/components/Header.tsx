import "./Header.css";

import {
   
    Download,
    Maximize2,
    Cpu,
} from "lucide-react";

export default function Header() {
    const fullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const screenshot = () => {
        const canvas = document.querySelector("canvas");

        if (!canvas) return;

        const link = document.createElement("a");

        link.download = "PointCloud.png";

        link.href = canvas.toDataURL("image/png");

        link.click();
    };

    return (
        <header className="header">
            <div className="header-left">

                <div className="logo">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="logo-image"
                    />
                </div>

                <div>

                    <h2>3D Point Cloud Dashboard</h2>

                    <span>Micro Integrated Semiconductor Systems</span>

                </div>

            </div>

            <div className="header-center">

                <Cpu size={18} />

                <span>React + Three.js + TypeScript</span>

            </div>

            <div className="header-right">

                <button
                    className="header-btn"
                    onClick={screenshot}
                >
                    <Download size={18} />
                    Screenshot
                </button>

                <button
                    className="header-btn"
                    onClick={fullscreen}
                >
                    <Maximize2 size={18} />
                    Fullscreen
                </button>

            </div>
        </header>
    );
}