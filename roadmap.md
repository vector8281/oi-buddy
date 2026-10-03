# Roadmap — Oi Buddy CRM

- [x] Aplicar migration 2 (crm_etapa2) corrigida
- [x] Aplicar migration 3 (etapa2_security: triggers set_owner_fields + current_profile_id)
- [x] Aplicar migration 4 (etapa3: sales_goals, audit_logs, views, trigger de auditoria, bloqueio de login)
- [x] Migration de GRANTs para todas as tabelas public
- [x] Verificar tabelas/views via read_query
- [x] Validar site no preview (login + telas principais; correção de recursão nas regras de acesso e coluna de modelo da moto)
- [x] Criar usuário de teste (auth + profiles) para o usuário fazer login
- [ ] Usuário trocar a senha do teste (admin@oibuddy.com.br / OiBuddy@2026)
- [x] Sincronizar correção da migration 2 e correções (RLS recursiva, appointments) ao GitHub (sync automático)
- [ ] Pendente: export de dados do banco antigo (CSV/JSON) — aguardando usuário
