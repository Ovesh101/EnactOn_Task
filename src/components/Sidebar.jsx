import { useState } from "react";
import HamburgerIcon from "/Images/hamburger.svg";
import CloseRoundIcon from "/Images/Close_round.svg";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [open, setOpen] = useState(false);
  const navigationItems = ["HOME", "PRODUCTS", "MEET CHEF MATT", "FAQ", "CONNECT WITH US"];

  const toggleSidbar = () => {
    setOpen((open) => !open);
  };
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div
      className={`${
        open ? "w-[350px]" : "w-[158px]"
      } fixed z-50 flex border-r-8 border-[#D29A5A] left-0 top-0 h-full bg-[#130F0C] bg-opacity-60 text-white pt-4`}
    >
      <div
        className={`flex flex-col ${open ? "" : "items-center"}  min-w-[158px]`}
      >
        <img
          onClick={toggleSidbar}
          src={open ? CloseRoundIcon : HamburgerIcon}
          alt=""
          className={`w-10 h-10 ${open ? "ml-12" : ""}  mb-4 cursor-pointer`}
        />

        {!open ? (
          <div className="m-auto">
            <img
              src="/Images/logo.png"
              alt=""
              className="h-[447px] max-w-fit"
            />
          </div>
        ) : (
          
          <div className="flex flex-col justify-between h-full">
            {/* Image */}
            <div className="flex flex-col" >
            <img src="/Images/small_logo.png" alt="Logo" />

            {/* Navigation Items */}
            
            <div className="ml-10">
              <ul className="space-y-2">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={() => handleItemClick(index)}
                      className={`text-${
                        activeItem === index ? "[#D29A5A]" : "white"
                      } text-[22px] w-[63px] font-[400px] h-[33px] leading-[33px]`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>

            <div className="flex flex-col  justify-between items-center">
              {/* Top Content */}
              <div className="mt-4 w-full text-center">
                <p className="text-[16px] font-[400px] text-white">
                  TEXT SUPPORT 24/7  &nbsp; <span className="text-[#D29A5A] underline">070-7782-9137</span> 
                </p>
                <hr className="my-4 border-t  border-gray-300" />
              </div>

              {/* Bottom Content */}
              <div className="flex p-4 justify-between w-full">
                <div className="flex justify-center text-center gap-3  items-center">
                  <img src="/Images/bag.png" alt="" className="w-[29px] h-[29px]" />
                  <p className="text-[22px] font-[400px] ">Cart</p>
                  
                </div>
                <div className="flex justify-center gap-3 text-center  items-center">
                  <img src="/Images/heart.png" alt="" className="w-[29px] h-[29px] " />
                  <p className="text-[22px] font-[400px] ">Wishlist</p>
                 
                </div>
              </div>
            </div>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
