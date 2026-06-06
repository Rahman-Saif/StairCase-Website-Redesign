import React from "react";

const values = [
  {
    title: "Timeless Design"
  },
  {
    title: "Craftsmanship"
  },
  {
    title: "Client Trust"
  }
];

const milestones = [
  {
    year: "2015",
    title: "Foundation"
  },
  {
    year: "2017",
    title: "First Major Project"
  },
  {
    year: "2019",
    title: "Expansion"
  },
  {
    year: "2022",
    title: "Premium Residential Division"
  },
  {
    year: "2025",
    title: "National Recognition"
  }
];


const StorySection = () => { 
    return (
        <div>
            <section className="relative h-screen overflow-hidden">
  <img
    src="s7.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 flex h-full items-center">
    <div className="max-w-7xl mx-auto px-6">

      <p className="uppercase tracking-[0.4em] text-[#C8B08A]">
        A Stairmans Stories
      </p>

      <h1 className="mt-6 font-playfair text-white text-6xl md:text-8xl leading-none">
        Crafting Spaces,
        <br />
        Creating Stories
      </h1>

      <p className="mt-8 max-w-2xl text-white/80 text-xl">
        Every staircase, every furnishing detail,
        and every space we design carries a story.
        A story of craftsmanship, passion,
        and timeless design.
      </p>

    </div>
  </div>

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
    <div className="w-[1px] h-16 bg-white/50" />
  </div>
</section>
<section className="py-40">
  <div className="w-[80%] max-w-[80%] mx-auto text-center px-6">

    <p className="font-playfair text-3xl md:text-5xl leading-[1.8] text-white/90">

      What began as a small vision has evolved
      into a journey of designing timeless spaces
      that enrich everyday life.

      Through dedication, craftsmanship,
      and an unwavering pursuit of excellence,
      Stairmans has grown into a trusted name
      in premium interior and architectural solutions.

    </p>

  </div>
</section>
{/* <section className="py-32">
  <div className="grid lg:grid-cols-2 gap-20 items-center">

    <div>
      <img
        src="/s6.png"
        className="rounded-[32px]"
      />
    </div>

    <div>

      <p className="uppercase tracking-[0.3em] text-[#C8B08A]">
        Our Beginning
      </p>

      <h2 className="font-playfair text-5xl mt-4 text-white">
        Where It All Began
      </h2>

      <div className="mt-8 space-y-6 text-white/70 leading-relaxed">

        <p>
          Stairmans was founded with a simple belief:
          exceptional spaces should combine beauty,
          function, and longevity.
        </p>

        <p>
          What started with handcrafted staircases
          gradually expanded into complete interior,
          furnishing, and architectural solutions.
        </p>

        <p>
          Every project strengthened our commitment
          to thoughtful design and uncompromising quality.
        </p>

      </div>

    </div>

  </div>
</section>
<div className="relative">

  <div className="absolute left-8 top-0 bottom-0 w-px bg-[#d9d2c5]" />

  {milestones.map((item) => (
    <div key={item.year} className="relative flex gap-10 mb-16">

      <div className="w-4 h-4 rounded-full bg-[#C8B08A]" />

      <div>
        <div className="text-[#C8B08A]">
          {item.year}
        </div>

        <h3 className="text-2xl mt-2 text-white">{item.title}</h3>
      </div>
    </div>
  ))}

</div>
<section className="py-40">

  <div className="grid lg:grid-cols-2 gap-24 items-center">

    <div>
      <h2 className="font-playfair text-5xl">
        The Art Behind Every Detail
      </h2>

      <div className="mt-8 space-y-6 text-white/70">

        <p>
          Our work begins with understanding materials.
        </p>

        <p>
          From natural wood grains to bespoke finishes,
          every element is selected with purpose.
        </p>

        <p>
          We combine modern innovation with traditional
          craftsmanship to create enduring spaces.
        </p>

      </div>

      <div className="grid grid-cols-3 mt-16 gap-8">

        <div>
          <h3 className="text-4xl font-light">
            500+
          </h3>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-light">
            50+
          </h3>
          <p>Team Members</p>
        </div>

        <div>
          <h3 className="text-4xl font-light">
            98%
          </h3>
          <p>Satisfaction</p>
        </div>

      </div>

    </div>

    <img
      src="/s5.png"
      className="rounded-[32px]"
    />

  </div>

</section> */}
<section className="relative py-32">

  <img
    src="/s4.png"
    className="h-[700px] w-full object-cover rounded-[40px]"
  />

  <div className="absolute bottom-20 left-20 bg-white p-10 max-w-xl rounded-[24px] shadow-2xl">

    <h2 className="font-playfair text-5xl leading-tight">

      More Than Design,
      <br />
      A Lasting Legacy

    </h2>

    <p className="mt-6 text-white/70">
      Our work extends beyond aesthetics.
      We create spaces where memories are made,
      families grow, and stories continue
      for generations.
    </p>

  </div>

</section>
<div className="grid md:grid-cols-3 gap-8">

  {values.map((value) => (
    <div
      className="
      bg-white
      p-10
      rounded-[28px]
      shadow-sm
      hover:-translate-y-2
      transition
      "
    >
      <h3 className="font-playfair text-3xl">
        {value.title}
      </h3>
    </div>
  ))}

</div>
<section className="bg-[#1A1A1A] py-32">

  <div className="max-w-5xl mx-auto text-center">

    <h2 className="
    text-white
    font-playfair
    text-6xl
    ">
      Become Part Of Our Story
    </h2>

    <p className="text-white/70 mt-8 text-xl">
      Let's create a space that reflects your vision,
      your lifestyle, and your story.
    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-12">

      <button className="bg-[#C8B08A] px-8 py-4 rounded-full">
        Contact Us
      </button>

      <button className="border border-white/20 text-white px-8 py-4 rounded-full">
        Explore Projects
      </button>

    </div>

  </div>

</section>
        </div>
       
    );
}  

export default StorySection;