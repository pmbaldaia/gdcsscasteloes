import { d as defineEventHandler, g as getRouterParam, r as readBody, s as setResponseStatus, c as createError, a as getHeader } from '../../nitro/nitro.mjs';
import { g as getMongoDb, a as getGridFsBucket } from '../../_/mongo.mjs';
import crypto from 'node:crypto';
import { ObjectId } from 'mongodb';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'vue';
import 'consola';
import 'fast-xml-parser';
import 'node:url';
import 'ipx';

function createCrudService(repository, { normalize = (value) => value, publicFilter = (row) => row.status !== 'draft' } = {}) {
  return {
    list: () => repository.readAll(),
    async listPublic() { return (await repository.readAll()).filter(publicFilter) },
    get: (id) => repository.findById(id),
    create: (payload) => repository.create(normalize(payload)),
    update: (id, payload) => repository.update(id, normalize(payload)),
    remove: (id) => repository.remove(id)
  }
}

async function collectionFor(resource) {
  const db = await getMongoDb();
  const collection = db.collection(resource);
  await collection.createIndex({ id: 1 }, { unique: true, sparse: true });
  if (resource === 'users') await collection.createIndex({ email: 1 }, { unique: true, sparse: true });
  return collection
}

const clean$1 = (row) => {
  if (!row) return null
  const { _id, ...data } = row;
  return data
};

function createMongoRepository(resource) {
  return {
    async readAll() {
      const collection = await collectionFor(resource);
      return (await collection.find({}).toArray()).map(clean$1)
    },

    async findById(id) {
      const collection = await collectionFor(resource);
      return clean$1(await collection.findOne({ id: String(id) }))
    },

    async create(payload) {
      const collection = await collectionFor(resource);
      const now = new Date().toISOString();
      const item = {
        ...payload,
        id: String(payload.id ?? crypto.randomUUID()),
        createdAt: payload.createdAt ?? now,
        updatedAt: now,
      };
      await collection.insertOne(item);
      return clean$1(item)
    },

    async update(id, payload) {
      const collection = await collectionFor(resource);
      const current = await collection.findOne({ id: String(id) });
      if (!current) return null
      const { _id, id: ignoredId, ...safePayload } = payload || {};
      await collection.updateOne(
        { id: String(id) },
        { $set: { ...safePayload, updatedAt: new Date().toISOString() } },
      );
      return clean$1(await collection.findOne({ id: String(id) }))
    },

    async remove(id) {
      const collection = await collectionFor(resource);
      const result = await collection.deleteOne({ id: String(id) });
      return result.deletedCount > 0
    },
  }
}

const gamesResource = 'games';

const gamesRepository = createMongoRepository(gamesResource);

const gamesService = createCrudService(gamesRepository, {
  normalize: (p) => ({
    season: p.season ?? '',
    jornada: p.jornada ?? '',
    date: p.date ?? '',
    time: p.time ?? '',
    teams: Array.isArray(p.teams) ? p.teams.slice(0,2) : [],
    venue: p.venue ?? '',
    address: p.address ?? '',
    volta: Number(p.volta ?? 1),
    status: p.status ?? 'scheduled',
    publicationStatus: p.publicationStatus ?? 'published'
  }),
  publicFilter: (row) => row.publicationStatus !== 'draft' && !['draft','cancelled'].includes(row.status)
});

const teamsResource = 'teams';

const teamsRepository = createMongoRepository(teamsResource);

const teamsService = createCrudService(teamsRepository, { normalize: (p) => ({ name: p.name ?? '', logo: p.logo ?? '', status:p.status??'published' }), publicFilter: (row) => row.status !== 'draft' });

const eventsResource = 'events';

const eventsRepository = createMongoRepository(eventsResource);

const eventsService = createCrudService(eventsRepository, { normalize: (p) => ({ nome:p.nome??'', slug:p.slug??'', data:p.data??'', hora:p.hora??'', descricao:p.descricao??'', imagem:p.imagem??'', local:p.local??'', detalhes:p.detalhes??'', status:p.status??'published' }) });

const galleryResource = 'gallery';

const galleryRepository = createMongoRepository(galleryResource);

const normalizeOrder = (value) => {
  if (value === '' || value === null || value === undefined) return null
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : null
};

const galleryService = createCrudService(galleryRepository, {
  normalize: (payload) => ({
    title: payload.title ?? '',
    images: Array.isArray(payload.images) ? payload.images : [],
    order: normalizeOrder(payload.order),
    status: payload.status ?? 'published',
  }),
});

const membersResource = 'members';

const membersRepository = createMongoRepository(membersResource);

const membersService = createCrudService(membersRepository, { normalize: (p) => ({ nome:p.nome??'', email:p.email??'', telefone:p.telefone??'', dataAssociacao:p.dataAssociacao??'' }), publicFilter: () => false });

const boardResource = 'board';

const boardRepository = createMongoRepository(boardResource);

const boardService = createCrudService(boardRepository, { normalize: (p) => ({ nome:p.nome??'', funcao:p.funcao??'', img:p.img??'', group:p.group??'Direção', status:p.status??'published' }) });

const staffResource = 'staff';

const staffRepository = createMongoRepository(staffResource);

const baseService$1 = createCrudService(staffRepository, {
  normalize: (p) => ({
    name: p.name ?? '',
    img: p.img ?? '',
    status: p.status ?? 'published',
    order: Number(p.order ?? p.id ?? 0)
  })
});

const byOrder$1 = (rows) => [...rows].sort((a,b) => Number(a.order ?? a.id ?? 0) - Number(b.order ?? b.id ?? 0));

const staffService = {
  ...baseService$1,
  async list(){ return byOrder$1(await baseService$1.list()) },
  async listPublic(){ return byOrder$1(await baseService$1.listPublic()) }
};

const playersResource = 'players';

const playersRepository = createMongoRepository(playersResource);

const baseService = createCrudService(playersRepository, {
  normalize: (p) => ({
    name: p.name ?? '',
    img: p.img ?? '',
    status: p.status ?? 'published',
    publishedAt: p.publishedAt || null,
    order: Number(p.order ?? p.id ?? 0)
  }),
  publicFilter: (row) => row.status !== 'draft' && (!row.publishedAt || new Date(row.publishedAt).getTime() <= Date.now())
});

const byOrder = (rows) => [...rows].sort((a,b) => Number(a.order ?? a.id ?? 0) - Number(b.order ?? b.id ?? 0));

const playersService = {
  ...baseService,
  async list(){ return byOrder(await baseService.list()) },
  async listPublic(){ return byOrder(await baseService.listPublic()) }
};

const usersRepository = createMongoRepository('users');

const secret = process.env.AUTH_SECRET || 'gdcss-dev-change-this-secret';
const ttlSeconds = Number(process.env.AUTH_TTL_SECONDS || 60 * 60 * 8);

const b64 = (value) => Buffer.from(value).toString('base64url');
const unb64 = (value) => Buffer.from(value, 'base64url').toString('utf8');
const sign = (value) => crypto.createHmac('sha256', secret).update(value).digest('base64url');

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.pbkdf2Sync(password, salt, 120000, 32, 'sha256').toString('hex');
  return `${salt}:${hash}`
}
function verifyPassword(password, stored = '') {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false
  const candidate = crypto.pbkdf2Sync(password, salt, 120000, 32, 'sha256').toString('hex');
  return crypto.timingSafeEqual(Buffer.from(candidate), Buffer.from(hash))
}
function createToken(user) {
  const payload = b64(JSON.stringify({ sub: user.id, email: user.email, name: user.name, role: user.role, exp: Math.floor(Date.now()/1000)+ttlSeconds }));
  return `${payload}.${sign(payload)}`
}
function verifyToken(token = '') {
  const [payload, signature] = token.split('.');
  if (!payload || !signature || sign(payload) !== signature) return null
  try {
    const data = JSON.parse(unb64(payload));
    if (!data.exp || data.exp < Math.floor(Date.now()/1000)) return null
    return data
  } catch { return null }
}

const clean = ({ passwordHash, ...user }) => user;
const normalizeEmail = (email='') => email.trim().toLowerCase();
const allowedRoles = new Set(['admin','editor']);
const normalizeRole = (role='editor') => {
  if(!allowedRoles.has(role)){ const e=new Error('Perfil inválido. Usa Administrador ou Editor.'); e.statusCode=400; throw e }
  return role
};
const usersService = {
  async list(){ return (await usersRepository.readAll()).map(clean) },
  async get(id){ const u=await usersRepository.findById(id); return u?clean(u):null },
  async findByEmail(email){ return (await usersRepository.readAll()).find(u=>u.email===normalizeEmail(email))||null },
  async create(payload){
    if(!payload.name?.trim() || !normalizeEmail(payload.email) || !payload.password || payload.password.length<8) { const e=new Error('Nome, email e palavra-passe (mín. 8 caracteres) são obrigatórios'); e.statusCode=400; throw e }
    if(await this.findByEmail(payload.email)){ const e=new Error('Já existe um utilizador com este email'); e.statusCode=409; throw e }
    const row=await usersRepository.create({ id:crypto.randomUUID(), name:payload.name.trim(), email:normalizeEmail(payload.email), role:normalizeRole(payload.role||'editor'), active:payload.active!==false, passwordHash:hashPassword(payload.password), createdAt:new Date().toISOString(), updatedAt:new Date().toISOString() });
    return clean(row)
  },
  async update(id,payload){
    const current=await usersRepository.findById(id); if(!current) return null
    const patch={ name:payload.name?.trim()??current.name, email:normalizeEmail(payload.email??current.email), role:normalizeRole(payload.role??current.role), active:payload.active??current.active, updatedAt:new Date().toISOString() };
    if(payload.password) patch.passwordHash=hashPassword(payload.password);
    const row=await usersRepository.update(id,patch); return clean(row)
  },
  remove:(id)=>usersRepository.remove(id)
};

const authService = {
  async login(email,password){
    const user=await usersService.findByEmail(email);
    if(!user || !user.active || !verifyPassword(password,user.passwordHash)){
      const e=new Error('Email ou palavra-passe inválidos');e.statusCode=401;throw e
    }
    if(!['admin','editor'].includes(user.role)){
      const e=new Error('Este perfil já não tem acesso ao CMS. Contacta um administrador.');e.statusCode=403;throw e
    }
    return {token:createToken(user),user:{id:user.id,name:user.name,email:user.email,role:user.role}}
  },
  async register(payload){ const user=await usersService.create({...payload,role:'editor'}); const raw=await usersService.findByEmail(user.email); return {token:createToken(raw),user} }
};

const allowed = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  'application/pdf',
]);

const convertibleImages = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
]);

const safe = (name = 'file') =>
  name.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-');

const toBuffer = (value = '') =>
  Buffer.from(String(value).replace(/^data:[^;]+;base64,/, ''), 'base64');

const mediaService = {
  async list(baseUrl = '') {
    const db = await getMongoDb();
    const rows = await db.collection('media.files').find({}).sort({ uploadDate: -1 }).toArray();
    return rows.map((row) => ({
      id: String(row._id),
      name: row.filename,
      url: `${baseUrl}/uploads/${encodeURIComponent(String(row._id))}`,
      size: row.length,
      mime: row.metadata?.mime || 'application/octet-stream',
      updatedAt: row.uploadDate?.toISOString?.() || new Date().toISOString(),
    }))
  },

  async upload(payload, baseUrl = '') {
    if (!allowed.has(payload.mime)) {
      const error = new Error('Tipo de ficheiro não permitido');
      error.statusCode = 400;
      throw error
    }

    const sourceBuffer = toBuffer(payload.data);
    if (!sourceBuffer.length || sourceBuffer.length > 8 * 1024 * 1024) {
      const error = new Error('Ficheiro inválido ou superior a 8 MB');
      error.statusCode = 400;
      throw error
    }

    let buffer = sourceBuffer;
    let mime = payload.mime;
    let originalName = safe(payload.filename);

    if (convertibleImages.has(payload.mime)) {
      try {
        buffer = await sharp(sourceBuffer, { animated: false })
          .rotate()
          .webp({ quality: 84, effort: 4 })
          .toBuffer();
        mime = 'image/webp';
        originalName = originalName.replace(/\.[^.]+$/, '') + '.webp';
      } catch {
        const error = new Error('Não foi possível processar a imagem');
        error.statusCode = 400;
        throw error
      }
    }

    const bucket = await getGridFsBucket();
    const filename = `${Date.now()}-${crypto.randomBytes(4).toString('hex')}-${originalName}`;
    const stream = bucket.openUploadStream(filename, {
      metadata: {
        mime,
        originalMime: payload.mime,
        originalFilename: safe(payload.filename),
      },
    });

    await new Promise((resolve, reject) => {
      stream.on('error', reject);
      stream.on('finish', resolve);
      stream.end(buffer);
    });

    return {
      id: String(stream.id),
      name: filename,
      url: `${baseUrl}/uploads/${encodeURIComponent(String(stream.id))}`,
      size: buffer.length,
      mime,
    }
  },

  async remove(id) {
    if (!ObjectId.isValid(id)) return false
    const bucket = await getGridFsBucket();
    try {
      await bucket.delete(new ObjectId(id));
      return true
    } catch {
      return false
    }
  },

  async get(id) {
    if (!ObjectId.isValid(id)) return null
    const db = await getMongoDb();
    const row = await db.collection('media.files').findOne({ _id: new ObjectId(id) });
    if (!row) return null
    return {
      id: row._id,
      name: row.filename,
      mime: row.metadata?.mime || 'application/octet-stream',
      size: row.length,
    }
  },
};

const messagesRepository=createMongoRepository('messages');

const messagesService=createCrudService(messagesRepository,{normalize:p=>({firstName:p.firstName?.trim()||'',lastName:p.lastName?.trim()||'',email:p.email?.trim()||'',subject:p.subject?.trim()||'',message:p.message?.trim()||'',status:p.status||'new'})});
async function createPublicMessage(p){ if(!p.firstName?.trim()||!p.lastName?.trim()||!p.email?.includes('@')||!p.subject?.trim()||!p.message?.trim()){const e=new Error('Preenche todos os campos obrigatórios');e.statusCode=400;throw e} return messagesRepository.create({firstName:p.firstName.trim(),lastName:p.lastName.trim(),email:p.email.trim(),subject:p.subject.trim(),message:p.message.trim(),status:'new',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}) }

const settingsRepository=createMongoRepository('settings');

const settingsService={
 list:()=>settingsRepository.readAll(), listPublic:async()=> (await settingsRepository.readAll()).filter(x=>x.public!==false),
 get:(id)=>settingsRepository.findById(id), create:(p)=>settingsRepository.create({...p,updatedAt:new Date().toISOString()}), update:(id,p)=>settingsRepository.update(id,{...p,updatedAt:new Date().toISOString()}), remove:(id)=>settingsRepository.remove(id)
};

const sponsorsRepository=createMongoRepository('sponsors');

const sponsorsService=createCrudService(sponsorsRepository,{normalize:p=>({src:p.src??'',alt:p.alt??'',url:p.url??'',order:Number(p.order??0),status:p.status??'published'})});

const opportunitiesRepository=createMongoRepository('opportunities');

const opportunitiesService=createCrudService(opportunitiesRepository,{normalize:p=>({title:p.title??'',price:p.price??'',order:Number(p.order??0),status:p.status??'published'})});

const season2627Teams = [
  "GDCSS CASTELÕES",
  "LOMBA SC AMARANTE",
  "AD FREIXO CIMA",
  "FC LAGARES",
  "ACDFC CALÇADA OLDRÕES",
  "GRD RANS",
  "UCR BOIM",
  "CCR S VICENTE IRIVO",
  "UFC SOUSA",
  "FC VILA BOA BISPO",
  "ACR SENDIM",
  "GDR SOALHÃES",
  "GD LIVRAÇÃO",
  "FC BOELHE",
  "CRP BARROSAS",
  "UD TORRADOS"
];

const season2627Games = [
  {
    "season": "2026/2027",
    "jornada": "Jornada 1",
    "date": "2026-09-20",
    "time": "17:00",
    "teams": [
      "LOMBA SC AMARANTE",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 2",
    "date": "2026-09-27",
    "time": "17:00",
    "teams": [
      "GDCSS CASTELÕES",
      "AD FREIXO CIMA"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 3",
    "date": "2026-10-11",
    "time": "15:30",
    "teams": [
      "FC LAGARES",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 4",
    "date": "2026-10-18",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "ACDFC CALÇADA OLDRÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 5",
    "date": "2026-10-25",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "GRD RANS"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 6",
    "date": "2026-11-08",
    "time": "15:30",
    "teams": [
      "UCR BOIM",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 7",
    "date": "2026-11-15",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "CCR S VICENTE IRIVO"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 8",
    "date": "2026-11-22",
    "time": "15:30",
    "teams": [
      "UFC SOUSA",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 9",
    "date": "2026-11-29",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "FC VILA BOA BISPO"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 10",
    "date": "2026-12-06",
    "time": "15:30",
    "teams": [
      "ACR SENDIM",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 11",
    "date": "2026-12-13",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "GDR SOALHÃES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 12",
    "date": "2026-12-20",
    "time": "15:30",
    "teams": [
      "GD LIVRAÇÃO",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 13",
    "date": "2027-01-03",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "FC BOELHE"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 14",
    "date": "2027-01-10",
    "time": "15:30",
    "teams": [
      "CRP BARROSAS",
      "GDCSS CASTELÕES"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 15",
    "date": "2027-01-17",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "UD TORRADOS"
    ],
    "volta": 1,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 16",
    "date": "2027-01-24",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "LOMBA SC AMARANTE"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 17",
    "date": "2027-01-31",
    "time": "15:30",
    "teams": [
      "AD FREIXO CIMA",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 18",
    "date": "2027-02-07",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "FC LAGARES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 19",
    "date": "2027-02-14",
    "time": "15:30",
    "teams": [
      "ACDFC CALÇADA OLDRÕES",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 20",
    "date": "2027-02-21",
    "time": "15:30",
    "teams": [
      "GRD RANS",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 21",
    "date": "2027-02-28",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "UCR BOIM"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 22",
    "date": "2027-03-07",
    "time": "15:30",
    "teams": [
      "CCR S VICENTE IRIVO",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 23",
    "date": "2027-03-14",
    "time": "15:30",
    "teams": [
      "GDCSS CASTELÕES",
      "UFC SOUSA"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 24",
    "date": "2027-03-21",
    "time": "15:30",
    "teams": [
      "FC VILA BOA BISPO",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 25",
    "date": "2027-04-04",
    "time": "16:00",
    "teams": [
      "GDCSS CASTELÕES",
      "ACR SENDIM"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 26",
    "date": "2027-04-11",
    "time": "16:00",
    "teams": [
      "GDR SOALHÃES",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 27",
    "date": "2027-04-18",
    "time": "16:00",
    "teams": [
      "GDCSS CASTELÕES",
      "GD LIVRAÇÃO"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 28",
    "date": "2027-04-25",
    "time": "16:00",
    "teams": [
      "FC BOELHE",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 29",
    "date": "2027-05-01",
    "time": "16:00",
    "teams": [
      "GDCSS CASTELÕES",
      "CRP BARROSAS"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  },
  {
    "season": "2026/2027",
    "jornada": "Jornada 30",
    "date": "2027-05-09",
    "time": "16:00",
    "teams": [
      "UD TORRADOS",
      "GDCSS CASTELÕES"
    ],
    "volta": 2,
    "status": "scheduled",
    "publicationStatus": "published"
  }
];

const normalized = (value = '') => String(value).trim().toLocaleUpperCase('pt-PT');

const season2627Service = {
  preview() {
    return {
      season: '2026/2027',
      teams: season2627Teams,
      games: season2627Games,
      totals: { teams: season2627Teams.length, games: season2627Games.length },
    }
  },

  async importMissing() {
    const db = await getMongoDb();
    const teamsCollection = db.collection('teams');
    const gamesCollection = db.collection('games');

    const existingTeams = await teamsCollection.find({}).toArray();
    const names = new Set(existingTeams.map(row => normalized(row.name)));

    let teamsCreated = 0;
    for (const name of season2627Teams) {
      if (names.has(normalized(name))) continue
      const now = new Date().toISOString();
      await teamsCollection.insertOne({
        id: crypto.randomUUID(),
        name,
        logo: '',
        status: 'published',
        createdAt: now,
        updatedAt: now,
      });
      names.add(normalized(name));
      teamsCreated++;
    }

    const existingGames = await gamesCollection.find({ season: '2026/2027' }).toArray();
    const keys = new Set(existingGames.map(row => `${row.season}::${row.jornada}`));

    let gamesCreated = 0;
    for (const game of season2627Games) {
      const key = `${game.season}::${game.jornada}`;
      if (keys.has(key)) continue
      const now = new Date().toISOString();
      await gamesCollection.insertOne({
        ...game,
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
      });
      keys.add(key);
      gamesCreated++;
    }

    return {
      ok: true,
      season: '2026/2027',
      teamsCreated,
      teamsExisting: season2627Teams.length - teamsCreated,
      gamesCreated,
      gamesExisting: season2627Games.length - gamesCreated,
      totalTeams: season2627Teams.length,
      totalGames: season2627Games.length,
    }
  },
};

const resources = { games: gamesService, teams: teamsService, events: eventsService, gallery: galleryService, members: membersService, board: boardService, staff: staffService, players: playersService, users: usersService, messages: messagesService, settings: settingsService, sponsors: sponsorsService, opportunities: opportunitiesService };
const publicResources = /* @__PURE__ */ new Set(["games", "teams", "events", "gallery", "board", "staff", "players", "settings", "sponsors", "opportunities"]);
const fail = (statusCode, message) => {
  throw createError({ statusCode, statusMessage: message, message });
};
const currentUser = (event) => {
  const value = getHeader(event, "authorization") || "";
  return verifyToken(value.startsWith("Bearer ") ? value.slice(7) : "");
};
const requireAuth = (event) => {
  const u = currentUser(event);
  if (!u) fail(401, "Sess\xE3o inv\xE1lida ou expirada");
  return u;
};
const requireEditor = (u) => {
  if (!["admin", "editor"].includes(u.role)) fail(403, "Sem permiss\xE3o para editar conte\xFAdos");
};
const requireAdmin = (u) => {
  if (u.role !== "admin") fail(403, "Apenas administradores podem executar esta a\xE7\xE3o");
};
const validate = (r, p) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  if (r === "games" && (!String(p.season || "").trim() || !String(p.jornada || "").trim() || !p.date || !Array.isArray(p.teams) || p.teams.filter(Boolean).length !== 2)) fail(400, "\xC9poca, jornada, data e duas equipas s\xE3o obrigat\xF3rias");
  if (r === "teams" && !((_a = p.name) == null ? void 0 : _a.trim())) fail(400, "O nome da equipa \xE9 obrigat\xF3rio");
  if (r === "events" && (!((_b = p.nome) == null ? void 0 : _b.trim()) || !((_c = p.slug) == null ? void 0 : _c.trim()) || !((_d = p.data) == null ? void 0 : _d.trim()))) fail(400, "Nome, slug e data do evento s\xE3o obrigat\xF3rios");
  if (r === "gallery" && (!((_e = p.title) == null ? void 0 : _e.trim()) || !Array.isArray(p.images))) fail(400, "T\xEDtulo e lista de imagens s\xE3o obrigat\xF3rios");
  if (r === "members" && !((_f = p.nome) == null ? void 0 : _f.trim())) fail(400, "O nome do s\xF3cio \xE9 obrigat\xF3rio");
  if (r === "board" && (!((_g = p.nome) == null ? void 0 : _g.trim()) || !((_h = p.funcao) == null ? void 0 : _h.trim()))) fail(400, "Nome e fun\xE7\xE3o s\xE3o obrigat\xF3rios");
  if (["players", "staff"].includes(r) && !((_i = p.img) == null ? void 0 : _i.trim())) fail(400, "A imagem \xE9 obrigat\xF3ria");
  if (r === "sponsors" && (!((_j = p.src) == null ? void 0 : _j.trim()) || !((_k = p.alt) == null ? void 0 : _k.trim()))) fail(400, "Imagem e nome do patrocinador s\xE3o obrigat\xF3rios");
  if (r === "opportunities" && (!((_l = p.title) == null ? void 0 : _l.trim()) || !((_m = p.price) == null ? void 0 : _m.trim()))) fail(400, "T\xEDtulo e pre\xE7o s\xE3o obrigat\xF3rios");
};
const ____path_ = defineEventHandler(async (event) => {
  const path = (getRouterParam(event, "path") || "").split("/").filter(Boolean);
  const method = event.method;
  if (path[0] === "health" && method === "GET") {
    const db = await getMongoDb();
    await db.command({ ping: 1 });
    const [settingsCount, usersCount, gamesCount] = await Promise.all([
      db.collection("settings").countDocuments(),
      db.collection("users").countDocuments(),
      db.collection("games").countDocuments()
    ]);
    return { ok: true, database: "mongodb", collections: { settings: settingsCount, users: usersCount, games: gamesCount } };
  }
  if (path[0] === "season-2627") {
    const user2 = requireAuth(event);
    if (method === "GET" && path[1] === "preview") return season2627Service.preview();
    requireAdmin(user2);
    if (method === "POST" && path[1] === "import") return season2627Service.importMissing();
    fail(405, "M\xE9todo n\xE3o permitido");
  }
  if (path[0] === "auth" && path[1] === "login" && method === "POST") {
    const p = await readBody(event);
    return authService.login(p.email, p.password);
  }
  if (path[0] === "auth" && path[1] === "register") fail(403, "O registo p\xFAblico est\xE1 desativado. Contacta um administrador.");
  if (path[0] === "auth" && path[1] === "me" && method === "GET") return { user: requireAuth(event) };
  if (path[0] === "auth" && path[1] === "logout" && method === "POST") {
    requireAuth(event);
    return { ok: true };
  }
  if (path[0] === "public" && path[1] === "contact" && method === "POST") {
    setResponseStatus(event, 201);
    return createPublicMessage(await readBody(event));
  }
  if (path[0] === "media") {
    const user2 = requireAuth(event);
    if (method === "GET" && !path[1]) return mediaService.list("");
    if (method === "POST" && !path[1]) {
      requireEditor(user2);
      setResponseStatus(event, 201);
      return mediaService.upload(await readBody(event), "");
    }
    if (method === "DELETE" && path[1]) {
      requireAdmin(user2);
      if (await mediaService.remove(decodeURIComponent(path[1]))) {
        setResponseStatus(event, 204);
        return null;
      }
      fail(404, "Ficheiro n\xE3o encontrado");
    }
  }
  const isPublic = path[0] === "public";
  const resource = isPublic ? path[1] : path[0];
  const id = isPublic ? path[2] : path[1];
  const service = resources[resource];
  if (!service || isPublic && !publicResources.has(resource)) fail(404, "Recurso n\xE3o encontrado");
  if (isPublic) {
    if (method !== "GET" || id) fail(405, "M\xE9todo n\xE3o permitido");
    return service.listPublic();
  }
  const user = requireAuth(event);
  if (resource === "users") requireAdmin(user);
  if (method === "GET" && !id) return service.list();
  if (method === "GET" && id) {
    const row = await service.get(id);
    if (!row) fail(404, "Registo n\xE3o encontrado");
    return row;
  }
  const payload = method === "DELETE" ? null : await readBody(event);
  if (payload) validate(resource, payload);
  if (method === "POST" && !id) {
    requireAdmin(user);
    setResponseStatus(event, 201);
    return service.create(payload);
  }
  if (["PUT", "PATCH"].includes(method) && id) {
    requireEditor(user);
    const row = await service.update(id, payload);
    if (!row) fail(404, "Registo n\xE3o encontrado");
    return row;
  }
  if (method === "DELETE" && id) {
    requireAdmin(user);
    if (await service.remove(id)) {
      setResponseStatus(event, 204);
      return null;
    }
    fail(404, "Registo n\xE3o encontrado");
  }
  fail(405, "M\xE9todo n\xE3o permitido");
});

export { ____path_ as default };
//# sourceMappingURL=_...path_.mjs.map
