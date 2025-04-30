import React from "react";

function ContactSection({ sendEmail }) {
  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-6">
            Feel free to reach out to me using the form below.
          </p>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="bg-gray-800 p-4 rounded-lg"
              required
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone Number"
              className="bg-gray-800 p-4 rounded-lg"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="bg-gray-800 p-4 rounded-lg md:col-span-2"
              required
            />
            <textarea
              name="message"
              placeholder="Type your message here."
              className="bg-gray-800 p-4 rounded-lg md:col-span-2"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-400 text-black px-6 py-3 rounded-full md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center text-left space-y-4">
          <div className="flex items-center">
            <span className="text-green-400 mr-4 text-2xl">📞</span>
            <p>(+91) 9999999999</p>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-4 text-2xl">📧</span>
            <p>dharshankumar55@gmail.com</p>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-4 text-2xl">📍</span>
            <p>Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;