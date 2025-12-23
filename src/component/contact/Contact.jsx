import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheck } from "react-icons/fi";

const Contact = () => {
  const form = useRef(null);

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error
  const [submit, setSubmit] = useState("Send");
  const [animate, setAnimate] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setAnimate(true);
    setStatus("sending");
    setSubmit("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE,
        import.meta.env.VITE_APP_TEMP,
        form.current,
        import.meta.env.VITE_APP_KEY
      )
      .then(() => {
        setTimeout(() => {
          setStatus("success");
          setSubmit("Sent");
          setAnimate(false);
          form.current.reset();

          // Reset back to Send
          setTimeout(() => {
            setStatus("idle");
            setSubmit("Send");
          }, 2000);
        }, 600);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        setStatus("error");
        setSubmit("Failed");
        setAnimate(false);

        setTimeout(() => {
          setStatus("idle");
          setSubmit("Send");
        }, 2000);
      });
  };

  return (
    <div>
      <h2 className="font-PlayfairDisplaySC font-bold text-center text-black text-4xl mt-10">
        Contact
      </h2>

      <div className="w-[10/12] lg:px-[100px] py-2 flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-[800px] md:w-[400px] w-[300px] mx-auto">
          <img
            src="/assets/Wavy_Bus-19_Single-03.jpg"
            alt="Contact"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full flex items-center justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-md mt-8 p-4 rounded shadow-md font-sen"
          >
            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`
                w-full
                py-3
                px-6
                rounded-lg
                flex
                justify-center
                items-center
                gap-2
                font-semibold
                shadow-md
                overflow-hidden
                transition-all
                duration-300
                active:scale-95

                ${
                  status === "idle" &&
                  "bg-gray-800 text-white hover:bg-gray-700"
                }
                ${status === "sending" && "bg-gray-600 text-white"}
                ${
                  status === "success" &&
                  "bg-green-600 text-white animate-pulse"
                }
                ${status === "error" && "bg-red-600 text-white animate-shake"}
              `}
            >
              {/* Send */}
              {status === "idle" && (
                <FiSend
                  className={`
                    text-lg
                    transition-all
                    duration-500
                    ${
                      animate
                        ? "-translate-y-6 translate-x-6 opacity-0 scale-125"
                        : "opacity-100 scale-100"
                    }
                  `}
                />
              )}

              {/* Loading */}
              {status === "sending" && (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}

              {/* Success */}
              {status === "success" && (
                <FiCheck className="text-xl animate-bounce" />
              )}

              {/* Error */}
              {status === "error" && (
                <span className="text-lg font-bold">✖</span>
              )}

              <span>{submit}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
