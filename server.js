import express from 'express';
import compression from 'compression';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Compression middleware (Gzip / Brotli)
app.use(compression());

// Transparent WebP negotiation: if client supports webp and requests .png or .jpg, serve .webp if available
app.use((req, res, next) => {
  const accept = req.headers.accept || '';
  if (accept.includes('image/webp') && /\.(png|jpe?g)$/i.test(req.path)) {
    const webpRelPath = req.path.replace(/\.(png|jpe?g)$/i, '.webp');
    const webpFullPath = path.join(__dirname, webpRelPath);
    if (fs.existsSync(webpFullPath)) {
      res.setHeader('Vary', 'Accept');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.type('image/webp');
      return res.sendFile(webpFullPath);
    }
  }
  next();
});

// Serve static assets with optimized HTTP caching
app.use(express.static(__dirname, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (/\.(webp|png|jpe?g|gif|svg|ico|woff2?)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (/\.(css|js)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
    }
  }
}));

// Fallback to index.html for root or SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
