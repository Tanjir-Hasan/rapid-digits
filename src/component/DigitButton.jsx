import { ACTION } from "../pages/Home/Home/Home";

// eslint-disable-next-line react/prop-types
const DigitButton = ({ digit, dispatch }) => {
    const handleClick = () => {
        if (digit === '%') {
            dispatch({ type: ACTION.PERCENTAGE });
        } else {
            dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } });
        }
    };

    return (
        <button
            className="text-black rounded-2xl bg-[#c6c6c6]"
            onClick={handleClick}
        >
            {digit}
        </button>
    );
};


export default DigitButton;