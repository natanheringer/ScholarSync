# Evidencias de Teste

## 1. Execucoes realizadas
Data de referencia: 2026-05-07

### 1.1 Backend - unitarios e API (Spring Boot)
Comando executado:
```bash
cd backend-java
mvn test
```

Resultado:
- Status: SUCESSO
- Total: 9 testes
- Falhas: 0
- Erros: 0
- Suites:
  - `ApiIntegrationTest`: 5 testes
  - `EventServiceTest`: 4 testes

Trecho relevante do log:
- `Tests run: 9, Failures: 0, Errors: 0, Skipped: 0`
- `BUILD SUCCESS`

### 1.2 Frontend React - unitario (Vitest)
Comando executado:
```bash
cd frontend-react
npm.cmd test -- --run
```

Resultado da primeira execucao:
- Falha de ambiente: `document is not defined`.

Acao corretiva aplicada:
- Refatoracao do teste para renderizacao server-side (`react-dom/server`), removendo dependencia de DOM no ambiente Node.

Resultado apos correcao:
- Status: SUCESSO
- Arquivo: `src/LoginPage.test.jsx`
- Testes: 1 passou

### 1.3 E2E Playwright
Suite existente em `e2e/tests/basic.spec.ts`.

Pre-condicao para execucao:
- backend ativo em `http://localhost:8080`
- frontend React ativo em `http://localhost:5173`
- frontend Angular admin ativo em `http://localhost:4200`

Observacao:
- Nao executado nesta rodada automatica por dependencia de servicos ativos simultaneamente.

## 2. Bugs identificados
| ID | Descricao | Severidade | Status |
|---|---|---|---|
| BUG-001 | Teste React falhava em ambiente Node por uso direto de DOM. | Media | Corrigido |

## 3. Correcoes realizadas
| ID | Correcao | Arquivo |
|---|---|---|
| FIX-001 | Ajuste do teste para `react-dom/server`, sem dependencias extras de ambiente. | `frontend-react/src/LoginPage.test.jsx` |

## 4. Relatorios/artefatos
- Log do Maven (`mvn test`) com sucesso total.
- Log do Vitest apos correcao com teste passando.
- Casos de teste atualizados em `docs/casos-teste.md`.
