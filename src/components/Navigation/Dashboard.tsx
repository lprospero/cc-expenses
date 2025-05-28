import ExpensesChart from '../../components/ExpensesChart';
import AddExpensesButton from '../../components/AddExpensesButton';
import FetchExpensesButton from '../../components/FetchExpensesButton';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { state } = useAppContext();
  return (
    <main className="flex-1 p-6 bg-white overflow-auto rounded-b-lg space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Visualisation</h2>
        {state.expenses.expensesData.length > 0 && (
          <div className="h-96">
            <ExpensesChart />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AddExpensesButton />
        <FetchExpensesButton />
      </div>
    </main>
  );
};

export default Dashboard;
