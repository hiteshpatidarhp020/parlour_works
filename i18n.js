const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  lng: "en",
  defaultLanguage: "en",
  otherLanguages: ["en", "hi"],
  localePath:
    typeof window === "undefined"
      ? "/public/static/locales"
      : "/public/static/locales/",
});
