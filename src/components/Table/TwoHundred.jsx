import { Link } from "react-router-dom";
const TwoHundred = () => {
  return (
    <>
      <div className="w-1/4 p-4">
        <Link to="pregunta">
          <button className="w-full h-20 bg-slate-500 rounded-full border-2">
            <div>200</div>
          </button>
        </Link>
      </div>
      <div className="w-1/4 p-4">
        <Link to="pregunta">
          <button className="w-full h-20 bg-slate-500 rounded-full border-2">
            <div>300</div>
          </button>
        </Link>
      </div>
      <div className="w-1/4 p-4">
        <Link to="pregunta">
          <button className="w-full h-20 bg-slate-500 rounded-full border-2">
            <div>300</div>
          </button>
        </Link>
      </div>
      <div className="w-1/4 p-4">
        <Link to="pregunta">
          <button className="w-full h-20 bg-slate-500 rounded-full border-2">
            <div>300</div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default TwoHundred;
