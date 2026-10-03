export const PIPELINE_STAGES=[{value:"lead_new",label:"Leads Novos"},{value:"follow_up",label:"Acompanhamento"},{value:"closing",label:"Em Fechamento"},{value:"won",label:"Fechado"},{value:"financing",label:"Financiamento"},{value:"consortium",label:"Consórcio"},{value:"future_sale",label:"Venda Futura"},{value:"lost",label:"Desistência"}] as const;
export type PipelineStage=typeof PIPELINE_STAGES[number]["value"];
export const TEMPERATURES=[{value:"hot",label:"Quente",icon:"🔥"},{value:"warm",label:"Morno",icon:"☀️"},{value:"cold",label:"Frio",icon:"❄️"}] as const;
export const LEAD_SOURCES=["Loja física","WhatsApp","Instagram","Facebook","Site","Indicação","Telefone","Evento","Outro"] as const;
export const MOTORCYCLES=["Honda CG 160","Honda Biz","Honda Pop 110i","Honda NXR 160 Bros","Honda PCX","Honda Elite","Honda CB 300F","Honda Sahara 300","Honda XRE","Honda ADV"] as const;
export const APPOINTMENT_TYPES=["Retorno","Ligação","Visita","Test Ride","Entrega","Outro"] as const;
export const INTERACTION_TYPES=["Ligação","WhatsApp","Visita","Mensagem","Observação","Mudança de etapa","Outro"] as const;
export const stageLabel=(s:string)=>PIPELINE_STAGES.find(x=>x.value===s)?.label??s;
export const tempMeta=(t:string)=>TEMPERATURES.find(x=>x.value===t)??TEMPERATURES[1];