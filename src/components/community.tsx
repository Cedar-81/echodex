function Community() {
  return (
    <section className="px-8 lg:px-[6rem] space-y-10">
      <h3 className="text-4xl lg:text-7xl leading-tight">
        Join the <span className="text-brand">Echodex Community</span> today and
        experience the future of gamefi and defi!{" "}
        <span className="">
          <button className="items-center mt-8 text-sm lg:text-lg flex justify-between py-4 px-10 gap-8 cursor-pointer rounded-md bg-brand text-black font-medium">
            <p>Join the community</p>{" "}
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
        </span>
      </h3>

      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="h-2 w-32 lg:w-[26rem] lg:mt-3 bg-white" />
          <p className="w-full text-sm lg:text-base">
            <span className="font-medium">Security and transparency:</span>{" "}
            Robust security measures to protect user assets transparent
            tokenomics and governance processes
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="h-2 w-32 lg:w-[26rem] lg:mt-3 bg-white" />
          <p className="w-full text-sm lg:text-base">
            <span className="font-medium">Community focus:</span> Vibrant
            community with regular updates, events, and contests opportunities
            for users to contribute and participate in governance
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="h-2 w-32 lg:w-[26rem] lg:mt-3 bg-white" />
          <p className="w-full text-sm lg:text-base">
            <span className="font-medium">Innovative ecosystem:</span> Seamless
            integration of gamefi and defi unique play-to-earn models and
            rewards
          </p>
        </div>
      </div>
    </section>
  );
}

export default Community;
