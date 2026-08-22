import { e as useAuth } from './server.mjs';

const useApi = () => {
  const { authHeaders } = useAuth();
  return (path, options = {}) => $fetch(path, { ...options, headers: { ...authHeaders(), ...options.headers || {} } });
};

export { useApi as u };
//# sourceMappingURL=useApi-3EScbZE4.mjs.map
