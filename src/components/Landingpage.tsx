import React from "react";

const Landingpage = () => {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center py-2 px-10">
        <div className="flex gap-5 text-lg font-medium text-[#000040]">
          <a href="/solutions">
            <p>Solutions</p>
          </a>
          <a href="/partners">
            <p>Partners</p>
          </a>
          <a href="/investors">
            <p>Investors</p>
          </a>
          <a href="/shop">
            <p>Shop </p>
          </a>
        </div>

        <button className="flex items-center justify-center text-white text-lg bg-[#000040] rounded-lg w-[150px] h-[56.25px] font-medium">
          Contact Sales
        </button>
      </nav>
    </div>
  );
};

export default Landingpage;
