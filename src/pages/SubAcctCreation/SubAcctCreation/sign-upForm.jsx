import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="py-[32px] px-4 mx-auto lg:w-[700px]  w-3/4 bg-primary-white pt-4 border-2 border-secondary-grey3 my-10 rounded-xl text-base font-lato ">
        <div className=" flex items-center justify-between  my-10 mb-10">
          <h2 className="text-3xl  text-primary-blue font-semibold ">
            Complete Sign Up Form
          </h2>
          <RxCross1 />
        </div>
        <form className="text-sm px-3" action="">
          <label htmlFor="">Firstname</label>
          <input
            type="text"
            placeholder="Enter firstname of sub-account"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <label htmlFor="">Lastname</label>
          <input
            type="text"
            placeholder="Enter your lastname"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            placeholder="Enter your Phone Number"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <label htmlFor="">Age</label>
          <input
            type="number"
            placeholder="Enter your Age"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="w-full my-1 p-2 mb-6 border rounded-2xl "
          />
          <div className="flex justify-between mt-8 my-4">
            <button className="p-2 px-3 border bg-secondary-grey3 rounded-lg">
             <Link to='/'>Reject Onboarding</Link> 
            </button>
            <button className="p-2 px-3 border bg-primary-blue text-white rounded-lg">
              <Link to="/ModalCreateNewSub.jsx">Complete sign-up</Link> 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
