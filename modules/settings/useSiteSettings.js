import { createPublicRepository } from '~/modules/core/repository/public.repository'
const fallback=[{id:'club',clubName:'GDCSS Castelões',contactEmail:'gdcsscasteloes1984@gmail.com'}]
export async function useSiteSettings(){const repo=createPublicRepository('settings',fallback);const {data}=await useAsyncData('gdcss-public-settings',()=>repo.list(),{default:()=>fallback});return {settings:computed(()=>data.value?.[0]||fallback[0])}}
