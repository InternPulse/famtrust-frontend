const Button = ({children, type, onNext}) => {
  return (
    <div className="py-2">
      <button onClick={onNext} type={type} className="bg-bluey w-full py-2 rounded-xl">
        {children}
      </button>
    </div>
  );
};

export default Button;
