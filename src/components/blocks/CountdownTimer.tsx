import Countdown from 'react-countdown';
import { Card } from '@/components/ui/card';

interface CountdownTimerProps {
  date: Date;
}

const CountdownTimer = ({ date }: CountdownTimerProps) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span>Launch time!</span>;
    }
    
    return (
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="flex flex-col">
          <span className="text-4xl font-bold">{days}</span>
          <span className="text-sm text-muted-foreground">Days</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-sm text-muted-foreground">Hours</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-sm text-muted-foreground">Minutes</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-sm text-muted-foreground">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <Card className="p-6">
      <Countdown date={date} renderer={renderer} />
    </Card>
  );
};

export default CountdownTimer;