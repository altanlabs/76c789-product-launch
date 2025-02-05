import CountdownTimer from '@/components/blocks/CountdownTimer';
import SignupForm from '@/components/blocks/SignupForm';
import TestimonialCard from '@/components/blocks/TestimonialCard';

const ProductLaunch = () => {
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-white/80 backdrop-blur-sm"></div>
          <img 
            src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Echo Sphere
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience sound like never before with our next-generation smart speaker.
              Where artificial intelligence meets acoustic perfection.
            </p>
            <div className="max-w-md mx-auto mb-12">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Launch Countdown</h2>
        <div className="max-w-lg mx-auto">
          <CountdownTimer date={launchDate} />
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Experience the Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80" 
                alt="Echo Sphere Front View"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1613685303213-1f2a7215a0e9?auto=format&fit=crop&q=80" 
                alt="Echo Sphere Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Revolutionary Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">360° Spatial Audio</h3>
              <p className="text-gray-600">Room-filling sound that adapts to your space</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Voice Recognition</h3>
              <p className="text-gray-600">Understands context and natural language</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Smart Home Hub</h3>
              <p className="text-gray-600">Controls all your smart devices effortlessly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Early Access Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Join the Revolution</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be among the first to experience the future of sound. 
              Early access members receive exclusive benefits and special pricing.
            </p>
            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLaunch;