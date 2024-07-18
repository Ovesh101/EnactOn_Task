const Footer = () => {
  return (
    <div className="relative ">
      <div className="flex justify-around p-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-3">
            <img
              src="/Images/cart.png"
              alt=""
              className="w-[40px] text-lg h-[40px]"
            />
            <div className="flex flex-col">
              <h3 className="text-[25px] font-light text-[#D29A5A]">
                FREE SHIPPING WORLDWIDE
              </h3>
              <p className="text-lg text-white mt-4 ">Guaranteed Delivery</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-3">
            <img src="/Images/phone.png" alt="" className="w-[40px] h-[40px]" />
            <div className="flex flex-col">
              <h3 className="text-[25px] font-light text-[#D29A5A]">
                24/7 CUSTOMER SERVICE
              </h3>
              <p className="text-lg text-white mt-4 ">
                Text Us 24/7 at 070-7782-9137
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-3">
            <img src="/Images/tick.png" alt="" className="w-[40px] h-[40px]" />
            <div className="flex flex-col">
              <h3 className="text-[25px] font-light text-[#D29A5A]">
                QUALITY GUARANTEE!
              </h3>
              <p className="text-lg text-white mt-4 ">Send Within 30 Days</p>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute left-0 top-[150px] bg-[#D29A5A] h-2 w-full"></span>
      <div className="flex justify-center pt-4">
        <img
          src="/Images/small_logo.png"
          alt="Logo"
          className="w-[500px] h-[300px]"
        />
      </div>
    </div>
  );
};

export default Footer;
