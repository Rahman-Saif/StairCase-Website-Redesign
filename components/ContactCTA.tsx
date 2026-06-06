export default function ContactCTA() {
  return (
    <section className="bg-[#1A1A1A] py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-white text-5xl md:text-6xl font-light leading-tight">
          Ready To Transform Your Space?
        </h2>

        <p className="text-neutral-400 mt-8 text-lg max-w-2xl mx-auto">
          Let's discuss your ideas and create a space
          that reflects your vision and lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

          <button className="bg-[#C8B08A] text-black px-8 py-4 rounded-full">
            Book A Meeting
          </button>

          <button className="border border-white/20 text-white px-8 py-4 rounded-full">
            Call Us Today
          </button>

        </div>
      </div>
    </section>
  );
}