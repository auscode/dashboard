import Card from '../templateComp/Card';
import { Network } from '../images/images';

const PerMonth = () => {
  return (
    <>
      <Card className="bg-black w-full">
        <div className="bg-black text-white rounded-lg">
          <div className="text-semibold text-lg mb-2">Per month</div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-bold text-3xl">9+</div>
              <div className="text-lg">Project</div>
            </div>
            <div>
              <img src={Network} className="h-10 invert" alt="network" />
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div>
              <div className="text-bold text-3xl">23+</div>
              <div className="text-lg">Tasks</div>
            </div>
            <div>
              <img src={Network} className="h-10 invert" alt="network" />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default PerMonth;
