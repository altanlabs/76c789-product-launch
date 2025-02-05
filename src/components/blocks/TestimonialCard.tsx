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
    <Card className="p-6 h-full flex flex-col">
      <div className="flex-1">
        <p className="text-muted-foreground italic">{content}</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;