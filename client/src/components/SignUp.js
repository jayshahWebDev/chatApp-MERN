const SignUp = () => {
  return (
    <div className="flex flex-col font-Montserrat font-medium mx-[2%] gap-y-[10px] mb-[2%]">
      <div>
        <p className="font-semibold mb-[3px]">Name</p>
        <input
          placeholder="Enter Your Name"
          className="border-[1px] rounded-[5px] outline-none w-full p-[5px]"
        />
      </div>

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

      <div>
        <p className="font-semibold mb-[3px]">Confirm Password</p>
        <input
          placeholder="Enter Your Confirm Password"
          className="border-[1px] rounded-[5px] outline-none w-full p-[5px]"
        />
      </div>

      <div>
        <p className="font-semibold mb-[3px]">Upload Profile Picture</p>
        <input
          type={"file"}
          accept="image/*"
          className="border-[1px] rounded-[5px] outline-none w-full p-[5px]"
        />
      </div>

      <button className="bg-buttonColor text-white py-[4px] rounded-[5px]">SignUp</button>
    </div>
  );
};

export default SignUp;
