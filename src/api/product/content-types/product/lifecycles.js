module.exports = {
  async afterUpdate(event) {
    const fs = require("fs");
    fs.readFile("public/rss/san-pham.xml", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!data.includes(event?.result?.slug) && event?.result?.publishedAt) {
        const luxon = require("luxon");
        fs.writeFile(
          "public/rss/san-pham.xml",
          data?.split(`</channel></rss>`)[0] +
            `<item><title>${event?.result?.name}</title><description>${
              event?.result?.parent
            }</description><pubDate>${luxon.DateTime.now(
              event?.result?.publishedAt
            ).toISO(
              "D, d M Y H:i:s T"
            )}</pubDate><link>https://yofin.vn/san-pham/${
              event?.result?.slug
            }</link><guid>https://yofin.vn/san-pham/${
              event?.result?.slug
            }</guid></item></channel></rss>`,
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
      }
    });
    fs.readFile("public/sitemap/index-image.xml", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if (
        !data.includes(event?.result?.slug) &&
        event?.result?.publishedAt &&
        event?.result?.image?.url
      ) {
        fs.writeFile(
          "public/sitemap/index-image.xml",
          data?.split("</urlset>")[0] +
            `<url><loc>http://yofin.vn/san-pham/${event?.result?.slug}</loc><image:image><image:loc>${event?.result?.image?.url}</image:loc><image:title>${event?.result?.name}</image:title><image:caption>${event?.result?.parent}</image:caption><image:geo_location>475/30A Hai Bà Trưng, phường Võ Thị Sáu, Quận 3</image:geo_location></image:image></url></urlset>`,
          (err) => {
            if (err) {
              console.error(err);
            }
          }
        );
      }
      if (event?.result?.publishedAt) {
        const axios = require("axios");
        axios.post("https://www.bing.com/indexnow", {
          host: "www.yofin.vn",
          key: "108cd82b04de48a1b18a69308af9a238",
          keyLocation:
            "https://www.yofin.vn/108cd82b04de48a1b18a69308af9a238.txt",
          urlList: [`https://www.yofin.vn/san-pham/${event?.result?.slug}`],
        });
      }
    });
  },
};
