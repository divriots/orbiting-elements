
const modules = ['lit','lit-html','lit/decorators.js','tslib'];
export default function require(library) {
  const idx = modules.findIndex(
    (it) =>
      it === library ||
      it.replace(/^((@[^/]*\/)?[^/@]*)(@[^/]*)?(\/[^@]*)?$/, '$1$4') ===
        library // removes version pinned, if any
  );
  if (idx === -1) throw new Error(`Import ${library} not found in project scope: ${modules}`);
  return import(`https://srv.divriots.com/packd/lit@^2.2.2,lit-html@next-major,lit@^2.2.2/decorators.js,tslib`).then((module) => module['packd_export_'+idx]);
}