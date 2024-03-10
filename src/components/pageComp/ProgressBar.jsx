import Card from '../templateComp/Card.jsx';
import ProgressBarComp from '../templateComp/ProgressBarComp.jsx';
import { Dots } from '../images/images.js';

const ProgressBar = () => {
  const progressData = [
    {
      percentage: 64,
      outerColor: '#D0A2F7',
      innerColor: '#F1EAFF',
      text: 'Weekly Activity',
    },
    {
      percentage: 80,
      outerColor: '#3282B8',
      innerColor: '#BBE1FA',
      text: 'Worked this week',
    },
    {
      percentage: 77,
      outerColor: '#89CFF3',
      innerColor: '#ECF2FF',
      text: 'Focus time',
    },
  ];

  return (
    <>
      <Card className="bg-white">
        <div className="flex bg-white justify-between items-center mb-6">
          <div className="text-2xl font-bold">Progress</div>
          <div>
            <img src={Dots} className="h-6" alt="dots" />
          </div>
        </div>
        <div className="lg:flex justify-between items-center">
          {progressData.map((data, index) => (
            <ProgressBarComp
              key={index}
              progressPercentage={data.percentage}
              innerColor={data.innerColor}
              outerColor={data.outerColor}
              text={data.text}
            />
          ))}
        </div>
      </Card>
    </>
  );
};

export default ProgressBar;
