import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Smile<span className="text-teal-600">Flow</span>
          </h1>

          <div className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#">Home</a>
            <a href="#">Treatments</a>
            <a href="#">Gallery</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <button className="rounded-xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-teal-700">
            Book Appointment
          </button>
        </nav>
      </Container>
    </header>
  );
}