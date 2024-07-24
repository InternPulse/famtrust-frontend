
import Button from "../Component/Button";

const Verification = ({ onClickHandler }) => {
  return (
    <div className="md:px-16 overflow-hidden px-6">
      <h1 className="text-txtblue  font-lato text-2xl font-normal py-8">
        Enter Your Verification ID
      </h1>
      <p className="pb-4">
        Using your BVN/NIN allows us to streamline the account opening process
        and provide you with faster, more efficient services
      </p>
      <form action="">
        <div>
          <label
            className="font-lato text-base font-semibold"
            htmlFor="username"
          >
            Enter Your Verification ID:
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px] mt-3 border-slate-700"
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your BVN/NIN"
          />
        </div>

        <div
          onClick={onClickHandler}
          className="text-white font-lato text-base font-semibold my-2"
        >
          <Button>Verify ID</Button>
        </div>
      </form>
      <p className="text-center font-lato text-base font-normal pb-3">
        Already have an account?{" "}
        <a className="text-txtblue" href="login">
          Login
        </a>
      </p>
    </div>
  );
};

export default Verification;
