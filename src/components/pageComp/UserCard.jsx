import Card from '../templateComp/Card';
import { Search, Mail, Cube, Profile } from '../images/images';

const UserCard = () => {
  return (
    <>
      <Card className="flex bg-white justify-between items-center">
        <div className="flex gap-2">
          <div className="bg-gray-200 p-1 rounded-md">
            <img src={Search} className="h-6" alt="search" />
          </div>
          <div className="bg-gray-200 p-1 rounded-md">
            <img src={Mail} className="h-6" alt="search" />
          </div>
          <div className="bg-gray-200 p-1 rounded-md">
            <img src={Cube} className="h-6" alt="search" />
          </div>
        </div>
        <div className="flex">
          <div>
            <select>
              <option value="harshit">Harshit</option>
            </select>
          </div>
          <div className="rounded-full bg-gray-300 border-1">
            <img src={Profile} className="h-6" alt="profile pic" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default UserCard;
