# Projeto Template - Typescript, TyperOrm e Docker-Postgres
Project template with a misc of configuration to Typescript projects

Utilizacao de migrations do typeORM para criacao e alteracao de tabelas em banco de dados MySQL.

1)Preparacao dos meus arquivos model
2)Geracao das migrations atraves do comando:
> npm run typeorm migration:generate -- -n CriaTabelas
3)Execucao das migrations atraves do comando:
> npm run typeorm migration:run



-----
Running:

0) Container Docker - Postgres rodando
1) npm run dev


Modelagem a partir do schema abaixo.
![Cenario_Class](https://user-images.githubusercontent.com/36780203/138616618-3dc795eb-adfe-4265-8707-a6b4a65b5413.jpg)


-------
Docker

Utilizacao de Docker para containerizacao do postgres.


