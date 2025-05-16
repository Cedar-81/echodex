function Roadmap() {
  return (
    <section className="px-8 space-y-10 lg:px-[6rem]">
      <h2 className="text-4xl lg:text-7xl text-center leading-tight">
        Roadmap
      </h2>

      <div className="">
        <div className="space-y-10">
          <div className="flex gap-30">
            <div className="space-y-2 lg:w-1/2">
              <h3 className="text-sm lg:text-lg font-medium">
                <span className="text-brand">Phase 1:</span> Development and
                Launch
              </h3>

              <p className="text-xs lg:text-base">Token creation and presale</p>
              <p className="text-xs lg:text-base">
                Game prototype usiing SolidWorks
              </p>
              <p className="text-xs lg:text-base">
                Staking and liquidity pool depployment
              </p>
            </div>

            <div className="border hidden w-1/2 lg:flex justify-center">
              <svg
                width="368"
                height="336"
                className="size-40"
                viewBox="0 0 368 336"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 40.5H301.5C312.546 40.5 321.5 49.4543 321.5 60.5V293.5M192.5 73.5H263C274.046 73.5 283 82.4543 283 93.5V156M192.5 2H337.5C348.546 2 357.5 10.9543 357.5 22V156"
                  stroke="white"
                  stroke-opacity="0.33"
                  stroke-width="4"
                />
                <path
                  d="M286.654 293.75L357.346 293.75L322 333.012L286.654 293.75Z"
                  stroke="white"
                  stroke-opacity="0.33"
                  stroke-width="4"
                />
              </svg>
            </div>
          </div>

          <div className="flex gap-30">
            <div className="hidden w-1/2 lg:flex justify-center">
              <svg
                width="368"
                height="336"
                viewBox="0 0 368 336"
                fill="none"
                className="size-40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M368 40.5H66.5C55.4543 40.5 46.5 49.4543 46.5 60.5V293.5M175.5 73.5H105C93.9543 73.5 85 82.4543 85 93.5V156M175.5 2H30.5C19.4543 2 10.5 10.9543 10.5 22V156"
                  stroke="white"
                  stroke-opacity="0.33"
                  stroke-width="4"
                />
                <path
                  d="M81.3457 293.75L10.6543 293.75L46 333.012L81.3457 293.75Z"
                  stroke="white"
                  stroke-opacity="0.33"
                  stroke-width="4"
                />
              </svg>
            </div>
            <div className="space-y-2 lg:w-1/2">
              <h3 className="text-sm lg:text-lg font-medium">
                <span className="text-brand">Phase 2:</span> Growth and
                Expansion
              </h3>

              <p className="text-xs lg:text-base">Token creation and presale</p>
              <p className="text-xs lg:text-base">
                Game prototype usiing SolidWorks
              </p>
              <p className="text-xs lg:text-base">
                Staking and liquidity pool depployment
              </p>
            </div>
          </div>

          <div className="space-y-2 lg:w-1/2">
            <h3 className="text-sm lg:text-lg font-medium">
              <span className="text-brand">Phase 3:</span> Scalability
            </h3>

            <p className="text-xs lg:text-base">
              Launch an AI-powered Web2-to-Web3 interoperability builder.
            </p>
            <p className="text-xs lg:text-base">
              Game prototype usiing SolidWorks
            </p>
            <p className="text-xs lg:text-base">
              Staking and liquidity pool depployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
