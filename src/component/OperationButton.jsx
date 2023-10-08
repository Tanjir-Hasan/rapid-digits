import { useContext } from "react";
import { ACTION } from "../pages/Home/Home/Home";
import { ThemeContext } from "../provider/ThemeProvider";

// eslint-disable-next-line react/prop-types
const OperationButton = ({ dispatch, operation }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <button className={`text-white rounded-2xl
        ${theme === 'red' ? 'bg-[#8d0000]' :
                theme === 'blue' ? 'bg-[#1180e1]' :
                    theme === 'purple' ? 'bg-[#6d029f]' :
                        theme === 'mint' ? 'bg-[#739b00]' : ''}`} onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: { operation } })}>
            {operation}
        </button>
    );
};

export default OperationButton;