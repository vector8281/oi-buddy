import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {Outlet,createRootRouteWithContext,HeadContent,Scripts} from "@tanstack/react-router";
import {Toaster} from "sonner";
import appCss from "../styles.css?url";
function RootShell({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 shellComponent:RootShell,
 head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Honda CRM — Gestão Comercial"},{name:"description",content:"CRM para equipe de vendas de motocicletas Honda"}],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico"}]}),
 component:()=> <QueryClientProvider client={Route.useRouteContext().queryClient}><Outlet/><Toaster position="bottom-right" richColors/></QueryClientProvider>
});