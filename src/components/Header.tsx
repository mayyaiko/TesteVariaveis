function Header() {
  const logoUrl = import.meta.env.VITE_LOGO_URL;
  const schoolName = import.meta.env.VITE_SCHOOL_NAME;

  return (
    <header style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
      <img src={logoUrl} alt="Logo da escola" style={{ height: '80px', marginRight: '1rem' }} />
      <h2>{schoolName}</h2>
    </header>
  );
}

export default Header;
