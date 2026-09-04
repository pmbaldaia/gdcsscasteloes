export const useResourceService = (resource: string) => {
  const api = useApi()
  return {
    list: () => api<any[]>(`/api/${resource}`),
    create: (payload:any) => api<any>(`/api/${resource}`, { method: 'POST', body: payload }),
    update: (id:string|number,payload:any) => api<any>(`/api/${resource}/${id}`, { method: 'PUT', body: payload }),
    remove: (id:string|number) => api<void>(`/api/${resource}/${id}`, { method: 'DELETE' }),
  }
}
