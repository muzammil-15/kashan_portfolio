"use client"
import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(form)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLETE_KEY,
        {
          from_name: form.firstName+" "+form.lastName,
          to_name: "Kashan Meer",
          from_phone: form.phone,
          from_email: form.email,
          to_email: "meer2keman@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_ID_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="my-16 w-full md:w-[90%] lg:w-[80%]">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="w-full flex flex-col gap-4 md:flex-row justify-center items-center md:gap-10">
          <div className="flex flex-col gap-1 w-full md:w-1/2">
            <label htmlFor="fname" className="text-lg font-[500] text-[#FFF]">
              First Name
            </label>
            <input
              type="text"
              className="p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent"
              placeholder="First Name"
              name='firstName'
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-full md:w-1/2">
            <label htmlFor="lname" className="text-lg font-[500] text-[#FFF]">
              Last Name
            </label>
            <input
              type="text"
              className="p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent"
              placeholder="Last Name"
              name='lastName'
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:flex-row justify-center items-center md:gap-10 mt-6">
          <div className="flex flex-col gap-1 w-full md:w-1/2">
            <label htmlFor="phone" className="text-lg font-[500] text-[#FFF]">
              Phone
            </label>
            <input
              type="number"
              className="p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent"
              placeholder="Phone"
              name='phone'
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 w-full md:w-1/2">
            <label htmlFor="email" className="text-lg font-[500] text-[#FFF]">
              Email
            </label>
            <input
              type="email"
              className="p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent"
              placeholder="Email"
              name='email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-6">
          <div className="flex flex-col gap-1 w-full md:w-2/3">
            <label htmlFor="mesage" className="text-lg font-[500] text-[#FFF]">
              Message
            </label>
            <textarea
              type="text"
              rows={8}
              className="p-3 bg-transparent border border-[#8d8c8cb2] rounded-md w-full focus:bg-transparent"
              placeholder="Enter Your Valuable message"
              name='message'
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-6">
          <button type="submit" className="w-[150px] flex justify-center items-center py-3 px-6 rounded-full bg-[#FF9142] hover:bg-[#f07f2e] text-[#F4F7FA] text-sm">
          {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
