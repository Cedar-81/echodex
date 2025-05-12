function Hero() {
  return (
    <section className="h-[100vh] w-[100vw] relative">
      <img
        src="./herobkg.png"
        alt="background pattern"
        className="object-cover h-full w-full absolute top-0 right-0"
      />
      <div className="absolute -translate-y-[50%] top-[50%] w-full space-y-8 -translate-x-[50%] left-[50%] text-white">
        <h1 className="text-7xl baseneue_exp text-center w-full leading-tight">
          Echodex — Play. <br />
          Trade. Earn. <br />
          <span className="text-brand">Together.</span>
        </h1>
        <h2 className="text-lg text-center w-[40%] mx-auto">
          A secure, community-owned platform blending DeFi and GameFi to reward
          you for every move — from staking to gameplay.
        </h2>
        <div className="flex gap-6 w-full justify-center">
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
