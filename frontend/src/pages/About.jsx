import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Navbar from "../components/Navbar";
import makhane from '../assets/makhane_cor6.jpg'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={makhane}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            TAMAKHANA was born out of a passion for healthy snacking and a
            commitment to redefining the way people enjoy nutritious, guilt-free
            treats. Our journey began with a simple vision: to bring the
            goodness of premium-quality fox nuts to snack lovers everywhere.
            Since our inception, we have carefully sourced the finest fox nuts,
            ensuring they are light, crunchy, and packed with natural goodness.
            With a focus on quality, taste, and health, TAMAKHANA offers a range
            of deliciously flavored fox nuts that cater to every palate. Whether
            you're craving a savory bite or a lightly spiced treat, our snacks
            are the perfect blend of flavor and nutrition, making healthy eating
            both convenient and enjoyable.
          </p>
          <p>
          Since our inception, we've been dedicated to crafting a diverse selection of premium fox nut snacks that cater to every taste and preference. From classic roasted flavors to bold, innovative seasonings, we offer a delicious range of wholesome, crunchy treats made from the finest ingredients, ensuring a perfect balance of taste and nutrition in every bite.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
          Our mission at Tamakhana is to redefine snacking with a perfect blend of taste, health, and convenience. We're committed to offering a seamless experience, from selecting the finest fox nuts to delivering delicious, guilt-free snacks that fuel your day with every bite. With a focus on quality, flavor, and nutrition, we're here to make healthy snacking a delightful experience for everyone.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
