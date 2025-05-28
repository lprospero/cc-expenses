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

const COLORS = [
  '#4E79A7', // Blue
  '#F28E2B', // Orange
  '#E15759', // Red
  '#76B7B2', // Teal
  '#59A14F', // Green
  '#EDC949', // Yellow
  '#AF7AA1', // Purple
  '#FF9DA7', // Pink
  '#9C755F', // Brown
  '#BAB0AC', // Gray
];

/**
 * Wrapper of PieChart component that displays the transactions data
 * Includes a Bar Chart that displays the summarised expenses data
 */

const ExpensesChart = () => {
  const { state } = useAppContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {state.expenses.transactionsData.length > 0 && (
        <div className="h-96 flex justify-center items-center">
          <PieChart width={300} height={300}>
            <Pie
              data={state.expenses.transactionsData}
              dataKey="value"
              nameKey="name"
              outerRadius={150}
            >
              {state.expenses.transactionsData.map((entry: any, index: number) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      )}
      {state.expenses.expensesData.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={state.expenses.expensesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ExpensesChart;
