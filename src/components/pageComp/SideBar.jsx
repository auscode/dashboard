import { useState } from 'react';
import Card from '../templateComp/Card';
import {
  Dash,
  Timesheets,
  Activity,
  Teams,
  Settings,
  Insight,
  Management,
  Report,
} from '../images/images';

const NavItem = ({ icon, text, arrow, notif }) => {
  const iconMap = {
    dashboard: Dash,
    timesheets: Timesheets,
    activity: Activity,
    insights: Insight,
    managements: Management,
    reports: Report,
    team: Teams,
    settings: Settings,
  };

  const IconComponent = iconMap[icon];

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      className={`flex gap-4 mb-2 hover:text-white hover:bg-black rounded-full p-3`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        src={IconComponent}
        className={`h-6 ${hover ? 'invert' : ''}`}
        alt={`${text} icon`}
      />
      <div>{text}</div>
      {notif && <div className="bg-[#c38cfa] px-3 rounded-full">New</div>}
      {arrow && <div className="ml-auto"> {'>'} </div>}
    </div>
  );
};

const SideBar = () => {
  return (
    <>
      <Card className="bg-white">
        <div className="mb-4 p-1 wordwrap">
          <div className="text-[250%] font-bold">OutStaff</div>
        </div>
        <div className="text-xl">
          <NavItem icon="dashboard" text="DashBoard" />
          <NavItem icon="timesheets" text="TimeSheets" arrow />
          <NavItem icon="activity" text="Activity" arrow />
          <NavItem icon="insights" text="Insights" notif />
          <NavItem icon="managements" text="Managements" arrow />
          <NavItem icon="reports" text="Reports" arrow />
          <NavItem icon="team" text="Team Settings" />
        </div>
      </Card>
    </>
  );
};

export default SideBar;
// p-1 text-2xl font-bold md:text-4xl lg:text-6xl
