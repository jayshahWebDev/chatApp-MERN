import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="bg-img bg-cover flex flex-col justify-center items-center h-[100vh]">
      <div className="w-[30%] rounded-[5px] bg-white p-[5px] font-Montserrat font-semibold">
        <div className="flex justify-around">
          <p
            className={`rounded-[10px] px-[30px] py-[5px] cursor-pointer ${
              activeTab === 1 ? "bg-lightBlue" : ""
            }`}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            SignIn
          </p>
          <p
            className={`rounded-[10px] px-[30px] py-[5px] cursor-pointer ${
              activeTab === 2 ? "bg-lightBlue" : ""
            }`}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            SignUp
          </p>
        </div>
        <div className="mt-[1%]">
          {activeTab === 1 ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
