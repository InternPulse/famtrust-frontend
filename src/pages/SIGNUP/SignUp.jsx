import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const SignUp = () => {
  const [modal, setModal] = useState(false);
  const [additional, setAdditional] = useState({
    firstname: '',
    lastname: '',
    phoneno: '',
    email: '',
    bvn: '',
  });
  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAdditional({
      ...additional,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // localStorage.setItem("info", addditonal)
    setModal(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);

    console.log(additional, 'add submited');
  };

  return (
    <div className="md:px-16 px-6">
      <h1 className="text-txtblue text-center font-lato text-xl font-bold py-4">
        Enter Additional Details
      </h1>

      <form onSubmit={onSubmitHandler}>
        <div className="py-2">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px]  border-slate-700"
            type="text"
            name="firstname"
            id="firstname"
            onChange={onChangeHandler}
            value={additional.firstname}
          />
        </div>
        <div className="py-2">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px] border-slate-700"
            type="text"
            name="lastname"
            id="lastname"
            value={additional.lastname}
            onChange={onChangeHandler}
          />
        </div>
        <div className="py-2">
          <label className="font-lato text-base font-semibold" htmlFor="bvn">
            BVN/NIN
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px] border-slate-700"
            type="tel"
            name="bvn"
            id="bvn"
            value={additional.bvn}
            onChange={onChangeHandler}
          />
        </div>
        <div className="py-2">
          <label className="font-lato text-base font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px] border-slate-700"
            type="email"
            name="email"
            id="email"
            value={additional.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="py-2">
          <label
            className="font-lato text-base font-semibold"
            htmlFor="phoneno"
          >
            Phone Number
          </label>
          <input
            className="w-full py-2 rounded-xl border-[1px] border-slate-700"
            type="tel"
            name="phoneno"
            id="phoneno"
            value={additional.phoneno}
            onChange={onChangeHandler}
          />
        </div>

        <div className="text-white font-lato text-base font-semibold my-6">
          <Button className="text-black">SUBMIT</Button>
        </div>
      </form>
      {modal ? <Modal setModal={setModal} /> : null}
    </div>
  );
};

export default SignUp;
