"use client";

const steps = [
  "Discovery Call",
  "Project Planning",
  "Design & Execution",
  "Final Delivery",
];

export default function ConsultationProcess() {
  return (
    <section className="py-28 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-light mb-20">
          How We Work
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, i) => (
            <div
              key={step}
              className="group relative"
            >
              <div className="text-6xl font-extralight text-[#C8B08A]">
                0{i + 1}
              </div>

              <div className="w-full h-px bg-black/10 my-6" />

              <h3 className="text-xl group-hover:translate-x-2 transition">
                {step}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
