import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const Landingpage = () => {
  return (
    <>
      <Head>
        <title>Bvida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <Link href="/Category">
            <p>Shop</p>
          </Link>
        </div>
        <button className="btn border-solid border-2 p-3 rounded-xl text-white bg-[#000040]">
          Contact us
        </button>
      </nav>
      <main className="main bg-[#000040] gap-5 flex flex-col justify-center items-center p-8 py-20">
        <p className="text-white text-5xl text-center">
          Get Quality medications at <br />
          <span className="text-[#ee75b7] text-5xl text-center">
            giveaway prices
          </span>
        </p>
        <Image
          src="/frame.png"
          alt="bvida purpose"
          className="logo"
          width={1200}
          height={442.7}
          priority
        />
        <div className="form">
          <input type="text" placeholder="Enter your email" />
          <div className="btn2">Join us</div>
        </div>
      </main>
      <section className="py-10">
        <div className="partners m-10">
          <p className="head text-center mb-10 text-[#b3b6ba]">OUR PARTNERS</p>
          <p className="subtitle text-center text-[#000040] text-3xl">
            Current Great Partners with <span>BVIDA</span>
          </p>
          <div className="images mt-16 flex justify-around items-center">
            <Image
              src="/image 3.png"
              alt="bvida purpose"
              className="logo"
              width={226.79}
              height={80}
              priority
            />
            <Image
              src="/image 2.png"
              alt="bvida purpose"
              className="logo"
              width={65}
              height={65}
              priority
            />
            <Image
              src="/image 1.png"
              alt="bvida purpose"
              className="logo"
              width={200}
              height={45}
              priority
            />
            <Image
              src="/image 4.png"
              alt="bvida purpose"
              className="logo"
              width={133.3}
              height={59.9}
              priority
            />
            <Image
              src="/image 5.png"
              alt="bvida purpose"
              className="logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </div>
        <div className="purpose mt-20">
          <p className="text-center text-3xl mb-10">What we do</p>
          <div className="support mb-20 flex gap-5 items-center">
            <div className="support-text p-24">
              <p>FOR OUR PARTNERS</p>
              <h1 className="text-5xl my-2 font-bold text-[#000040] mb-4">
                We support our pharmacy partners{" "}
              </h1>
              <span className="leading-8">
                We support our pharmacy partners (community, wholesalers,
                hospitals and industries) in offloading short-dated drug
                products by offering them to a wide audience at discounted
                prices to help prevent outright losses due to inevitable expiry.
              </span>
            </div>
            <Image
              src="/image 6.png"
              alt="bvida purpose"
              className="logo m-3 mr-32"
              width={500}
              height={463.7}
              priority
            />
          </div>
          <div className="access flex gap-5 items-center">
            <Image
              src="/image 7.png"
              alt="bvida purpose"
              className="logo m-3 ml-32"
              width={500}
              height={463.7}
              priority
            />
            <div className="access-text p-24">
              <p>FOR OUR PATIENTS</p>
              <h1 className="text-5xl my-2 font-bold text-[#000040] mb-4">
                Access to cheap medications
              </h1>
              <span className="leading-8">
                We provide our patients with the opportunity to purchase quality
                medications at giveaway prices! Yes, only giveaway prices
                guaranteed!
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
