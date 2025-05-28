import Main from './components/Main';
import { AppProvider, useAppContext } from './context/AppContext';

const App = () => {
  const { state } = useAppContext();
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
