import './App.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import AuthButtons from './components/AuthButtons';
import AddExpensesButton from './components/AddExpensesButton';
import FetchExpensesButton from './components/FetchExpensesButton';

const data = [
  { name: 'Food', value: 400 },
  { name: 'Rent', value: 800 },
  { name: 'Transport', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline text-white">Expenses Chart</h1>
        <AuthButtons />
        <AddExpensesButton />
        <FetchExpensesButton />
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </header>
    </div>
  );
}

export default App;
