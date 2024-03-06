import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorPreviewProp {
    colorIndex: number;
}

//Use of Dispatch and SetStateAction recommended by ChatGPT, implemented by myself.
interface ChangeColorProp {
    setColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

function ChangeColor({ setColorIndex }: ChangeColorProp): JSX.Element {
    return (
        <Button
            onClick={() =>
                setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length)
            }
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ colorIndex }: ColorPreviewProp): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor setColorIndex={setColorIndex}></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
