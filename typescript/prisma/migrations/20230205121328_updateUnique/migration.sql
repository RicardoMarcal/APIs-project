/*
  Warnings:

  - A unique constraint covering the columns `[id,projetoId]` on the table `Lista` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,criadorId]` on the table `Projeto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,listaId]` on the table `Tarefa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lista_id_projetoId_key" ON "Lista"("id", "projetoId");

-- CreateIndex
CREATE UNIQUE INDEX "Projeto_id_criadorId_key" ON "Projeto"("id", "criadorId");

-- CreateIndex
CREATE UNIQUE INDEX "Tarefa_id_listaId_key" ON "Tarefa"("id", "listaId");
