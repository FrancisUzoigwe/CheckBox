import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const App = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="bg-gray-400 w-full h-screen flex flex-col items-center justify-center">
      <div className="min-w-[200px] min-h-[200px] rounded-lg bg-white flex justify-center items-center">
        <div className="flex flex-col">
          <input
            type="checkbox"
            onClick={(e: any) => {
              setChecked(e.target.checked);
            }}
          />
          <button
            className={`mt-4 px-7 py-3 transition-all duration-500 ${
              checked ? "bg-purple-400" : "bg-gray-300"
            } text-white font-semibold  rounded-xl`}
            disabled={!checked}
            onClick={() => {
              alert("Bulolu Puff am, Bulolu Pass am, E done Burst E done cast");
            }}
          >
            Proceed
          </button>
        </div>
      </div>
      <div className="min-w-[300px] min-h-[200px] bg-gray-600 rounded-xl mt-5 flex flex-col items-center">
        <div className="bg-red-400 min-w-[250px] mt-5 h-[40px] rounded-lg overflow-hidden">
          <input
            type="text"
            className="w-full h-full pl-3 outline-none"
            placeholder="Email"
            value={active}
            onChange={(e: any) => {
              setActive(e.target.value);
              console.log(setActive);
            }}
          />
        </div>
        <div
          className={`${
            active !== "" ? "text-blue-500" : "hidden"
          } capitalize mt-5`}
        >
          Be active
        </div>
      </div>
      <div className="flex items-center mt-5">
        <div>{!toggle? (<div className="items-center text-2xl">*****</div>): (<div>₦5000.00</div>)}</div>
        <div className="w-[20px] h-[20px] ml-4 transition-all duration-300 " onClick={() => {
          onToggle()
        }}>
          {!toggle? (<div><FaEye className="w-full h-full"/></div>): (<div><FaEyeSlash className="w-full h-full"/></div>)}
        </div>
      </div>
    </div>
  );
};

export default App;
