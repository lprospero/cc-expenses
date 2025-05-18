import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const DEFAULT_RESPONSE = [
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

const FetchExpensesButton = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchExpenses = async () => {
    try {
      const colRef = collection(db, 'expenses');
      const snapshot = await getDocs(colRef);
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
        // TODO: Might need to parse this when actual response comes
        setResponse(data.choices?.[0]?.message?.content || DEFAULT_RESPONSE);
      } catch (error: any) {
        setResponse('Error: ' + error.message);
      } finally {
        setLoading(false);
      }

      console.log('Fetched expenses:', expensesList);
    } catch (error) {
      console.error('Error fetching expenses: ', error);
    }
  };

  return (
    <div>
      <button
        onClick={fetchExpenses}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Expenses'}
      </button>

      <pre className="mt-4 whitespace-pre-wrap bg-gray-700 p-4 rounded">{response ? JSON.stringify(response) : null}</pre>
    </div>
  );
};

export default FetchExpensesButton;
