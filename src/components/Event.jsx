export default function Event() {
  return (
    <div className="w-[80%] space-y-2">
      <div className="flex items-center space-x-2">
        <p className="uppercase font-light text-xs">Location</p>
        <div className="w-7 h-[0.06rem] bg-black" />
        <p className="uppercase font-light text-xs">18th Nov &apos;23</p>
      </div>
      <div>
        <p className="font-semibold text-lg">Title of the event is Lorem</p>
      </div>
      <p className="font-light text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
