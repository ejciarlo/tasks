import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    const handleGain = () => {
        const parsedAttempts = parseInt(attemptsRequested);
        if (!isNaN(parsedAttempts)) {
            setAttemptsRemaining(attemptsRemaining + parsedAttempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>How many attempts do you wish to gain?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <Button onClick={handleGain}>Gain</Button>
            <Button
                onClick={() => setAttemptsRemaining(attemptsRemaining - 1)}
                disabled={attemptsRemaining === 0}
            >
                Use
            </Button>
            <span>Attempts Remaining: {attemptsRemaining}</span>
        </div>
    );
}
