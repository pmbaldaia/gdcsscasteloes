import { createPublicRepository } from '~/modules/core/repository/public.repository'
export async function usePublicCmsPage(slug:string){
  const pagesRepo=createPublicRepository('pages')
  const blocksRepo=createPublicRepository('contentBlocks')
  const [{data:pages},{data:blocks}]=await Promise.all([
    // As páginas e os blocos são coleções partilhadas. Ao reutilizar a mesma
    // cache no cliente, a troca entre páginas CMS não volta a pedir estes dois
    // recursos depois da primeira navegação.
    useAsyncData('gdcss-public-pages',()=>pagesRepo.list(),{default:()=>[]}),
    useAsyncData('gdcss-public-content-blocks',()=>blocksRepo.list(),{default:()=>[]}),
  ])
  const page=computed(()=>pages.value.find((p:any)=>p.slug===slug&&p.status==='published'))
  const visibleBlocks=computed(()=>blocks.value.filter((b:any)=>b.pageSlug===slug&&b.status==='published').sort((a:any,b:any)=>(a.order||0)-(b.order||0)))
  return {page,blocks:visibleBlocks}
}
