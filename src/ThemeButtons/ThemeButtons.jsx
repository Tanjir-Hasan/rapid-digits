import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../provider/ThemeProvider';
import { AiTwotoneClockCircle } from 'react-icons/ai';

const ThemeButtons = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const isMobile = window.innerWidth <= 767;

    const position = isMobile ? "top-right" : "bottom-center";

    const handleLightButtonClick = () => {
        toggleTheme('light');
        toast.success('Light Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#f8f9fa',
                color: '#000'
            }
        });
    };

    const handleDarkButtonClick = () => {
        toggleTheme('dark');
        toast.success('Dark Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#080708',
                color: '#fff'
            }
        });

    };

    const handleGreenButtonClick = () => {
        toggleTheme('green');
        toast.success('Green Theme Activated', {
            position: position,
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#354f52',
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
                backgroundColor: '#013a63',
                color: '#fff'
            }
        });
    };

    return (
        <div className='flex flex-row space-x-5'>

            <ToastContainer />

            <AiTwotoneClockCircle disabled={theme === 'light'} onClick={handleLightButtonClick}
                className={`${theme === 'light' ? 'text-[#c9184a]' : 'text-[#000]'}`} />

            <AiTwotoneClockCircle disabled={theme === 'dark'} onClick={handleDarkButtonClick}
                className={`${theme === 'dark' ? 'text-[#b04261]' : 'text-[#fff]'}`} />

            <AiTwotoneClockCircle disabled={theme === 'blue'} onClick={handleBlueButtonClick}
                className={`${theme === 'blue' ? 'text-[#e5557e]' : 'text-[#fff]'}`} />

            <AiTwotoneClockCircle disabled={theme === 'green'} onClick={handleGreenButtonClick}
                className={`${theme === 'green' ? 'text-[#f390ac]' : 'text-[#fff]'}`} />

            <AiTwotoneClockCircle />

        </div>
    );
};

export default ThemeButtons;
