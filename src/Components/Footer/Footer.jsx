/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-700 py-12 text-slate-200 text-2xl ">
        <div className="container flex justify-between mx-auto text-center">
          <div className="w-1/3">
            <h4 className="text-3xl my-2 font-bold">location</h4>
            <p>2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
          </div>
          <div className="w-1/3">
            <h4 className="text-3xl my-2 font-bold">AROUND THE WEB </h4>
            <ul className="flex justify-around px-16  mt-2">
              <li>
                <i className="border-white border-2 p-3 mt-2 rounded-full  fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands border-white border-2 p-3 mt-2 rounded-full fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands border-white border-2 p-3 mt-2 rounded-full  fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fa-solid border-white border-2 p-3 mt-2 rounded-full fa-globe"></i>
              </li>
            </ul>
          </div>
          <div className="w-1/3 ">
            <h4 className="text-3xl my-2 font-bold">ABOUT FREELANCER </h4>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 text-slate-300 text-center bg-gray-800">
        {" "}
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
