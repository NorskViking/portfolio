import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setFontSize } from "./fontSizeSlice";

const FontSizeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const currentSize = useSelector((state: RootState) => state.fontSize.size);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFontSize(event.target.value));
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-font-size', currentSize)
    })

    return (
        <div className="mb-3">
        <label htmlFor="fontSizeSelect" className="form-label" id="font-size-label">Font Size</label>
        <select
            id="fontSizeSelect"
            className="form-select"
            value={currentSize}
            onChange={handleChange}
            aria-labelledby="font-size-label"
        >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
        </select>
    </div>
    )
}

export default FontSizeToggle;