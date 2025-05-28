import ExpensesChart from '../../components/ExpensesChart';
import AddTransactionsButton from '../../components/AddTransactionsButton';
import SummariseExpensesButton from '../../components/SummariseExpensesButton';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { state } = useAppContext();
  return (
    <main className="flex-1 p-6 bg-white overflow-auto rounded-b-lg space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Visualisation</h2>
        <div>
          <ExpensesChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AddTransactionsButton />
        <SummariseExpensesButton />
      </div>
    </main>
  );
};

export default Dashboard;
