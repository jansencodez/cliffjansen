"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileImage from "../../public/images/profile.png";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isEmail, setIsEmail] = useState(true); // Toggle between email and WhatsApp

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct the message body
    const messageBody = `Name: ${formData.name}\nMessage: ${formData.message}`;

    if (isEmail) {
      // Only show email if the "email" option is selected
      if (!formData.email) {
        alert("Please provide an email address.");
        return;
      }

      window.location.href = `mailto:jansencodsez@gmail.com?subject=Message from ${
        formData.name
      }&body=${encodeURIComponent(messageBody)}`;
    } else {
      // WhatsApp URL with message text
      window.open(
        `https://wa.me/254746891531?text=${encodeURIComponent(messageBody)}`,
        "_blank"
      );
    }

    alert("Thank you for reaching out!");
  };

  return (
    <section className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Contact Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 p-3 rounded-3xl outline outline-1 outline-gray-200">
        {/* Profile Image with Next.js Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-md">
          <Image
            src={profileImage}
            alt="YourName"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Contact Details */}
        <div className="flex-1">
          <p className="text-lg mb-4">
            I&apos;d love to hear from you! Feel free to reach out via email or
            WhatsApp.
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:jansencodsez@gmail.com"
              className="text-green-500 underline"
            >
              jansencodsez@gmail.com
            </a>
          </p>
          <p className="text-gray-800">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/254746891531"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              +254 746 891 531
            </a>
          </p>
        </div>
      </div>

      {/* Toggle Button for Email/WhatsApp */}
      <div className=" flex items-center gap-2 mt-6 p-2 rounded-lg">
        <span className="text-sm">{isEmail ? "Email" : "WhatsApp"}</span>
        <label
          htmlFor="contact-toggle"
          className="relative inline-flex items-center cursor-pointer"
        >
          <input
            type="checkbox"
            id="contact-toggle"
            checked={!isEmail}
            onChange={() => setIsEmail(!isEmail)}
            className="sr-only"
          />
          <div className="w-12 h-6 bg-gray-300 dark:bg-gray-500 rounded-full peer transition-colors duration-300 outline outline-1 outline-gray-50 dark:outline-gray-700">
            <div
              className={`w-6 h-6 
                    outline outline-1 outline-gray-50
                    rounded-full transform transition-all duration-300 ease-in-out ${
                      isEmail ? "translate-x-6" : "translate-x-0"
                    }`}
            ></div>
          </div>
        </label>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 p-6 rounded-3xl shadow-md max-w-xl mx-auto outline outline-1 outline-gray-200"
      >
        <div className="mb-4 p-2 rounded-2xl outline outline-1 outline-gray-100">
          <label htmlFor="name" className="block text-gray-600 mb-2 ml-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border border-gray-100 p-2 w-full rounded-2xl focus:outline-none focus:ring focus:ring-green-200"
            required
          />
        </div>

        {/* Email input only shown when the "Email" toggle is selected */}
        {isEmail && (
          <div className="mb-4 p-2 rounded-2xl outline outline-1 outline-gray-100">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-gray-100 p-2 w-full rounded-2xl focus:outline-none focus:ring focus:ring-green-200"
              required={isEmail} // Only required when email is selected
            />
          </div>
        )}

        <div className="mb-4 p-2 rounded-2xl outline outline-1 outline-gray-100">
          <label htmlFor="message" className="block text-gray-600 mb-2 ml-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={5}
            className="border  border-gray-100 p-2 w-full rounded-2xl focus:outline-none focus:ring focus:ring-green-200"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 transition-colors text-white py-2 px-4 rounded-2xl w-full"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
