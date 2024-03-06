import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";

interface ChangeValue {
    dhValue: number;
    setDhValue: (newDhValue: number) => void;
}

function Doubler({ dhValue, setDhValue }: ChangeValue): JSX.Element {
    const doubleValue = () => {
        setDhValue(2 * dhValue);
    };
    return <Button onClick={doubleValue}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: ChangeValue): JSX.Element {
    const halvedValue = () => {
        setDhValue(0.5 * dhValue);
    };
    return <Button onClick={halvedValue}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
