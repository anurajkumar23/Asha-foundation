import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button className=" relative bg-green-500 text-white rounded-xl px-3 py-2 z-[10]">
        {text}
      </button>
    </div>
  );
}

export default Button;
