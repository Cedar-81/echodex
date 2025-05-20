function Funds() {
  return (
    <section className="px-8 h-max relative space-y-10 lg:space-y-20  lg:px-[6rem] overflow-clip">
      <img
        src="./pattern2.png"
        className="absolute right-0 h-full opacity-40"
        alt=""
      />

      <h3 className="text-4xl lg:text-7xl text-center leading-tight">
        Fund allocation
      </h3>
      <div className="relative z-30">
        <div className="flex gap-4 items-center">
          <div className="min-w-[60%] h-10 lg:h-20 bg-[#C73265]" />{" "}
          <p className="text-xs lg:text-sm">Engineering & Development- 40%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[30%] h-10 lg:h-20 bg-[#59126A]" />{" "}
          <p className="text-xs lg:text-sm">Marketing & Promotion - 20%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[18%] h-10 lg:h-20 bg-[#951F6C]" />{" "}
          <p className="text-xs lg:text-sm">Business Development- 12%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[15%] h-10 lg:h-20 bg-[#00055E]" />{" "}
          <p className="text-xs lg:text-sm">Legal & Regulation- 10%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[12%] h-10 lg:h-20 bg-[#212A84]" />{" "}
          <p className="text-xs lg:text-sm">Operation and Administration- 8%</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="min-w-[9%] h-10 lg:h-20 bg-[#ED635E]" />{" "}
          <p className="text-xs lg:te3xt-sm">Partners- 6%</p>
        </div>
      </div>
    </section>
  );
}

export default Funds;
