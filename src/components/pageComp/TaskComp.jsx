import Card from '../templateComp/Card.jsx';
import { Wave } from '../images/images.js';

const TaskCamp = () => {
  return (
    <>
      <Card className="bg-white">
        <div className="flex justify-between mb-4">
          <div>
            <div className="text-2xl font-bold">Task</div>
            <div className="text-6xl font-semibold">94%</div>
            <div className="text-semibold text-gray-500">Involvement work</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-1 items-center rounded-lg bg-gray-200 px-1">
              <div>To do</div>
              <div className="bg-violet-200 rounded-lg px-1 m-1">54%</div>
            </div>
            <div className="flex justify-between gap-1 items-center rounded-lg bg-gray-200 px-1">
              <div>In progress</div>
              <div className="bg-blue-200 rounded-lg px-1 m-1">84%</div>
            </div>
            <div className="flex justify-between gap-1 items-center rounded-lg bg-gray-200 px-1">
              <div>Finish date</div>
              <div className="bg-green-200 rounded-lg px-1 m-1">78%</div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={Wave} alt="My SVG" />
          </div>
          <div className="flex gap-2 justify-between border-t-2 mb-2 border-dashed">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </Card>
    </>
  );
};
export default TaskCamp;
