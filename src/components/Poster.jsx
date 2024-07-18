const Poster = () => {
  return (
    <div className="flex flex-col mb-20 items-center ">
      {/* Poster 1 with white background image */}
      <div className="relative  w-full">
        {/* Content Overlay */}
        <div className="bg-[url('/Images/poster_1.png')]  bg-no-repeat bg-cover flex items-center justify-center text-black text-center z-20">
          <div className="  ">
            <div className="flex flex-col items-center">
              <h3 className="text-[38px] font-[400px] mt-10">ONLINE ONLY</h3>
              <hr className="w-[78px] h-[5px] bg-[#130F0C] mt-5" />
            </div>

            <p className="text-[22px] mt-5 font-extralight">
              GET 20% OFF YOUR ORDER OF $50 OR MORE <br /> Use code <b>“Chef20”</b>
            </p>
            <button className="text-[#130F0C] text-[24px] w-[359px] mt-10 font-semibold h-[76px] border-[#130F0C] border-4">
              Shop Now
            </button>
            <div className="flex items-center gap-2 justify-center mt-9 mb-4">
              <span className="bg-[#A7A7A7] w-[12px] h-[12px] rounded-full"></span>
              <span className="bg-[#A7A7A7] w-[12px] h-[12px] rounded-full"></span>
              <span className="bg-[#A7A7A7] w-[12px] h-[12px] rounded-full"></span>
              <span className="border border-[#A7A7A7] w-[12px] h-[12px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Poster 2 */}
      <div className="mt-20 flex flex-col w-full items-center ">
        {/* First Row */}
        <div className="flex w-full ">
          {/* Image 1 with text */}
          <div className="relative w-1/2 ">
            {/* White Poster Image */}
            <img
              src="/Images/white.png"
              alt="White Poster"
              className="absolute inset-0 object-fill w-full  z-0"
            />
            {/* Content Overlay */}
            <div className="absolute inset-0 flex  justify-around  text-black  z-20">
              {/* Content on the left */}
              <div className="m-10">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <h3 className="text-[45px] font-bold pb-2">
                      Subscribe & Save
                    </h3>
                  </div>
                  <p className="text-[16px] font-[400px] max-w-xs">
                    Join Chef Matt’s Monthly Subscription and bring world class
                    chef quality meals to your home.
                  </p>
                </div>
              </div>

              <div>
                <img src="/Images/bottle_list.png" alt=""   />
              </div>

              {/* Image on the right */}
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-1/2 ">
            <img
              src="/Images/man.png"
              alt="Poster 2"
              className="object-fill w-full "
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex w-full">
          {/* Image 3 */}
          <div className="relative w-1/2 ">
            <img
              src="/Images/recipe.png"
              alt="Poster 3"
              className="object-fill w-full "
            />
          </div>

          {/* Image 4 */}
          <div className="relative w-1/2 ">
            <img
              src="/Images/logo_banner.png"
              alt="Poster 4"
              className="object-fill w-full "
            />
          </div>
        </div>
      </div>

      {/* Poster 3 */}
      <div className="relative w-full h-[383px]">
        <img
          src="/Images/poster_2.png"
          alt="Poster 2"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col p-20 justify-center text-white">
          <h2 className="text-[38px] ">SIGN UP SPECIAL PROMOTIONS</h2>
          <hr className="border-t-4 border-white w-[572px] " />
          <p className="text-[18px] w-[638px] mt-8 mb-8">
            Get exclusive deals you won’t find anywhere else straight to your
            inbox!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter email address"
              className="bg-white bg-opacity-10 h-[40px] text-white text-sm w-[516px] px-4 py-2 mr-2 border border-white placeholder-white"
            />
            <button className="bg-[#D29A5A] w-[200px] text-[14px] font-medium text-white p-[8px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
