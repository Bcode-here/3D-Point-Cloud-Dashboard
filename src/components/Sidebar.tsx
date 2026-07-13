import "./Sidebar.css";

import {
    RotateCcw,
    Grid3X3,
    Palette,
    Axis3D,
} from "lucide-react";

import { useViewer } from "../context/ViewerContext";

export default function Sidebar() {
    const {
        pointSize,
        setPointSize,

        opacity,
        setOpacity,

        background,
        setBackground,

        showGrid,
        setShowGrid,

        showAxes,
        setShowAxes,

        resetCamera,
    } = useViewer();

    return (
        <div className="sidebar">

            <h2 className="sidebar-title">
                Viewer Controls
            </h2>

            {/* Point Size */}

            <div className="control-group">

                <label>
                    Point Size
                </label>

                <input
                    type="range"
                    min={1}
                    max={10}
                    value={pointSize}
                    onChange={(e) =>
                        setPointSize(Number(e.target.value))
                    }
                />

                <span>{pointSize}px</span>

            </div>

            {/* Opacity */}

            <div className="control-group">

                <label>
                    Opacity
                </label>

                <input
                    type="range"
                    min={0.1}
                    max={1}
                    step={0.1}
                    value={opacity}
                    onChange={(e) =>
                        setOpacity(Number(e.target.value))
                    }
                />

                <span>
                    {(opacity * 100).toFixed(0)}%
                </span>

            </div>

            {/* Background */}

            <div className="control-group">

                <label>
                    Background
                </label>

                <div className="color-picker">

                    <Palette size={18} />

                    <input
                        type="color"
                        value={background}
                        onChange={(e) =>
                            setBackground(e.target.value)
                        }
                    />

                </div>

            </div>

            {/* Grid */}

            <div className="toggle-card">

                <div className="toggle-row">

                    <Grid3X3 size={18} />

                    <span>
                        Show Grid
                    </span>

                    <input
                        type="checkbox"
                        checked={showGrid}
                        onChange={(e) =>
                            setShowGrid(e.target.checked)
                        }
                    />

                </div>

                {/* Axes */}

                <div className="toggle-row">

                    <Axis3D size={18} />

                    <span>
                        Show Axes
                    </span>

                    <input
                        type="checkbox"
                        checked={showAxes}
                        onChange={(e) =>
                            setShowAxes(e.target.checked)
                        }
                    />

                </div>

            </div>

            {/* Reset */}

            <button
                className="action-btn"
                onClick={resetCamera}
            >
                <RotateCcw size={18} />

                Reset Camera

            </button>

        </div>
    );
}