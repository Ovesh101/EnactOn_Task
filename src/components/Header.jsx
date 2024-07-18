

const Header = () => {

  return (
    <div className="relative z-20">
      {/* Full-width background image */}
      <div className="bg-cover relative bg-center">
        <img
          src="/Images/dashboard.png"
          alt=""
          className="object-contain w-full "
        />
        {/* Overlay for button */}
        <div className="absolute inset-x-0 bottom-[163px] pl-[158px] flex text-center items-center justify-center">
          <button className="text-white  w-[359px] h-[76px] text-[24px] font-[400px] leading-[30px] border-white border-4 px-4 py-2  shadow-lg">
            Meet Chef Matt
          </button>
        </div>
        <div className="flex items-center pl-[158px] gap-2.5 justify-center absolute bottom-[30px] left-0 right-0">
          <span className="w-[12px] h-[12px] bg-white rounded-full"></span>
          <span className="w-[12px] h-[12px] bg-white rounded-full"></span>
          <span className="w-[12px] h-[12px] bg-white rounded-full"></span>
          <span className="w-[12px] h-[12px] border border-white rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
