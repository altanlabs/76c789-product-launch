import Countdown from 'react-countdown';
import { Card } from '@/components/ui/card';

interface CountdownTimerProps {
  date: Date;
}

const CountdownTimer = ({ date }: CountdownTimerProps) => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-2xl font-bold text-blue-600">Available Now!</span>;
    }
    
    return (
      <div className="grid grid-cols-4 gap-6 p-2">
        {[
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg flex items-center justify-center mb-2">
              <span className="text-3xl md:text-4xl font-bold text-blue-600">
                {item.value}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="p-6 bg-white border-none shadow-lg">
      <Countdown date={date} renderer={renderer} />
    </Card>
  );
};

export default CountdownTimer;