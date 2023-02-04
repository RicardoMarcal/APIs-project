# Typescript API
Descrição

# TODO:
### Usuários:
- [x] /usuarios **(cr)**
	- [x] /usuarios/{usuarioId} **(rud)**
		- [x] /usuarios/{usuarioId}/projetos **(cr)**
			- [x] /usuarios/{usuarioId}/projetos/{projetoId} **(rud)**
				- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas **(cr)**
					- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas/{listaId} **(rud)**
						- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas/{listaId}/tarefas **(cr)**
							- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/listas/{listaId}/tarefas/{tarefaId} **(rud)**
				- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/colaboracoes **(cr)**
				- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/colaboracoes/email **(cr)**
					- [ ] /usuarios/{usuarioId}/projetos/{projetoId}/colaboracoes/{usuarioId} **(rud)**
		- [x] /usuarios/{usuarioId}/colaboracoes **(r)**
			- [x] /usuarios/{usuarioId}/colaboracoes/{projetoId} **(rd)**
		- [x] /usuarios/email/{usuarioEmail} **(r)**