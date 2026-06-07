export default function StudioLocation() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="tracking-[0.3em] uppercase text-[#C8B08A] text-sm">
              Studio
            </p>

            <h2 className="text-5xl font-light mt-4">
              Visit Our Studio
            </h2>

            <p className="mt-6 text-neutral-600 leading-relaxed">
              Experience our materials, craftsmanship,
              and design philosophy firsthand.
              Schedule a visit and explore our studio.
            </p>

            <button className="mt-8 rounded-full border border-[#1A1A1A] px-8 py-4">
              Get Directions
            </button>
          </div>

          <div className="rounded-[32px] overflow-hidden shadow-2xl border border-black/5">
            <iframe
              src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
