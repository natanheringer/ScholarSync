# Documento de Visao - ScholarSync

## 1. Introducao
ScholarSync e um sistema academico com foco em gestao de eventos educacionais.
O projeto foi desenvolvido para a disciplina de Teste de Software e aplica praticas de testes unitarios, API e E2E.

## 2. Objetivo do sistema
Disponibilizar uma plataforma simples para:
- autenticacao de usuarios;
- cadastro e administracao de eventos;
- inscricao de participantes em eventos;
- consulta de inscricoes do usuario.

## 3. Problema
Em atividades academicas, eventos e inscricoes costumam ser controlados de forma manual.
Isso gera retrabalho, erros de lotacao e falta de rastreabilidade das inscricoes.

## 4. Solucao proposta
Centralizar o fluxo em uma aplicacao com frontend, backend e banco de dados:
- frontend React para participantes;
- frontend Angular para area administrativa;
- backend Java Spring Boot com API REST;
- banco H2 em memoria para execucao local.

## 5. Publico-alvo
- estudantes e participantes de eventos academicos;
- administradores responsaveis por criar e gerenciar eventos.

## 6. Stakeholders
| Stakeholder | Interesse |
|---|---|
| Participante | Consultar eventos e se inscrever |
| Administrador | Gerenciar CRUD de eventos |
| Equipe do projeto | Desenvolver, testar e documentar |
| Professor da disciplina | Avaliar processo e resultados de teste |

## 7. Funcionalidades principais
| Codigo | Funcionalidade |
|---|---|
| F01 | Cadastro de usuario |
| F02 | Login |
| F03 | Listagem de eventos |
| F04 | Criacao de evento |
| F05 | Edicao de evento |
| F06 | Exclusao de evento |
| F07 | Inscricao em evento com regras de lotacao e duplicidade |

## 8. Requisitos funcionais
| Codigo | Requisito |
|---|---|
| RF01 | Permitir cadastro de usuario participante |
| RF02 | Permitir autenticacao por email e senha |
| RF03 | Permitir consultar eventos |
| RF04 | Permitir criar, editar e excluir eventos |
| RF05 | Permitir inscricao de usuario em evento |
| RF06 | Impedir inscricao duplicada |
| RF07 | Impedir inscricao quando evento estiver lotado |

## 9. Requisitos nao funcionais
| Codigo | Requisito |
|---|---|
| RNF01 | API REST com respostas HTTP coerentes |
| RNF02 | Interface web acessivel em navegadores modernos |
| RNF03 | Estrutura separada por camadas (controller, service, repository) |
| RNF04 | Cobertura de testes unitarios, API e E2E basico |

## 10. Consideracoes finais
A proposta atende ao escopo minimo da disciplina: login, CRUD, interface de usuario, backend com API e banco de dados, com documentacao e testes relacionados.
