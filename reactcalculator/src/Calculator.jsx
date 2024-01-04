import { useState } from "react";

const Calculator = () => {
    const [display, setDisplay] = useState(''); // State to manage the display value

    // Function to handle button clicks
    const handleClick = (value) => {
        if (value === '=') {
            // Calculate result
            try {
                const result = eval(display); // Using eval for simplicity; consider using safer evaluation methods in production
                setDisplay(result.toString());
            } catch (error) {
                setDisplay('');
            }
        } else if (value === 'C') {
            // Clear the display
            setDisplay('');
        } else {
            // Update display with button value
            setDisplay((prevDisplay) => prevDisplay + value);
        }
        const lastChar = display.slice(-1);
        if (
            (isNaN(lastChar) && isNaN(value)) || // If both the current and last character are non-numeric (operators or '.')
            (value === '.' && lastChar === '.') // If the last character is already a decimal point
        ) {
            return; // Prevent adding another operator or decimal point
        }

    }
    const clearAll = () => {
        setDisplay('');
    };

    const clearOneDigit = () => {
        setDisplay((prevDisplay) => {
            return prevDisplay.slice(0, -1);
        });
    };
    return (
        <div>
            <h1 className='text-center text-5xl font-bold sm:text-1xl'>Calculator</h1>
            <div className= 'flex flex-col  p-2 h-[520px] w-[400px] bg-green-400/50 rounded-lg sm:w-[100%] md:w-[450px]  sm:h-[100%]'>
                
             
                <div className='grid grid-cols-4 gap-8 p-4 sm:gap-4'>
                    <input type="text" value={display} style={{ textAlign: 'right' }} className='flex col-span-4 flex-end text-[28px] font-medium h-[3rem] w-[100%] rounded-lg mt-4 md:w-[400px]' />

                    <button   onClick={clearAll}className='bg-white  col-span-2 rounded-xl h-[50px] font-extrabold text-[30px] '>Ac</button>
                    <button onClick={clearOneDigit} className='bg-white col-span-2 rounded-xl h-[50px] font-extrabold text-[30px]'>Del</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('7')}>7</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('8')}>8</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('9')}>9</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('/')} >/</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('4')}>4</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('5')} >5</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('6')}>6</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('*')}>*</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('1')}>1</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('2')}>2</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('3')}>3</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('-')}>-</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('.')}>.</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('=')}>=</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('0')}>0</button>
                    <button className='bg-white rounded-xl h-[50px] font-extrabold text-[30px]' onClick={() => handleClick('+')}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
