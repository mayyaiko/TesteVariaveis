import Header from './components/Header';
import Home from './pages/Home';
import { ClienteConfigContext } from './context/ClienteConfigContext';
import { clienteConfig } from './config/clienteConfig';
import './styles/global.css';

function App() {
  return (
    <ClienteConfigContext.Provider value={clienteConfig}>
      <div style={{ minHeight: '100vh' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '1rem' }}>
          <Header />
          <Home />
        </div>
      </div>
    </ClienteConfigContext.Provider>
  );
}

export default App;
