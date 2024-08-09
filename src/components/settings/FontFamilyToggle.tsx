import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFontFamily } from "../../store/fontFamilySlice";
import { Rootstate } from "../../store/rootReducer";
import { Form } from "react-bootstrap";

const fontOptions = [
    "Open Sans",
    "Kosugi",
    "Kosugi Maru",
    "Alef",
    "Merriweather Sans",
    "Oxygen",
    "Barlow Semi Condensed",
    "Quicksand",
    "Work Sans",
    "Roboto",
    "Concert One",
    "Comfortaa"
];

const FontFamilyToggle: React.FC = () => {
    const dispatch = useDispatch();
    const currentFontFamily = useSelector((state: Rootstate) => state.fontFamily.fontFamily);

    const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(toggleFontFamily(event.target.value));
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor="fontFamilySelect">
                Font Family
            </Form.Label>
            <Form.Select id="fontFamilySelect" value={currentFontFamily} onChange={handleFontChange}>
                {fontOptions.map((font) => (
                    <option key={font} value={font} style={{ fontFamily: font}}>{font}</option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}

export default FontFamilyToggle;