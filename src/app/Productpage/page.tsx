import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between p-6">
        <div className="w-full md:w-1/2 pr-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              Company Name (Optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="tel"
              placeholder="Company name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Apartment Number and street Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="tel"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Town/City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Local Government Area
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="local government"
                type="text"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              State/Province
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="tel"
              placeholder="state"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="country"
            >
              Country
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
            >
              <option>United States</option>
              <option>Nigeria</option>
              <option>United Kingdom</option>
              <option>Australia</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <label className="block  text-gray-700 text-sm font-bold mb-2 mr-4">
              Do you want this product delivered to you?
            </label>

            <div className="flex items-center mr-4">
              <input
                className="mr-1 leading-tight h-4 w-4"
                type="radio"
                name="deliveryOption"
                value="yes"
                id="yes"
              />
              <label className="text-gray-700" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="mr-1 leading-tight h-4 w-4"
                type="radio"
                name="deliveryOption"
                value="no"
                id="no"
              />
              <label className="text-gray-700" htmlFor="no">
                No
              </label>
            </div>
          </div>

          <p className="text-gray-500">
            Note: All deliveries for now are done at a flat rate of 3000 naira
          </p>
          <p className="relative text-[#000080] top-[50px] font-bold">
            Make payment via bank transfer into the bank account below then
            confirm transfer by clicking{" "}
            <span className="text-[#FF0080]">
              THE PLACE YOUR ORDER ON THE RIGHT SIDE OF THIS PAGE
            </span>
          </p>
          <p className="relative top-[70px]">
            04829928392 <br /> Bvida Health-Tech Limited <br />
            Moniepoint
          </p>
        </div>
        <div className="flex w-1/2 gap-[400px] text-gray-700 font-bold">
                <div className="ml-[70px]">Product</div>
                <div>Quantity</div>
            </div>
        <div className="w-full relative bottom-[900px] left-[500px] md:w-1/2 flex  justify-center items-center">
           
          <img
            className="object-cover h-[60px] w-full md:w-auto"
            src="Supradyn.png"
            alt="Product"
          />
         <div className="ml-6">
    <span className="block">Supradyn tablets</span>
    <span className="block font-bold text-[#FF0080]">N 2500</span>
    
  </div>
  <div className="relative left-[280px]  font-bold text-[#FF0080]">1</div>
        </div>
        <div className="flex relative gap-80 bottom-[300px] right-[70px]">
            <div>Delivery fee</div>
            <div>N 3000</div>
        </div>
        <div className="flex relative gap-80 bottom-[300px] left-[800px] font-bold">
            <div>Total</div>
            <div>N 5500</div>
        </div>
        <div className="flex flex-col mr-[120px]  relative bottom-[100px] items-center mt-4">
  <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-[5px] w-80 mb-4">
    Order Now
  </button>
  <button className="border border-pink-500 text-pink-500 whitespace-nowrap font-bold py-2 px-6 rounded-[5px] w-40">
    Return to Store
  </button>
</div>

      </div>
    </div>
  );
};

export default page;
