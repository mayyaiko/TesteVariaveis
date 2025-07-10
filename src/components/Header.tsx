import { useClienteConfig } from '../context/ClienteConfigContext';

function Header() {
  const { logoUrl, name, primaryColor } = useClienteConfig();

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 0',
      borderBottom: '1px solid #ccc', 
      backgroundColor: primaryColor || '#fff',
      color: '#000'
    }}>
      <img src={logoUrl} alt="Logo" style={{ height: '60px' }} />
      <h2>{name}</h2>
    </header>
  );
}

export default Header;
