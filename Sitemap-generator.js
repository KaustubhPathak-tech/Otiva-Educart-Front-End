require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./Sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://stack-over-flow-clone-2023.vercel.app")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();