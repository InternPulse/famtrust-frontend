const TransList = ({ data }) => {
  return (
    <div>
      <div className="border-2 p-2 m-8 flex justify-around mt-6  ">
        <p>Date</p>
        <p className="mx-2">Amount</p>
        <p>Description</p>
        <p>category</p>
        <p className="mx-2">Transaction Id</p>
        <p className="mr-2">status</p>
      </div>
      <div className="pb-10 ">
      {data.map((db) => (
        <div
          className="flex justify-around"
          key={db.id}
        >
          <div className=" px-4 my-2 ">{db.date}</div>
          <div className=" px-4 my-2 ">{db.Amount}</div>
          <div className=" px-4 my-2 ">{db.Description}</div>
          <div className=" px-4 my-2 ">{db.Categoty}</div>
          <div className=" px-4 my-2 ">{db.ID}</div>
          <div className=" px-4 my-2 ">{db.status}</div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default TransList;
