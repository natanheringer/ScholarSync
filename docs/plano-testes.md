# Plano de Testes - ScholarSync

## 1. Objetivo
Validar autenticacao, CRUD de eventos e inscricoes para garantir que os fluxos principais do sistema funcionem conforme os requisitos.

## 2. Escopo
Dentro do escopo:
- login de usuario;
- cadastro de usuario;
- listagem, criacao, edicao e exclusao de eventos;
- inscricao em evento;
- regras de bloqueio por duplicidade e lotacao.

Fora do escopo:
- testes de carga/performance;
- seguranca avancada (JWT, pentest);
- observabilidade e hardening de infraestrutura.

## 3. Itens testados
- Backend API Spring Boot (`backend-java`)
- Frontend React participante (`frontend-react`)
- Frontend Angular admin (`admin-angular`)
- Suite E2E Playwright (`e2e`)

## 4. Ferramentas
- Unitario backend: JUnit 5 + Mockito
- API/integracao backend: Spring Boot Test + MockMvc
- Unitario frontend React: Vitest + Testing Library
- E2E: Playwright
- Gestao de codigo: Git/GitHub

## 5. Estrategia de testes
- Testes unitarios: validacao de regras isoladas (capacidade, duplicidade, validacao de evento).
- Testes de API: validacao de endpoints, codigos HTTP e fluxos principais.
- Testes E2E: validacao de navegacao basica e paginas principais.
- Ordem de execucao: unitarios -> API -> E2E.

## 6. Criterios de entrada
- codigo compilando;
- dependencias instaladas;
- banco H2 inicializado automaticamente no backend;
- massa minima criada via `DataLoader`.

## 7. Criterios de saida
- todos os testes criticos (login, CRUD, inscricao) executados;
- sem falhas bloqueantes abertas;
- evidencias registradas em `docs/evidencias.md`.

## 8. Criterios de aceitacao
- unitarios backend sem falhas;
- testes de API com status esperados;
- E2E cobrindo ao menos login e navegacao de eventos;
- casos de teste documentados e rastreaveis.

## 9. Papeis e responsabilidades
| Papel | Responsabilidade |
|---|---|
| Desenvolvimento backend | Implementar regras de negocio e endpoints |
| Desenvolvimento frontend | Implementar interfaces de participante e admin |
| QA/Testes | Definir casos, executar suites e registrar evidencias |
| Documentacao | Manter visao, historias, plano, relatorio final e rastreabilidade |

## 10. Riscos e mitigacoes
| Risco | Impacto | Mitigacao |
|---|---|---|
| Ambiente sem rede para baixar dependencias | Medio | Executar com acesso externo autorizado e registrar logs |
| Falha de configuracao de testes frontend | Medio | Corrigir ambiente de teste (jsdom/config) e reexecutar |
| E2E sem servicos ativos | Medio | Subir backend/frontend antes da execucao E2E |
