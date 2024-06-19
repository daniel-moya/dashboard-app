import { QueryClient, QueryClientProvider } from 'react-query';
import { Dashboard } from './pages';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
