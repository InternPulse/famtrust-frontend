import { FaRegCheckSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Created = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="bg-secondary-grey bg-opacity-80 fixed flex  justify-center items-center top-[0] bottom-0 right-0 left-0">
        <div className="py-[32px] px-2 text-center mx-auto w-3/6 bg-primary-white pt-4 border-2 border-secondary-grey3 rounded-xl text-base font-lato">
          <span className="flex justify-center pb-4 text-primary-green2 ">
            <button onClick={onClose}>
              <FaRegCheckSquare />
            </button>
          </span>

          <p className="text-primary-green2 text-xs font-semibold">
            Sub-account created successfully
          </p>

          <button className="px-4 py-1 border rounded-xl bg-primary-blue mt-6 text-white">
            {' '}
            <Link to="/">ok</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Created;
