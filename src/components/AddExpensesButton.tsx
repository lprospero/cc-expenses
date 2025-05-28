import { ExpenseTransaction } from '../interfaces/Expenses';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

/**
 * Button responsible for adding expense transaction objects to the Firebase database
 */

const AddExpensesButton = () => {
  const { state } = useAppContext();
  const [loading, setLoading] = useState(false);
  const transactions : ExpenseTransaction[] = [
    { VND: 'Amazon', AMT: 89.99, DTE: '2025-04-10' },
    { VND: 'Starbucks', AMT: 5.25, DTE: '2025-04-11' },
    { VND: 'Apple Store', AMT: 1299.0, DTE: '2025-04-15' },
    { VND: 'Uber', AMT: 17.5, DTE: '2025-04-16' },
    { VND: 'Netflix', AMT: 19.99, DTE: '2025-04-17' },
    { VND: 'Woolworths', AMT: 65.4, DTE: '2025-04-18' },
    { VND: 'JB Hi-Fi', AMT: 249.0, DTE: '2025-04-19' },
    { VND: 'Coles', AMT: 42.75, DTE: '2025-04-20' },
    { VND: 'Spotify', AMT: 10.99, DTE: '2025-04-21' },
    { VND: 'Kmart', AMT: 36.0, DTE: '2025-04-22' },
  ];

  const handleAddExpense = async () => {
    setLoading(true);
    try {
      for (const tx of transactions) {
        await addDoc(collection(db, 'expenses'), tx);
      }
      alert('All transactions uploaded successfully!');
    } catch (error) {
      console.error('Error adding transactions:', error);
      alert('Failed to add transactions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddExpense}
        className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded"
        disabled={!state.auth.user?.name || loading}
      >
        {loading ? 'Adding...' : 'Add Expenses'}
      </button>
      <pre className='bg-gray-700 text-white mt-4 whitespace-pre-wrap p-4 rounded'>{JSON.stringify(transactions)}</pre>
    </div>
  );
};

export default AddExpensesButton;
