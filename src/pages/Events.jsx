import Event from "../components/Event";

export default function Events() {
  return (
    <div className="w-screen bg-white min-h-screen  text-black flex flex-col items-center justify-center">
      <div className="w-full flex flex-col space-y-2 items-center justify-center my-5">
        <p className="uppercase font-semibold">Upcoming events</p>
        <div className="w-[5%] h-1 bg-[#242424]" />
      </div>

      {/* events mapped below */}
      <div className="my-10 px-5 w-full flex flex-col items-end">
        <div className="space-y-10 border-l pl-10">
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  );
}
