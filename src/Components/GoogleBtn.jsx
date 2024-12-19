const Button = ({ children, onClick, type = "button", className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full py-2 px-4 rounded-md font-semibold text-sm transition duration-300 ease-in-out ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
  