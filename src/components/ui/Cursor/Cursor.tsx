import CursorDot from "./CursorDot";
import CursorRing from "./CursorRing";
import useCursor from "./useCursor";

const Cursor = () => {

    const {
        x,
        y,
        hovered,
    } = useCursor();

    // Désactiver sur mobile/tablette
    if (
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: coarse)").matches
    ) {
        return null;
    }

    return (
        <>
            <CursorRing
                x={x}
                y={y}
                hovered={hovered}
            />

            <CursorDot
                x={x}
                y={y}
            />
        </>
    );

};

export default Cursor;