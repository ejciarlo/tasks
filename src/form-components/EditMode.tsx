import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateIsEditable(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditable(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-editable-check"
                label="Toggle Edit Mode"
                checked={isEditable}
                onChange={updateIsEditable}
            ></Form.Check>
            {isEditable && (
                <div>
                    <Form.Control
                        type="string"
                        value={name}
                        placeholder="Enter Name"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    ></Form.Check>
                </div>
            )}

            {!isEditable && (
                <div>
                    {name} is {isStudent ? "a student." : "not a student."}
                </div>
            )}
        </div>
    );
}
