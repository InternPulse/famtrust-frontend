

const Button = ({children}) => {
  return (
    <div className="py-2">
      <button className="bg-bluey w-full py-2 rounded-xl" type="submit">
        {children}
      </button>
    </div>
  );
};

export default Button;
