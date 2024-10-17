import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { IoIosCall, IoIosMail } from "react-icons/io"

const Footer = () => {
  return (
    <div id="contact-us" className="bg-[#DFDFDF] w-full px-8 pt-8">
      <div className="flex flex-col md:flex-row gap-6 items-start justify-between ">
        <div className="leftMost">
          <h1 className="font-palanquin font-bold text-2xl">Nexore</h1>
          <p className="text-sm font-montserrat text-gray-500">Redefine Everyday Fashion</p>
        </div>
        <div className="middle md:flex gap-20 hidden">
        <div className="middleFirst">
          <h3 className="font-palanquin text-lg mb-4">Information</h3>
          <ul className="font-montserrat text-sm text-gray-500">
            <li className="mb-2 hover:text-black cursor-default">About Us</li>
            <li className="mb-2 hover:text-black cursor-default">Offers</li>
            <li className="mb-2 hover:text-black cursor-default">Collections</li>
            <li className="mb-2 hover:text-black cursor-default">Populer Products</li>
          </ul>
        </div>
        <div className="middleSecond">
  <h3 className="font-palanquin text-lg mb-4">Easy Navigate</h3>
  <ul className="font-montserrat text-sm text-gray-500">
    <li className="mb-2 hover:text-black cursor-default">Services</li>
    <li className="mb-2 hover:text-black cursor-default">Orders</li>
    <li className="mb-2 hover:text-black cursor-default">Terms and Conditions</li>
    <li className="mb-2 hover:text-black cursor-default">Support</li>
    <li className="mb-2 hover:text-black cursor-default">Privacy Policy</li>
  </ul>
</div>

<div className="middleThird">
  <h3 className="font-palanquin text-lg mb-4">Our Services</h3>
  <ul className="font-montserrat text-sm text-gray-500">
    <li className="mb-2 hover:text-black cursor-default">Fashion List</li>
    <li className="mb-2 hover:text-black cursor-default">Return & Exchange</li>
    <li className="mb-2 hover:text-black cursor-default">Blogs</li>
    <li className="mb-2 hover:text-black cursor-default">Brand List</li>
  </ul>
</div>
        </div>
        <div className="rightMost">
  <h3 className="font-palanquin text-lg mb-4">Contact Us</h3>
  <div className="flex items-center gap-4 mb-2">
    <IoIosCall className="text-xl"/>
    <p className="font-montserrat text-sm text-gray-500">+91 9999 824 992</p>
  </div>
  <div className="flex items-center gap-4 mb-4">
    <IoIosMail className="text-xl"/>
    <a href="mailto:divanshsingh1612@gmail.com">
      <p className="font-montserrat text-sm text-gray-500 hover:text-black cursor-default">divanshsingh1612@gmail.com</p>
    </a>
  </div>
  <div className="flex items-center gap-3">
    <a href="https://github.com/divanshsingh" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-2xl"/>
    </a>
    <a href="https://www.linkedin.com/in/divansh-singh-16053b258/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-2xl"/>
    </a>
    <a href="https://x.com/DivanshSin39085" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-2xl"/>
    </a>
    <a href="https://www.instagram.com/divansh_xml/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-2xl"/>
    </a>
  </div>
</div>

      </div>
          <div className="flex justify-center border-t-[0.5px] border-black mt-4">
            <p className="text-sm font-montserrat text-gray-500 mt-2 mb-2">2018 © nexor.Ltd | All Rights Reserved</p>
          </div>
    </div>
  )
}

export default Footer
