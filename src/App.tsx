import './App.css';
import Sidebar from './components/Navigation/Sidebar';
import ExpensesChart from './components/ExpensesChart';
import AuthButtons from './components/AuthButtons';
import AddExpensesButton from './components/AddExpensesButton';
import FetchExpensesButton from './components/FetchExpensesButton';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className='flex h-screen bg-gray-300'>
        <Sidebar />

        {/* Main Panel */}
        <div className='flex-1 flex flex-col rounded-lg m-2'>
          {/* Header */}
          <header className='bg-blue-50 shadow p-4 flex items-center rounded-t-lg'>
            <AuthButtons />
          </header>

          {/* Content */}
          <main className='flex-1 p-6 bg-white overflow-auto rounded-b-lg space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex gap-4'>
                <AddExpensesButton />
                <FetchExpensesButton />
              </div>
            </div>

            <div className='bg-white rounded-lg shadow p-4'>
              <h2 className='text-lg font-semibold mb-4'>Visualisation</h2>
              <div className='h-96'>
                <ExpensesChart />
              </div>
            </div>
          </main>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
