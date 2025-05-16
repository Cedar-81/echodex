function About() {
  return (
    <section className="space-y-16 px-8 lg:px-[6rem]">
      <div className="flex flex-col lg:grid grid-cols-2 gap-5 justify-between">
        <h1 className="text-4xl lg:text-7xl leading-tight">VISION</h1>
        <p className="text-sm lg:text-lg">
          To democratize access to decentralized finance by creating a
          user-friendly, secure and transparent ecosystem for gaming and
          decentralized exchange
        </p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 gap-5 justify-between">
        <h1 className="text-4xl lg:text-7xl leading-tight">MISSION</h1>
        <p className="text-sm lg:text-lg">
          Echodex symbolizes the voice & feedback of a community driven
          decentralized exchange. Our Mission is to create a platform that
          resonates with users and responds dynamically to market needs.
        </p>
      </div>
      <div className="flex flex-col lg:grid grid-cols-2 gap-5 justify-between">
        <h1 className="text-4xl lg:text-7xl leading-tight">SOLUTION</h1>
        <p className="text-sm lg:text-lg">
          Echodex is built on cutting-edge blockchain technology to enable fair
          trading, reduce fees and empower a community-driven governance model.
        </p>
      </div>
    </section>
  );
}

export default About;
