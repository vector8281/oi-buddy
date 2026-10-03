# CRM Honda — Etapa 3
## Escopo
A Etapa 3 adiciona gestão comercial, metas, relatórios, equipe, permissões, usuários, configurações e auditoria sem substituir as operações das Etapas 1 e 2.

## Banco
Migration: `supabase/migrations/202610030004_crm_etapa3.sql`.
Principais objetos:
- `sales_goals`: metas por vendedor/equipe e período.
- `audit_logs`: trilha imutável de ações relevantes.
- Views `sales_summary`, `seller_performance`, `pipeline_summary`, `lead_source_summary`, `financing_summary`, `consortium_summary`.
- Índices para períodos, usuários e entidades.
- Triggers de auditoria em clientes, propostas, financiamentos, consórcios, vendas futuras, desistências e vendas.
As views usam `security_invoker` para respeitar RLS.

## Perfis e permissões
- **admin**: acesso completo.
- **manager**: gestão da equipe, metas, relatórios e operações da equipe.
- **seller**: operação própria.
A autorização da interface é feita em `src/lib/permissions.ts`; a segurança definitiva continua no Supabase RLS.

## Usuários
A tela `/usuarios` gerencia o perfil no CRM. A conta de autenticação precisa existir no Supabase Auth; a aplicação não expõe service-role key no navegador. Usuários marcados como inativos são bloqueados no login quando o Supabase está conectado.

## Metas
`/metas` grava metas separadamente dos resultados. Nunca altera vendas para atingir objetivo. Tipos: vendas, valor, leads, propostas, financiamentos e consórcios; períodos mensal, trimestral e anual.

## Relatórios
`/relatorios` concentra vendas, leads, funil, financiamentos, consórcios, propostas, vendas futuras e desistências. Os filtros de período usam os dados registrados e a exportação CSV respeita o conjunto carregado pelo usuário.

## Auditoria
`/auditoria` consulta eventos. Não existe exclusão pela interface. O banco revoga update/delete para authenticated e os eventos de alterações são registrados por trigger.

## Supabase
1. Configure `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
2. Execute as migrations em ordem.
3. Crie os usuários no Supabase Auth.
4. Crie o registro correspondente em `profiles` com `user_id`, nome e cargo.
5. Use `active=false` para bloquear login de um perfil.

## Novo relatório
Prefira reutilizar `loadAnalytics`, `periodOf`, componentes de `ManagementUI` e views SQL para grandes volumes. Para relatórios de alto volume, mover agregações para RPC/views com filtros no banco em vez de carregar milhares de linhas no navegador.

## Nova meta
Use `saveGoal` e `sales_goals`. O resultado deve ser calculado a partir das tabelas operacionais; a meta é apenas parâmetro de comparação.

## Desenvolvimento
Com dependências instaladas:
`npm run dev`
Build:
`npm run build`
Lint:
`npm run lint`
Testes:
`npm test`
