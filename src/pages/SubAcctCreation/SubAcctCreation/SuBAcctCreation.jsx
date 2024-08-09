import { FaRegCheckSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SubAcctCreation = () => {
  return (
    <div className="flex justify-center items-center my-40">
      <div className="py-[32px] px-2 text-center mx-auto w-2/6 bg-primary-white pt-4 border-2 border-secondary-grey3 rounded-xl text-base font-lato">
        <span className="flex justify-center pb-4 text-primary-green2 ">
          <FaRegCheckSquare />
        </span>

        <p className="text-primary-green2 text-xs font-semibold">
          Onboarding request send
        </p>

        <button className="px-4 py-1 border rounded-xl bg-primary-blue mt-6 text-white">
          <Link to="/created.jsx"> ok</Link>
        </button>
      </div>
    </div>
  );
};

export default SubAcctCreation;
