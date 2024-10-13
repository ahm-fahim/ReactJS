import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-20">
      <hr className="mx-16" />
      <footer className="footer bg-base-100 text-center text-base-content p-10">
        <aside className="flex flex-col justify-center items-center">
          <FaHandsHelping className="text-8xl text-success"/>
          <p>
            <span className="font-anton text-4xl">Career Park</span>
            <br />
            <span className="text-gray-500">Providing reliable tech since 2024</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col justify-end items-end">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
