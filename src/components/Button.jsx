const Button = ({children, type}) => {
  return (
    <div className="py-2">
      <button type={type} className="bg-bluey w-full py-2 rounded-xl">
        {children}
      </button>
    </div>
  );
};

export default Button;
