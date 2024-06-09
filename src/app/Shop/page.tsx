import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const Shop = () => {
  let categoryData = [
    {
      categoryName: "supplements",
      categoryProducts: [
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
      ],
    },
    {
      categoryName: "Antifungals",
      categoryProducts: [
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
      ],
    },
    {
      categoryName: "Antihypertensives",
      categoryProducts: [
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
      ],
    },
    {
      categoryName: "Opthalmics",
      categoryProducts: [
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
      ],
    },
    {
      categoryName: "Anti-virals",
      categoryProducts: [
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
        {
          title: "supradyn",
          rating: 5.0,
          price: 2500,
          slashed: 5000,
          expiry: "2 months to expiry",
          stocks: 100,
        },
      ],
    },
  ];
  let cardData = [
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
    {
      title: "supradyn",
      rating: 5.0,
      price: 2500,
      slashed: 5000,
      expiry: "2 months to expiry",
      stocks: 100,
    },
  ];
  function scrollLeft() {
    const container = document.getElementById("scrollContainer");
    container.scrollLeft -= 100; // Adjust the scroll amount as needed
  }
  function scrollTabLeft() {
    const container = document.getElementById("scrollTab");
    container.scrollLeft -= 100; // Adjust the scroll amount as needed
  }
  return (
    <>
      <Head>
        <title>Bvida</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar flex justify-between items-center p-2 mx-4">
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
        </div>
        <div className="left flex gap-4">
          <button className="rounded-xl flex gap-2 font-semibold border-2 border-solid p-3 border-[#000040] text-[#000040]">
            Your cart
            <Image
              src="/Cart icon.png"
              alt="cart"
              width={24}
              height={24}
              priority
            />
          </button>
          <button className="btn border-solid border-2 p-3 rounded-xl text-white bg-[#000040]">
            Contact us
          </button>
          
        </div>
      </nav>
      {/* <section>
        <div className="display">
          <button className="scroll scroll-left" onClick={() => scrollLeft()}>
            <Image
              src="/iconamoon_arrow-right-2-light.png"
              alt="bvida purpose"
              className="logo"
              width={40}
              height={40}
              priority
            />
          </button>
          <button className="scroll scroll-Right" onClick={() => scrollRight()}>
            <Image
              src="/iconamoon_arrow-right-2-light (1).png"
              alt="bvida purpose"
              className="logo"
              width={40}
              height={40}
              priority
            />
          </button>
          <div className="auto-scroll" id="scrollContainer">
            <div className="png">
              <Image
                src="/Wellwoman og.png"
                alt="bvida purpose"
                className="logo"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className="png">
              <Image
                src="/Mycoten.png"
                alt="bvida purpose"
                className="logo"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className="png">
              <Image
                src="/Link → supradyn--30-caps.jpg.png"
                alt="bvida purpose"
                className="logo"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className="png">
              <Image
                src="/Wellwoman og.png"
                alt="bvida purpose"
                className="logo"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className="png">
              <Image
                src="/Mycoten.png"
                alt="bvida purpose"
                className="logo"
                width={360}
                height={360}
                priority
              />
            </div>
            <div className="png">
              <Image
                src="/Link → supradyn--30-caps.jpg.png"
                alt="bvida purpose"
                className="logo"
                width={358}
                height={358}
                priority
              />
            </div>
          </div>
        </div>
      </section> */}
      <div className="categories my-10">
        {categoryData.map((category, index) => {
          return (
            <div
              className="category flex  justify-around items-start"
              key={index}
            >
              <h1 className="m-4 p-5 text-lg font-bold">
                {category.categoryName}
              </h1>
              <div className="category-products grid grid-cols-3 gap-6">
                {category.categoryProducts.map((card) => {
                  return (
                    <div className="card m-4 p-5" key={index}>
                      <Image
                        src="/Frame 1000004116.png"
                        alt="bvida purpose"
                        className="logo"
                        width={328.81}
                        height={243.92}
                      />
                      <div className="card-dets">
                        <div className="card-ttle">
                          <p>{card.title}</p>
                          <div className="ratng flex gap-1 items-center">
                            <Image
                              src="/span.su0q88m.png"
                              alt="bvida purpose"
                              className="star"
                              width={12.89}
                              height={12.89}
                            />
                            <p>{card.rating}</p>
                          </div>
                        </div>
                        <div className="price">
                          <p className="text-[#ba2ba5] text-xl font-bold">{`₦${card.price}`}</p>
                          <p className="text-[#898989] text-lg font-light line-through">
                            {`₦${card.slashed}`}
                          </p>
                        </div>
                        <div className="stock">
                          <div className="exp flex gap-1 items-center">
                            <Image
                              src="/alert-02.png"
                              alt="bvida purpose"
                              className="alert"
                              width={21.49}
                              height={20.42}
                            />
                            <p className="text-[#ef4444]">{card.expiry}</p>
                          </div>
                          <p>{`in stock: ${card.stocks} packs`}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <footer className="bg-[#000040] p-10">
        <div className="foot text-white flex justify-around items-start">
          <div className="buy">
            <p className="text-xl font-extrabold mb-10">Buy</p>
            <ul className="flex flex-col font-light gap-2">
              <li>Registration</li>
              <li>Special Requests</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="sell">
            <p className="text-xl font-extrabold mb-10">Sell</p>
            <ul>
              <li>Become a partner</li>
            </ul>
          </div>
          <div className="stay">
            <p className="text-xl font-extrabold mb-10">Stay Informed</p>
            <ul className="flex flex-col gap-2 font-light">
              <li>Bvida Blogs</li>
              <li>Bvida Community</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="contact">
            <p className="text-xl font-extrabold mb-10">Contact Us</p>
            <ul className="flex flex-col gap-2 font-light font-sans">
              <li>Email Us</li>
              <li>Call Us</li>
              <li>Text Us</li>
            </ul>
          </div>
        </div>
        <div className="links flex justify-center items-center gap-8 mt-16">
          <Link href="">
            <Image
              src="/Vector.png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </Link>
          <Link href="">
            <Image
              src="/Vector (1).png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </Link>
          <Link href="">
            <Image
              src="/Vector (2).png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </Link>
          <Link href="">
            <Image
              src="/Vector (3).png"
              alt="Vercel Logo"
              width={23.1}
              height={22.97}
              priority
            />
          </Link>
        </div>
        <div className="flex justify-center mt-14 items-center">
          <Image
            src="/Asset 11 1.png"
            alt="Bvida Logo"
            className="bvida"
            width={120}
            height={27.12}
            priority
          />
        </div>
      </footer>
    </>
  );
};

export default Shop;
