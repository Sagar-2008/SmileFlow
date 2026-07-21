export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-teal-700">
          SmileFlow
        </h1>

        <button className="rounded-lg bg-teal-700 px-5 py-2 text-white">
          Book Appointment
        </button>
      </div>
    </nav>
  );
}