import { useAppContext } from '../context/AppContext';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

/**
 * Wrapper of PieChart component that pass down data from the expensesData state property
 */

const ExpensesChart = () => {
  const { state } = useAppContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="h-96 flex justify-center items-center">
        <PieChart width={300} height={300}>
          <Pie
            data={state.expenses.expensesData}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
          >
            {state.expenses.expensesData.map((entry: any, index: number) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={state.expenses.expensesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensesChart;
