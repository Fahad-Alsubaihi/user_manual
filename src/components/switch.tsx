import Image from "../assets/images/react.svg";
interface Switcher {
  text: string;
  image?: string;
}

export function Switcher({
  text = "Click me",
  image = Image,
  ...props
}: Switcher) {
  return (
    <div
      className="flex flex-col items-center p-8 sm:p-12 border border-gray-200 rounded-xl shadow-lg h-64 sm:h-80ss transform transition-transform duration-300 hover:scale-105"
      {...props}
    >
      <img
        src={image}
        alt="icon"
        className="w-24 sm:w-32 h-24 sm:h-32 mb-4 sm:mb-6"
      />
      <span className="text-xl font-bold text-center text-gray-700">
        {text}
      </span>
    </div>
  );
}
