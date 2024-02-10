import character from "../assets/character.png";
export default function Home() {
  return (
    <div className="flex  xl:flex-row  md:flex-col md:items-center md:justify-center xl:text-start md:text-center sm:text-center md:gap-5">
      <div className="content max-w-[500px] max-[768px]:text-center">
        <img
          src={character}
          alt="character"
          className="test hidden
         max-[1024px]:block h-72 w-72"
        />

        <h1 className="xl:text-[102px] font-ibmSans mb-5 ">
          MY NAME IS <span className="font-bold">KEITH ANDRE F. TEODORO</span>
        </h1>

        <p className="font-ibmSans xl:text-[32px] italic mb-5">
          <span className="font-bold">A Web Developer</span> based <br />
          in the
          <span className="font-bold"> Philippines</span>
        </p>

        <button className=" bg-slate-950 text-white w-48 h-14">
          Let's Connect
        </button>
      </div>
      <div className="image lg:w-[700px] lg:h-[600px] flex items-center justify-center max-[1024px]:hidden"></div>
    </div>
  );
}
