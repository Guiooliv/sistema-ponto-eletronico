# Sistema de Ponto Eletrônico

Um sistema web para registro e gerenciamento de ponto eletrônico de funcionários, desenvolvido com React, Node.js, Prisma e Neon DB. 

O objetivo é permitir que usuários registrem seus horários de entrada, retornando o horario de saida e que administradores gerenciem esses usuários e suas cargas horárias.

## Funcionalidades
* Autenticação de usuários via API. 
* Hashing seguro de senhas utilizando `bcrypt`.
* Distinção de papéis (`ADMIN`, `USER`) definida no banco de dados.
* Cadastro de novos usuários via API (`POST /api/register`). *Nota: Atualmente requer o uso de uma ferramenta como Postman.*

## Tecnologias
* **Frontend:** React (Vite), JavaScript, Tailwind CSS, `Workspace` API
* **Backend:** Node.js, Express.js, CORS
* **Banco de Dados:** Neon DB (PostgreSQL serverless)
* **ORM:** Prisma
* **Autenticação:** bcrypt