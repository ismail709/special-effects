import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

function getEntryPoints(dir, baseDir = dir, entryPoints = {}) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(baseDir, fullPath);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getEntryPoints(fullPath, baseDir, entryPoints);
    } else if (path.extname(file) === ".html") {
      const entryKey = path.join(
        path.dirname(relativePath),
        path.basename(file, ".html")
      );
      entryPoints[entryKey] = fullPath;
    }
  });

  return entryPoints;
}

const entryPoints = getEntryPoints(path.resolve(__dirname, "src/pages"));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        ...entryPoints,
      },
    },
  },
});
