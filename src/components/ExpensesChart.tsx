import { ExpensesSummaryData } from '../interfaces/Expenses';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

/**
 * Wrapper of PieChart component that pass down data from the expensesData state property
 *
 * @param {ExpensesSummaryData[]} data Expense data used by the PieChart component
 */

const ExpensesChart : React.FC<{data: ExpensesSummaryData[]}> = ({ data } : { data : ExpensesSummaryData[] }) => {
  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((entry : any, index : number) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <pre className="bg-gray-700 text-white mt-4 whitespace-pre-wrap p-4 rounded">{data ? JSON.stringify(data) : null}</pre>
    </div>
  );
};

export default ExpensesChart;
