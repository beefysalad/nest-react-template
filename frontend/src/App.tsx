import AppLayout from './components/AppLayout';
import { AppProvider } from './providers/AppProviders';
import { AppRoute } from './routes/AppRoute';

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <AppRoute />
      </AppLayout>
    </AppProvider>
  );
}
export default App;
