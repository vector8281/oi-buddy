-- Etapa 2 ownership hardening: fill profile ownership server-side
create or replace function public.current_profile_id() returns uuid language sql stable security definer set search_path=public as $$select id from public.profiles where user_id=auth.uid() limit 1$$;
create or replace function public.set_owner_fields() returns trigger language plpgsql security definer set search_path=public as $$begin
 if tg_table_name='customers' and new.assigned_to is null then new.assigned_to:=public.current_profile_id(); end if;
 if tg_table_name='appointments' and new.user_id is null then new.user_id:=public.current_profile_id(); end if;
 if new.seller_id is null and tg_table_name <> 'customers' and tg_table_name <> 'appointments' then new.seller_id:=public.current_profile_id(); end if;
 if tg_table_name='commercial_activities' and new.user_id is null then new.user_id:=public.current_profile_id(); end if;
 return new; end$$;
drop trigger if exists trg_customers_owner on public.customers; create trigger trg_customers_owner before insert on public.customers for each row execute function public.set_owner_fields();
drop trigger if exists trg_appointments_owner on public.appointments; create trigger trg_appointments_owner before insert on public.appointments for each row execute function public.set_owner_fields();
drop trigger if exists trg_proposals_owner on public.proposals; create trigger trg_proposals_owner before insert on public.proposals for each row execute function public.set_owner_fields();
drop trigger if exists trg_financing_owner on public.financing_simulations; create trigger trg_financing_owner before insert on public.financing_simulations for each row execute function public.set_owner_fields();
drop trigger if exists trg_financing_app_owner on public.financing_applications; create trigger trg_financing_app_owner before insert on public.financing_applications for each row execute function public.set_owner_fields();
drop trigger if exists trg_consortium_owner on public.consortium_records; create trigger trg_consortium_owner before insert on public.consortium_records for each row execute function public.set_owner_fields();
drop trigger if exists trg_future_owner on public.future_sales; create trigger trg_future_owner before insert on public.future_sales for each row execute function public.set_owner_fields();
drop trigger if exists trg_lost_owner on public.lost_opportunities; create trigger trg_lost_owner before insert on public.lost_opportunities for each row execute function public.set_owner_fields();
drop trigger if exists trg_documents_owner on public.documents; create trigger trg_documents_owner before insert on public.documents for each row execute function public.set_owner_fields();
drop trigger if exists trg_activity_owner on public.commercial_activities; create trigger trg_activity_owner before insert on public.commercial_activities for each row execute function public.set_owner_fields();
drop trigger if exists trg_sales_owner on public.sales; create trigger trg_sales_owner before insert on public.sales for each row execute function public.set_owner_fields();
drop policy if exists "appointments scoped" on public.appointments;
create policy "appointments scoped" on public.appointments for all to authenticated using (user_id=public.current_profile_id() or customer_id in (select id from public.customers where assigned_to=public.current_profile_id()) or public.current_role() in ('admin','manager')) with check (user_id=public.current_profile_id() or customer_id in (select id from public.customers where assigned_to=public.current_profile_id()) or public.current_role() in ('admin','manager'));
drop policy if exists "customers scoped insert" on public.customers;
create policy "customers scoped insert" on public.customers for insert to authenticated with check (assigned_to=public.current_profile_id() or public.current_role() in ('admin','manager'));