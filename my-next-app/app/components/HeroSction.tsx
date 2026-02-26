export default function HeroSection() {
  return (
    <div className="w-full relative bg-emerald-900 h-[500px] flex flex-col items-center justify-center">
      <div className="container flex gap-4 flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-white">
          Discover amazing content and connect with us. Discover amazing content
          and connect with us.
        </p>
        <div className="w-[400px] bg-emerald-600 h-[1px]"></div>
        <button className="px-6 py-3 cursor-pointer bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
