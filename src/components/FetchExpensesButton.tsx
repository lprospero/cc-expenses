import { useAppContext } from '../context/AppContext';
import { OpenAIExpenseObject } from '../interfaces/Expenses';
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const DEFAULT_RESPONSE : OpenAIExpenseObject[] = [
  {
    "TYP": "Technology & Electronics",
    "VND": ["Amazon", "Apple Store", "JB Hi-Fi"],
    "AMT": 1637.99,
    "MON": "2025-04"
  },
  {
    "TYP": "Food & Drink",
    "VND": ["Starbucks"],
    "AMT": 5.25,
    "MON": "2025-04"
  },
  {
    "TYP": "Transport",
    "VND": ["Uber"],
    "AMT": 17.5,
    "MON": "2025-04"
  },
  {
    "TYP": "Entertainment & Subscriptions",
    "VND": ["Netflix", "Spotify"],
    "AMT": 30.98,
    "MON": "2025-04"
  },
  {
    "TYP": "Groceries",
    "VND": ["Woolworths", "Coles", "Kmart"],
    "AMT": 144.15,
    "MON": "2025-04"
  }
];

/**
 * Sends a prompt containing the fetched data from the Firebase database
 * Expects a summarised version of the expense transactions as an object
 */

const FetchExpensesButton = () => {
  const { state, dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);

  const fetchExpenses = async () => {
    try {
      const expensesCollection = collection(db, 'expenses');
      const snapshot = await getDocs(expensesCollection);
      const expensesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const prompt = `
Compress the following expenses JSON data by grouping it by expenseType. 
For each group, provide a JSON object with these properties:
- TYP: the category name
- VND: an array of unique vendor names in that category
- AMT: sum of all amounts in that category
- MON: month of the expenses (assume all belong to the same month in the data)

Here is the data:
${JSON.stringify(expensesList, null, 2)}

Respond only with the JSON array.
      `;
      console.log(`Prompt: \n ${prompt}`);

      setLoading(true);

      try {
        const res = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });

        const data = await res.json();
        console.log(JSON.stringify(data));
        // TODO: Might need to parse this when actual response comes
        const expensesData = data.choices?.[0]?.message?.content as OpenAIExpenseObject[] || DEFAULT_RESPONSE;
        dispatch({ type: 'SET_DATA', payload: expensesData });
      } catch (error: any) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching expenses: ', error);
    }
  };

  return (
    <div>
      <button
        onClick={fetchExpenses}
        className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded"
        disabled={!state.auth.user?.name || loading}
      >
        {loading ? 'Loading...' : 'Fetch Expenses'}
      </button>
    </div>
  );
};

export default FetchExpensesButton;
