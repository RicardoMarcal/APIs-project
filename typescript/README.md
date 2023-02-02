# Typescript API
Descrição

# TODO:
### Usuários:
- [x] /usuarios **(cr)**
	- [x] /usuarios/{usuarioId} **(rud)**
		- [ ] /usuarios/{usuarioId}/projetos **(cr)**
			- [ ] /usuarios/{usuarioId}/projetos/{projetoId} **(rud)**
				- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas **(cr)**
					- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas/{listaId} **(rud)**
						- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas/{listaId}/tarefas **(cr)**
							- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas/{listaId}/tarefas/{tarefaId} **(rud)**
		- [ ] /usuarios/{usuarioId}/colaboracoes **(cr)**
			- [ ] /usuarios/{usuarioId}/colaboracoes/{projetoId} **(rud)**
### Projetos:
- [x] /projetos **(cr)**
	- [x] /projetos/{projetoId} **(rud)**
		- [ ] /projetos/{projetoId}/listas **(cr)**
			- [ ] /projetos/{projetoId}/listas/{listaId} **(rud)**
				- [ ] /projetos/{projetoId}/listas/{listaId}/tarefas **(cr)**
					- [ ] /projetos/{projetoId}/listas/{listaId}/tarefas/{tarefaId} **(rud)**
	- [ ] /projetos/{projetoId}/colaboracoes **(cr)**
		- [ ] /projetos/{projetoId}/colaboracoes/{projetoId} **(rud)**
### Colaborações:
- [x] /colaboracoes **(cr)**
	- [x] /colaboracoes/{usuarioId}/{projetoId} **(rud)**
### Listas:
- [ ] /listas **(cr)**
	- [ ] /listas/{listaId} **(rud)**
		- [ ] /listas/{listaId}/tarefas **(cr)**
			- [ ] /listas/{listaId}/tarefas/{tarefaId} **(rud)**
### Tarefas:
- [ ] /tarefas **(cr)**
	- [ ] /tarefas/{tarefaId} **(rud)**
