(() => {
  const meta = document.getElementById("meta");
  if (!meta) return;
  fetch("https://api.github.com/repos/Hitkowski/dart-eye-download/releases/latest")
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => {
      if (!j) return;
      const tag = j.tag_name || "latest";
      const sha = (j.body || "").match(/SHA256[:\s]*([a-fA-F0-9]{64})/);
      meta.textContent = sha
        ? `Release ${tag} · SHA256 ${sha[1].slice(0, 12)}…`
        : `Release ${tag} · SHA256 w opisie wydania`;
    })
    .catch(() => {});
})();
