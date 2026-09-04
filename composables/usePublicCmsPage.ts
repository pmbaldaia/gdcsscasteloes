import { createPublicRepository } from '~/modules/core/repository/public.repository'
export async function usePublicCmsPage(slug:string){
  const pagesRepo=createPublicRepository('pages')
  const blocksRepo=createPublicRepository('contentBlocks')
  const [{data:pages},{data:blocks}]=await Promise.all([
    useAsyncData(`cms-page-${slug}`,()=>pagesRepo.list(),{default:()=>[]}),
    useAsyncData(`cms-blocks-${slug}`,()=>blocksRepo.list(),{default:()=>[]}),
  ])
  const page=computed(()=>pages.value.find((p:any)=>p.slug===slug&&p.status==='published'))
  const visibleBlocks=computed(()=>blocks.value.filter((b:any)=>b.pageSlug===slug&&b.status==='published').sort((a:any,b:any)=>(a.order||0)-(b.order||0)))
  return {page,blocks:visibleBlocks}
}
