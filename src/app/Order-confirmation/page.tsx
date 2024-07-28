import React from "react";
import Image from "next/image";
import Footer from "../../components/ui/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
          <nav className="navbar flex justify-between items-center p-2">
        <Image
          src="/Layer1.png"
          alt="bvida Logo"
          className="logo"
          width={140}
          height={31.59}
          priority
        />
        <div className="nav-btn flex gap-3">
          <Link href="/solutions">
            <p>Solutions</p>
          </Link>
          <Link href="/partners">
            <p>Partners</p>
          </Link>
          <Link href="/investors">
            <p>Investors</p>
          </Link>
          <Link href="/Shop">
            <p>Shop</p>
          </Link>
        </div>
        <button className="btn border-solid border-2 p-3 rounded-xl text-white bg-[#000040]">
          Contact us
        </button>
      </nav>
      <hr className="w-[100%] "/>
      <div className="flex flex-wrap justify-between p-6">
        <div className="w-1/2 md:w-1/2 pr-4">
          <h2 className="text-xl font-bold mb-2 pb-[15px]">
            Order Confirmation
          </h2>
          <div className="text-gray-700 pb-[15px]">
            <p className="text-gray-700 pb-[15px]">michael.mitc@example.com</p>
            <p className="pb-[15px] text-gray-700 ">07087878787</p>
            <p className="pb-[15px] text-gray-700">Michael Mitc</p>
            <p className="pb-[15px] text-gray-900">Zeta - Zeta Enterprise</p>
            <p className="pb-[15px] text-gray-700">12835 Inwood St,</p>
            <p className="pb-[15px] text-gray-700">Wuse</p>
            <p className="pb-[15px] text-gray-700">
              Abuja Municipal Area Council
            </p>
            <p className="pb-[15px] text-gray-700">Abuja</p>
          </div>
        </div>
        <div className="flex w-1/2 gap-[400px] ml-[-5px] text-gray-700 font-bold">
          <div className="ml-[90px]">Product</div>
          <div>Quantity</div>
        </div>
        <div className="w-full relative top-[-300px] left-[530px] md:w-1/2 flex  justify-center items-center">
          <Image
            className="object-cover "
            width={60}
            height={60}
            src="/Supradyn.png"
            alt="Product"
          />
          <div className="ml-6">
            <span className="block">Supradyn tablets</span>
            <span className="block font-bold text-[#FF0080]">N 2500</span>
          </div>
          <div className="relative left-[280px]  font-bold text-[#FF0080]">
            1
          </div>
        </div>
        <div className="flex relative gap-80 bottom-[200px] right-[70px]">
          <div>Delivery fee</div>
          <div>N 3000</div>
        </div>
        <div className="flex relative gap-80 bottom-[200px] left-[800px] font-bold">
          <div>Total</div>
          <div>N 5500</div>
        </div>
        <div className="flex flex-col mr-[120px]  relative bottom-[100px] left-[10px] items-center mt-4">
          <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-[5px] w-80 mb-4">
            Order Now
          </button>
          <button className="border border-pink-500 text-pink-500 whitespace-nowrap font-bold py-2 px-6 rounded-[5px] w-40">
            Return to Store
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
