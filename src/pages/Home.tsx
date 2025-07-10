import { useClienteConfig } from '../context/ClienteConfigContext';

function Home() {
  const { name } = useClienteConfig();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao sistema do cliente {name}!</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>📊 Resumo de hoje</h2>
        <ul>
          <li>Pedidos realizados: <strong>34</strong></li>
          <li>Usuários ativos: <strong>12</strong></li>
          <li>Tickets abertos: <strong>3</strong></li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>📌 Avisos importantes</h2>
        <ul>
          <li>🚧 Manutenção programada para dia 15 às 22h.</li>
          <li>🎉 Novo recurso de relatórios já disponível!</li>
          <li>💡 Dica: personalize mais campos do seu cliente em <em>Configurações</em>.</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>👥 Equipe do cliente</h2>
        <ul>
          <li>Ana Clara - Coordenadora de Atendimento</li>
          <li>João Pedro - Analista Técnico</li>
          <li>Rafaela - Financeiro</li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
