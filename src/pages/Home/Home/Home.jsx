import { useContext, useReducer } from "react";
import DigitButton from "../../../component/DigitButton";
import OperationButton from "../../../component/Operationbutton";
import { HiBackspace } from 'react-icons/hi';
import ThemeButtons from "../../../ThemeButtons/ThemeButtons";
import { ThemeContext } from "../../../provider/ThemeProvider";

// eslint-disable-next-line react-refresh/only-export-components
export const ACTION = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
    PERCENTAGE: 'percentage',
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTION.ADD_DIGIT:
            if (state.overWrite) {
                return {
                    ...state,
                    currentValue: payload.digit,
                    overWrite: false
                }
            }

            if (payload.digit === "0" && state.currentValue === "0") {
                return state
            }

            if (payload.digit === "." && state.currentValue.includes(".")) {
                return state
            }

            return {
                ...state,
                currentValue: `${state.currentValue || ""}${payload.digit}`
            }

        case ACTION.CHOOSE_OPERATION:
            if (state.currentValue == null && state.previousValue == null) {
                return state
            }

            if (state.currentValue === null) {
                return {
                    ...state,
                    operation: payload.operation
                }
            }

            if (state.previousValue == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousValue: state.currentValue,
                    currentValue: null
                }
            }

            return {
                ...state,
                previousValue: evaluate(state),
                operation: payload.operation,
                currentValue: null
            }

        case ACTION.PERCENTAGE:
            if (state.currentValue == null) {
                return state;
            }

            // eslint-disable-next-line no-case-declarations
            const currentValue = parseFloat(state.currentValue);
            if (isNaN(currentValue)) {
                return state;
            }

            // eslint-disable-next-line no-case-declarations
            const percentageValue = currentValue / 100;

            return {
                ...state,
                currentValue: percentageValue.toString(),
                overWrite: true
            };

        // eslint-disable-next-line no-fallthrough
        case ACTION.CLEAR:
            return {}

        case ACTION.DELETE_DIGIT:
            if (state.overWrite) {
                return {
                    ...state,
                    overWrite: false,
                    currentValue: null
                }
            }
            if (state.currentValue == null) {
                return state
            }
            if (state.currentValue.length === 1) {
                return {
                    ...state,
                    currentValue: null
                }
            }
            return {
                ...state, currentValue: state.currentValue.slice(0, -1)
            }

        case ACTION.EVALUATE:
            if (
                state.operation == null ||
                state.currentValue == null ||
                state.previousValue == null
            ) {
                return state
            }

            return {
                ...state,
                overWrite: true,
                previousValue: null,
                operation: null,
                currentValue: evaluate(state)
            }
    }
}

function evaluate({ currentValue, previousValue, operation }) {
    const previous = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (isNaN(previous) || isNaN(current)) {
        return ""
    }

    let computation = ""
    switch (operation) {
        case "+":
            computation = previous + current
            break
        case "-":
            computation = previous - current
            break
        case "×":
            computation = previous * current
            break
        case "÷":
            // eslint-disable-next-line no-unused-vars
            computation = previous / current
            break
    }

    return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
})

function formatOperations(operation) {
    if (operation == null) return
    const [integer, decimal] = operation.split('.')
    if (decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

const Home = () => {

    const [{ currentValue, previousValue, operation }, dispatch] = useReducer(reducer, {});

    const { theme } = useContext(ThemeContext);

    return (
        <>

            <div className="relative flex justify-center items-center">

                <div className="lg:w-1/5 w-10/12 h-[500px] p-5 mx-auto font-[Cinzel] bg-[#2b2b2c] grid grid-cols-4 gap-2 mt-32 rounded-2xl z-50">

                    <div className="col-span-2"><ThemeButtons></ThemeButtons></div>

                    {/* Calculation field */}
                    <div className="col-span-4 h-32">
                        <div className="break-all">
                            <div className="text-white flex justify-end">{formatOperations(previousValue)} {operation}</div>
                            <div className="text-white text-3xl flex justify-end mt-5">{formatOperations(currentValue)}</div>
                        </div>
                    </div>
                    {/* Calculation field */}

                    {/* buttons */}

                    <button className="text-black rounded-full bg-[#c6c6c6] col-span-2" onClick={() => dispatch({ type: ACTION.CLEAR })}>C</button>
                    <button className="text-black rounded-2xl bg-[#c6c6c6] flex justify-center items-center" onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}>
                        <HiBackspace className="text-2xl" />
                    </button>
                    <OperationButton operation="÷" dispatch={dispatch} className="text-white rounded-2xl bg-[#739b00]" />

                    <DigitButton digit="7" dispatch={dispatch} />
                    <DigitButton digit="8" dispatch={dispatch} />
                    <DigitButton digit="9" dispatch={dispatch} />
                    <OperationButton operation="×" dispatch={dispatch} className="text-white rounded-2xl bg-[#739b00]" />

                    <DigitButton digit="4" dispatch={dispatch} />
                    <DigitButton digit="5" dispatch={dispatch} />
                    <DigitButton digit="6" dispatch={dispatch} />
                    <OperationButton operation="-" dispatch={dispatch} className="text-white rounded-2xl bg-[#739b00]" />

                    <DigitButton digit="1" dispatch={dispatch} />
                    <DigitButton digit="2" dispatch={dispatch} />
                    <DigitButton digit="3" dispatch={dispatch} />
                    <OperationButton operation="+" dispatch={dispatch} className="text-white rounded-2xl bg-[#739b00]" />

                    <DigitButton digit="%" dispatch={dispatch} />
                    <DigitButton digit="0" dispatch={dispatch} />
                    <DigitButton digit="." dispatch={dispatch} />
                    <button className={`rounded-full text-white ${theme === 'red' ? 'bg-[#8d0000]' :
                        theme === 'blue' ? 'bg-[#1180e1]' :
                            theme === 'purple' ? 'bg-[#6d029f]' :
                                theme === 'mint' ? 'bg-[#739b00]' : ''}`} onClick={() => dispatch({ type: ACTION.EVALUATE })}>=</button>

                    {/* buttons */}

                </div>


                <div className="relative flex justify-center items-center">

                    <div className="fixed top-1 lg:left-80 left-1 lg:w-[500px] lg:h-[500px] w-80 h-80 mx-auto rounded-full bg-[#f2542d] z-0"></div>
                    <div className={`fixed top-1 lg:left-80 left-1 lg:w-[500px] lg:h-[500px] w-80 h-80 border animate-spin border-dotted rounded-full shadow-lg shadow-[#f2542d]`}></div>

                </div>

                <div className="relative flex justify-center items-center">

                    <div className="fixed top-96 lg:right-72 -right-24 lg:w-96 lg:h-96 w-80 h-80 mx-auto rounded-full bg-[#272640] z-0"></div>
                    <div className={`fixed top-96 lg:right-72 -right-24 lg:w-96 lg:h-96 w-80 h-80 border animate-spin border-dotted rounded-full shadow-lg shadow-[#272640]`}></div>
                    
                </div>

            </div>

        </>
    );
};

export default Home;