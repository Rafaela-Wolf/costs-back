# Costs Backend

Este repositório contém a API do projeto **Costs**, que serve como backend para gerenciar projetos e serviços. Ele foi construído usando o `json-server` para simular uma API RESTful e foi configurado para permitir o gerenciamento de dados de projetos e serviços de forma rápida e eficiente.

## Tecnologias utilizadas

- **json-server**: Utilizado para simular uma API RESTful de maneira simples.
- **CORS**: Habilita a comunicação entre o front-end e o back-end, permitindo requisições de diferentes origens.

## Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Rafaela-Wolf/costs-back.git

2. Entre no diretório do projeto:
    ```bash
    cd costs-back

3. Instale as dependências:
    ```bash 
    npm install

4. Inicie o servidor JSON:
    ```bash
    npm start

Isso irá iniciar o servidor em http://localhost:3000. A API estará acessível nesse endereço, e você pode utilizar o backend para manipular dados de projetos e serviços. Caso queira rodar o servidor em uma porta diferente, você pode configurar isso criando um arquivo .env com o seguinte conteúdo: **PORT=3001**

## Endpoints da API

### Projetos
- `GET /projects`: Retorna todos os projetos.
- `GET /projects/:id`: Retorna um projeto específico pelo seu id.
- `POST /projects`: Cria um novo projeto.
- `PATCH /projects/:id`: Atualiza um projeto existente.
- `DELETE /projects/:id`: Exclui um projeto.

### Serviços
- `GET /services`: Retorna todos os serviços.
- `POST /services`: Cria um novo serviço.
- `DELETE /services/:id`: Exclui um serviço específico pelo seu id.

## Configuração de Deployment (Vercel)

O projeto está configurado para ser deployado no Vercel. O arquivo `vercel.json` está configurado para rodar a aplicação com o Node.js, utilizando o arquivo `index.js`.