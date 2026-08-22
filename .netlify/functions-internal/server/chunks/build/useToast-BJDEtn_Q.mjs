import { k as useState } from './server.mjs';

const toastTimers = /* @__PURE__ */ new Map();
const useToast = () => {
  const toasts = useState("cms-toasts", () => []);
  const remove = (id) => {
    const toast = toasts.value.find((item) => item.id === id);
    if (!toast) return;
    toast.leaving = true;
    const timer = toastTimers.get(id);
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      toasts.value = toasts.value.filter((item) => item.id !== id);
      toastTimers.delete(id);
    }, 220);
  };
  const show = ({ type = "info", title, message = "", duration = 3600 }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    toasts.value.push({ id, type, title, message, duration });
    return id;
  };
  const success = (title, message, duration) => show({ type: "success", title, message, duration });
  const error = (title, message, duration = 5200) => show({ type: "error", title, message, duration });
  const warning = (title, message, duration) => show({ type: "warning", title, message, duration });
  const info = (title, message, duration) => show({ type: "info", title, message, duration });
  return { toasts, show, success, error, warning, info, remove };
};

export { useToast as u };
//# sourceMappingURL=useToast-BJDEtn_Q.mjs.map
