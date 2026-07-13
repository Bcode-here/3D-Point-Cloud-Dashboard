import { Html } from "@react-three/drei";
import "./Loading.css";

export default function Loading() {
    return (
        <Html center>
            <div className="loading">
                <div className="spinner"></div>
                <p>Loading Point Cloud...</p>
            </div>
        </Html>
    );
}