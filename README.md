# Sales Proposal 

## Estrutura do Projeto

```bash
project/
│
├── src/
│   ├── components/             # Componentes da pagina
│   │     ├── atoms/            # Menores componentes Ex.: input, label
│   │     ├── molecules/        # Conjunto de atoms
│   │     ├── organisms/        # Conjuntos de molecules
│   │     ├── pages/            # Pagina web do sistema
│   │     └── templates/        # Parte da pagina em comum com outras paginas
│   ├── hooks/                  # Hooks que sera usado em múltiplos locais
│   ├── routes/                 # Controladores e rotas
│   ├── services/               # Serviços externos EX.: consulta a apis
│   ├── store/                  # Variáveis e funções reativas que sera usado em múltiplos locais
│   ├── styles/                 # Estilos scss globais
│   └── index.tsx               # Arquivo principal react
├── .gitignore                  # Lista o que é para o git ignorar
└── package.json                # Dependências do Node.js
```

## Funcionalidades
- **Login de usuário**: Login de usuário usando JWT.
- **Gerenciamento de cliente**: Cadastro de clientes, listagem, pesquisa por id, pesquisa por email
- **Gerenciamento de produtos**: Cadastro de produtos, listagem, pesquisa por id, pesquisa por nome
- **Gerenciamento de serviços**: Cadastro de serviços, listagem, pesquisa por id, pesquisa por nome
- **Gerenciamento de proposta de venda**: Cadastro de de proposta de venda, listagem, pesquisa por id, envio via email para o cliente

## Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:

- Nodejs
- Docker Compose

## Como Rodar o Projeto

### 1) **Clone o repositório**
```bash
git clone https://github.com/thiago-m/sales_proposal.git
cd sales_proposal
```

### 2) **Execute o back-end e o container com o banco de dados**
Espera-se que o back-end esteja rodando na porta 3000.

### 4) **Acesse a aplicação**

A aplicação estará rodando em ```http://localhost``` na porta ```3001```.

## Scripts Disponíveis
- ```npm start```: Compila o código e inicia a aplicação.
- ```npm run build```: Compila o código TypeScript para JavaScript.
