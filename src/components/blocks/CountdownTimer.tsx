import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  date: Date;
}

const CountdownTimer = ({ date }: CountdownTimerProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-2xl font-bold text-blue-600"
        >
          Available Now!
        </motion.div>
      );
    }
    
    const timeUnits = [
      { value: days, label: 'Days' },
      { value: hours, label: 'Hours' },
      { value: minutes, label: 'Min' },
      { value: seconds, label: 'Sec' }
    ];

    return (
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-4 gap-3"
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-md flex items-center justify-center mb-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <motion.span 
                  key={unit.value}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  {unit.value}
                </motion.span>
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl"></div>
              </div>
              <motion.span 
                className="text-xs font-medium text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {unit.label}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-b from-white to-blue-50/50 shadow-lg backdrop-blur-sm border border-white/50">
      <Countdown date={date} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;