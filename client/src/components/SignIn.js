const SignIn = () => {
  return (
    <div className="flex flex-col font-Montserrat font-medium mx-[2%] gap-y-[10px] mb-[2%]">
      <div>
        <p className="font-semibold mb-[3px]">Email Address</p>
        <input
          placeholder="Enter Your Email Address"
          className="border-[1px] rounded-[5px] outline-none w-full p-[5px]"
        />
      </div>

      <div>
        <p className="font-semibold mb-[3px]">Password</p>
        <input
          placeholder="Enter Your Password"
          className="border-[1px] rounded-[5px] outline-none w-full p-[5px]"
        />
      </div>

      <button className="bg-buttonColor text-white py-[4px] rounded-[5px]">
        SignIn
      </button>
    </div>
  );
};

export default SignIn;
