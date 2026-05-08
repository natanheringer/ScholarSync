# Casos de Teste - ScholarSync

| ID | Descricao | Passos | Entrada | Saida Esperada | Criterio de Sucesso | Tipo |
|---|---|---|---|---|---|---|
| CT-001 | Login valido | 1. Acessar `/login`.<br>2. Informar email e senha validos.<br>3. Clicar em Entrar. | `admin@scholarsync.com` / `123456` | Usuario autenticado e acesso ao sistema. | Status `200 OK` no endpoint de login. | E2E |
| CT-002 | Login invalido | 1. Acessar `/login`.<br>2. Informar senha incorreta.<br>3. Clicar em Entrar. | `admin@scholarsync.com` / `x` | Mensagem de erro de autenticacao. | Status `401 Unauthorized`. | E2E |
| CT-003 | Cadastro de usuario | 1. Enviar requisicao `POST /api/users` com dados validos. | Nome, email e senha novos | Usuario criado como participante. | Persistencia no banco e retorno de sucesso. | API |
| CT-004 | Listagem de eventos | 1. Executar `GET /api/events`. | N/A | Lista de eventos ativos cadastrados. | Status `200 OK` com lista no corpo. | API |
| CT-005 | Criar evento | 1. Executar `POST /api/events` com payload valido. | Titulo, data, local, capacidade | Evento criado e retornado no corpo. | Status `201 Created`. | API |
| CT-006 | Editar evento | 1. Executar `PUT /api/events/{id}`.<br>2. Alterar data e/ou capacidade. | ID existente + novos dados | Evento atualizado. | Dados persistidos no banco. | API |
| CT-007 | Deletar evento | 1. Executar `DELETE /api/events/{id}` para evento existente. | ID do evento | Evento removido e inscricoes vinculadas removidas. | Status `200 OK`. | API |
| CT-008 | Inscricao em evento | 1. Executar `POST /api/events/{eventId}/registrations` com usuario valido e evento com vaga. | `userId` + `eventId` | Inscricao criada com data de registro. | Registro criado na tabela de inscricoes. | E2E |
| CT-009 | Inscricao duplicada | 1. Inscrever usuario em um evento.<br>2. Repetir a mesma inscricao. | Usuario ja inscrito no evento | Operacao rejeitada com erro de duplicidade. | Bloqueio de nova inscricao no mesmo evento. | Unitario |
| CT-010 | Evento lotado | 1. Preencher vagas ate o limite.<br>2. Tentar nova inscricao no mesmo evento. | Evento com capacidade esgotada | Operacao rejeitada com erro de lotacao. | Inscricao impedida quando lotado. | Unitario |
