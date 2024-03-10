import Card from '../templateComp/Card';
import TableComp from '../templateComp/TableComp';

const TaskTable = () => {
  return (
    <>
      <Card className=" bg-white pb-8">
        <div className="flex justify-between my-4">
          <div>
            <div className="mb-2 font-bold text-3xl">Last Tasks</div>
            <div className="lg:flex gap-2 justify-start items-center">
              <div className="font-bold text-lg">8 total,</div>
              <span className="text-sm"> proceed to reolve them</span>
            </div>
          </div>
          <div className="lg:flex md:flex gap-10">
            <div>
              <div className="lg:mb-2 sm:mb-1 font-bold text-3xl text-center">5</div>
              <div className="text-md text-center">Done</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-3xl text-center">3</div>
              <div className="text-md text-center">In progress</div>
            </div>
          </div>
        </div>

        <div>
          <TableComp />
        </div>
      </Card>
    </>
  );
};
export default TaskTable;
