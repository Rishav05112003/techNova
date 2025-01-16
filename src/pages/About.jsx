import React from 'react';
import { Users, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl font-bold mb-4">About TechNova</h1>
          <p className="text-xl max-w-2xl">
            We're a team of passionate technologists dedicated to transforming businesses
            through innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 dark:bg-[#3E2C41]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-indigo-600 dark:text-[#261C2C] mr-3" />
                <h2 className="text-2xl dark:text-white font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-white">
                To empower businesses with cutting-edge technology solutions that drive
                growth, efficiency, and innovation. We're committed to delivering
                excellence in every project we undertake.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-indigo-600 dark:text-[#261C2C] mr-3" />
                <h2 className="text-2xl dark:text-white font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-white">
                To be the leading technology partner for businesses worldwide,
                known for our innovation, reliability, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 dark:bg-[#261C2C] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center dark:text-white mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-[#3E2C41] rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold dark:text-white mb-2">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-[#6E85B2] mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-white">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const team = [
  {
    name: "David Chen",
    position: "CEO & Founder",
    bio: "With over 15 years of experience in tech leadership, David leads our vision for innovation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sarah Thompson",
    position: "CTO",
    bio: "Sarah brings expertise in AI and cloud architecture, driving our technical excellence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Michael Rodriguez",
    position: "Head of Innovation",
    bio: "Michael leads our R&D initiatives, focusing on emerging technologies and solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  }
];

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    description: "We put our clients first, ensuring their success through dedicated partnership and support."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that drive real value."
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code to client service."
  }
];

export default About;