import Header from '../components/Header';

function Home() {
  const clientName = import.meta.env.VITE_CLIENT_NAME;
  const primaryColor = import.meta.env.VITE_PRIMARY_COLOR;

  return (
    <div
      style={{
        backgroundColor: primaryColor,
        minHeight: '100vh',
        padding: '2rem',
        color: '#000',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <Header />
      <main>
        <h1>Bem-vindo à {clientName}!</h1>
        <p>Este é um sistema personalizado com variáveis de ambiente.</p>
      </main>
    </div>
  );
}

export default Home;
