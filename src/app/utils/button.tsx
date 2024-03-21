import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className=" relative bg-green-500 text-white rounded-xl px-3 py-2 z-[10] hover:transform hover:scale-105 shadow-xl transition-transform duration-300 ease-in-out border hover:border-2 hover:border-blue-200">
        {text}
      </button>
    </div>
  );
}

export default Button;
