import { MongoClient } from 'mongodb'
import crypto from 'node:crypto'

const uri=process.env.MONGODB_URI
const dbName=process.env.MONGODB_DB||'gdcsscasteloes'
if(!uri) throw new Error('MONGODB_URI não definido no .env')
const client=new MongoClient(uri)
await client.connect()

const now=new Date().toISOString()
const pages=[
  ['inicio','Início'],['sobre','Sobre nós'],['equipa','Equipa'],['calendario','Calendário'],['eventos','Eventos'],['galeria','Galeria'],['oportunidades','Oportunidades'],['contacto','Contacto'],['politicas/cookies','Política de Cookies'],['politicas/privacidade','Política de Privacidade'],['politicas/servico','Termos de Serviço']
].map(([slug,title])=>({slug,title,status:'published',indexable:true}))

const blocks=[
  {pageSlug:'inicio',key:'hero',type:'hero',eyebrow:'G.D.C.S.S. Castelões',title:'Bem-vindo ao site oficial do G.D.C.S.S. Castelões',content:'Celebrando com orgulho 41 anos de história, dedicação e conquistas, o G.D.C.S.S. Castelões foi fundado a 11 de abril de 1984, na nossa amada freguesia de Castelões. Venha fazer parte dessa jornada, repleta de momentos inesquecíveis e vitórias que marcaram a nossa comunidade!',image:'/img/gdcss-casteloes-tarja.webp',items:['Plantel|/equipa#plantel|primary','Calendário|/calendario|secondary'],order:1},
  {pageSlug:'inicio',key:'features-header',type:'section-header',title:'Vive o Clube. Dá Tudo em Campo.',content:'Conhece o que te espera quando vestes esta camisola. Aqui jogas com garra.',order:2},
  ...[
    ['feature-1','Treina no Máximo','Aqui treinas com intensidade e foco. Cada sessão é uma oportunidade para te superares dentro das quatro linhas.','game-icons:soccer-field'],
    ['feature-2','Faz Parte da História','Desde 1984 que deixamos marca. Junta-te a esta tradição cheia de conquistas e paixão pelo futebol.','mdi:history'],
    ['feature-3','Luta por Títulos','Entramos em campo para ganhar. Participamos em campeonatos com garra e orgulho nas nossas cores.','mdi:trophy'],
    ['feature-4','Mostra o Teu Talento','Queremos ajudar-te a crescer como jogador. Focamo-nos na tua evolução técnica, tática e pessoal.','mdi:soccer'],
    ['feature-5','Liga-te à Comunidade','Aqui sentes o apoio dentro e fora do campo. Somos mais do que um clube — somos família.','mdi:account-group'],
    ['feature-6','Joga com o Coração','Vestir esta camisola é mais do que jogar futebol. É entrega, paixão e respeito por quem a defende.','mdi:heart'],
  ].map((x,i)=>({pageSlug:'inicio',key:x[0],type:'feature',title:x[1],content:x[2],icon:x[3],order:3+i})),
  {pageSlug:'inicio',key:'next-game',type:'games',title:'Próximo Jogo',order:10},
  {pageSlug:'inicio',key:'sponsors',type:'sponsors',title:'Patrocínios',order:11},
  {pageSlug:'inicio',key:'cta',type:'cta',title:'Junta-te à nossa paixão pelo desporto',content:'No GDCSS Castelões, promovemos o espírito de equipa, o desenvolvimento dos jovens e o orgulho na nossa freguesia. Seja como atleta, sócio ou apoiador, há um lugar para ti no nosso clube.',items:['Conhecer o Clube|/sobre/|primary','Torna-te Sócio|/contacto/|secondary'],order:12},

  {pageSlug:'sobre',key:'header',type:'page-header',title:'Sobre nós',content:'Localização e imagem do campo do Castelões',order:1},
  {pageSlug:'sobre',key:'venue',type:'venue',title:'Campo Desportivo de Castelões',content:'Rua do Complexo Desportivo, Castelões',image:'/campo/campo.webp',url:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19377.718285271432!2d-8.186913368261719!3d41.23438882286855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24969cc932a435%3A0x1cc3b348f37018b5!2sComplexo%20Desportivo%20de%20Castel%C3%B5es!5e1!3m2!1spt-PT!2spt!4v1747249901722!5m2!1spt-PT!2spt',order:2},

  {pageSlug:'equipa',key:'header',type:'page-header',title:'Equipa 2026/2027',content:'Órgãos sociais, equipa técnica e plantel do G.D.C.S.S. Castelões',order:1},
  {pageSlug:'equipa',key:'social-title',type:'section-header',title:'Órgãos Sociais',order:2},
  {pageSlug:'equipa',key:'assembly-title',type:'section-header',title:'Assembleia Geral',order:3},
  {pageSlug:'equipa',key:'board-title',type:'section-header',title:'Direção',order:4},
  {pageSlug:'equipa',key:'fiscal-title',type:'section-header',title:'Conselho Fiscal',order:5},
  {pageSlug:'equipa',key:'sport-title',type:'section-header',title:'Estrutura Desportiva',order:6},
  {pageSlug:'equipa',key:'staff-title',type:'section-header',title:'Equipa Técnica',order:7},
  {pageSlug:'equipa',key:'squad-title',type:'section-header',title:'Plantel',order:8},

  {pageSlug:'calendario',key:'header',type:'page-header',title:'Calendário',content:'Consulta o calendário oficial de jogos do clube por época.',order:1},
  {pageSlug:'eventos',key:'header',type:'page-header',title:'Próximos Eventos',content:'Não percas as nossas próximas festas e eventos! Vem divertir-te connosco!',order:1},
  {pageSlug:'galeria',key:'header',type:'page-header',title:'Galeria',content:'Espreita alguns dos momentos que captámos em imagens!',order:1},
  {pageSlug:'oportunidades',key:'header',type:'page-header',title:'Oportunidades Exclusivas para Sócios',content:'Garante já o teu kit oficial do clube com condições especiais nas cotas. Escolhe a opção que preferes.',order:1},
  {pageSlug:'oportunidades',key:'contact-cta',type:'cta',content:'Queres garantir o teu kit oficial ou esclarecer alguma dúvida? Entra em contacto com a direção.',items:['Contactar Direção|/contacto|primary'],order:2},
  {pageSlug:'contacto',key:'header',type:'page-header',title:'Contacto',content:'Preenche o formulário e entra em contacto connosco.\nEnvia-nos uma mensagem ou email. Respondemos o mais rápido possível!',order:1},

  {pageSlug:'politicas/cookies',key:'header',type:'page-header',title:'Política de Cookies',content:'O G.D.C.S.S. Castelões utiliza cookies para proporcionar uma navegação mais eficiente e personalizada. A nossa Política de Cookies visa esclarecer como e por que motivo utilizamos cookies no nosso site.',order:1},
  {pageSlug:'politicas/privacidade',key:'header',type:'page-header',title:'Política de Privacidade',content:'O G.D.C.S.S. Castelões preza pela transparência e segurança dos seus dados pessoais. A nossa Política de Privacidade visa esclarecer de que forma recolhemos, utilizamos, protegemos e partilhamos as suas informações pessoais.',order:1},
  {pageSlug:'politicas/servico',key:'header',type:'page-header',title:'Termos de Serviço',content:'Os Termos de Serviço estabelecem as condições para o uso do site do G.D.C.S.S. Castelões. Ao aceder ou utilizar o nosso site, você concorda em cumprir os termos e condições descritos abaixo.',order:1},

  {pageSlug:'politicas/cookies',key:'cookies-intro',type:'policy-section',content:'A utilização de cookies no site do G.D.C.S.S. Castelões tem como objetivo garantir a melhor experiência de navegação, permitindo-nos personalizar conteúdos e funcionalidades. Ao continuar a navegar neste site, concorda com a utilização de cookies conforme descrito nesta política.',order:2},
  {pageSlug:'politicas/cookies',key:'cookies-what',type:'policy-section',title:'1. O que são Cookies?',content:'Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um site. Estes ficheiros contêm informações sobre a navegação e permitem ao site recordar preferências e comportamentos anteriores.',order:3},
  {pageSlug:'politicas/cookies',key:'cookies-types',type:'policy-section',title:'2. Tipos de Cookies Utilizados',content:'Utilizamos diferentes tipos de cookies para as seguintes finalidades:',items:['Cookies Essenciais: necessários para o funcionamento básico do site e para recordar preferências de navegação.','Cookies Analíticos: usados para recolher dados sobre a utilização do site e melhorar a experiência.','Cookies de Publicidade: utilizados para personalizar anúncios e ofertas com base nos interesses dos utilizadores.'],order:4},
  {pageSlug:'politicas/cookies',key:'cookies-manage',type:'policy-section',title:'3. Como Gerir os Cookies',content:'Pode alterar as configurações do navegador para recusar cookies ou receber um aviso sempre que um cookie for enviado. Desativar cookies pode afetar algumas funcionalidades do site.',order:5},
  {pageSlug:'politicas/cookies',key:'cookies-consent',type:'policy-section',title:'4. Consentimento para Utilização de Cookies',content:'Ao continuar a navegar no nosso site, consente com a utilização de cookies conforme descrito nesta Política de Cookies. Caso não concorde, recomendamos que altere as configurações do navegador ou deixe de utilizar o site. Para mais informações, entre em contacto connosco.',order:6},

  {pageSlug:'politicas/privacidade',key:'privacy-intro',type:'policy-section',content:'O G.D.C.S.S. Castelões está comprometido com a proteção da sua privacidade. Esta Política de Privacidade informa sobre os dados pessoais recolhidos, a finalidade da recolha e os seus direitos relativamente ao tratamento dessas informações.',order:2},
  {pageSlug:'politicas/privacidade',key:'privacy-data',type:'policy-section',title:'1. Dados Pessoais Recolhidos',content:'Recolhemos informações pessoais, como nome, endereço de e-mail, dados de contacto e informação necessária para inscrições em eventos ou outros serviços do clube. Podemos também recolher dados de navegação.',order:3},
  {pageSlug:'politicas/privacidade',key:'privacy-purpose',type:'policy-section',title:'2. Finalidade da Recolha dos Dados',content:'Os dados pessoais recolhidos são utilizados para:',items:['Gestão de inscrições em eventos, torneios e outras atividades promovidas pelo clube.','Envio de informações relevantes sobre eventos, atividades e atualizações.','Melhoria da experiência do utilizador e adaptação de conteúdos e serviços.','Cumprimento de obrigações legais e regulatórias.'],order:4},
  {pageSlug:'politicas/privacidade',key:'privacy-protection',type:'policy-section',title:'3. Proteção dos Dados Pessoais',content:'O G.D.C.S.S. Castelões adota práticas de segurança para proteger os dados pessoais dos utilizadores contra acessos não autorizados, perda ou alteração indevida.',order:5},
  {pageSlug:'politicas/privacidade',key:'privacy-rights',type:'policy-section',title:'4. Direitos dos Utilizadores',content:'De acordo com a legislação em vigor, os utilizadores têm o direito de aceder, corrigir, atualizar ou eliminar os seus dados pessoais. Para exercer estes direitos ou esclarecer dúvidas, contacte-nos através dos canais disponíveis.',order:6},
  {pageSlug:'politicas/privacidade',key:'privacy-cookies',type:'policy-section',title:'5. Cookies',content:'Utilizamos cookies para melhorar a experiência no site. Consulte também a Política de Cookies disponível em /politicas/cookies. Ao utilizar o site, concorda com os termos desta Política de Privacidade.',order:7},

  {pageSlug:'politicas/servico',key:'terms-intro',type:'policy-section',content:'Estes Termos de Serviço regulam o acesso e a utilização do site do G.D.C.S.S. Castelões. Ao utilizar o site, concorda em cumprir estes termos, que podem ser alterados periodicamente.',order:2},
  {pageSlug:'politicas/servico',key:'terms-acceptance',type:'policy-section',title:'1. Aceitação dos Termos',content:'Ao aceder e utilizar este site, o utilizador reconhece que leu, compreendeu e concorda com os Termos de Serviço descritos nesta página.',order:3},
  {pageSlug:'politicas/servico',key:'terms-ip',type:'policy-section',title:'2. Direitos de Propriedade Intelectual',content:'Todo o conteúdo do site, incluindo textos, imagens, vídeos, logótipos e marcas registadas, é protegido por direitos de autor e outros direitos de propriedade intelectual. O uso não autorizado é proibido.',order:4},
  {pageSlug:'politicas/servico',key:'terms-user',type:'policy-section',title:'3. Responsabilidades do Utilizador',content:'O utilizador compromete-se a utilizar o site de forma responsável, respeitando as leis aplicáveis e sem prejudicar a experiência de outros utilizadores.',order:5},
  {pageSlug:'politicas/servico',key:'terms-liability',type:'policy-section',title:'4. Limitação de Responsabilidade',content:'O G.D.C.S.S. Castelões não se responsabiliza por danos diretos ou indiretos resultantes da utilização do site, incluindo falhas técnicas, interrupções no acesso ou dados incorretos.',order:6},
  {pageSlug:'politicas/servico',key:'terms-changes',type:'policy-section',title:'5. Modificação dos Termos',content:'O G.D.C.S.S. Castelões reserva-se o direito de modificar estes Termos de Serviço a qualquer momento. As alterações serão publicadas nesta página e entram em vigor a partir da data de publicação. Para dúvidas adicionais, entre em contacto connosco.',order:7},
]

try{
  const db=client.db(dbName)
  const menus=db.collection('menus')
  const pagesCol=db.collection('pages')
  const blocksCol=db.collection('contentBlocks')
  // Só inicializa conteúdo numa BD verdadeiramente nova. Em BDs já usadas,
  // respeita conteúdos e remoções feitas no CMS.
  const hasExistingCms=Boolean(await pagesCol.estimatedDocumentCount())||Boolean(await blocksCol.estimatedDocumentCount())||Boolean(await menus.estimatedDocumentCount())
  const settings=await db.collection('settings').findOne({})
  if(!hasExistingCms&&await menus.countDocuments({})===0){
    const navigation=Array.isArray(settings?.navigation)?settings.navigation:[]
    const header=(navigation.length?navigation:[
      {title:'Sobre nós',path:'/sobre/',visible:true},{title:'Equipa',path:'/equipa/',visible:true},{title:'Calendário',path:'/calendario/',visible:true},{title:'Eventos',path:'/eventos/',visible:true},{title:'Galeria',path:'/galeria/',visible:true},{title:'Oportunidades',path:'/oportunidades/',visible:true}
    ]).map((item,index)=>({id:crypto.randomUUID(),label:item.title||item.label,url:item.path||item.url,location:'header',order:index+1,target:'_self',status:item.visible===false?'draft':'active',createdAt:now,updatedAt:now}))
    const footer=[['Contactos','/contacto'],['Política de Cookies','/politicas/cookies'],['Política de Privacidade','/politicas/privacidade'],['Termos de Serviço','/politicas/servico'],['Manual de Acolhimento e Boas Práticas','/pdf/manual-acolhimento-boas-praticas.pdf']].map(([label,url],index)=>({id:crypto.randomUUID(),label,url,location:'footer',order:index+1,target:url.endsWith('.pdf')?'_blank':'_self',status:'active',createdAt:now,updatedAt:now}))
    await menus.insertMany([...header,...footer])
  }

  if(!hasExistingCms) for(const page of pages){
    await pagesCol.updateOne({slug:page.slug},{$setOnInsert:{id:crypto.randomUUID(),...page,createdAt:now},$set:{updatedAt:now}},{upsert:true})
  }
  let created=0,kept=0
  for(const block of hasExistingCms?[]:blocks){
    const exists=await blocksCol.findOne({pageSlug:block.pageSlug,key:block.key})
    if(exists){kept++;continue}
    const migrated={...block}
    if(block.pageSlug==='inicio'&&block.key==='hero'&&settings){
      migrated.eyebrow=settings.heroEyebrow||migrated.eyebrow
      migrated.title=settings.heroTitle||migrated.title
      migrated.content=settings.heroDescription||migrated.content
      migrated.image=settings.heroDesktopImage||migrated.image
      migrated.mobileImage=settings.heroMobileImage||settings.heroDesktopImage||migrated.image
    }
    await blocksCol.insertOne({id:crypto.randomUUID(),status:'published',...migrated,createdAt:now,updatedAt:now});created++
  }
  await menus.createIndex({id:1},{unique:true,sparse:true}).catch(()=>{})
  await menus.createIndex({location:1,status:1,order:1}).catch(()=>{})
  await pagesCol.createIndex({id:1},{unique:true,sparse:true}).catch(()=>{})
  await pagesCol.createIndex({slug:1},{unique:true,sparse:true}).catch(()=>{})
  await blocksCol.createIndex({id:1},{unique:true,sparse:true}).catch(()=>{})
  await blocksCol.createIndex({pageSlug:1,status:1,order:1}).catch(()=>{})
  await blocksCol.createIndex({pageSlug:1,key:1},{unique:true,sparse:true}).catch(()=>{})
  console.log(`CMS atualizado em ${dbName}: ${hasExistingCms?'conteúdo existente preservado':`${pages.length} páginas; ${created} blocos criados; ${kept} blocos existentes preservados`}.`)
}finally{await client.close()}
