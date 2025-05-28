import '../App.css';
import Header from '../components/Navigation/Header';
import Sidebar from '../components/Navigation/Sidebar';
import Dashboard from '../components/Navigation/Dashboard';

const Main = () => {
  return (
    <div className="flex h-screen bg-gray-300">
      <Sidebar />

      {/* Main Panel */}
      <div className="flex-1 flex flex-col rounded-lg m-2">
        <Header />

        <Dashboard />
      </div>
    </div>
  );
};

export default Main;
