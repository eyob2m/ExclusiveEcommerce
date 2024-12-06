const PreHeader = () => {
  return (
    <header className="flex py-4 bg-black text-tfa w-full items-center justify-center">
      <div className="text-[1.4rem]  flex gap-3 font-[400] font-Poppis">
        <h1 className="opacity-80">
          {" "}
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <span className="opacity-100 underline font-[600] cursor-pointer">
          ShopNow
        </span>
      </div>
      <select
        className="absolute cursor-pointer opacity-90 bg-transparent text-[1.4rem] text-tfa right-32"
        name=""
        id=""
      >
        <option className="bg-black" value="">
          English
        </option>
        <option className="bg-black " value="">
          Amharic
        </option>
      </select>
    </header>
  );
};

export default PreHeader;
