import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "white",
    "black"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div className="d-flex justify-content-center">
            <div>
                <h3>Change Color</h3>
                <div>
                    <Form.Label>Choose a Color.</Form.Label>
                </div>
                <Row>
                    {COLORS.map((thisColor: string, index: number) => (
                        <Col key={thisColor} xs="auto">
                            <Form.Check
                                type="radio"
                                id={`color-check-${thisColor}`}
                                name="colors"
                                checked={color === thisColor}
                                onChange={updateColor}
                                value={COLORS[index]}
                            ></Form.Check>
                            <span style={{ background: COLORS[index] }}>
                                {thisColor}
                            </span>
                        </Col>
                    ))}
                </Row>
                <Form.Label
                    data-testid="colored-box"
                    style={{ background: color }}
                >
                    <div>
                        You have chosen{" "}
                        <span style={{ background: color }}>{color}</span>.
                    </div>
                </Form.Label>
            </div>
        </div>
    );
}
