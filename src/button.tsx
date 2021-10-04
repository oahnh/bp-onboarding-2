import React from "react";
import "./button.css";

// HINT: Use this in ButtonProps to determine how the button is styled
export enum ButtonType {
  "button-green",
  "button-white",
  "button-clear",
  "button-clearAlt",
}

// HINT: Use this in ButtonProps to determine how the button text is styled
export enum ButtonTextType {
  "button-text-white",
  "button-text-green",
  "button-text-grey",
}

interface ButtonProps {
  buttonType: string;
  textType: string;
  text?: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonType, textType, onPress, text
}) => {
  return (
    <button onClick={onPress} className="App-button" id={buttonType}>
      <p className="App-button-text" id={textType}> 
        {text}
      </p>
    </button>
  );
};

export default Button;