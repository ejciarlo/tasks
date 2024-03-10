import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Give your answer:</Form.Label>
                <Form.Control
                    type="string"
                    value={answer}
                    placeholder="Answer"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                ></Form.Control>
            </Form.Group>
            <div> {answer === expectedAnswer ? "✔️" : "❌"} </div>
        </div>
    );
}
