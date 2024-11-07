import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col text-center gap-2 justify-center items-center my-8 mt-20">
        <h1 className="text-xl font-semibold">Gadget Heaven</h1>
        <p className="text-xs">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer justify-center gap-28 border-t-2 text-black p-10">
        <nav>
          <h6 className="text-xl font-bold">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
