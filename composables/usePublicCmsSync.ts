const PUBLIC_CMS_UPDATE_EVENT = 'gdcss:public-cms-updated'
const PUBLIC_CMS_UPDATE_KEY = 'gdcss:public-cms-updated-at'

/** Notifica outras abas e o site público aberto de que o CMS foi alterado. */
export function notifyPublicCmsChange() {
  if (!import.meta.client) return

  const updatedAt = String(Date.now())
  try {
    window.localStorage.setItem(PUBLIC_CMS_UPDATE_KEY, updatedAt)
  } catch {
    // A atualização da própria aba continua a funcionar mesmo que o browser
    // bloqueie o armazenamento entre abas.
  }
  window.dispatchEvent(new CustomEvent(PUBLIC_CMS_UPDATE_EVENT, { detail: updatedAt }))
}

export { PUBLIC_CMS_UPDATE_EVENT, PUBLIC_CMS_UPDATE_KEY }
