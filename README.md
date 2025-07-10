# 🧩 Cliente Personalizado com Vite + React + TypeScript

Este projeto é um template básico e profissional de um sistema personalizável por **cliente**, usando **variáveis de ambiente** para trocar dinamicamente nome, logotipo e cor principal da aplicação. Ideal para projetos multiempresa/multicliente com visual customizado por instância.

---

## 🚀 Funcionalidades

- Personalização automática via `.env`
- Estrutura profissional com separação de responsabilidades
- Estilo moderno com CSS puro
- Context API para fornecer configurações globalmente
- Página inicial com dados dinâmicos do cliente

---

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Context API](https://reactjs.org/docs/context.html)
- CSS puro

---

## 📁 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_CLIENT_NAME='Nome do Cliente'
VITE_PRIMARY_COLOR='#228B22'
VITE_LOGO_URL='/logos/jurassica.png'
```

⚠️ **Importante:** use aspas nas variáveis, especialmente em cores com `#`.

---

## 📦 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# 2. Instale as dependências
npm install

# 3. Crie o arquivo .env (veja o modelo acima)

# 4. Execute a aplicação
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## 📂 Estrutura do projeto

```
src/
├─ components/             # Componentes reutilizáveis (ex: Header)
├─ config/                 # Carregamento de dados do cliente
├─ context/                # Context API para configurações globais
├─ pages/                  # Páginas principais (ex: Home)
├─ styles/                 # Estilos globais (global.css)
├─ App.tsx                 # Componente raiz
├─ main.tsx                # Ponto de entrada
```

---

## 💡 Possíveis melhorias futuras

- Sistema multicliente com seleção via rota (ex: `/cliente/a`)
- Página de login
- Dashboard com dados reais
- Integração com banco/API
- Alternância de tema (claro/escuro)

---

## 🧑‍💻 Desenvolvido por

Mayara Aiko – [LinkedIn](https://www.linkedin.com/in/mayara-aiko-teixeira-watanabe-291790256/) | [GitHub](https://github.com/mayyaiko)
