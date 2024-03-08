import Achievements from './pageComp/Achievements';
import DashBoard from './pageComp/DashBoard';
import PerMonth from './pageComp/PerMonth';
import ProgressBar from './pageComp/ProgressBar';
import SideBar from './pageComp/SideBar';
import TaskComp from './pageComp/TaskComp';
import TaskTable from './pageComp/TaskTable';
import TimeComp from './pageComp/TimeComp';
import UserCard from './pageComp/UserCard';
import Card from './templateComp/Card';

const Home = () => {
  return (
    <>
      <Card className="flex flex-wrap bg-gray-100">
        <div className="w-full md:w-[33%] lg:w-[18.2%]">
          <SideBar />
        </div>
        <div className="w-full md:w-[67%] lg:w-[56.8%]">
          <DashBoard />
          <TimeComp />
          <TaskTable />
        </div>
        <div className="w-full md:w-full lg:w-[25%]">
          <UserCard />
          <TaskComp />
          <ProgressBar />
          <div className="flex">
            <PerMonth />
            <Achievements />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Home;
