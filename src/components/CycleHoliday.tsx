import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday = "🎄" | "🎃" | "🇺🇸" | "🦃" | "🐰";
    const [holiday, setHoliday] = useState<holiday>("🐰");

    function changeByAlphabet(): void {
        if (holiday === "🐰") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🇺🇸");
        } else if (holiday === "🇺🇸") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🐰");
        }
    }

    function changeByDate(): void {
        if (holiday === "🐰") {
            setHoliday("🇺🇸");
        } else if (holiday === "🇺🇸") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🐰");
        }
    }

    return (
        <div>
            <Button onClick={changeByAlphabet}>Next By Alphabet</Button>
            <Button onClick={changeByDate}>Next By Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
