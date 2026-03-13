silktideCookieBannerManager.updateCookieBannerConfig({
  cookieIcon: {
    position: "bottomRight"
  },
  cookieTypes: [
    {
      id: "necessary",
      name: "B\u016btinieji",
      description: "<p>\u0160ie slapukai yra b\u016btini tinklapio veikimui ir negali b\u016bti i\u0161jungti. Jie padeda valdyti prisijungim\u0105 ir j\u016bs\u0173 privatumo nustatymus.</p>",
      required: true,
      onAccept: function() {}
    },
    {
      id: "analytics",
      name: "Analitiniai",
      description: "<p>\u0160ie slapukai padeda mums tobulinti svetain\u0119 stebint, kurie puslapiai yra populiariausi ir kaip lankytojai juda svetain\u0117je.</p>",
      defaultValue: true,
      onAccept: function() {
        if (typeof gtag !== "undefined") {
          gtag("consent", "update", { analytics_storage: "granted" });
        }
      },
      onReject: function() {
        if (typeof gtag !== "undefined") {
          gtag("consent", "update", { analytics_storage: "denied" });
        }
      }
    },
    {
      id: "advertising",
      name: "Rinkodaros",
      description: "<p>\u0160ie slapukai naudojami rinkodaros tikslais \u2013 leid\u017eia rodyti jums aktualią reklam\u0105 ir sekti kampanij\u0173 efektyvum\u0105 (pvz., Meta Pixel).</p>",
      defaultValue: false,
      onAccept: function() {
        if (typeof gtag !== "undefined") {
          gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted"
          });
        }
      },
      onReject: function() {
        if (typeof gtag !== "undefined") {
          gtag("consent", "update", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied"
          });
        }
      }
    }
  ],
  text: {
    banner: {
      description: "<p>Mes naudojame slapukus, kad pagerintume j\u016bs\u0173 patirt\u012f, personalizuotume turin\u012f ir analizuotume sraut\u0105. <a href='/privatumo-politika'>Privatumo politika.</a></p>",
      acceptAllButtonText: "Priimti visus",
      acceptAllButtonAccessibleLabel: "Priimti visus slapukus",
      rejectNonEssentialButtonText: "Tik b\u016btinieji",
      rejectNonEssentialButtonAccessibleLabel: "Atmesti neb\u016btinus slapukus",
      preferencesButtonText: "Nustatymai",
      preferencesButtonAccessibleLabel: "Atidaryti slapuk\u0173 nustatymus"
    },
    preferences: {
      title: "Slapuk\u0173 nustatymai",
      description: "<p>Gerbiame j\u016bs\u0173 teis\u0119 \u012f privatum\u0105. Galite pasirinkti, kokius slapukus leid\u017eiate. J\u016bs\u0173 pasirinkimas bus taikomas visoje svetain\u0117je.</p>",
      creditLinkText: "",
      creditLinkAccessibleLabel: ""
    }
  },
  position: {
    banner: "bottomCenter"
  }
});

setTimeout(function() {
  var wrapper = document.getElementById("silktide-wrapper");
  if (wrapper) wrapper.classList.add("consent-ready");

}, 1500);
