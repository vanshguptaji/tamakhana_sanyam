import React from "react";
import Navbar from "../components/Navbar.jsx";
import RotatingImages from "../useful_components/RotatingCircles.jsx";
import makhana from "../assets/Untitled-1.png";

const AboutUs = () => {
  return (
    <div className="relative bg-blue-200 min-h-screen overflow-hidden">
      {/* Floating Images Across Entire Page */}
      <RotatingImages numImages={8} imageUrl={makhana} />

      {/* Header */}
      <Navbar />
      <header className="bg-[#A500A5] text-white text-center py-2 my-4 text-sm font-semibold">
        ✨ High Protein, 0-2g Sugar, and 75,000+ 5-Star Reviews ✨
      </header>

      {/* About Section */}
      <div className="flex justify-center mt-10 relative">
        <div className="bg-white p-10 rounded-lg shadow-md w-3/4 relative">
          {/* Profile Image */}
          <div className="absolute left-[-90px] top-8 flex flex-col gap-6">
            {/* <span className="text-white text-2xl font-bold">👨‍🦰</span> */}
            <div class="avatar">
              <span class="object-fit fadeInUp delay5">
                <img
                  alt="Greg Portrait"
                  className="w-32 h-32"
                  data-ll-status="loaded"
                  srcset="https://magicspoon.imgix.net/files/magic-spoon-founders-greg-sewitz_2x_094ac693-a9a3-4e2f-8c7e-587b9f8d281a_medium.png?v=1613785469&amp;auto=format,compress"
                />
              </span>
            </div>
          </div>

          {/* Content */}

          <h2 className="text-[#200066] text-2xl font-bold">
            Hi I am Sanyam Founder of TAMAKHANA.
          </h2>
          {/* <p className="text-[#200066] mt-4 text-base">
            We’ve been friends for ten years: met at college, lived together,
            even started a previous business together (you could call us
            “cereal” entrepreneurs…). We both grew up eating cereal every
            morning for breakfast, binging on the sugary crunch of the classic
            brands and then crashing in the afternoon when we were supposed to
            be at our most productive.
          </p> */}
          <p className="text-[#200066] mt-4 text-base">
            **Hi, we’re the founders of Tamakhana.** At Tamakhana, our journey
            started with a simple yet powerful idea—to redefine snacking by
            offering something that is not only delicious but also truly
            nourishing. We’ve always been passionate about mindful eating, and
            as avid snackers ourselves, we realized that most snack options
            available today are either heavily processed, packed with unhealthy
            additives, or simply lack the natural goodness our bodies deserve.
            That’s when we discovered the incredible potential of **fox nuts**—a
            superfood that has been enjoyed for centuries but never given the
            recognition it truly deserves.{" "}
          </p>

          <p className="text-[#200066] mt-4 text-base">
            Growing up, snacking was always a part of our lives. Whether it was
            during school breaks, long road trips, movie nights, or just to curb
            those midday cravings, we constantly reached for something crunchy
            and satisfying. However, as we became more conscious of what we were
            putting into our bodies, we noticed a frustrating trend—most of our
            favorite snacks were loaded with preservatives, excessive salt,
            unhealthy oils, and artificial flavors. There were very few options
            that provided both **great taste and real nutrition**. That’s when
            the idea of Tamakhana started taking shape.{" "}
          </p>

          <p className="text-[#200066] mt-4 text-base">
            We spent months researching, sourcing, and experimenting to
            **reinvent the way fox nuts are enjoyed**. Our goal was simple—to
            take this already nutritious superfood and elevate it with unique,
            mouthwatering flavors while maintaining its natural health benefits.
            After countless trials, we perfected a range of **deliciously
            seasoned fox nuts** that cater to every taste preference, whether
            you love bold, spicy flavors, mild and herby blends, or subtle,
            naturally sweet options.{" "}
          </p>

          <p className="text-[#200066] mt-4 text-base">
            But Tamakhana is more than just a snack brand—it’s a movement
            towards **smarter, healthier snacking**. Every bite of our fox nuts
            is a testament to our commitment to quality, purity, and great
            taste. We ensure that our products are **light, crunchy, and packed
            with protein, fiber, and essential nutrients**, making them the
            perfect guilt-free snack for any time of the day. Whether you need a
            quick energy boost, a post-workout snack, or just something to munch
            on while you unwind, Tamakhana is here to **change the way you
            snack—one delicious bite at a time**.{" "}
          </p>

          <p className="text-[#200066] mt-4 text-base">
            We truly believe that **snacking should be an experience—one that
            excites your taste buds while nourishing your body**. With
            Tamakhana, we’re bringing you **a perfect balance of taste and
            health**, so you never have to compromise. We hope you love our fox
            nuts as much as we do, and we can’t wait for you to join us on this
            **delicious, crunchy, and wholesome journey!**
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
