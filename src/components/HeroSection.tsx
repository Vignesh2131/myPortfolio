
const HeroSection = () => {
  return (
    <main className="flex justify-center mx-auto mt-24 mb-8 items-center w-[300px] md:w-[700px]" id="home">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-1 relative">
            <h1 className="text-2xl h-[2.5rem] md:text-4xl md:h-[3.5rem] lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 lg:h-[4rem]">
              Hi, I&apos;m Vignesh
            </h1>
            <p className="text-sm md:text-lg relative bottom-4">
              Full stack Web developer | AI Enthusiast
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <h2 className="text-base md:text-xl font-bold">About me</h2>
          <p className="text-sm text-gray-500">
            An enthusiastic Full Stack Developer proficient in MERN, Next.js,
            and modern web technologies. A flexible and fast learner, passionate
            about building efficient frontend and backend solutions for real world problems.
            I&apos;m very much interesting in building stuff with AI and leverage it to the full potential.
            
          </p>
        </div>
      </div>
    </main>
  );
}

export default HeroSection