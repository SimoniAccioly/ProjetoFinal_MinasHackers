# .:Minas Hackers:.

![SiteCapa](https://user-images.githubusercontent.com/67556668/101963786-56d53280-3bee-11eb-9c46-08611000804d.png)

## 🌟Descrição

API desenvolvida como Projeto Final para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).

Para visualizar a descrição completa do projeto, siga o [Projeto](/assets/ProjetoPDF.pdf)

> O projeto Minas Hackers surgiu com o objetivo de ser o ponto focal de mulheres que buscam conhecimento em tecnologia.
>
> Diante da gradual crescente de eventos voltados para mulheres na tecnologia (:raised_hands:) e aliado a correria nossa de cada dia, acabamos perdendo boas indicações de eventos, cursos, seminários que poderiam agregar ao nosso crescimento profissional.
>
> Com isso nasceu o Minas Hackers, o site pra você Mina de TI que quer crescer profissionalmente, que procura bons conteúdos, não quer perder nadica, e ainda pode ajudar outras minas a ficarem ligadinhas também!

# Sumário

=================

<!--ts-->

* [Objetivos](#objetivos)
* [Aprendizados](#aprendizados)
* [Arquitetura Model View Controller](#arquitetura)
* [Instalação](#instalação)
  * [Pre Requisitos](#pré-requisitos)
  * [Rodando o Back End](#rodando-o-back-end)
  * [Tecnologias](#tecnologias)
  * [Features](#features)
  * [Rotas](#rotas)
* [Modelo com campos obrigatórios para teste: Postman ou Insomnia](#modelo-com-campos-obrigatórios-para-teste)
* [Agradecimentos](#agradecimentos)

<!--te-->

## 🔸Objetivos

- Buscar, cadastrar, atualizar e deletar eventos cadastrados no banco de dados através da API
- Fazer login para fazer cadastro e atualizações nos eventos

## 🔸Aprendizados

Para a execução do projeto final, desenvolvemos uma API fundamentada no modelo que utiliza quatro operações básicas, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DELETAR). Dessa forma podemos trabalhar com as informações dispostas em um banco de dados NoSQL. Para acessar e tratar as operações, o código foi organizado em uma Arquitetura embasada no sistema Model View Controller (MVC).

## 🔸Arquitetura

```
Arquitetura MVC
    |
    \--📂 backEnd
        |   README.md  
        |   .env
        |   .gitignore
        |   package-lock.json
        |   package.json
        |   server.js
        \--📂 node_modules
        \--📂 assets
        \--📂src
	    |
            📂---controller
            |   events-controler.js
            |	login-controller.js
            |	search-controller.js
            📂---models
            |	eventSchema.js
            |	usersSchema.js
            📂---routes
            |	events-route.js
            |	index-route.js
            |	login-route.js
            |_	search-route.js    
          
```

Clique para visualizar o desenho da [Arquitetura](/assets/arquitetura.png)

## 🔸Instalação

* Para realizar download do projeto, siga as instruções:

### 🔸Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o database NoSQL [Mongodb](https://www.mongodb.com/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🔸Rodando o Back End

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/SimoniAccioly/projetoFinal_minasHackers>

# Acesse a pasta do projeto no terminal/cmd
$ cd projetoFinal_minasHackers
$ cd backEnd

# Instale as dependências
$ npm install
$ npm instal mongoose

# Execute o servidor
$ npm start

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
# Mongo conectado em mongodb://localhost:27017/minasHackers
```

* Modifique `.env` para receber as variáveis de ambiente e substitua para que seu servidor funcione adequadamente

Para acessar via Heroku, acesse o [](https://)

* Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## 🛠Tecnologias

Para a consturição do projeto, as seguintes tecnologiasforam utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [heroku](https://dashboard.heroku.com/apps)

### 🔸Features

Funcionalidades da aplicação

- [X] Login - POST
- [X] Cadastrar evento no site = POST
- [X] Apagar evento no site - DELETE
- [X] Buscar eventos - GET
- [X] Busca por ID - GET
- [X] Update em campo específico - PATCH

### 🔸Rotas

* local: http://localhost:8080
* MongoDB: [mongodb://localhost:27017/minasHackers]()
* Heroku: https://minas-hackers.herokuapp.com/

#### Retorna página home com apresentação

* [X] "/"  -  title: ".:Bem vindo ao Minas Hackers:."  version: "1.0.0"

#### Criação de login

- [X] "/login"

#### Retorna todos os dados do banco de dados de eventos

- [X] "/events"

#### Criar um novo evento

- [X] "/events/create"

#### Retorna um evento específico por ID

- [X] "events/:id"

#### Deleta cadastro ou postagem por id específico

- [X] "events/:id"

#### Atualiza qualquer campo escolhido do cadastro por id específico

- [X] "/events/:id"

#### Busca por um ou mais campos

- [X] "/search"

## 🔸Modelo com campos obrigatórios para teste

### 👩 Nova usuária

{
"name": "Simoni",
"email": "simoni@gmail.com",
"dataDeNascimento": "1989-03-08",
"genre": "feminino"
}

#### 📅 Novo Evento

{
"registeredBy": "id do usuario cadastrado",
"eventName:" "Reprograma",
"eventDate": "12/12/2020",
"category": "back end",
"subcategory": "curso",
"mainTheme": "node",
"costs": "gratuito"
}

### 🚧 Projeto em Construção

Autenticação;
Aprovação;
Front-end;

# Agradecimentos

No início desse ano me peguei com um bebê lindo, uma casa maravilhosa (pra mim é, rs), um casamento maravilhoso, porém uma frustração profissional.
Apesar de ter me formado em um curso que gostava, de ter passado por lugares que me fizeram crescer, eu não me encontrava.
Quando pensei em entrar para a tecnologia, deparei com a barreira do medo, do meio masculino, de não conseguir, até que encontrei as comunidades de mulheres na tecnologia.
Encontrar Mulheres reais que não só mostravam um caminho a seguir mas te davam oportunidades, me fizeram chegar até aqui!
Meu agradecimento hoje vai além, além da família maravilhosa que tenho e que me dá total rede de apoio que mais preciso, vai além do marido que amo e que me apoia, hoje meu agradecimento é a essa rede linda de mulheres maravilhosas que a Tecnologia me trouxe, a Silvia Coelho que abriu as portas e me mostrou o caminho a seguir, a Reprograma por dar oportunidade a mulheres como eu, a Jô, a Ceci, as professoras maravilhosas que passaram pela nossa jornada, e as 34 mulheres que junto comigo cresceram nessa caminhada.
Esse projeto Minas Hackers é o meu jeito de agradecer a comunidade, e ajudar outras mulheres como eu, que só precisam de um empurrãozinho, e que através do site poderá saber por onde começar, quais oportunidades não pode perder e além disso ter a sensação de ter pertencer à uma comunidade, de fazer parte de um lugar que mulheres gigantes antes de mim conquistaram.
Gratidão... 💜

```

```
