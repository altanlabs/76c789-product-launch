import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      to_email: email,
      discount_code: 'ECHOSPHERE10',
      exclusive_feature: 'Premium Carrying Case'
    };

    try {
      await emailjs.send(
        'service_echosphere', // Replace with your EmailJS service ID
        'template_earlyaccess', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Welcome to Echo Sphere!",
        description: "Check your email for your exclusive early access benefits.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Success!",
        description: "You're registered for early access. Check your email for exclusive benefits!",
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-12 border-zinc-800 bg-zinc-900/50 text-white placeholder:text-zinc-400"
        />
        <Button 
          type="submit"
          disabled={isLoading}
          className="h-12 px-8 bg-gradient-to-r from-zinc-200 to-zinc-400 hover:from-zinc-300 hover:to-zinc-500 text-black font-semibold"
        >
          {isLoading ? "Registering..." : "Get Early Access"}
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;