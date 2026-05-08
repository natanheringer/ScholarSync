# Relatorio Final - ScholarSync

## 1. Introducao
Este relatorio apresenta o desenvolvimento e a validacao do sistema ScholarSync, projeto academico da disciplina de Teste de Software.
O foco foi aplicar praticas de teste em um sistema com autenticacao, CRUD e regras de negocio.

## 2. Descricao do sistema
O ScholarSync e uma plataforma para gestao de eventos academicos.

Arquitetura:
- Frontend React (participante)
- Frontend Angular (admin)
- Backend Java Spring Boot (API REST)
- Banco H2 em memoria

Funcionalidades principais:
- login e cadastro de usuario;
- CRUD de eventos;
- inscricao em eventos;
- bloqueio de inscricao duplicada;
- bloqueio de inscricao em evento lotado.

## 3. Planejamento de testes
O planejamento esta detalhado em `docs/plano-testes.md` e inclui:
- objetivo, escopo e fora de escopo;
- estrategia por nivel de teste (unitario, API e E2E);
- ferramentas adotadas;
- criterios de entrada e saida;
- papeis e responsabilidades.

## 4. Descricao dos casos de teste
Os casos estao em `docs/casos-teste.md` com identificadores `CT-001` a `CT-010`.
Cada caso contem:
- descricao;
- passos;
- entrada;
- saida esperada;
- criterio de sucesso;
- tipo de teste.

## 5. Resultados das execucoes e evidencias
Resumo da execucao:
- Backend (`mvn test`): 9 testes executados, 0 falhas.
- Frontend React (`vitest`): falha inicial de ambiente corrigida; teste passou apos ajuste.
- E2E Playwright: suite preparada e documentada; requer servicos ativos para execucao completa.

Detalhes completos em `docs/evidencias.md`.

## 6. Conclusao
O sistema atendeu aos requisitos centrais propostos para o trabalho final, com cobertura de testes unitarios, API e E2E basico documentado.
A validacao de regras criticas de negocio (duplicidade e lotacao) foi contemplada.

## 7. Licoes aprendidas
- Aderencia entre documentacao e implementacao evita inconsistencias de avaliacao.
- Testes automatizados ajudam a detectar rapidamente regressao e falhas de ambiente.
- Evidencias objetivas (logs e status) fortalecem a qualidade do relatorio final.

## 8. Link do repositorio
- Repositorio GitHub: https://github.com/natanheringer/ScholarSync
