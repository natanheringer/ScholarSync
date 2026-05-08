# Historias de Usuario

## HU-001 - Login de usuario
Descricao: como participante, quero fazer login para acessar as funcionalidades do sistema.

Criterios de aceitacao:
- deve autenticar com credenciais validas;
- deve retornar erro com credenciais invalidas;
- deve manter os dados basicos do usuario na sessao local.

BDD:
Dado que o usuario esta cadastrado
Quando informar email e senha validos
Entao deve acessar a tela de eventos.

## HU-002 - Cadastro de usuario
Descricao: como visitante, quero criar uma conta para participar dos eventos.

Criterios de aceitacao:
- deve criar usuario com nome, email e senha;
- deve salvar o usuario com papel PARTICIPANT;
- deve permitir login apos cadastro.

BDD:
Dado que o visitante preenche formulario valido
Quando enviar o cadastro
Entao a conta deve ser criada com sucesso.

## HU-003 - Consulta de eventos
Descricao: como participante, quero visualizar a lista de eventos disponiveis.

Criterios de aceitacao:
- endpoint `GET /api/events` deve retornar 200;
- lista deve incluir titulo, data, local e capacidade.

BDD:
Dado que existem eventos cadastrados
Quando acessar a lista de eventos
Entao os eventos devem ser exibidos.

## HU-004 - Criacao de evento
Descricao: como administrador, quero criar eventos para disponibilizar inscricoes.

Criterios de aceitacao:
- endpoint `POST /api/events` deve retornar 201;
- titulo obrigatorio;
- capacidade deve ser maior que zero.

BDD:
Dado que o administrador informa dados validos
Quando criar um evento
Entao o evento deve ser salvo.

## HU-005 - Atualizacao e exclusao de evento
Descricao: como administrador, quero editar e excluir eventos para manter agenda correta.

Criterios de aceitacao:
- endpoint `PUT /api/events/{id}` deve atualizar os dados;
- endpoint `DELETE /api/events/{id}` deve remover evento e inscricoes relacionadas.

BDD:
Dado que existe um evento
Quando o administrador editar ou excluir
Entao os dados devem refletir a alteracao.

## HU-006 - Inscricao em evento
Descricao: como participante, quero me inscrever em um evento com vagas.

Criterios de aceitacao:
- endpoint `POST /api/events/{eventId}/registrations` deve criar inscricao;
- deve registrar data da inscricao;
- deve permitir consulta em `GET /api/users/{userId}/registrations`.

BDD:
Dado que o evento possui vagas
Quando o participante solicitar inscricao
Entao a inscricao deve ser criada.

## HU-007 - Regras de inscricao
Descricao: como sistema, quero bloquear inscricao duplicada e evento lotado.

Criterios de aceitacao:
- deve impedir nova inscricao do mesmo usuario no mesmo evento;
- deve impedir inscricao quando lotacao for atingida;
- deve retornar mensagem de erro adequada.

BDD:
Dado que o usuario ja esta inscrito ou o evento esta lotado
Quando tentar nova inscricao
Entao o sistema deve negar a operacao.
