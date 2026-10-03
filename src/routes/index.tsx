import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Filter,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/")({ component: CRM });

type Lead = {
  id: number;
  name: string;
  company: string;
  value: number;
  initials: string;
  color: string;
  days: number;
};

const stages = [
  { key: "new", title: "Leads novos", tone: "blue", count: 3 },
  { key: "follow", title: "Acompanhamento", tone: "amber", count: 3 },
  { key: "closing", title: "Em fechamento", tone: "violet", count: 2 },
  { key: "closed", title: "Fechado", tone: "green", count: 2 },
  { key: "finance", title: "Financiamento", tone: "cyan", count: 2 },
  { key: "consortium", title: "Consórcio", tone: "orange", count: 1 },
  { key: "future", title: "Venda futura", tone: "slate", count: 2 },
  { key: "lost", title: "Desistência", tone: "red", count: 1 },
];

const seedLeads: Record<string, Lead[]> = {
  new: [
    { id: 1, name: "Mariana Costa", company: "SUV Compacto", value: 124900, initials: "MC", color: "blue", days: 1 },
    { id: 2, name: "Rafael Almeida", company: "Sedan 2026", value: 112500, initials: "RA", color: "purple", days: 2 },
    { id: 3, name: "Juliana Rocha", company: "Hatch Premium", value: 89900, initials: "JR", color: "rose", days: 1 },
  ],
  follow: [
    { id: 4, name: "Carlos Eduardo", company: "SUV Turbo", value: 158900, initials: "CE", color: "green", days: 4 },
    { id: 5, name: "Ana Beatriz", company: "Pickup Flex", value: 179900, initials: "AB", color: "orange", days: 6 },
    { id: 6, name: "Lucas Martins", company: "Sedan 2026", value: 116900, initials: "LM", color: "cyan", days: 3 },
  ],
  closing: [
    { id: 7, name: "Fernanda Lima", company: "SUV Premium", value: 219900, initials: "FL", color: "pink", days: 8 },
    { id: 8, name: "Pedro Henrique", company: "Pickup Diesel", value: 245000, initials: "PH", color: "indigo", days: 10 },
  ],
  closed: [
    { id: 9, name: "Gustavo Souza", company: "SUV Turbo", value: 168900, initials: "GS", color: "green", days: 2 },
    { id: 10, name: "Camila Alves", company: "Hatch Premium", value: 94900, initials: "CA", color: "blue", days: 5 },
  ],
  finance: [
    { id: 11, name: "Bruno Santos", company: "Sedan 2026", value: 128900, initials: "BS", color: "violet", days: 7 },
    { id: 12, name: "Patricia Lima", company: "SUV Compacto", value: 139900, initials: "PL", color: "rose", days: 4 },
  ],
  consortium: [
    { id: 13, name: "André Oliveira", company: "Consórcio", value: 98000, initials: "AO", color: "orange", days: 12 },
  ],
  future: [
    { id: 14, name: "Ricardo Nunes", company: "Troca em 2027", value: 135000, initials: "RN", color: "slate", days: 20 },
    { id: 15, name: "Beatriz Melo", company: "Troca em 2027", value: 149900, initials: "BM", color: "purple", days: 15 },
  ],
  lost: [
    { id: 16, name: "Thiago Ramos", company: "SUV Turbo", value: 159900, initials: "TR", color: "red", days: 18 },
  ],
};

const money = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

function CRM() {
  const [active, setActive] = useState("pipeline");
  const [mobileNav, setMobileNav] = useState(false);
  const [search, setSearch] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [leads, setLeads] = useState(seedLeads);
  const [notice, setNotice] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return leads;
    return Object.fromEntries(
      Object.entries(leads).map(([key, items]) => [
        key,
        items.filter((lead) => (lead.name + lead.company).toLowerCase().includes(term)),
      ]),
    ) as Record<string, Lead[]>;
  }, [leads, search]);

  const addLead = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "Novo cliente");
    const company = String(data.get("company") || "Novo negócio");
    const value = Number(data.get("value") || 0);
    const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
    setLeads((current) => ({
      ...current,
      new: [{ id: Date.now(), name, company, value, initials, color: "blue", days: 0 }, ...current.new],
    }));
    setShowNew(false);
    setNotice("Lead adicionado ao pipeline.");
    setTimeout(() => setNotice(""), 2500);
  };

  const nav = [
    ["pipeline", "Pipeline", LayoutDashboard],
    ["clients", "Clientes", Users],
    ["calendar", "Agenda", CalendarDays],
    ["goals", "Metas", Target],
  ] as const;

  return (
    <div className="crm-shell">
      <aside className={mobileNav ? "sidebar open" : "sidebar"}>
        <div className="brand">
          <div className="brand-mark">V</div>
          <div><strong>VendasPro</strong><span>CRM Comercial</span></div>
          <button className="mobile-close" onClick={() => setMobileNav(false)}><X size={18}/></button>
        </div>
        <div className="workspace"><span>Equipe Comercial</span><ChevronDown size={15}/></div>
        <nav>
          <div className="nav-label">GESTÃO</div>
          {nav.map(([key, label, Icon]) => (
            <button key={key} className={active === key ? "nav-item active" : "nav-item"} onClick={() => {setActive(key); setMobileNav(false);}}>
              <Icon size={18}/><span>{label}</span>
            </button>
          ))}
          <div className="nav-label">FERRAMENTAS</div>
          <button className="nav-item" onClick={() => setNotice("Relatórios estarão disponíveis na próxima etapa.")}><TrendingUp size={18}/><span>Relatórios</span></button>
          <button className="nav-item" onClick={() => setNotice("Configurações estarão disponíveis na próxima etapa.")}><Settings size={18}/><span>Configurações</span></button>
        </nav>
        <div className="sidebar-bottom">
          <div className="user-card"><div className="avatar">VS</div><div><strong>Victor Santos</strong><span>Administrador</span></div><MoreHorizontal size={17}/></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileNav(true)}><Menu size={21}/></button>
          <div className="search"><Search size={18}/><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar cliente, negócio..." /></div>
          <div className="top-actions"><button className="icon-button"><Bell size={19}/><i /></button><div className="top-avatar">VS</div></div>
        </header>

        <div className="content">
          {active === "pipeline" ? (
            <>
              <div className="page-head">
                <div><div className="eyebrow">VISÃO GERAL</div><h1>Pipeline de vendas</h1><p>Acompanhe seus clientes em cada etapa da jornada comercial.</p></div>
                <button className="primary-button" onClick={() => setShowNew(true)}><Plus size={18}/> Novo cliente</button>
              </div>

              <section className="stats">
                <div className="stat-card"><div className="stat-icon blue"><Users size={19}/></div><div><span>Clientes ativos</span><strong>1.284</strong><small>+12,5% <em>este mês</em></small></div></div>
                <div className="stat-card"><div className="stat-icon green"><CircleDollarSign size={19}/></div><div><span>Valor no pipeline</span><strong>R$ 2,84 mi</strong><small>+8,2% <em>este mês</em></small></div></div>
                <div className="stat-card"><div className="stat-icon violet"><Target size={19}/></div><div><span>Conversão</span><strong>24,8%</strong><small>+2,4% <em>este mês</em></small></div></div>
                <div className="stat-card"><div className="stat-icon orange"><CalendarDays size={19}/></div><div><span>Visitas hoje</span><strong>8</strong><small>3 próximas <em>agora</em></small></div></div>
              </section>

              <div className="pipeline-toolbar">
                <div><h2>Negócios</h2><span>{Object.values(filtered).flat().length} oportunidades</span></div>
                <div className="toolbar-actions"><button className="filter-button"><Filter size={16}/> Filtros</button><button className="view-button">Este mês <ChevronDown size={15}/></button></div>
              </div>

              <div className="pipeline">
                {stages.map((stage) => {
                  const items = filtered[stage.key] || [];
                  return <section className="stage" key={stage.key}>
                    <div className="stage-head"><div><span className={"stage-dot " + stage.tone}></span><strong>{stage.title}</strong><b>{items.length}</b></div><MoreHorizontal size={17}/></div>
                    <div className="stage-total">{money(items.reduce((sum, lead) => sum + lead.value, 0))}</div>
                    <div className="cards">
                      {items.map((lead) => <article className="lead-card" key={lead.id} onClick={() => setNotice("Detalhes do cliente selecionado.")}>
                        <div className="lead-top"><div className={"lead-avatar " + lead.color}>{lead.initials}</div><button><MoreHorizontal size={16}/></button></div>
                        <strong className="lead-name">{lead.name}</strong><span className="lead-company">{lead.company}</span>
                        <div className="lead-footer"><strong>{money(lead.value)}</strong><span><Clock3 size={13}/> {lead.days}d</span></div>
                      </article>)}
                      {items.length === 0 && <div className="empty-stage">Nenhum negócio</div>}
                    </div>
                  </section>;
                })}
              </div>
            </>
          ) : (
            <div className="placeholder-page">
              <div className="placeholder-icon">{active === "clients" ? <Users/> : active === "calendar" ? <CalendarDays/> : <Target/>}</div>
              <div className="eyebrow">MÓDULO CRM</div>
              <h1>{active === "clients" ? "Clientes" : active === "calendar" ? "Agenda" : "Metas"}</h1>
              <p>Este módulo está estruturado para a próxima etapa do CRM. O pipeline já está funcional nesta primeira versão.</p>
              <button className="primary-button" onClick={() => setActive("pipeline")}>Voltar ao pipeline</button>
            </div>
          )}
        </div>
      </main>

      {showNew && <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setShowNew(false)}>
        <form className="modal" onSubmit={addLead}>
          <div className="modal-head"><div><span className="eyebrow">NOVO NEGÓCIO</span><h2>Cadastrar cliente</h2></div><button type="button" onClick={() => setShowNew(false)}><X/></button></div>
          <label>Nome do cliente<input name="name" required placeholder="Ex.: João da Silva"/></label>
          <label>Interesse / veículo<input name="company" required placeholder="Ex.: SUV Turbo"/></label>
          <label>Valor estimado<input name="value" type="number" min="0" step="100" placeholder="150000"/></label>
          <button className="primary-button full" type="submit"><Plus size={18}/> Adicionar ao pipeline</button>
        </form>
      </div>}
      {notice && <div className="toast">{notice}</div>}
    </div>
  );
}
