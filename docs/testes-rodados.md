# Testes Rodados

Data/hora da execucao: 2026-05-07 22:10:14 -03:00

## Resultado consolidado
- Backend (`mvn test`): PASSOU
- Frontend (`npm.cmd test -- --run`): PASSOU
- E2E (`npm.cmd test`): FALHOU (servicos locais indisponiveis)

## Logs completos (detalhados)
- Pasta da execucao: `C:\Users\rsa_m\OneDrive\Documentos\ScholarSync\docs\logs\20260507-220838`
- Log backend: `C:\Users\rsa_m\OneDrive\Documentos\ScholarSync\docs\logs\20260507-220838\backend-mvn-test.log`
- Log frontend: `C:\Users\rsa_m\OneDrive\Documentos\ScholarSync\docs\logs\20260507-220838\frontend-vitest.log`
- Log E2E: `C:\Users\rsa_m\OneDrive\Documentos\ScholarSync\docs\logs\20260507-220838\e2e-playwright.log`
- Log unico consolidado: `C:\Users\rsa_m\OneDrive\Documentos\ScholarSync\docs\logs\20260507-220838\full-test-run.log`

## Observacoes E2E
Falhas por `ERR_CONNECTION_REFUSED` para:
- `http://localhost:5173/login`
- `http://localhost:5173/events`
- `http://localhost:4200/admin/login`

Para passar o E2E, subir antes:
- backend em `http://localhost:8080`
- frontend React em `http://localhost:5173`
- frontend Angular admin em `http://localhost:4200`
