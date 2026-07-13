import {
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";

import type { ReactNode } from "react";

interface ViewerContextType {
    pointSize: number;
    setPointSize: (value: number) => void;

    opacity: number;
    setOpacity: (value: number) => void;

    background: string;
    setBackground: (value: string) => void;

    showGrid: boolean;
    setShowGrid: (value: boolean) => void;

    showAxes: boolean;
    setShowAxes: (value: boolean) => void;

    loading: boolean;
    setLoading: (value: boolean) => void;

    totalPoints: number;
    setTotalPoints: (value: number) => void;

    cameraPosition: {
        x: number;
        y: number;
        z: number;
    };

    setCameraPosition: (
        value: {
            x: number;
            y: number;
            z: number;
        }
    ) => void;

    resetCamera: () => void;
    setResetCamera: (fn: () => void) => void;
}

const ViewerContext =
    createContext<ViewerContextType | null>(null);

export function ViewerProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [pointSize, setPointSize] = useState(3);

    const [opacity, setOpacity] = useState(1);

    const [background, setBackground] =
        useState("#020617");

    const [showGrid, setShowGrid] =
        useState(true);

    const [showAxes, setShowAxes] =
        useState(true);

    const [loading, setLoading] =
        useState(true);

    const [totalPoints, setTotalPoints] =
        useState(0);

    const [cameraPosition, setCameraPosition] =
        useState({
            x: 15,
            y: 15,
            z: 15,
        });

    const [resetCamera, setResetCamera] =
        useState<() => void>(() => () => { });

    const value = useMemo(
        () => ({
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

            loading,
            setLoading,

            totalPoints,
            setTotalPoints,

            cameraPosition,
            setCameraPosition,

            resetCamera,
            setResetCamera,
        }),
        [
            pointSize,
            opacity,
            background,
            showGrid,
            showAxes,
            loading,
            totalPoints,
            cameraPosition,
            resetCamera,
        ]
    );

    return (
        <ViewerContext.Provider value={value}>
            {children}
        </ViewerContext.Provider>
    );
}

export function useViewer() {
    const context = useContext(ViewerContext);

    if (!context) {
        throw new Error(
            "useViewer must be used inside ViewerProvider"
        );
    }

    return context;
}