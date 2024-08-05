import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../store/theme/modeSlice";

import Button from "react-bootstrap/Button";

const modeButton = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector(
        (state) => state.mode
    );
    return (
        <div>
            <Button className={`${darkMode?"text-black-100" : "text-black-700"}`}
                onClick={() => {dispatch(setMode(!darkMode))}}
            >
                Mode
            </Button>
        </div>
    )
}

export default modeButton;