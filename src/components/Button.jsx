import { Link } from 'react-router-dom';

const Button = ({ children, type, onNext }) => {
  return (
    <div className="py-2 flex items-center">
      <button
        onClick={onNext}
        type={type}
        className="bg-bluey w-full py-2 mx-3 rounded-xl"
      >
        <Link to="/sign-upForm.jsx"> {children}</Link>
      </button>
      <button className="bg-bluey w-full py-2 rounded-xl">
        <Link to="/sign-upForm.jsx"> Create sub account</Link>
      </button>
    </div>
  );
};

export default Button;
