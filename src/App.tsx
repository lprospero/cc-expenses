import './App.css'
import Main from './components/Main';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
