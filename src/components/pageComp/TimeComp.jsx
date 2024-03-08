import Card from '../templateComp/Card';

const TimeComp = () => {
  return (
    <>
      <Card className="bg-white p-4">
        <div className="flex justify-between mb-6">
          <div className="text-xl font-bold">Time</div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-2xl font-semibold text-blue-400">5:17</div>
            <div className="text-blue-400">today</div>
          </div>
        </div>
        <div className="flex gap-[7%] text-center">
          <div className="w-full">
            <div className="mb-4">7:13</div>
            <div className="mb-2 h-40 rounded-lg bg-blue-200 pt-[80%]">
              <div className="items-bottom h-full rounded-lg bg-blue-400"></div>
            </div>
            <div>Mon</div>
          </div>
          <div className="w-full">
            <div className="mb-4">8:05</div>
            <div className="mb-2 h-40 rounded-xl bg-blue-200">
              <div className="items-bottom h-full rounded-xl bg-blue-400"></div>
            </div>
            <div>Tue</div>
          </div>
          <div className="w-full">
            <div className="mb-4">7:45</div>
            <div className="mb-2 h-40 rounded-xl bg-blue-200 pt-[40%]">
              <div className="items-bottom h-full rounded-xl bg-blue-400"></div>
            </div>
            <div>Wed</div>
          </div>
          <div className="w-full">
            <div className="mb-4">5:17</div>
            <div className="mb-2 h-40 rounded-xl bg-blue-200 pt-[120%]">
              <div className="items-bottom h-full rounded-xl bg-blue-400"></div>
            </div>
            <div>Thu</div>
          </div>
          <div className="w-full">
            <div className="mb-4">0:00</div>
            <div className="mb-2 h-40 rounded-xl bg-blue-200">
              {/* <!-- <div className="items-bottom h-full rounded-xl bg-blue-400"></div> --> */}
            </div>
            <div>Fri</div>
          </div>
          <div className="w-full">
            <div className="mb-4">0:00</div>
            <div className="mb-2 h-40 rounded-xl bg-blue-200">
              {/* <!-- <div className="items-bottom h-full rounded-xl bg-blue-400"></div> --> */}
            </div>
            <div>Sat</div>
          </div>
          <div className="w-full">
            <div className="mb-4">0:00</div>
            <div className="mb-2 h-40 rounded-xl bg-blue-200">
              {/* <!-- <div className="items-bottom h-full rounded-xl bg-blue-400"></div> --> */}
            </div>
            <div>Sun</div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default TimeComp;
