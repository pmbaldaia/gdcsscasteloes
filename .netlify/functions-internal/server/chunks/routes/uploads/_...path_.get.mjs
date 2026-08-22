import { d as defineEventHandler, g as getRouterParam, c as createError, b as setHeader, e as sendStream } from '../../nitro/nitro.mjs';
import { ObjectId } from 'mongodb';
import { g as getMongoDb, a as getGridFsBucket } from '../../_/mongo.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'consola';
import 'fast-xml-parser';
import 'node:url';
import 'ipx';

const ____path__get = defineEventHandler(async (event) => {
  var _a;
  const id = decodeURIComponent(getRouterParam(event, "path") || "");
  if (!ObjectId.isValid(id)) {
    throw createError({ statusCode: 404, statusMessage: "Ficheiro n\xE3o encontrado" });
  }
  const objectId = new ObjectId(id);
  const db = await getMongoDb();
  const file = await db.collection("media.files").findOne({ _id: objectId });
  if (!file) {
    throw createError({ statusCode: 404, statusMessage: "Ficheiro n\xE3o encontrado" });
  }
  setHeader(event, "Content-Type", ((_a = file.metadata) == null ? void 0 : _a.mime) || "application/octet-stream");
  setHeader(event, "Content-Length", String(file.length));
  setHeader(event, "Cache-Control", "public, max-age=31536000, immutable");
  const bucket = await getGridFsBucket();
  return sendStream(event, bucket.openDownloadStream(objectId));
});

export { ____path__get as default };
//# sourceMappingURL=_...path_.get.mjs.map
