import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TransList = ({ data }) => {
  return (
    <div>
      <div className="border-2 p-2 md:m-8 flex justify-around mt-6 truncate font-semibold rounded-md w-11/12 mx-auto text-sm md:text-base">
        <div className="flex justify-between truncate w-11/12 mx-auto">
          <p className="">Date</p>
          <p className="mx-2 truncate ">Amount</p>
          <p className="truncate">Description</p>
          <p className="ml-2 truncate">Category</p>
          <p className="mx-2 truncate">Transaction ID</p>
          <p className="mr-2 truncate">Status</p>
        </div>
      </div>
      <div className="pb-10 w-11/12 mx-auto ">
        {data.map((db) => (
          <div className="flex justify-around  truncate" key={db.id}>
            <div className="break-words  text-secondary-grey px-4 my-2 text-sm md:text-base  ">
              {db.date}
            </div>
            <div className="text-primary-blue px-4 my-2 ">{db.Amount}</div>
            <div className="truncate px-4 my-2 ">{db.Description}</div>
            <div className=" truncate px-4 my-2 ">{db.Category}</div>
            <div className=" px-4 my-2 ">{db.ID}</div>
            <div
              style={{
                color: db.status === 'Approved' ? '#00710B' : '#C50016',
              }}
              className="truncate px-4 my-2 "
            >
              {db.status}
            </div>
          </div>
        ))}
      </div>
      <div className="flex cursor-pointer items-center justify-center my-1  ">
        <p className="scroll mx-1">
          <FaAngleLeft />
        </p>
        <p className="scroll">1</p>
        <p className="scroll">2</p>
        <p className="scroll">3</p>
        <p className="scroll">4</p>
        <p className="scroll">5</p>
        <p className="scroll mx-1">
          <Link to="/fundRequest.jsx">
            <FaAngleRight />
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default TransList;
