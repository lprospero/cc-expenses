import { ExpenseData } from '../interfaces/Expenses';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

type Props = {
  data: ExpenseData[];
};

const ExpensesChart : React.FC<Props> = ({ data } : { data : any }) => {
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
