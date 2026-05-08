# ScholarSync

## Descricao do projeto
ScholarSync e uma plataforma para gestao de eventos academicos. O sistema permite autenticacao de usuarios, administracao de eventos e inscricao de participantes.

## Objetivo
Facilitar o controle de eventos educacionais com regras de negocio claras, como bloqueio de inscricao duplicada e validacao de lotacao.

## Funcionalidades principais
- Cadastro e login de usuarios
- CRUD de eventos
- Inscricao em eventos
- Consulta de inscricoes do usuario
- Bloqueio de inscricao duplicada
- Bloqueio de inscricao em evento lotado

## Tecnologias utilizadas
### Frontend
- React (participante)
- Angular (admin)

### Backend
- Java 17
- Spring Boot

### Banco de dados
- H2 (em memoria)

### Ferramentas de teste
- JUnit 5 / Mockito / MockMvc
- Vitest
- Playwright

## Como executar
- Backend: `cd backend-java && mvn spring-boot:run`
- Testes backend: `cd backend-java && mvn test`
- React: `cd frontend-react && npm install && npm run dev`
- Angular: `cd admin-angular && npm install && npm start`
- E2E: `cd e2e && npm install && npx playwright test`

## Integrantes

Grupo 4: 
- Natan
- Yves
- Hiago
- Thales
- Nicolas
