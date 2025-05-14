function Hero() {
  return (
    <section className="h-[100vh] w-[100vw] relative">
      <img
        src="./herobkg.png"
        alt="background pattern"
        className="object-cover h-full w-full absolute top-0 right-0"
      />
      <div className="absolute -translate-y-[50%] pt-[8rem] px-8 lg:px-0 top-[50%] w-full space-y-8 -translate-x-[50%] left-[50%] text-white">
        <h1 className="text-5xl lg:text-7xl baseneue_exp lg:text-center w-full leading-tight">
          Echodex — Play. <br className="hidden lg:block" />
          Trade. Earn. <br className="hidden lg:block" />
          <span className="text-brand">Together.</span>
        </h1>
        <h2 className="text-sm lg:text-lg text-center lg:w-[40%] mx-auto">
          A secure, community-owned platform blending DeFi and GameFi to reward
          you for every move — from staking to gameplay.
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 w-full justify-center">
          <button className="border py-4 px-10 cursor-pointer rounded-md border-brand text-brand">
            White paper
          </button>
          <button className="border py-4 px-10 cursor-pointer rounded-md bg-brand text-black font-medium">
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
