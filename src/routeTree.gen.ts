/* eslint-disable */
// @ts-nocheck
import {Route as rootRouteImport} from './routes/__root'
import {Route as R0Import} from './routes/index'
import {Route as R1Import} from './routes/login'
import {Route as R2Import} from './routes/dashboard'
import {Route as R3Import} from './routes/clientes'
import {Route as R4Import} from './routes/clientes.novo'
import {Route as R5Import} from './routes/clientes.$id'
import {Route as R6Import} from './routes/funil'
import {Route as R7Import} from './routes/agenda'
import {Route as R8Import} from './routes/propostas'
import {Route as R9Import} from './routes/propostas.nova'
import {Route as R10Import} from './routes/propostas.$id'
import {Route as R11Import} from './routes/financiamentos'
import {Route as R12Import} from './routes/financiamentos.nova'
import {Route as R13Import} from './routes/consorcios'
import {Route as R14Import} from './routes/consorcios.novo'
import {Route as R15Import} from './routes/vendas-futuras'
import {Route as R16Import} from './routes/vendas-futuras.nova'
import {Route as R17Import} from './routes/desistencias'
import {Route as R18Import} from './routes/desistencias.nova'
import {Route as R19Import} from './routes/gestao'
import {Route as R20Import} from './routes/metas'
import {Route as R21Import} from './routes/equipe'
import {Route as R22Import} from './routes/equipe.$id'
import {Route as R23Import} from './routes/desempenho'
import {Route as R24Import} from './routes/relatorios'
import {Route as R25Import} from './routes/usuarios'
import {Route as R26Import} from './routes/configuracoes'
import {Route as R27Import} from './routes/configuracoes.modelos'
import {Route as R28Import} from './routes/auditoria'
const R0=R0Import.update({id:'/',path:'/',getParentRoute:()=>rootRouteImport} as any)
const R1=R1Import.update({id:'/login',path:'/login',getParentRoute:()=>rootRouteImport} as any)
const R2=R2Import.update({id:'/dashboard',path:'/dashboard',getParentRoute:()=>rootRouteImport} as any)
const R3=R3Import.update({id:'/clientes',path:'/clientes',getParentRoute:()=>rootRouteImport} as any)
const R4=R4Import.update({id:'/clientes/novo',path:'/clientes/novo',getParentRoute:()=>rootRouteImport} as any)
const R5=R5Import.update({id:'/clientes/$id',path:'/clientes/$id',getParentRoute:()=>rootRouteImport} as any)
const R6=R6Import.update({id:'/funil',path:'/funil',getParentRoute:()=>rootRouteImport} as any)
const R7=R7Import.update({id:'/agenda',path:'/agenda',getParentRoute:()=>rootRouteImport} as any)
const R8=R8Import.update({id:'/propostas',path:'/propostas',getParentRoute:()=>rootRouteImport} as any)
const R9=R9Import.update({id:'/propostas/nova',path:'/propostas/nova',getParentRoute:()=>rootRouteImport} as any)
const R10=R10Import.update({id:'/propostas/$id',path:'/propostas/$id',getParentRoute:()=>rootRouteImport} as any)
const R11=R11Import.update({id:'/financiamentos',path:'/financiamentos',getParentRoute:()=>rootRouteImport} as any)
const R12=R12Import.update({id:'/financiamentos/nova',path:'/financiamentos/nova',getParentRoute:()=>rootRouteImport} as any)
const R13=R13Import.update({id:'/consorcios',path:'/consorcios',getParentRoute:()=>rootRouteImport} as any)
const R14=R14Import.update({id:'/consorcios/novo',path:'/consorcios/novo',getParentRoute:()=>rootRouteImport} as any)
const R15=R15Import.update({id:'/vendas-futuras',path:'/vendas-futuras',getParentRoute:()=>rootRouteImport} as any)
const R16=R16Import.update({id:'/vendas-futuras/nova',path:'/vendas-futuras/nova',getParentRoute:()=>rootRouteImport} as any)
const R17=R17Import.update({id:'/desistencias',path:'/desistencias',getParentRoute:()=>rootRouteImport} as any)
const R18=R18Import.update({id:'/desistencias/nova',path:'/desistencias/nova',getParentRoute:()=>rootRouteImport} as any)
const R19=R19Import.update({id:'/gestao',path:'/gestao',getParentRoute:()=>rootRouteImport} as any)
const R20=R20Import.update({id:'/metas',path:'/metas',getParentRoute:()=>rootRouteImport} as any)
const R21=R21Import.update({id:'/equipe',path:'/equipe',getParentRoute:()=>rootRouteImport} as any)
const R22=R22Import.update({id:'/equipe/$id',path:'/equipe/$id',getParentRoute:()=>rootRouteImport} as any)
const R23=R23Import.update({id:'/desempenho',path:'/desempenho',getParentRoute:()=>rootRouteImport} as any)
const R24=R24Import.update({id:'/relatorios',path:'/relatorios',getParentRoute:()=>rootRouteImport} as any)
const R25=R25Import.update({id:'/usuarios',path:'/usuarios',getParentRoute:()=>rootRouteImport} as any)
const R26=R26Import.update({id:'/configuracoes',path:'/configuracoes',getParentRoute:()=>rootRouteImport} as any)
const R27=R27Import.update({id:'/configuracoes/modelos',path:'/configuracoes/modelos',getParentRoute:()=>rootRouteImport} as any)
const R28=R28Import.update({id:'/auditoria',path:'/auditoria',getParentRoute:()=>rootRouteImport} as any)
export interface FileRoutesByFullPath{'/':typeof R0;'/login':typeof R1;'/dashboard':typeof R2;'/clientes':typeof R3;'/clientes/novo':typeof R4;'/clientes/$id':typeof R5;'/funil':typeof R6;'/agenda':typeof R7;'/propostas':typeof R8;'/propostas/nova':typeof R9;'/propostas/$id':typeof R10;'/financiamentos':typeof R11;'/financiamentos/nova':typeof R12;'/consorcios':typeof R13;'/consorcios/novo':typeof R14;'/vendas-futuras':typeof R15;'/vendas-futuras/nova':typeof R16;'/desistencias':typeof R17;'/desistencias/nova':typeof R18;'/gestao':typeof R19;'/metas':typeof R20;'/equipe':typeof R21;'/equipe/$id':typeof R22;'/desempenho':typeof R23;'/relatorios':typeof R24;'/usuarios':typeof R25;'/configuracoes':typeof R26;'/configuracoes/modelos':typeof R27;'/auditoria':typeof R28}
export interface FileRoutesByTo extends FileRoutesByFullPath{}
export interface FileRoutesById{'__root__':typeof rootRouteImport;'/':typeof R0;'/login':typeof R1;'/dashboard':typeof R2;'/clientes':typeof R3;'/clientes/novo':typeof R4;'/clientes/$id':typeof R5;'/funil':typeof R6;'/agenda':typeof R7;'/propostas':typeof R8;'/propostas/nova':typeof R9;'/propostas/$id':typeof R10;'/financiamentos':typeof R11;'/financiamentos/nova':typeof R12;'/consorcios':typeof R13;'/consorcios/novo':typeof R14;'/vendas-futuras':typeof R15;'/vendas-futuras/nova':typeof R16;'/desistencias':typeof R17;'/desistencias/nova':typeof R18;'/gestao':typeof R19;'/metas':typeof R20;'/equipe':typeof R21;'/equipe/$id':typeof R22;'/desempenho':typeof R23;'/relatorios':typeof R24;'/usuarios':typeof R25;'/configuracoes':typeof R26;'/configuracoes/modelos':typeof R27;'/auditoria':typeof R28}
export interface FileRouteTypes{fileRoutesByFullPath:FileRoutesByFullPath;fullPaths:'/'|'/login'|'/dashboard'|'/clientes'|'/clientes/novo'|'/clientes/$id'|'/funil'|'/agenda'|'/propostas'|'/propostas/nova'|'/propostas/$id'|'/financiamentos'|'/financiamentos/nova'|'/consorcios'|'/consorcios/novo'|'/vendas-futuras'|'/vendas-futuras/nova'|'/desistencias'|'/desistencias/nova'|'/gestao'|'/metas'|'/equipe'|'/equipe/$id'|'/desempenho'|'/relatorios'|'/usuarios'|'/configuracoes'|'/configuracoes/modelos'|'/auditoria';fileRoutesByTo:FileRoutesByTo;to:'/'|'/login'|'/dashboard'|'/clientes'|'/clientes/novo'|'/clientes/$id'|'/funil'|'/agenda'|'/propostas'|'/propostas/nova'|'/propostas/$id'|'/financiamentos'|'/financiamentos/nova'|'/consorcios'|'/consorcios/novo'|'/vendas-futuras'|'/vendas-futuras/nova'|'/desistencias'|'/desistencias/nova'|'/gestao'|'/metas'|'/equipe'|'/equipe/$id'|'/desempenho'|'/relatorios'|'/usuarios'|'/configuracoes'|'/configuracoes/modelos'|'/auditoria';id:'__root__'|'/'|'/login'|'/dashboard'|'/clientes'|'/clientes/novo'|'/clientes/$id'|'/funil'|'/agenda'|'/propostas'|'/propostas/nova'|'/propostas/$id'|'/financiamentos'|'/financiamentos/nova'|'/consorcios'|'/consorcios/novo'|'/vendas-futuras'|'/vendas-futuras/nova'|'/desistencias'|'/desistencias/nova'|'/gestao'|'/metas'|'/equipe'|'/equipe/$id'|'/desempenho'|'/relatorios'|'/usuarios'|'/configuracoes'|'/configuracoes/modelos'|'/auditoria';fileRoutesById:FileRoutesById}
declare module '@tanstack/react-router'{interface FileRoutesByPath{'/':{id:'/';path:'/';fullPath:'/';preLoaderRoute:typeof R0Import;parentRoute:typeof rootRouteImport};'/login':{id:'/login';path:'/login';fullPath:'/login';preLoaderRoute:typeof R1Import;parentRoute:typeof rootRouteImport};'/dashboard':{id:'/dashboard';path:'/dashboard';fullPath:'/dashboard';preLoaderRoute:typeof R2Import;parentRoute:typeof rootRouteImport};'/clientes':{id:'/clientes';path:'/clientes';fullPath:'/clientes';preLoaderRoute:typeof R3Import;parentRoute:typeof rootRouteImport};'/clientes/novo':{id:'/clientes/novo';path:'/clientes/novo';fullPath:'/clientes/novo';preLoaderRoute:typeof R4Import;parentRoute:typeof rootRouteImport};'/clientes/$id':{id:'/clientes/$id';path:'/clientes/$id';fullPath:'/clientes/$id';preLoaderRoute:typeof R5Import;parentRoute:typeof rootRouteImport};'/funil':{id:'/funil';path:'/funil';fullPath:'/funil';preLoaderRoute:typeof R6Import;parentRoute:typeof rootRouteImport};'/agenda':{id:'/agenda';path:'/agenda';fullPath:'/agenda';preLoaderRoute:typeof R7Import;parentRoute:typeof rootRouteImport};'/propostas':{id:'/propostas';path:'/propostas';fullPath:'/propostas';preLoaderRoute:typeof R8Import;parentRoute:typeof rootRouteImport};'/propostas/nova':{id:'/propostas/nova';path:'/propostas/nova';fullPath:'/propostas/nova';preLoaderRoute:typeof R9Import;parentRoute:typeof rootRouteImport};'/propostas/$id':{id:'/propostas/$id';path:'/propostas/$id';fullPath:'/propostas/$id';preLoaderRoute:typeof R10Import;parentRoute:typeof rootRouteImport};'/financiamentos':{id:'/financiamentos';path:'/financiamentos';fullPath:'/financiamentos';preLoaderRoute:typeof R11Import;parentRoute:typeof rootRouteImport};'/financiamentos/nova':{id:'/financiamentos/nova';path:'/financiamentos/nova';fullPath:'/financiamentos/nova';preLoaderRoute:typeof R12Import;parentRoute:typeof rootRouteImport};'/consorcios':{id:'/consorcios';path:'/consorcios';fullPath:'/consorcios';preLoaderRoute:typeof R13Import;parentRoute:typeof rootRouteImport};'/consorcios/novo':{id:'/consorcios/novo';path:'/consorcios/novo';fullPath:'/consorcios/novo';preLoaderRoute:typeof R14Import;parentRoute:typeof rootRouteImport};'/vendas-futuras':{id:'/vendas-futuras';path:'/vendas-futuras';fullPath:'/vendas-futuras';preLoaderRoute:typeof R15Import;parentRoute:typeof rootRouteImport};'/vendas-futuras/nova':{id:'/vendas-futuras/nova';path:'/vendas-futuras/nova';fullPath:'/vendas-futuras/nova';preLoaderRoute:typeof R16Import;parentRoute:typeof rootRouteImport};'/desistencias':{id:'/desistencias';path:'/desistencias';fullPath:'/desistencias';preLoaderRoute:typeof R17Import;parentRoute:typeof rootRouteImport};'/desistencias/nova':{id:'/desistencias/nova';path:'/desistencias/nova';fullPath:'/desistencias/nova';preLoaderRoute:typeof R18Import;parentRoute:typeof rootRouteImport};'/gestao':{id:'/gestao';path:'/gestao';fullPath:'/gestao';preLoaderRoute:typeof R19Import;parentRoute:typeof rootRouteImport};'/metas':{id:'/metas';path:'/metas';fullPath:'/metas';preLoaderRoute:typeof R20Import;parentRoute:typeof rootRouteImport};'/equipe':{id:'/equipe';path:'/equipe';fullPath:'/equipe';preLoaderRoute:typeof R21Import;parentRoute:typeof rootRouteImport};'/equipe/$id':{id:'/equipe/$id';path:'/equipe/$id';fullPath:'/equipe/$id';preLoaderRoute:typeof R22Import;parentRoute:typeof rootRouteImport};'/desempenho':{id:'/desempenho';path:'/desempenho';fullPath:'/desempenho';preLoaderRoute:typeof R23Import;parentRoute:typeof rootRouteImport};'/relatorios':{id:'/relatorios';path:'/relatorios';fullPath:'/relatorios';preLoaderRoute:typeof R24Import;parentRoute:typeof rootRouteImport};'/usuarios':{id:'/usuarios';path:'/usuarios';fullPath:'/usuarios';preLoaderRoute:typeof R25Import;parentRoute:typeof rootRouteImport};'/configuracoes':{id:'/configuracoes';path:'/configuracoes';fullPath:'/configuracoes';preLoaderRoute:typeof R26Import;parentRoute:typeof rootRouteImport};'/configuracoes/modelos':{id:'/configuracoes/modelos';path:'/configuracoes/modelos';fullPath:'/configuracoes/modelos';preLoaderRoute:typeof R27Import;parentRoute:typeof rootRouteImport};'/auditoria':{id:'/auditoria';path:'/auditoria';fullPath:'/auditoria';preLoaderRoute:typeof R28Import;parentRoute:typeof rootRouteImport}}}
const rootRouteChildren={IndexRoute:R0,LoginRoute:R1,DashboardRoute:R2,ClientesRoute:R3,ClientesNovoRoute:R4,ClienteIdRoute:R5,FunilRoute:R6,AgendaRoute:R7,PropostasRoute:R8,PropostasNovaRoute:R9,PropostaIdRoute:R10,FinanciamentosRoute:R11,FinanciamentosNovaRoute:R12,ConsorciosRoute:R13,ConsorciosNovoRoute:R14,VendasFuturasRoute:R15,VendasFuturasNovaRoute:R16,DesistenciasRoute:R17,DesistenciasNovaRoute:R18,GestaoRoute:R19,MetasRoute:R20,EquipeRoute:R21,EquipeIdRoute:R22,DesempenhoRoute:R23,RelatoriosRoute:R24,UsuariosRoute:R25,ConfiguracoesRoute:R26,ConfiguracoesModelosRoute:R27,AuditoriaRoute:R28}
export const routeTree=rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()