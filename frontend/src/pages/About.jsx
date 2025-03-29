// import React from "react";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import NewsletterBox from "../components/NewsletterBox";
// import Navbar from "../components/Navbar";
// import makhane from '../assets/makhane_cor6.jpg'
// import "./Home.css";

// const About = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className="container text-2xl text-center pt-8 border-t">
//         <Title text1={"ABOUT"} text2={"US"} />
//       </div>

//       <div className="container my-10 flex flex-col md:flex-row gap-16">
//         <img
//           className="w-full rounded-2xl md:max-w-[450px]"
//           src={makhane}
//           alt=""
//         />
//         <div className="container flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
//           <p>
//             TAMAKHANA was born out of a passion for healthy snacking and a
//             commitment to redefining the way people enjoy nutritious, guilt-free
//             treats. Our journey began with a simple vision: to bring the
//             goodness of premium-quality fox nuts to snack lovers everywhere.
//             Since our inception, we have carefully sourced the finest fox nuts,
//             ensuring they are light, crunchy, and packed with natural goodness.
//             With a focus on quality, taste, and health, TAMAKHANA offers a range
//             of deliciously flavored fox nuts that cater to every palate. Whether
//             you're craving a savory bite or a lightly spiced treat, our snacks
//             are the perfect blend of flavor and nutrition, making healthy eating
//             both convenient and enjoyable.
//           </p>
//           <p>
//           Since our inception, we've been dedicated to crafting a diverse selection of premium fox nut snacks that cater to every taste and preference. From classic roasted flavors to bold, innovative seasonings, we offer a delicious range of wholesome, crunchy treats made from the finest ingredients, ensuring a perfect balance of taste and nutrition in every bite.
//           </p>
//           <b className="text-gray-800">Our Mission</b>
//           <p>
//           Our mission at Tamakhana is to redefine snacking with a perfect blend of taste, health, and convenience. We're committed to offering a seamless experience, from selecting the finest fox nuts to delivering delicious, guilt-free snacks that fuel your day with every bite. With a focus on quality, flavor, and nutrition, we're here to make healthy snacking a delightful experience for everyone.
//           </p>
//         </div>
//       </div>

//       <div className="container text-xl py-4">
//         <Title text1={"WHY"} text2={"CHOOSE US"} />
//       </div>

//       <div className="container flex flex-col md:flex-row text-sm mb-20">
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Quality Assurance:</b>
//           <p className=" text-gray-600">
//             We meticulously select each product to ensure it meets our
//             stringent quality standards.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Convenience:</b>
//           <p className=" text-gray-600">
//             With our user-friendly interface and hassle-free ordering process,
//             shopping has never been easier.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Exceptional Customer Service:</b>
//           <p className=" text-gray-600">
//             Our team of dedicated professionals is here to assist you the way,
//             ensuring your satisfaction is our top priority.
//           </p>
//         </div>
//       </div>

//       <div className="container">
//       <NewsletterBox />
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import Navbar from "../components/Navbar.jsx"
// import RotatingCircles from "../useful_components/RotatingCircles.jsx";
// import makhana from "../assets/Untitled-1.png"

// const AboutUs = () => {
//   return (
//     <div className="bg-blue-200 min-h-screen">
//       {/* Header */}
//       <Navbar/>
//       <header className="bg-[#A500A5] text-white text-center py-2 my-4 text-sm font-semibold">
//         ✨ High Protein, 0-2g Sugar, and 75,000+ 5-Star Reviews ✨
//       </header>

//       {/* Navbar */}

//       {/* <nav className="flex justify-between items-center px-10 py-4">
//         <h1 className="text-3xl font-bold text-[#200066]">MAGIC SPOON</h1>
//         <ul className="flex gap-6 text-[#200066] font-semibold text-sm">
//           <li>CEREAL</li>
//           <li>TREATS</li>
//           <li className="relative">
//             GRANOLA <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded-full ml-1">NEW</span>
//           </li>
//           <li className="relative">
//             BUNDLE BUILDER <span className="bg-yellow-400 text-xs px-2 py-0.5 rounded-full ml-1">BESTSELLER</span>
//           </li>
//           <li>SHOP ALL</li>
//           <li>ABOUT US</li>
//         </ul>
//         <div className="flex gap-4">
//           <span className="bg-[#200066] text-white p-2 rounded-full cursor-pointer">👤</span>
//           <span className="bg-[#200066] text-white p-2 rounded-full cursor-pointer">🎩</span>
//         </div>
//       </nav> */}
//       {/* <Navbar /> */}

//       {/* About Section */}
//       <div className="flex justify-center mt-10">
//         <div className="bg-white p-10 rounded-lg shadow-md w-3/4 relative">
//           {/* Profile Images */}
//           <div className="absolute left-[-60px] top-8 flex flex-col gap-6">

//             <div className="w-20 h-20 bg-red-400 rounded-full flex items-center justify-center">
//               {/* Placeholder Avatar */}
//               <span className="text-white text-2xl font-bold">👨‍🦰</span>
//             </div>
//           </div>

//           {/* Content */}
//           <h2 className="text-[#200066] text-2xl font-bold">Hi, we’re Greg and Gabi, co-founders of Magic Spoon.</h2>
//           <p className="text-[#200066] mt-4 text-base">
//             We’ve been friends for ten years: met at college, lived together, even started a previous business together
//             (you could call us “cereal” entrepreneurs…). We both grew up eating cereal every morning for breakfast,
//             binging on the sugary crunch of the classic brands and then crashing in the afternoon when we were supposed
//             to be at our most productive.
//           </p>
//           <p className="text-[#200066] mt-4 text-base">
//             Now that we’re adults, we’ve searched for years for a cereal that has the same addictive quality but
//             actually fuels us. We've turned up nothing.
//           </p>

//           {/* Floating Cereal Pieces */}
//           <div>
//             <RotatingCircles numCircles={100} imageUrl={makhana}/>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

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
