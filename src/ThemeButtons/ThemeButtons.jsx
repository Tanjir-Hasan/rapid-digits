import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../provider/ThemeProvider';
import { AiTwotoneClockCircle } from 'react-icons/ai';

const ThemeButtons = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const isMobile = window.innerWidth <= 767;

    const position = isMobile ? "top-right" : "bottom-center";

    const handlePurpleButtonClick = () => {
        toggleTheme('purple');
        toast.success('Purple Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#6d029f',
                color: '#fff'
            }
        });

    };

    const handleMintButtonClick = () => {
        toggleTheme('mint');
        toast.success('Mint Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#739b00',
                color: '#fff'
            }
        });
    };

    const handleBlueButtonClick = () => {
        toggleTheme('blue');
        toast.success('Blue Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#1180e1',
                color: '#fff'
            }
        });
    };

    const handleRedButtonClick = () => {
        toggleTheme('red');
        toast.success('Red Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#8d0000',
                color: '#fff'
            }
        });
    };

    return (
        <div className='flex flex-row space-x-2 -ml-2'>

            <ToastContainer />

            <AiTwotoneClockCircle disabled={theme === 'mint'} onClick={handleMintButtonClick}
                className={`cursor-pointer ${theme === 'mint' ? 'text-[#739b00]' : 'text-[#739b00]'}`} />

            <AiTwotoneClockCircle disabled={theme === 'dark'} onClick={handlePurpleButtonClick}
                className={`cursor-pointer ${theme === 'dark' ? 'text-[#6d029f]' : 'text-[#6d029f]'}`} />

            <AiTwotoneClockCircle disabled={theme === 'blue'} onClick={handleBlueButtonClick}
                className={`cursor-pointer ${theme === 'blue' ? 'text-[#1180e1]' : 'text-[#1180e1]'}`} />

            <AiTwotoneClockCircle disabled={theme === 'red'} onClick={handleRedButtonClick}
                className={`cursor-pointer ${theme === 'red' ? 'text-[#8d0000]' : 'text-[#8d0000]'}`} />

        </div>
    );
};

export default ThemeButtons;
