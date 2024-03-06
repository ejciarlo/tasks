import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [first, setFirst] = useState<number>(1);
    const [second, setSecond] = useState<number>(2);

    function rollLeft(): void {
        setFirst(d6());
    }

    function rollRight(): void {
        setSecond(d6());
    }

    return (
        <div>
            <Button onClick={() => rollLeft()}>Roll Left</Button>
            <Button onClick={() => rollRight()}>Roll Right</Button>
            <div>
                The left die says <span data-testid="left-die">{first}.</span>
            </div>
            <div>
                The right die says{" "}
                <span data-testid="right-die">{second}.</span>
            </div>
            {first === 1 && second === 1 && <div>Lose</div>}
            {first === second && first !== 1 && <div>Win</div>}
        </div>
    );
}
