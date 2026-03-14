import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Serve the project-root "certificates" folder at /certificates/
function serveCertificatesFolder() {
  return {
    name: "serve-certificates",
    configureServer(server: { middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/certificates/")) return next();
        const urlPath = req.url.replace(/^\/certificates\//, "").split("?")[0];
        const filePath = path.join(process.cwd(), "certificates", decodeURIComponent(urlPath));
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          return next();
        }
        const ext = path.extname(filePath).toLowerCase();
        const mime =
          ext === ".pdf" ? "application/pdf" : ext === ".png" ? "image/png" : [".jpg", ".jpeg"].includes(ext) ? "image/jpeg" : "application/octet-stream";
        res.setHeader("Content-Type", mime);
        fs.createReadStream(filePath).pipe(res);
      });
    },
  };
}

// Serve the project-root "projects" folder at /projects/
function serveProjectsFolder() {
  return {
    name: "serve-projects",
    configureServer(server: { middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        if (!req.url?.startsWith("/projects/")) return next();
        const urlPath = req.url.replace(/^\/projects\//, "").split("?")[0];
        const filePath = path.join(process.cwd(), "projects", decodeURIComponent(urlPath));
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          return next();
        }
        const ext = path.extname(filePath).toLowerCase();
        const mime =
          ext === ".xlsx"
            ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            : ext === ".xls"
              ? "application/vnd.ms-excel"
              : ext === ".png"
                ? "image/png"
                : "application/octet-stream";
        res.setHeader("Content-Type", mime);
        if (ext === ".png") {
          res.setHeader("Content-Disposition", "inline");
        } else {
          res.setHeader("Content-Disposition", "attachment; filename*=UTF-8''" + encodeURIComponent(path.basename(filePath)));
        }
        fs.createReadStream(filePath).pipe(res);
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), serveCertificatesFolder(), serveProjectsFolder(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
