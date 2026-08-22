import { k as useState } from './server.mjs';

let resolver = null;
const useConfirm = () => {
  const state = useState("cms-confirm-dialog", () => ({
    open: false,
    title: "Confirmar a\xE7\xE3o",
    message: "",
    confirmLabel: "Confirmar",
    cancelLabel: "Cancelar",
    tone: "danger"
  }));
  const ask = (options = {}) => new Promise((resolve) => {
    if (resolver) resolver(false);
    resolver = resolve;
    state.value = {
      open: true,
      title: options.title || "Confirmar a\xE7\xE3o",
      message: options.message || "Tens a certeza de que queres continuar?",
      confirmLabel: options.confirmLabel || "Confirmar",
      cancelLabel: options.cancelLabel || "Cancelar",
      tone: options.tone || "danger"
    };
  });
  const settle = (value) => {
    state.value.open = false;
    const current = resolver;
    resolver = null;
    current == null ? void 0 : current(value);
  };
  const confirm = () => settle(true);
  const cancel = () => settle(false);
  return { state, ask, confirm, cancel };
};

export { useConfirm as u };
//# sourceMappingURL=useConfirm-CFUPPoka.mjs.map
