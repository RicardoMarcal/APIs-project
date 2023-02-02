# Typescript API

    > descrição

# TODO:

- [x] /usuarios (cr)
  - [x] /usuarios/{id} (rud)
    - [ ] /usuarios/{id}/projetos (cr)
      - [ ] /usuarios/{id}/projetos/{projetoId} (rud)
        - [ ] /usuarios/{id}/projetos/{projetoId}/listas (cr)
          - [ ] /usuarios/{id}/projetos/{projetoId}/listas/{listaId} (rud)
            - [ ] /usuarios/{id}/projetos/{projetoId}/listas/{listaId}/tarefas (cr)
              - [ ] /usuarios/{id}/projetos/{projetoId}/listas/{listaId}/tarefas/{tarefaId} (rud)
    - [ ] /usuarios/{id}/colaboracoes (cr)
      - [ ] /usuarios/{id}/colaboracoes/{projetoId} (rud)

  - [x] /projetos (cr)
    - [x] /projetos/{projetoId} (rud)
      - [ ] /projetos/{projetoId}/listas (cr)
        - [ ] /projetos/{projetoId}/listas/{listaId} (rud)
          - [ ] /projetos/{projetoId}/listas/{listaId}/tarefas (cr)
            - [ ] /projetos/{projetoId}/listas/{listaId}/tarefas/{tarefaId} (rud)
    - [ ] /projetos/colaboracoes (cr)
      - [ ] /projetos/colaboracoes/{projetoId} (rud)
  
  - [x] /colaboracoes (cr)
    - [x] /colaboracoes/{usuarioId}/{projetoId} (rud)
  
  - [ ] /listas (cr)
    - [ ] /listas/{listaId} (rud)
      - [ ] /listas/{listaId}/tarefas (cr)
        - [ ] /listas/{listaId}/tarefas/{tarefaId} (rud)
  
  - [ ] /tarefas (cr)
        - [ ] /tarefas/{tarefaId} (rud)
