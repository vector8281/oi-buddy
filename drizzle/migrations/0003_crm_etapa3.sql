-- CRM Honda Etapa 3: gestão, metas, auditoria e consultas gerenciais
alter table public.profiles add column if not exists active boolean not null default true;
create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_profiles_active on public.profiles(active);
create table if not exists public.sales_goals(
 id uuid primary key default gen_random_uuid(),user_id uuid references public.profiles(id) on delete cascade,
 goal_type text not null check(goal_type in ('sales_count','sales_value','leads','proposals','financing','consortium')),
 target_value numeric not null check(target_value>=0),period_type text not null check(period_type in ('monthly','quarterly','annual')),
 start_date date not null,end_date date not null,created_by uuid references public.profiles(id),created_at timestamptz not null default now(),updated_at timestamptz not null default now()
);
create table if not exists public.audit_logs(
 id uuid primary key default gen_random_uuid(),user_id uuid references public.profiles(id),action text not null,entity_type text not null,entity_id uuid,
 old_values jsonb,new_values jsonb,ip_address inet,created_at timestamptz not null default now()
);
create index if not exists idx_goals_user on public.sales_goals(user_id);create index if not exists idx_goals_period on public.sales_goals(start_date,end_date);create index if not exists idx_audit_user on public.audit_logs(user_id);create index if not exists idx_audit_created on public.audit_logs(created_at);create index if not exists idx_audit_entity on public.audit_logs(entity_type,entity_id);
alter table public.sales_goals enable row level security;alter table public.audit_logs enable row level security;
drop policy if exists "profiles admin manage" on public.profiles;create policy "profiles admin manage" on public.profiles for all to authenticated using(public.current_role()='admin') with check(public.current_role()='admin');
drop policy if exists "models admin manage" on public.motorcycle_models;create policy "models admin manage" on public.motorcycle_models for all to authenticated using(public.current_role()='admin') with check(public.current_role()='admin');
drop policy if exists "goals read" on public.sales_goals;create policy "goals read" on public.sales_goals for select to authenticated using(user_id in(select id from public.profiles where user_id=auth.uid()) or public.current_role() in('admin','manager'));
drop policy if exists "goals manage" on public.sales_goals;create policy "goals manage" on public.sales_goals for all to authenticated using(public.current_role() in('admin','manager')) with check(public.current_role() in('admin','manager'));
drop policy if exists "audit read" on public.audit_logs;create policy "audit read" on public.audit_logs for select to authenticated using(public.current_role() in('admin','manager'));
drop policy if exists "audit insert" on public.audit_logs;create policy "audit insert" on public.audit_logs for insert to authenticated with check(user_id is null or user_id in(select id from public.profiles where user_id=auth.uid()));
revoke update,delete on public.audit_logs from authenticated;
drop view if exists public.sales_summary;create view public.sales_summary as select date_trunc('month',sale_date)::date period,seller_id,motorcycle_model_id,payment_method,count(*) sales_count,coalesce(sum(sale_value),0) sale_value from public.sales group by 1,2,3,4;
drop view if exists public.pipeline_summary;create view public.pipeline_summary as select pipeline_stage,count(*) quantity,coalesce(sum(estimated_value),0) potential_value from public.customers group by pipeline_stage;
drop view if exists public.lead_source_summary;create view public.lead_source_summary as select coalesce(lead_source,'Outro') source,count(*) leads,count(*) filter(where pipeline_stage='won') converted from public.customers group by 1;
drop view if exists public.financing_summary;create view public.financing_summary as select status,count(*) quantity,coalesce(sum(financed_value),0) financed_value from public.financing_simulations group by status;
drop view if exists public.consortium_summary;create view public.consortium_summary as select status,count(*) quantity,coalesce(sum(letter_value),0) letter_value,coalesce(sum(installment_value),0) installment_value from public.consortium_records group by status;
drop view if exists public.seller_performance;create view public.seller_performance as
select p.id seller_id,p.full_name,count(distinct c.id) leads,count(distinct pr.id) proposals,count(distinct s.id) sales_count,coalesce(sum(s.sale_value),0) sale_value
from public.profiles p left join public.customers c on c.assigned_to=p.id left join public.proposals pr on pr.seller_id=p.id left join public.sales s on s.seller_id=p.id group by p.id,p.full_name;
-- Trigger de auditoria: não depende do frontend e não cria registros em auditoria para a própria tabela.
create or replace function public.audit_row_change() returns trigger language plpgsql security definer set search_path=public as $$
declare uid uuid; oldj jsonb; newj jsonb;
begin
 select id into uid from public.profiles where user_id=auth.uid() limit 1;
 if tg_op='DELETE' then oldj:=to_jsonb(old);newj:=null;elsif tg_op='INSERT' then oldj:=null;newj:=to_jsonb(new);else oldj:=to_jsonb(old);newj:=to_jsonb(new);end if;
 insert into public.audit_logs(user_id,action,entity_type,entity_id,old_values,new_values) values(uid,lower(tg_op),tg_table_name,coalesce(new.id,old.id),oldj,newj);return coalesce(new,old);
end $$;
do $$ declare t text;begin foreach t in array array['customers','proposals','financing_simulations','financing_applications','consortium_records','future_sales','lost_opportunities','sales'] loop execute format('drop trigger if exists trg_audit_%s on public.%I',t,t);execute format('create trigger trg_audit_%s after insert or update or delete on public.%I for each row execute function public.audit_row_change()',t,t);end loop;end $$;

-- As views gerenciais devem respeitar o RLS das tabelas subjacentes.
alter view public.sales_summary set (security_invoker=true);alter view public.pipeline_summary set (security_invoker=true);alter view public.lead_source_summary set (security_invoker=true);alter view public.financing_summary set (security_invoker=true);alter view public.consortium_summary set (security_invoker=true);alter view public.seller_performance set (security_invoker=true);