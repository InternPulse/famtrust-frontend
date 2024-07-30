const Button = ({children}) => {
  return (
    <div className="py-2">
      <button className="bg-bluey w-full py-2 rounded-xl">
        {children}
      </button>
    </div>
  );
};

export default Button;
