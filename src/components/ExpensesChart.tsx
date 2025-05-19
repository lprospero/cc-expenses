import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Food', value: 400 },
  { name: 'Rent', value: 800 },
  { name: 'Transport', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ExpensesChart = () => {
  return (
    <div>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpensesChart;