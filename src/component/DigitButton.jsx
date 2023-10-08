import { ACTION } from "../pages/Home/Home/Home";

// eslint-disable-next-line react/prop-types
const DigitButton = ({ dispatch, digit }) => {
    return (
        <button className="text-white rounded-2xl bg-[#616161]" onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: { digit } })}>
            {digit}
        </button>
    );
};

export default DigitButton;