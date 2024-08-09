import { Link } from 'react-router-dom';

const ModalCreateNewSub = () => {
  return (
    <div className="bg-[rgba(18,18,18,0.50) fixed flex flex-col justify-center items-center top-[0] bottom-0 right-0 left-0">
      <div className="md:px-16 px-6  mx-auto bg-primary-white pt-4 border-2 border-secondary-grey3 rounded-xl text-base font-lato">
        <h1 className="text-primary-blue text-[28px] pb-6 font-bold">
          Create Sub-Account
        </h1>
        <div className="py-2">
          <label className="text-xs font-semibold" htmlFor="email">
            Enter Sub-Account Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="  Enter email"
            className="w-[100%] py-2 rounded-xl border-[1px]  border-slate-300"
          />
        </div>
        <div className="flex justify-between items-center gap-6 py-8">
          <div className="w-full flex justify-end items-center">
            <button className="p-2 mx-2 border border-secondary-grey rounded-lg bg-secondary-grey3">
              <Link to="/sign-upForm.jsx">cancel</Link> 
            </button>
            <button className="p-2 border rounded-lg text-secondary-grey2 bg-primary-blue">
              <Link to="/SuBAcctCreation.jsx">continue</Link>{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateNewSub;
