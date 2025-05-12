// import { defineConfig } from "astro/config";
// import sitemap from "@astrojs/sitemap";
// import icon from "astro-icon";

// export default defineConfig({
//   site: "https://www.yourwebsite.com", // update me!
//   integrations: [
//     icon(),
//     sitemap({
//       filter: (page) => !page.includes("/admin"),
//       changefreq: "weekly",
//       priority: 0.7,
//     }),
//   ],
// });

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://www.yourwebsite.com", // update me!
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
      }
    }
  }
});
