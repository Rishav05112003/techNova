import React from "react";
import { ArrowRight, Monitor, Cloud, Brain, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../assets/image_bg.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovating Tomorrow's Technology Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We transform businesses through cutting-edge technology solutions
            and innovative digital strategies.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#6E85B2] hover:bg-[#261C2C] text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-[#261C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">
            Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {
            services.map((service, index) => (
                <div  key = {index} className="p-6 bg-gray-50 dark:bg-[#3E2C41] rounded-lg hover:shadow-lg transition-shadow duration-200">
                <Monitor className="h-12 w-12 text-indigo-600 dark:text-white mb-4" />
                <h3 className="text-xl font-semibold dark:text-white mb-2">{service.name}</h3>
                <p className="text-gray-600 dark:text-white mb-4">
                  {service.text}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-indigo-600 dark:text-[#6E85B2] hover:text-indigo-700"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))
           }
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-[#3E2C41] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl dark:text-white font-bold text-center mb-12">
            Meet Out Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-[#261C2C]  p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-white mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4 dark:text-white">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const testimonials = [
  {
    text: "TechNova transformed our business with their innovative solutions. Their team's expertise and dedication are unmatched.",
    name: "Sarah Johnson",
    position: "CEO, InnovateTech",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    text: "Working with TechNova was a game-changer for our company. Their cloud solutions helped us scale efficiently.",
    name: "Michael Chen",
    position: "CTO, CloudScale",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    text: "The AI solutions provided by TechNova have significantly improved our data analysis capabilities.",
    name: "Emily Rodriguez",
    position: "Data Science Lead, DataFirst",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

const services = [
    {
        name : "Web Development",
        text:"A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
        name : "Mobile App Development",
        text : "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
        name: "Software testing Service",
        text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    }
]

export default Home;






































<div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
<Monitor className="h-12 w-12 text-indigo-600 mb-4" />
<h3 className="text-xl font-semibold mb-2">Web Development</h3>
<p className="text-gray-600 mb-4">
  A Website is an extension of yourself and we can help you to
  express it properly. Your website is your number one marketing
  asset because we live in a digital age.
</p>
<Link
  to="/services"
  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
>
  Learn More <ChevronRight className="ml-1 h-4 w-4" />
</Link>
</div>