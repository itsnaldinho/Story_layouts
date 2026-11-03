function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Story Layouts')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function folderId_(u) {
  var m = String(u).match(/[-\w]{25,}/);
  return m ? m[0] : u;
}

// Lista as imagens de uma pasta do Drive (link ou ID)
function listFolder(url) {
  var it = DriveApp.getFolderById(folderId_(url)).getFiles(), out = [];
  while (it.hasNext()) {
    var f = it.next();
    if (f.getMimeType().indexOf('image/') === 0) out.push({ id: f.getId(), name: f.getName() });
  }
  out.sort(function (a, b) { return a.name < b.name ? -1 : 1; });
  return out;
}

// Miniatura pequena (para a galeria)
function getThumb(id) {
  var f = DriveApp.getFileById(id);
  var b = f.getThumbnail() || f.getBlob();
  return { t: b.getContentType(), d: Utilities.base64Encode(b.getBytes()) };
}

// Arquivo original em resolução total (só é pedido na hora de editar/exportar)
function getFull(id) {
  var b = DriveApp.getFileById(id).getBlob();
  return { t: b.getContentType(), d: Utilities.base64Encode(b.getBytes()) };
}
