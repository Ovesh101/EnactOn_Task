const Main = () => {
  return (
    <div className=" min-h-[20rem]   ">
      {/* Image */}
      <div className="relative">
        <img
          src="/Images/leaf.png"
          alt="Description of your image"
          className="w-[319px] h-[319px] absolute top-[-90px] z-10 "
        />
        {/* Additional content */}
        <div className="absolute z-20 ml-16 top-[125px] left-0 w-full flex">
          <div className="text-white mt-3 ">
            <h1 className="text-[38px] font-[400px] text-[#D29A5A]  relative">
              Chef Matt Products
              <hr className="border-t-2   border-[#D29A5A] w-[27rem] mb-4" />
            </h1>
            <p className="mt-8 font-[400px] text-[18px] leading-[27px] text-md">
              Shop Gourmet Chef Quality products from the Chef Matt brand. <br /> Chef it yourself and Thank us later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
