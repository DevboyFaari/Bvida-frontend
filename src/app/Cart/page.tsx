"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const Cart = ({ toggleModal }) => {
  return (
    <div className="modal-overlay fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-[100vw] bg-[rgba(216,178,178,0.8)]">
      <div className="cart absolute top-0 right-0 bg-white p-12 z-[9999999]">
        <div
          onClick={toggleModal}
          className="close absolute top-2 right-2 cursor-pointer"
        >
          <Image
            src="/Close icon.png"
            alt="close"
            width={26}
            height={26}
            priority
          />
        </div>
        <div className="cart-filled hidden">
          <p className="text-lg font-bold text-[#000040] m-2">
            There is one product in your cart
          </p>
          <div className="flex mt-3 items-start justify-between h-60">
            <div className="flex gap-2 items-center justify-center  ">
              <Image
                src="/Link → supradyn--30-caps.jpg (1).png"
                alt="back"
                width={70}
                height={70}
                priority
              />
              <div className="flex flex-col justify-center">
                <span>Supradyn tablet</span>
                <span>2500</span>
              </div>
            </div>
            <div className="qty p-5">1</div>
          </div>
          <div className="total flex flex-col justify-center gap-3">
            <div className="flex justify-between">
              <span className="font-semibold">Subtotal</span>
              <span className="tag font-bold text-lg">2500</span>
            </div>
            <div className="bg-[#ff0080] text-white rounded-xl py-2 px-3 w-60 self-center text-center">
              Continue to checkout
            </div>
            <div className="flex gap-2 justify-center items-center self-center text-[#ff0080] text-center border border-[#ff0080] rounded-xl p-2 w-40">
              <Image
                src="/back.png"
                alt="cart"
                width={12}
                height={10}
                priority
              />
              Return to store
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src="/Group.png"
            alt="cart"
            width={300}
            height={291.97}
            priority
          />
          <p className="font-bold ">There is no product in your cart yet</p>
          <div className="bg-[#ff0080] text-sm text-white rounded-xl px-4 text-center py-3">
            Continue shopping to add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
