import Logo from './logo/logo';
import Search from './search/search';
import Calendar from './calendar/calendar';
import Notifications from './notifications/notifications';
import Profile from './profile/profile';

export default function TopBar() {
  return (
    <header className="flex items-center justify-between mx-5 my-5">
      <div>
        <Logo />
      </div>
      <div>
        <Search />
      </div>
      <div className="flex justify-between items-center w-[30vw] gap-5">
        <Calendar />
        <Notifications />
        <Profile />
      </div>
    </header>
  );
}
