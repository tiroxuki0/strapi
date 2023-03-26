module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    const entry = await strapi.db.query("api::contact.contact").findMany({
      select: "email",
    });
    try {
      const emailTemplate = {
        subject: "Welcome ",
        text: `Welcome to mywebsite.fr!
    Your account is now linked with: .`,
        html: `<!DOCTYPE html>
<html style="margin: 0;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <style type="text/css">
@media screen and (max-device-width: 770px), screen and (max-width: 770px) {
  .main {
    max-width: 390px !important;
  }

  .logo {
    width: 56px !important;
    min-width: 56px !important;
    height: 20px !important;
  }

  .banner {
    margin-top: 17px !important;
  }

  .title {
    line-height: 17px !important;
    font-size: 14px !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .h1-title {
    margin-top: 21px !important;
  }

  .h2-title {
    margin-top: 6px !important;
  }

  .text {
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .font-text {
    font-size: 12px !important;
    line-height: 15px !important;
  }

  .description {
    margin-top: 21px !important;
  }

  .other-text {
    margin-top: 13px !important;
  }

  .btn {
    margin-top: 17px !important;
    font-size: 14px !important;
    line-height: 16px !important;
    padding: 7px 17px !important;
    margin-bottom: 39px !important;
    color: #FFFFFF !important;
  }

  .footer {
    padding: 35px 24px 34px !important;
  }

  .social-item {
    margin: 3px !important;
    width: 18px !important;
    min-width: 18px !important;
    min-height: 18px !important;
    height: 18px !important;
    border-radius: 5px !important;
    -webkit-background-size: 14px !important;
    background-size: 14px !important;
  }

  .font-text-footer {
    margin-top: 17px !important;
    font-size: 10px !important;
    line-height: 12px !important;
  }

  .contact-title {
    margin-top: 11px !important;
  }

  .contact-text {
    margin-top: 3px !important;
  }
}
</style>
</head>
<body style="margin: 0;">
<div class="main" style="font-family: Inter, sans-serif; margin: 0 auto; text-align: center; max-width: 800px;">
    <div style="background-image: url('https://econ101-storage.s3.ap-southeast-1.amazonaws.com/color_image_817b933a57.png'); padding-top: 40px;">
    <img class="logo" src="https://econ101-storage.s3.ap-southeast-1.amazonaws.com/yofin_logo_1_59cb3752b7.png" alt="logo" style="margin: 0; width: 113px; height: 42px; min-width: 113px; object-fit: contain;" width="113" height="42">
    <h1 class="h1-title title" style="margin: 0; text-transform: uppercase; font-size: 30px; line-height: 36px; padding-left: 30px; padding-right: 30px; margin-top: 43px; color: #067957;">Bài viết mới</h1>
    <img class="banner" src="${result?.image?.url}" alt="imageSignUp" style="margin: 0; margin-top: 35px; width: 100%;">
    <h1 class="h1-title title" style="margin: 0; text-transform: uppercase; font-size: 30px; line-height: 36px; padding-left: 30px; padding-right: 30px; margin-top: 43px; color: #067957;">${result?.title}</h1>
    <p class="description font-text text" style="margin: 0; color: #067957; padding-left: 30px; padding-right: 30px; margin-top: 63px; font-size: 20px; line-height: 24px;">${result?.subTitle}</p>
    <div style="padding: 24px 0;">
     <a class="btn font-text font-bold" href="https://yofin.vn/blog/${result?.slug}" style="font-weight: 700; font-size: 20px; line-height: 24px; margin: 0 8px; display: inline-block; background: #067957; border-radius: 30px; padding: 18px 34px; white-space: nowrap; text-decoration: none; color: #FFFFFF;">Xem chi tiết</a>
    </div>
   
    </div>
    
    <div class="footer" style="margin: 0; background: rgba(6, 121, 87, 0.1); padding: 74px 30px 80px;">
        <div class="social-container" style="margin: 0; display: flex; width: fit-content; margin-left: auto; margin-right: auto;">
            <a class="social-item" style="width: 40px; min-width: 40px; min-height: 40px; height: 40px; background-color: #067957; border-radius: 10px; margin: 5px; display: block; background-position: center center; background-repeat: no-repeat; -webkit-background-size: 30px; background-size: 30px; background-image: url('https://econ101-storage.s3.ap-southeast-1.amazonaws.com/ic_facebook_1_3372ec0edf.png?width=40&height=37'); text-decoration: none; color: #067957;" target="_blank" href="https://www.facebook.com/yofin.vn"></a>
            <a class="social-item" style="width: 40px; min-width: 40px; min-height: 40px; height: 40px; background-color: #067957; border-radius: 10px; margin: 5px; display: block; background-position: center center; background-repeat: no-repeat; -webkit-background-size: 30px; background-size: 30px; background-image: url('https://econ101-storage.s3.ap-southeast-1.amazonaws.com/ic_twitter_1_c57872f6fd.png?width=40&height=37'); text-decoration: none; color: #067957;" target="_blank" href="https://twitter.com/yofinvn"></a>
            <a class="social-item" style="width: 40px; min-width: 40px; min-height: 40px; height: 40px; background-color: #067957; border-radius: 10px; margin: 5px; display: block; background-position: center center; background-repeat: no-repeat; -webkit-background-size: 30px; background-size: 30px; background-image: url('https://econ101-storage.s3.ap-southeast-1.amazonaws.com/ic_instagram_1_abb176190a.png?width=40&height=37'); text-decoration: none; color: #067957;" target="_blank" href="https://www.instagram.com/yofin.vn"></a>
            <a class="social-item" style="width: 40px; min-width: 40px; min-height: 40px; height: 40px; background-color: #067957; border-radius: 10px; margin: 5px; display: block; background-position: center center; background-repeat: no-repeat; -webkit-background-size: 30px; background-size: 30px; background-image: url('https://econ101-storage.s3.ap-southeast-1.amazonaws.com/ic_youtube_1_2a548b315f.png?width=40&height=37'); text-decoration: none; color: #067957;" target="_blank" href="https://www.youtube.com/channel/UCdFowK6fliH0-BJ-Wizh2nw"></a>
            <a class="social-item" style="width: 40px; min-width: 40px; min-height: 40px; height: 40px; background-color: #067957; border-radius: 10px; margin: 5px; display: block; background-position: center center; background-repeat: no-repeat; -webkit-background-size: 30px; background-size: 30px; background-image: url('https://econ101-storage.s3.ap-southeast-1.amazonaws.com/ic_tiktok_1_1eeecd4b2d.png?width=40&height=39'); text-decoration: none; color: #067957;" target="_blank" href="https://www.tiktok.com/@yofin.vn"></a>
        </div>
        <b class="contact-title text font-text-footer" style="margin: 0; color: #067957; padding-left: 30px; padding-right: 30px; font-size: 16px; line-height: 19px; display: block; margin-top: 43px;">Công ty cổ phần Econ 101</b>
        <p class="font-text-footer contact-text text" style="margin: 0; color: #067957; padding-left: 30px; padding-right: 30px; font-size: 16px; line-height: 19px; margin-top: 12px;">Liên hệ đối tác: business@yofin.vn</p>
        <p class="font-text-footer contact-text text" style="margin: 0; color: #067957; padding-left: 30px; padding-right: 30px; font-size: 16px; line-height: 19px; margin-top: 12px;">Giải đáp thắc mắc: info@yofin.vn</p>
        <p class="font-text-footer contact-other-text text" style="margin: 0; color: #067957; padding-left: 30px; padding-right: 30px; font-size: 16px; line-height: 19px; margin-top: 37px;">Nếu bạn không còn muốn nhận thông tin từ Yofin. Bạn có thể <a href="https://yofin.vn/huy-dang-ky?email=${result?.email}" class="cancel-link" style="margin: 0; display: inline-block; text-decoration: none; color: #067957; font-style: italic;">Huỷ đăng ký</a> tại đây!</p>
    </div>
</div>
</body>
</html>`,
      };

      await strapi.plugins["email"].services.email.sendTemplatedEmail(
        {
          to: entry?.map((e) => {
            return e.email;
          }),
        },
        emailTemplate
      );
    } catch (err) {
      console.log(err);
    }
  },
  async afterUpdate(event) {
    const fs = require("fs");
    fs.readFile("public/rss/bai-viet.xml", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!data.includes(event?.result?.slug) && event?.result?.publishedAt) {
        const luxon = require("luxon");
        fs.writeFile(
          "public/rss/bai-viet.xml",
          data?.split(`</channel></rss>`)[0] +
            `<item><title>/${event?.result?.title}</title><description>${
              event?.result?.subTitle
            }</description><pubDate>${luxon.DateTime.now(
              event?.result?.publishedAt
            ).toISO("D, d M Y H:i:s T")}</pubDate><link>https://yofin.vn/blog/${
              event?.result?.slug
            }</link><guid>https://yofin.vn/blog/${
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
            `<url><loc>http://yofin.vn/blog/${event?.result?.slug}</loc><image:image><image:loc>${event?.result?.image?.url}</image:loc><image:title>${event?.result?.title}</image:title><image:caption>${event?.result?.subTitle}</image:caption><image:geo_location>475/30A Hai Bà Trưng, phường Võ Thị Sáu, Quận 3</image:geo_location></image:image></url></urlset>`,
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
          urlList: [`https://www.yofin.vn/blog/${event?.result?.slug}`],
        });
      }
    });
  },
};
