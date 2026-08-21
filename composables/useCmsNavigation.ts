export interface CmsNavItem{label:string;icon:string;to:string} export interface CmsNavGroup{label:string;items:CmsNavItem[]}
export const useCmsNavigation=()=>({groups:[
 {label:'Geral',items:[{label:'Painel de controlo',icon:'lucide:layout-dashboard',to:'/admin'}]},
 {label:'Competição',items:[{label:'Jogos',icon:'lucide:calendar-days',to:'/admin/jogos'},{label:'Equipas',icon:'lucide:shield',to:'/admin/equipas'}]},
 {label:'Estrutura',items:[{label:'Plantel',icon:'lucide:users',to:'/admin/plantel'},{label:'Equipa Técnica',icon:'lucide:clipboard-list',to:'/admin/equipa-tecnica'},{label:'Direção',icon:'lucide:landmark',to:'/admin/direcao'}]},
 {label:'Comunicação',items:[{label:'Eventos',icon:'lucide:party-popper',to:'/admin/eventos'},{label:'Galeria',icon:'lucide:images',to:'/admin/galeria'},{label:'Patrocínios',icon:'lucide:badge-euro',to:'/admin/patrocinios'},{label:'Oportunidades',icon:'lucide:gift',to:'/admin/oportunidades'},{label:'Mensagens',icon:'lucide:mail',to:'/admin/mensagens'}]},
 {label:'Clube',items:[{label:'Sócios',icon:'lucide:user-round-check',to:'/admin/socios'},{label:'Multimédia',icon:'lucide:image',to:'/admin/media'}]},
 {label:'Sistema',items:[{label:'Utilizadores',icon:'lucide:key-round',to:'/admin/utilizadores'},{label:'Definições',icon:'lucide:settings-2',to:'/admin/definicoes'}]}
]})
