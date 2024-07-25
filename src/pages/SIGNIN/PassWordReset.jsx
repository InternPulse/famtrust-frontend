
import Button from "../Component/Button";

const PassWordReset = ({ clickRecovery }) => {
  return (
    <div className="md:px-16 overflow-hidden px-6">
      <h1 className="text-txtblue  font-lato text-3xl font-bold py-8">
        Reset Your Password
      </h1>
      <p className="pb-3">Enter your new password to confirm your login</p>
      <form action="">
        <div className="">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            className="bg-white w-full py-2 rounded-xl border-[1px]"
            type="password"
            placeholder="Enter New Password"
          />
        </div>
        <div className="py-4">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="confirm"
          >
            Confirm Password
          </label>
          <input
            className="bg-white w-full py-2 rounded-xl border-[1px]"
            type="password"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="my-3" onClick={clickRecovery}>
          <Button>Reset Password</Button>
        </div>
      </form>
    </div>
  );
};

export default PassWordReset;
