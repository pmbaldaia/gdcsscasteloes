function applyImageFallback(event, fallback, element) {
  var _a;
  const image = (_a = event.target instanceof HTMLImageElement ? event.target : null) != null ? _a : element instanceof HTMLImageElement ? element : null;
  if (!(image == null ? void 0 : image.dataset)) return false;
  const nextSrc = fallback || image.dataset.fallback;
  if (!nextSrc || image.dataset.fallbackApplied === "1") return false;
  image.dataset.fallbackApplied = "1";
  image.src = nextSrc;
  return true;
}

export { applyImageFallback as a };
//# sourceMappingURL=imageFallback-Dlnrmqzg.mjs.map
