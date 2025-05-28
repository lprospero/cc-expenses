import { useAppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

/**
 * Wrapper of PieChart component that pass down data from the expensesData state property
 */

const ExpensesChart = () => {
  const { state } = useAppContext();
  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie data={state.expenses.expensesData} dataKey='value' nameKey='name' outerRadius={100} label>
          {state.expenses.expensesData.map((entry : any, index : number) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpensesChart;
