import React from "react";

const MenuShimmer = () => {
  const accordian = (
    <div className="w-6/12 bg-pink-200 shadow-lg p-4  mx-auto my-4 ">
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-slate-500 text-lg h-7"></span>
        <span>▽</span>
      </div>
    </div>
  );
  return (
    <>
      <div className="w-6/12 text-center mx-auto mt-5 bg-pink-200 p-5 shadow-lg h-[184px]"></div>
      <div className="text-center mt-5 p-5 ">
        <div className="">
          {accordian}
          {accordian}
          {accordian}
          {accordian}
          {accordian}
          {accordian}
        </div>
      </div>
    </>
  );
};

export default MenuShimmer;
