# Contador de Dias

Este é um projeto simples de um contador de dias construído com React, Vite e Tailwind CSS. A aplicação conta quantos dias se passaram desde o início ou desde a última reinicialização, permitindo que o usuário atualize manualmente o contador e exiba o recorde de dias.

## Funcionalidades

- Contagem automática de dias a cada 24 horas.
- Possibilidade de atualizar manualmente o contador de dias.
- Exibição do recorde de dias.
- Interface estilizada com Tailwind CSS.
- Gradiente de fundo animado.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Instalação

1. Clone este repositório:

   ```sh
   git clone https://github.com/O-Farias/Day-Counter.git
   cd counter
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

2. Abra seu navegador e vá para `http://localhost:3000` para ver a aplicação em execução.

## Estrutura do Projeto

- `src/`
  - `components/`
    - `Counter.jsx`: Componente principal da aplicação.
  - `index.css`: Arquivo de estilo principal.
  - `main.jsx`: Arquivo de entrada principal.
- `public/`
  - `favicon.ico`: Favicon da página.
- `index.html`: Arquivo HTML principal.

## Personalização

- Para alterar as cores do gradiente de fundo, edite o arquivo `index.css` e modifique a seção `body`:

  ```css
  body {
    @apply text-white;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(270deg, #6a11cb, #2575fc, #6a11cb);
    background-size: 600% 600%;
    animation: gradientAnimation 16s ease infinite;
  }
  ```

- Para alterar os textos ou a lógica do contador, edite o componente `Counter.jsx`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.
