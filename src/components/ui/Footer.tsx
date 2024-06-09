import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>

          <footer className="bg-[#000040] p-10">
        <div className="join">
          <p>Join us today!</p>
          <div className="form">
            <input type="text" placeholder="Enter your email" />
            <div className="btn2">Join us</div>
          </div>
        </div>
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
    </div>
  )
}

export default Footer