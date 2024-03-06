import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function useAttempt(): void {
        setAttempts(attempts - 1);
    }

    function addAttempt(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>{attempts}</div>
            <Button
                onClick={() => setProgress(true)}
                onClickCapture={() => useAttempt()}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => addAttempt()} disabled={progress}>
                Mulligan
            </Button>
            <Button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </Button>
        </div>
    );
}
