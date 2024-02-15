import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ background: "red" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is a header.</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ethan Ciarlo. Hello World
            </p>
            <img src="./IMG_5975.JPG" alt="A green duck floating on water." />
            Facts about me:
            <ol>
                <li>I have three dogs.</li>
                <li>My favorite game is Destiny 2.</li>
                <li>My mother wants me to learn how to make websites.</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col style={{ background: "red" }}>Left column.</Col>
                    <Col style={{ background: "red" }}>Right column.</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
