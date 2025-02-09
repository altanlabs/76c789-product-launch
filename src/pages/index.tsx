import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountdownTimer from '@/components/blocks/CountdownTimer';
import SignupForm from '@/components/blocks/SignupForm';
import TestimonialCard from '@/components/blocks/TestimonialCard';

const ProductLaunch = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Set launch date to 30 days from now
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const testimonials = [
    {
      content: "The sound quality is incredible. The spatial audio feature makes you feel like you're in a concert hall.",
      author: "Sarah Johnson",
      role: "Audio Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      content: "As a smart home enthusiast, this is the missing piece I've been waiting for. The integration is seamless.",
      author: "Michael Chen",
      role: "Tech Reviewer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      content: "The design is stunning, and the voice recognition is the most accurate I've ever tested.",
      author: "Emma Davis",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Fixed Countdown Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800"
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center items-center gap-4">
            <span className="text-sm font-medium text-zinc-400">Launch in:</span>
            <CountdownTimer date={launchDate} />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black"
          />
          <img 
            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        <div className="container relative mx-auto px-4 z-10">
          <div className="text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                Echo Sphere
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto">
                Experience sound like never before with our next-generation smart speaker.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="max-w-md mx-auto"
            >
              <SignupForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="relative py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100" data-aos="fade-up">
            Experience the Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-2xl overflow-hidden border border-zinc-800" data-aos="fade-right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80" 
                  alt="Echo Sphere Front View"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800" data-aos="fade-left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80" 
                  alt="Echo Sphere Lifestyle"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100" data-aos="fade-up">
            Revolutionary Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
                title: "360° Spatial Audio",
                description: "Room-filling sound that adapts to your space"
              },
              {
                icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
                title: "AI Voice Recognition",
                description: "Understands context and natural language"
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Smart Home Hub",
                description: "Controls all your smart devices effortlessly"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-800">
                  <svg className="w-10 h-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-zinc-100">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-32 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-zinc-100" data-aos="fade-up">
            Early Access Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold mb-6 text-zinc-100">Join the Revolution</h2>
            <p className="text-xl text-zinc-400 mb-8">
              Be among the first to experience the future of sound. 
              Early access members receive exclusive benefits and special pricing.
            </p>
            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunch;