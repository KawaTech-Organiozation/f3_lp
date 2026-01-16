import * as esbuild from "esbuild";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const rootDir = path.resolve(__dirname, "..");

async function build() {
  console.log("🏗️  Building project for production...\n");

  // Clean dist directory
  const distDir = path.join(rootDir, "dist");
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
    console.log("✓ Cleaned dist directory");
  }

  // Build client with Vite
  console.log("\n📦 Building client with Vite...");
  execSync("npm run build:vite", { stdio: "inherit", cwd: rootDir });
  console.log("✓ Client build complete");

  // Build server with esbuild
  console.log("\n📦 Building server with esbuild...");
  await esbuild.build({
    entryPoints: [path.join(rootDir, "server/index.ts")],
    bundle: true,
    platform: "node",
    target: "node18",
    format: "esm",
    outfile: path.join(distDir, "index.mjs"),
    external: [
      "pg-native",
      "bufferutil",
      "utf-8-validate",
    ],
    sourcemap: true,
    minify: true,
    banner: {
      js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);",
    },
  });
  console.log("✓ Server build complete");

  console.log("\n✅ Build successful! Output in dist/");
  console.log("   - Client: dist/client/");
  console.log("   - Server: dist/index.mjs");
  console.log("\nRun 'npm start' to start the production server");
}

build().catch((error) => {
  console.error("❌ Build failed:", error);
  process.exit(1);
});
