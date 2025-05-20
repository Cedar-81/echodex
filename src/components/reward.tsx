function Reward() {
  return (
    <section className="space-y-10 lg:space-y-20  px-10 lg:px-[6rem]">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <h2 className=" text-4xl lg:text-7xl text-center lg:text-left mx-auto leading-tight">
          Built to Reward, Designed to Last
        </h2>
        <p className="text-xs text-center w-[60%] lg:text-left lg:text-base">
          Echodex brings powerful utility to its users — from staking rewards
          and referral bonuses to advanced trading tools and a native
          DeFi/GameFi interface.
        </p>
      </div>

      <div className="flex lg:grid grid-cols-3 flex-wrap w-full gap-8">
        <div className="space-y-3">
          <img src="./rewardimg1.png" alt="" />
          <h3 className="text-lg font-medium">Incentivized Community</h3>
          <p className="text-xs lg:text-sm">
            Accessing premium features and advanced trading tools. This
            multi-utility approach incentivizes active participation and creates
            a self-sustaining ecosystem. Staking to secure the network and earn
            liquidity rewards, Airdrop, and referral campaign system
          </p>
        </div>
        <div className="space-y-3">
          <img src="./rewardimg2.png" alt="" />
          <h3 className="text-lg font-medium">
            Our Native Defi Swap & Gamefi Interface
          </h3>
          <p className="text-xs lg:text-sm">
            A full-scale mainnet launch. Rolling out advanced features such as
            algorithmic trading and integrated DeFi solutions.
          </p>
        </div>
        <div className="space-y-3">
          <img src="./rewardimg3.png" alt="" />
          <h3 className="text-lg font-medium">Innovate Across Sectors</h3>
          <p className="text-xs lg:text-sm">
            Integration of advanced blockchain technology interoperable across
            various block chain network with engaging gaming mechanics to
            redefine financial and interactive digital experiences.
          </p>
        </div>
        <div className="space-y-3">
          <img src="./rewardimg4.png" alt="" />
          <h3 className="text-lg font-medium">Empower the Community</h3>
          <p className="text-xs lg:text-sm">
            Utilizing Features and transparent governance, fair token
            distribution, and robust incentive programs to build a truly
            decentralized platform.
          </p>
        </div>
        <div className="space-y-3">
          <img src="./rewardimg5.png" alt="" />
          <h3 className="text-lg font-medium">Driving Sustainable Growth</h3>
          <p className="text-xs lg:text-sm">
            Implement technical safeguards, such as anti-whale measures and
            auto-liquidity features, to ensure long-term value and stability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reward;
