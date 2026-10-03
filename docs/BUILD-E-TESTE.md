# Build final e teste

## Build de produção

O projeto usa TanStack Start + Nitro. O build é feito com:

```bash
bun install --frozen-lockfile
bun run test
bun run build
```

A automação `.github/workflows/build.yml` executa testes e build a cada push em `feat/crm-etapa1`/ `main` e em Pull Requests para `main`. O artefato de produção é publicado no GitHub Actions como `crm-production-build`.

## Visualização local

```bash
bun install
bun run dev
```

Depois abra o endereço mostrado pelo Vite, normalmente `http://localhost:3000`.

Para testar a versão compilada:

```bash
bun run build
bun run preview
```

## Publicação

Como o CRM usa SSR/Nitro, GitHub Pages não é o destino adequado para esta aplicação. Para ter uma URL pública, conecte o repositório a um provedor de hospedagem compatível com TanStack Start/Nitro, como Vercel.

O projeto não contém credenciais de hospedagem nem chaves de serviço. As variáveis do Supabase devem ser configuradas no ambiente de produção:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Nunca coloque `service_role` ou qualquer segredo do Supabase no código do navegador.

## O que deve ser testado

1. Login e bloqueio de usuário inativo.
2. Dashboard, Clientes, Funil e Agenda.
3. Propostas, Financiamentos, Consórcios, Vendas futuras e Desistências.
4. Dashboard Gerencial, Metas, Equipe, Desempenho e Relatórios.
5. Exportação CSV.
6. Usuários, Configurações e Modelos de motos para administrador.
7. Auditoria.
8. Responsividade em 360, 390, 430, 768, 1024, 1366 e 1920 px.
9. Com Supabase configurado, aplicar as migrations em ordem antes do teste integrado.

## Observação

A build automatizada valida instalação, testes e compilação. Ela não substitui um teste integrado com um projeto Supabase real configurado.
