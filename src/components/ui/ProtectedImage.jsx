const toPublicUrl = (value) => {
  if (!value) return value;
  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  const baseUrl = import.meta.env.BASE_URL || "/";
  if (value.startsWith(baseUrl)) return value;
  const normalized = value.startsWith("/") ? value.slice(1) : value;
  return `${baseUrl}${normalized}`;
};

const ProtectedImage = ({ src, alt, className = "", style = {}, loading = "lazy" }) => (
  <div className="relative" style={{ display: "inherit", width: "100%", height: "100%" }}>
    <img
      src={toPublicUrl(src)}
      alt={alt}
      loading={loading}
      draggable={false}
      className={`protected-img ${className}`}
      style={style}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.dataset.fallbackApplied) return;
        img.dataset.fallbackApplied = "1";
        img.src = toPublicUrl("/images/project-placeholder.svg");
      }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    />
    <span
      className="img-shield"
      aria-hidden="true"
      onContextMenu={(e) => e.preventDefault()}
    />
  </div>
);

export default ProtectedImage;
