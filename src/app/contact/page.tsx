'use client';  // Add this line at the top of the file

import Navbar from "@/app/Component/Navbar";
import Subfooter from "@/app/Component/Subfooter";
import Footer from "@/app/Component/Footer";

export default function Contact() {
  // Function to handle form submission and send the message via email
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    const recipientEmail = "salizamasood@gmail.com"; // Email to send the message to
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; // Opens the default email client with pre-filled information
  };

  return (
    <div>
      <Navbar />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#B88E2F] mb-8">
            Contact Us
          </h2>

          {/* Contact Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#B88E2F] mb-4">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Have questions, feedback, or need support? We are here to help!
                Reach out to us through any of the options below.
              </p>
              <ul className="text-lg text-gray-700 space-y-4">
                <li>
                  <span className="font-semibold">Email:</span> salizamasood@gmail.com
                </li>
                <li>
                  <span className="font-semibold">Phone:</span> +1 123 456 7890
                </li>
                <li>
                  <span className="font-semibold">Address:</span> 123 Zoshka Lane, E-commerce Karachi, Pakistan.
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#B88E2F] mb-4">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] text-white font-semibold py-2 rounded-lg hover:bg-[#9a7728] transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center text-[#B88E2F] mb-8">
              Visit Our Office
            </h3>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191555055!2d-122.084249!3d37.422065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02ef4f0b11%3A0xfcc55d1a424f0bcd!2sGoogleplex!5e0!3m2!1sen!2sus!4v1617719488817!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Subfooter />
      <Footer />
    </div>
  );
}
