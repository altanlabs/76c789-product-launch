import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard = ({ content, author, role, image }: TestimonialProps) => {
  return (
    <Card className="p-8 h-full flex flex-col bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex-1">
        <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 text-lg leading-relaxed italic">{content}</p>
      </div>
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image} />
          <AvatarFallback className="bg-blue-100 text-blue-600">{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;