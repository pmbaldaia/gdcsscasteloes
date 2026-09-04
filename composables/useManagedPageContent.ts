import { createPublicRepository } from '~/modules/core/repository/public.repository'

export async function useManagedPageContent(slug:string){
  const pagesRepo=createPublicRepository('pages')
  const blocksRepo=createPublicRepository('contentBlocks')
  const [{data:pages},{data:allBlocks}]=await Promise.all([
    useAsyncData(`managed-pages-${slug}`,()=>pagesRepo.list(),{default:()=>[]}),
    useAsyncData(`managed-blocks-${slug}`,()=>blocksRepo.list(),{default:()=>[]}),
  ])
  const page=computed(()=>pages.value.find((item:any)=>item.slug===slug&&item.status==='published')||null)
  const hasManagedPages=computed(()=>pages.value.length>0)
  const blocks=computed(()=>allBlocks.value.filter((item:any)=>item.pageSlug===slug&&item.status==='published').sort((a:any,b:any)=>(a.order||0)-(b.order||0)))
  const byKey=(key:string)=>computed(()=>blocks.value.find((item:any)=>item.key===key)||null)
  const value=(key:string,field:string,fallback:any='')=>computed(()=>{
    const row=blocks.value.find((item:any)=>item.key===key)
    const result=row?.[field]
    return result===undefined||result===null||result===''?fallback:result
  })
  return {page,blocks,byKey,value,hasManagedPages}
}
