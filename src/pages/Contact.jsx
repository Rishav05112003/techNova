import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful form submission
    setFormStatus(
      "Thank you for your message! We will get back to you shortly."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className=" pt-[100px] bg-gray-50 dark:bg-[#3E2C41] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-800 mb-6">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-[#261C2C] p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium dark:text-white text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium dark:text-white text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 dark:bg-[#5C527F] text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </div>

          {formStatus && (
            <div className="mt-4 text-green-600 text-center">
              <p>{formStatus}</p>
            </div>
          )}
        </form>
      </div>

      {/* Google Map Integration */}
      <div className="mt-12 w-full max-w-md">
        <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-4">
          Our Office Location
        </h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6098109549166!2d87.28998317510849!3d23.546532378809978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7739c6334ce51%3A0xa7fc29405ec6b126!2sDurgapur%20NIT%20Entrance%20Gate!5e0!3m2!1sen!2sin!4v1737045903081!5m2!1sen!2sin"
            width="500"
            height="500"
            allowFullScreen=""
            className="md:h-[300px] md:w-[300px] flex justify-center items-center sm:h-[100px] sm:w-[100px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
