import React from 'react';
import { Monitor, Cloud, Brain, Database, Shield, Phone } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-[#3E2C41] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive technology solutions tailored to your business needs.
            We combine innovation with expertise to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-[#261C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#3E2C41] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <service.icon className="h-12 w-12 text-[#5C527F] mb-4" />
                <h3 className="text-xl dark:text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-white mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center dark:text-white text-gray-600">
                      <span className="h-1.5 w-1.5 bg-[#261C2C] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-[#3E2C41] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold dark:text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#261C2C] hover:bg-[#5C527F] text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web solutions built with modern technologies and best practices.",
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "Custom CMS Development"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your business needs.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Serverless Architecture",
      "24/7 Monitoring"
    ]
  },
  {
    icon: Brain,
    title: "AI/ML Services",
    description: "Intelligent solutions powered by advanced machine learning algorithms.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Custom ML Models"
    ]
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights.",
    features: [
      "Big Data Processing",
      "Real-time Analytics",
      "Data Visualization",
      "Business Intelligence"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Solutions",
      "Security Training"
    ]
  },
  {
    icon: Phone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "Mobile Strategy"
    ]
  }
];

export default Services;