function Team() {
  return (
    <section className="gap-10 flex px-8 space-y-10 lg:px-[6rem]">
      <h2 className="text-4xl lg:text-7xl text-left mx-auto leading-tight">
        Meet the team
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="space-y-2">
          <img src="./team1.png" alt="" />
          <h3 className="text-lg font-medium">N Tri</h3>
          <p className="text-xs lg:text-sm">Blockchain Developer</p>
          <p className="text-xs lg:text-sm">
            With immense knowledge in blockchain, Web 3 and Web 2 technologies.
          </p>
        </div>
        <div className="space-y-2">
          <img src="./team2.png" alt="" />
          <h3 className="text-lg font-medium">Aak T</h3>
          <p className="text-xs lg:text-sm">Finance and Market</p>
          <p className="text-xs lg:text-sm">
            Creative mind with enthusiastic new view and approach towards the
            new blockchain market needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
