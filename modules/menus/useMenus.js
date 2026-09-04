import { createPublicRepository } from '~/modules/core/repository/public.repository'
export async function useMenus(){
  const repo=createPublicRepository('menus')
  const {data,pending,error,refresh}=await useAsyncData('gdcss-public-menus',()=>repo.list(),{default:()=>[]})
  const header=computed(()=>[...(data.value||[])].filter(x=>x.location==='header'&&x.status==='active').sort((a,b)=>(a.order||0)-(b.order||0)))
  const footer=computed(()=>[...(data.value||[])].filter(x=>x.location==='footer'&&x.status==='active').sort((a,b)=>(a.order||0)-(b.order||0)))
  return {menus:data,header,footer,pending,error,refresh}
}
