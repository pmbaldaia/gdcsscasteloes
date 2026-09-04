<script setup lang="ts">
definePageMeta({layout:'admin'})
const service=useResourceService('contentBlocks')
const pagesService=useResourceService('pages')
const pages=ref<any[]>([])
onMounted(async()=>{try{pages.value=await pagesService.list()}catch{pages.value=[]}})
const types=[
  {value:'hero',label:'Destaque principal'},{value:'page-header',label:'Cabeçalho da página'},{value:'section-header',label:'Título de secção'},{value:'feature',label:'Destaque com ícone'},{value:'text',label:'Texto'},{value:'text-image',label:'Texto com imagem'},{value:'image-text',label:'Imagem com texto'},{value:'venue',label:'Localização / campo'},{value:'policy-section',label:'Secção de política / termos'},{value:'gallery',label:'Galeria'},{value:'games',label:'Jogos'},{value:'sponsors',label:'Patrocínios'},{value:'cta',label:'Chamada à ação'}
]
const areaOptions=[
  ['hero','Destaque principal da página inicial'],['features-header','Introdução dos destaques'],['feature-1','Destaque 1'],['feature-2','Destaque 2'],['feature-3','Destaque 3'],['feature-4','Destaque 4'],['feature-5','Destaque 5'],['feature-6','Destaque 6'],['next-game','Próximo jogo'],['sponsors','Patrocínios'],['cta','Chamada à ação'],['header','Cabeçalho da página'],['venue','Campo / localização'],['social-title','Órgãos sociais'],['assembly-title','Assembleia Geral'],['board-title','Direção'],['fiscal-title','Conselho Fiscal'],['sport-title','Estrutura desportiva'],['staff-title','Equipa técnica'],['squad-title','Plantel'],['contact-cta','Contacto / chamada à ação']
].map(([value,label])=>({value,label}))
const fields=computed(()=>[
  {key:'pageSlug',label:'Página',type:'select',options:pages.value.map(p=>({value:p.slug,label:p.title||p.slug})),hint:'Página onde este bloco é apresentado.'},
  {key:'key',label:'Área do site',type:'select',options:areaOptions,required:false,hint:'Identifica a zona existente do site controlada por este bloco.'},
  {key:'type',label:'Tipo de bloco',type:'select',filterable:true,options:types},
  {key:'eyebrow',label:'Antetítulo',required:false},{key:'title',label:'Título',required:false},{key:'content',label:'Conteúdo',type:'textarea',required:false},
  {key:'image',label:'Imagem desktop / principal',type:'image',required:false},{key:'mobileImage',label:'Imagem mobile',type:'image',required:false},{key:'icon',label:'Ícone',required:false,hint:'Nome do ícone já utilizado pelo site. Ex.: mdi:trophy.'},{key:'url',label:'Ligação / mapa',required:false},
  {key:'items',label:'Botões / ações',type:'buttons',required:false,hint:'O primeiro botão é Primário e os seguintes Secundários por defeito.'},
  {key:'order',label:'Posição na página',type:'number',defaultValue:1},{key:'status',label:'Visibilidade',type:'select',options:[{value:'published',label:'Visível no site'},{value:'draft',label:'Oculto no site'}],defaultValue:'published'}
] as any[])
</script>
<template><CmsResourceManager :service="service" title="Blocos de conteúdo" description="Controla as secções que já existem no site, mantendo o layout e a responsividade originais." :fields="fields" :columns="['pageSlug','key','type','title','order','status']"/></template>
