import React from 'react'
import lowSugar from '../assets/lowsugar.jpg'
import cholestrolFree from '../assets/CholestrolFree.jpg'
import highInCalcium from '../assets/highInCalcium.jpg'
import richInFibre from '../assets/richInFibre.jpg'
import richiniron from '../assets/richiniron.jpg'
import zeroTransFat from '../assets/zeroTransFat.jpg'

const policies = [
  {
    img: cholestrolFree,
    title: "Cholestrol Free",
    desc: "We offer Cholestrol free Makhanas."
  },
  {
    img: highInCalcium,
    title: "High In Calcium",
    desc: "Our Makhanas offer high calcium properties."
  },
  {
    img: richInFibre,
    title: "Rich In Fibre",
    desc: "Our product is rich in fibre making it the best product out there."
  },
  {
    img: lowSugar,
    title: "Almost NO Sugar",
    desc: "Our product is a low sugar product."
  },
  {
    img: richiniron,
    title: "Rich In Iron",
    desc: "Our product provides high mineral value."
  },
  {
    img: zeroTransFat,
    title: "Zero Trans Fat",
    desc: "Our product contains absolutely 0% trans fat."
  }
]

const OurPolicy = () => {
  return (
    <section className="bg-white py-16 px-4 rounded-3xl drop-shadow-[8px_8px_0px_#000]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-2">Why Choose Our Makhanas?</h2>
        <p className="text-center text-gray-500 mb-10 text-lg">We're committed to bringing you the highest quality makhanas with unmatched freshness and taste.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <img src={policy.img} alt={policy.title} className="w-16 h-16 object-contain mb-4 rounded-full border border-gray-100 shadow" />
              <h3 className="text-xl font-bold text-rose-600 mb-2">{policy.title}</h3>
              <p className="text-gray-500">{policy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPolicy
