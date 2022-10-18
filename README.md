# Trybesmith #

## O Projeto ##

Neste projeto criei uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Por meio dessa aplicação, desenvolvida seguindo um modelo de arquitetura em camadas (Models, Service e Controllers), é possível realizar as operações básicas em um banco de dados, como Criação, Leitura, Atualização e Exclusão (CRUD). Para o banco de dados utilizei o MySQL e para autenticação e autorização de usuários utilizei o JSON Web Token.


## Tecnologias utilizadas ##
- Node.js
- Express.js
- TypeScript
- MySQL


## Endpoints ##

Login:
- POST /login

Users:
- POST /users

Products: 
- POST /products
- GET /products

Orders:
- POST /orders
- GET /orders
