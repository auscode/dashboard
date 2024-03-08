import Card from '../templateComp/Card';
import { Dots } from '../images/images';

const DashBoard = () => {
  return (
    <>
      <Card className="flex bg-white justify-between items-center">
        <div>
          <div className="font-bold text-2xl">Dashboard</div>
          <div>Mon, Nov 6, 2023 - Mon, Nov 12, 2023 </div>
        </div>
        <div className="bg-[#c38cfa] rounded-lg p-2">
          <div className="flex gap-4 justify-center items-center">
            <div className="text-semibold">Total Balance</div>
            <div className="text-xl">
              <img src={Dots} className="h-6" alt="dots" />
            </div>
          </div>
          <div className="text-lg font-bold">$ 23,651</div>
        </div>
      </Card>
    </>
  );
};

export default DashBoard;
