import { ACTION } from "../pages/Home/Home/Home";

// eslint-disable-next-line react/prop-types
const OperationButton = ({ dispatch, operation }) => {
    return (
        <button className="text-white rounded-2xl bg-[#739b00]" onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation } })}>
            {operation}
        </button>
    );
};

export default OperationButton;