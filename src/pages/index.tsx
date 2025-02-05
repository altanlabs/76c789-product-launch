import CountdownTimer from '@/components/blocks/CountdownTimer';
import SignupForm from '@/components/blocks/SignupForm';
import TestimonialCard from '@/components/blocks/TestimonialCard';

const ProductLaunch = () => {
  // Set launch date to 30 days from now
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const testimonials = [
    {
      content: "This product has completely transformed how I work. Can't wait for the full release!",
      author: "Sarah Johnson",
      role: "Product Designer",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      content: "The beta version already exceeded my expectations. This is going to be a game-changer.",
      author: "Michael Chen",
      role: "Tech Lead",
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      content: "Incredibly intuitive and powerful. Looking forward to the launch!",
      author: "Emma Davis",
      role: "Marketing Director",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Future of <span className="text-primary">Innovation</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get ready for a revolutionary product that will transform the way you work.
          Sign up now for exclusive early access.
        </p>
        <div className="max-w-md mx-auto mb-12">
          <SignupForm />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Launching In</h2>
        <div className="max-w-lg mx-auto">
          <CountdownTimer date={launchDate} />
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Product Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img 
              src="https://placehold.co/600x400/png" 
              alt="Product preview 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img 
              src="https://placehold.co/600x400/png" 
              alt="Product preview 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Experience unprecedented speed and efficiency</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Secure</h3>
            <p className="text-muted-foreground">Bank-grade security for your peace of mind</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Customizable</h3>
            <p className="text-muted-foreground">Tailor the experience to your needs</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">What Beta Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Be Among the First</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Don't miss out on the opportunity to be part of something revolutionary.
          Sign up now for early access and exclusive benefits.
        </p>
        <div className="max-w-md mx-auto">
          <SignupForm />
        </div>
      </section>
    </div>
  );
};

export default ProductLaunch;