function Tokenomics() {
  return (
    <section className="px-8 lg:px-[6rem] h-max relative space-y-10 overflow-clip">
      <img
        src="./pattern1.png"
        className="absolute right-0 h-full opacity-40"
        alt=""
      />

      <h3 className="text-4xl lg:text-7xl text-center leading-tight">
        Tokenomics
      </h3>
      <div className="relative z-30 justify-center">
        <div className="flex gap-4 items-center">
          <div className="min-w-[60%] h-10 lg:h-20 bg-[#F08F35]" />{" "}
          <p className="text-xs lg:text-sm">ICO Launch or Liquidity- 20%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[60%] h-10 lg:h-20 bg-[#BA7029]" />{" "}
          <p className="text-xs lg:text-sm">Team and founders- 20%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[60%] h-10 lg:h-20 bg-[#7F8E70]" />{" "}
          <p className="text-xs lg:text-sm">Pre ICO sales- 20%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[60%] h-10 lg:h-20 bg-[#2D1C04]" />{" "}
          <p className="text-xs lg:text-sm">Ecosystem development- 20%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[24%] h-10 lg:h-20 bg-[#493F25]" />{" "}
          <p className="text-xs lg:text-sm">Marketing and bounty- 8%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[15%] h-10 lg:h-20 bg-[#493F25]" />{" "}
          <p className="text-xs lg:te3xt-sm">Reserve fund- 5%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[15%] h-10 lg:h-20 bg-[#87531E]" />{" "}
          <p className="text-xs lg:text-sm">Board advisors- 5%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[6%] h-10 lg:h-20 bg-[#646647]" />{" "}
          <p className="text-xs lg:text-sm">Charity fund- 2%</p>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
