import Card from '../templateComp/Card.jsx';
import { Img1, Img2, Img3, Img4 } from '../images/images.js';

const Achievements = () => {
  return (
    <>
      <Card className=" bg-white w-full">
        <div className="flex gap-1 justify-between items-center mb-1">
          <div className="rounded-lg bg-gray-200">
            <img src={Img1} className="" alt="ac1" />
          </div>
          <div className="rounded-lg bg-gray-200">
            <img src={Img2} className="" alt="ac2" />
          </div>
        </div>
        <div className="flex gap-1 justify-between items-center">
          <div className="rounded-lg bg-gray-200">
            <img src={Img3} className="" alt="ac3" />
          </div>
          <div className="rounded-lg bg-gray-200">
            <img src={Img4} className="" alt="ac4" />
          </div>
        </div>
      </Card>
    </>
  );
};
export default Achievements;
