import { u as useApi } from './useApi-3EScbZE4.mjs';

const mediaService = () => {
  const api = useApi();
  return { list: () => api("/api/media"), async upload(file) {
    const data = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result));
      r.onerror = () => reject(r.error);
      r.readAsDataURL(file);
    });
    return api("/api/media", { method: "POST", body: { filename: file.name, mime: file.type, data } });
  }, remove: (id) => api(`/api/media/${encodeURIComponent(id)}`, { method: "DELETE" }) };
};

export { mediaService as m };
//# sourceMappingURL=media.service-gqqdC7_q.mjs.map
