const Button = ({
    index,
    icon,
    action,
    isActive,
    handleButtonClick,
}) => {

    const handleSubmit = () => {
        handleButtonClick(action);
    };

    return (
        <button
            onClick={handleSubmit}
            className={`button-${index} ${isActive ? "bg-gray-300 text-gray-700" : "bg-gray-800 text-white"
                }  rounded p-2 focus:outline-none`}
        >
            {icon}
        </button>
    );
};

export default Button;
