import React from "react";

function Footer(): JSX.Element {
  return (
      <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
          <div className=" w-full md:w-1/4">
            <h1 className=" font-semibold text-xl pb-4">DelishCake</h1>
            <p className=" text-sm">
              Welcome to our cake haven! Love is like a cake, you have to cook it well to be able to savor it.
              Otherwise you risk pulling it out raw or burned.
            </p>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
            <nav className=" flex flex-col gap-2">
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Menu
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                About Us
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Products
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Reviews
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
            <nav className=" flex flex-col gap-2">
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Cappuccino
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Latte
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Americano
              </a>
            </nav>
          </div>
          <div>
            <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
            <nav className=" flex flex-col gap-2">
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                DelishCake@email.com
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                +84 958 248 966
              </a>
              <a
                  className=" hover:text-backgroundColor transition-all cursor-pointer"
                  href="/"
              >
                Social media
              </a>
            </nav>
          </div>
        </div>
        <div>
          <p>
            <p className=" text-center py-4">
              @copyright2023 developed by
              <span className=" text-backgroundColor">
              {" "}
                tharuka wijesekara{" "}
            </span>
              | All rights reserved
            </p>
          </p>
        </div>
      </div>
  );
};

export default Footer;