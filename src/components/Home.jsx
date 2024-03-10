import Achievements from './pageComp/Achievements.jsx';
import DashBoard from './pageComp/DashBoard.jsx';
import PerMonth from './pageComp/PerMonth.jsx';
import ProgressBar from './pageComp/ProgressBar.jsx';
import SideBar from './pageComp/SideBar.jsx';
import TaskComp from './pageComp/TaskComp.jsx';
import TaskTable from './pageComp/TaskTable.jsx';
import TimeComp from './pageComp/TimeComp.jsx';
import UserCard from './pageComp/UserCard.jsx';
import Card from './templateComp/Card.jsx';

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
          <div className="lg:flex md:flex">
            <PerMonth />
            <Achievements />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Home;
