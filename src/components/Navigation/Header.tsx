import AuthButtons from '../../components/AuthButtons';

const Header = () => {
  return (
    <header className="bg-blue-100 shadow p-4 flex items-center rounded-t-lg">
      <h1 className="text-3xl font-bold text-gray-800">Expenses Dashboard</h1>
      <AuthButtons />
    </header>
  );
};

export default Header;
