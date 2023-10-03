# Poké-Next

#### Bem-vindo ao Poké-Next, o projeto tem como finalidade aventurar-se no universo de Pokémon, trazendo assim, uma listagem de todos os pokémons (através da busca de dados do [PokéAPI](https://pokeapi.co/docs/v2)) e também oferecer informações de cada pokémon (peso, altura, tipos).

## Como funciona

A aplicação irá renderizar todo os pokémons disponíveis através da API [PokéAPI](https://pokeapi.co/docs/v2), todas os pokémons estarão em listagem. O usuário poderá selecionar um pokémon e, logo após a  este evento de seleção, o mesmo irá ser redirecionado para uma página em que irá ser exibido as informações "básicas" do pokémon escolhido, tais como peso, altura e seu tipo. O usuário também pode filtrar pelo o nome do pokémon, para que diretamente possa busca pelo o seu pokémon favorito.

O projeto foi construído através do [NextJS](https://nextjs.org/docs) um framework que possui a mesma estrutura de construção do [React](https://react.dev/), inicialmente na sua versão 13, já a responsabilidade da estilização ficou por conta do [Sass](https://sass-lang.com/). Este projeto usa [next/font](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Nunito, uma fonte personalizada do Google.


<details>
  <summary><b>Consumo de dados (API)</b></summary>
  <br/>
  
  <p>Todos os dados exibidos da aplicação foi consumido atráves do <a href="https://pokeapi.co/docs/v2">PokéAPI</a>, a API é gratuito e aberto para uso, porém ela é somente feita para consumo.</p>
</details>

<details>
  <summary><b>Stacks</b></summary>
  <br/>

  - [`NextJS (versão 13+)`](https://nextjs.org/docs)
  - [`Sass`](https://sass-lang.com/)
  - [`TypeScript`](https://www.typescriptlang.org/docs/)
  - [`Mui Core`](https://mui.com/core/)
  - [`React-icons`](https://react-icons.github.io/react-icons/)
</details>

<details>
  <summary><b>Instalação do projeto</b></summary>
  <br />


  1. Clone o repositório

  - Use o comando: `git@github.com:PedroPDIN/poke-next.git`.
  - Entre na pasta do repositório que você acabou de clonar:
      - `cd poke-next`

  2. Instale as dependências

  - Use o comando: `npm install`. 

  3. Logo após isso basta inicia-lo através do servidor de desenvolvimento.

  - use o comando: `npm run dev` 

  4. (opcional) Ou você pode incia-lo em produção.

  - usando o comando: `npm run start` (Lembrando que o projeto deve ter passado pelo o processo de build).
</details>

## Deploy

Este projeto está hospedada na plataforma da [Vercel](https://vercel.com/docs). Com isso, você pode acessar a aplicação clicando [AQUI](https://poke-next-lac.vercel.app/).
