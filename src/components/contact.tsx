function Contact() {
  return (
    <section className="gap-10 flex flex-col lg:flex-row px-8 space-y-10 lg:px-[6rem] justify-between">
      <div className="space-y-3">
        <h2 className="text-4xl lg:text-7xl text-left mx-auto leading-tight">
          Contact us
        </h2>

        <div className="space-y-4">
          <p className="text-xs lg:text-sm">
            <span className="font-bold">Email:</span> support@echodex.network
          </p>
          <p className="text-xs lg:text-sm">
            <span className="font-bold">Office:</span> Schuepisstrasse 5,
            Housenruck, Switzerland.
          </p>
        </div>
      </div>

      <form className="space-y-10 lg:w-1/2">
        <div className="flex flex-col space-y-3">
          <label htmlFor="text-xs lg:text-lg">Full Name</label>
          <input
            type="text"
            className="text-xs lg:text-lg p-4 rounded-md outline-none bg-light_gray"
            placeholder="eg. James Dean"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="text-xs lg:text-lg">Email</label>
          <input
            type="text"
            className="text-xs lg:text-lg p-4 rounded-md outline-none bg-light_gray"
            placeholder="eg. jaamesdeen@gmail.com"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="text-xs lg:text-lg">Telegram</label>
          <input
            type="text"
            className="text-xs lg:text-lg p-4 rounded-md outline-none bg-light_gray"
            placeholder="eg. jaamesdeen@gmail.com"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="text-xs lg:text-lg">Message</label>
          <textarea
            className="text-xs lg:text-lg p-4 rounded-md outline-none bg-light_gray"
            placeholder="Enter your message..."
          ></textarea>
        </div>

        <button className="items-center mt-8 text-sm lg:text-lg flex justify-between py-4 px-10 gap-8 cursor-pointer rounded-md bg-brand text-black font-medium">
          <p>Send message</p>{" "}
          <svg
            width="82"
            height="37"
            viewBox="0 0 82 37"
            className="size-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80.7678 20.2678C81.7441 19.2915 81.7441 17.7085 80.7678 16.7322L64.8579 0.82233C63.8816 -0.15398 62.2986 -0.15398 61.3223 0.82233C60.346 1.79864 60.346 3.38155 61.3223 4.35786L75.4645 18.5L61.3223 32.6421C60.346 33.6184 60.346 35.2014 61.3223 36.1777C62.2986 37.154 63.8816 37.154 64.8579 36.1777L80.7678 20.2678ZM0 18.5V21H79V18.5V16H0V18.5Z"
              fill="#111111"
            />
          </svg>
        </button>
      </form>
    </section>
  );
}

export default Contact;
