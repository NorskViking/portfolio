import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFontSize, FontSize } from "../../store/fontSizeSlice";
import { Rootstate } from "../../store/rootReducer";
import { Form } from "react-bootstrap";

const fontSizeOptions = [
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "xxx-large"
];

const isFontSize = (value: string): value is FontSize => {
    return ["small", "medium", "large", "x-large", "xx-large", "xxx-large"].includes(value);
}

const FontSizeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const currentFontSize = useSelector((state: Rootstate) => state.fontSize.fontSize);

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedFontSize = event.target.value;

        if (isFontSize(selectedFontSize)) {
            dispatch(toggleFontSize(selectedFontSize));
        } else {
            console.error("Invalid font size selected");
        }
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor="fontSizeSelect">
                Font Size
            </Form.Label>
            <Form.Select id="fontSizeSelect" value={currentFontSize} onChange={handleFontSizeChange}>
                {fontSizeOptions.map((size) => (
                    <option key={size} value={size} style={{fontSize: size}}>{size}</option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}

export default FontSizeToggle;