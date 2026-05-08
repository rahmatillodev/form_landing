const htmlElement = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");
const langSelect = document.getElementById("langSelect");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const AD_VIDEOS = ["video1", "video2", "video3", "video4"];

const translations = {
  eng: {
    slide1Badge: "🔥 Most Popular IELTS Course",
    slide1Title: "Achieve IELTS 7.0 – 8.0+ Faster Than You Think",
    slide1Desc:
      "Study with expert mentors, real exam strategies, and a system designed to boost your score in the shortest time.",
 
    slide2Badge: "🚀 Intensive Learning System",
    slide2Title: "Computer-based Mock Exams & Full Exam Practice",
    slide2Desc:
      "Computer-based mock exams, and disciplined study plans that keep you improving every week.",
 
    slide3Badge: "🎯 Weekly Progress System",
    slide3Title: "Mock Every Week. Feedback Every Time.",
    slide3Desc: "Every week you sit a full CD IELTS mock with detailed feedback — included free. You see your growth week by week, not just at the end.",
 
    slide4Badge: "🎉 Learning is Fun Here",
    slide4Title: "Love the Process. Own the Score.",
    slide4Desc: "At IELTSCORE, we make IELTS prep engaging, structured, and actually enjoyable — so you stay motivated and hit 7.5+ without burning out.",
 
    formTitle: "Get Your Free IELTS Consultation",
    formSubtitle:
      "Leave your details and our consultant will contact you shortly.",
    trust1: "Computer-based IELTS practice",
    trust2: "Free consultation",
    nameLabel: "Full name",
    phoneLabel: "Phone number",
    micro1: "We will contact you within 30 minutes.",
    cta: "Start IELTS Preparation →",
    successTitle: "Request sent successfully!",
    successText: "We will call you shortly.",
    sending: "Sending...",
    nameError: "Please enter your full name.",
    phoneError: "Please enter a valid phone number.",
    submitError: "Could not send. Please try again in a moment."
  },
 
  uzb: {
    slide1Badge: "🔥 Eng Mashhur IELTS Kursi",
    slide1Title: "IELTS 7.0 – 8.0+ Natijaga Tezroq Erishing",
    slide1Desc:
      "Tajribali ustozlar, real imtihon strategiyalari va maxsus tizim orqali qisqa muddatda yuqori natija oling.",
 
    slide2Badge: "🚀 Kuchli IELTS Muhiti",
    slide2Title: "Har Kuni Real IELTS Atmosferasida O'qing",
    slide2Desc:
      "Computer-based mock testlar va tajribali mentorlar bilan o'zingizdagi real o'sishni tezroq his qiling.",
 
    slide3Badge: "🎯 Haftalik O'sish Tizimi",
    slide3Title: "Har Hafta Mock Test",
    slide3Desc: "Har hafta to'liq CD IELTS mock testi — o'quvchilar uchun bepul. O'zingizning o'sishingizni har haftada ko'rasiz, kurs oxirida emas.",
 
    slide4Badge: "🎉 O'qish Bu Zavq",
    slide4Title: "Jarayondan Rohatlaning. Natijaga Erishing.",
    slide4Desc: "IELTSCOREda o'qish qiziqarli, tartibli va ilhomlantiruvchi — siz 7.5+ ga yetguncha motivatsiyangiz so'nmaydi.",
 
    formTitle: "Bepul IELTS Maslahat Oling",
    formSubtitle:
      "Ma'lumot qoldiring, mentorlarimiz siz bilan tez orada bog'lanadi.",
    trust1: "Computer-based IELTS tayyorgarlik",
    trust2: "Bepul maslahat",
    nameLabel: "To'liq ismingiz",
    phoneLabel: "Telefon raqami",
    micro1: "Siz bilan 30 daqiqa ichida bog'lanamiz.",
    cta: "IELTS Kursiga Yozilish →",
    successTitle: "So'rov muvaffaqiyatli yuborildi!",
    successText: "Tez orada sizga qo'ng'iroq qilamiz.",
    sending: "Yuborilmoqda...",
    nameError: "Iltimos, to'liq ismingizni kiriting.",
    phoneError: "Iltimos, to'g'ri telefon raqamingizni kiriting.",
    submitError: "Yuborib bo'lmadi. Keyinroq qayta urinib ko'ring."
  },
 
  rus: {
    slide1Badge: "🔥 Самый Популярный IELTS Курс",
    slide1Title: "Получите IELTS 7.0 – 8.0+ Быстрее, Чем Думаете",
    slide1Desc:
      "Обучайтесь с опытными наставниками по системе, основанной на реальных экзаменационных стратегиях.",
 
    slide2Badge: "🚀 Интенсивная Система Обучения",
    slide2Title: "Компьютерные пробные экзамены и полноценная подготовка к экзамену",
    slide2Desc:
      "Компьютерные пробные экзамены и продуманные планы обучения, которые позволяют вам совершенствоваться каждую неделю.",
 
    slide3Badge: "🎯 Система Еженедельного Прогресса",
    slide3Title: "Каждую Неделю Мок. Каждый Раз Фидбэк.",
    slide3Desc: "Еженедельный полный CD IELTS мок с подробной обратной связью — бесплатно для студентов. Вы видите свой прогресс каждую неделю, а не только в конце.",
 
    slide4Badge: "🎉 Учёба — Это Кайф",
    slide4Title: "Кайфуй от Процесса. Владей Результатом.",
    slide4Desc: "В IELTSCORE мы делаем подготовку к IELTS живой, структурированной и по-настоящему увлекательной — чтобы ты дошёл до 7.5+ с удовольствием.",
 
    formTitle: "Получите бесплатную консультацию",
    formSubtitle:
      "Оставьте свои данные, и наш консультант скоро свяжется с вами.",
    trust1: "Computer-based подготовка",
    trust2: "Бесплатная консультация",
    nameLabel: "Полное имя",
    phoneLabel: "Номер телефона",
    micro1: "Мы свяжемся с вами в течение 30 минут.",
    cta: "Записаться на IELTS →",
    successTitle: "Заявка успешно отправлена!",
    successText: "Мы скоро вам позвоним.",
    sending: "Отправка...",
    nameError: "Пожалуйста, введите полное имя.",
    phoneError: "Пожалуйста, введите корректный номер телефона.",
    submitError: "Не удалось отправить. Попробуйте позже."
  }
};

const supportedLangs = Object.keys(translations);
let currentLang = localStorage.getItem("landing-lang");
if (!supportedLangs.includes(currentLang)) currentLang = "uzb";

function applyHeroImage() {
  const params = new URLSearchParams(window.location.search);
  const ad = params.get("ad") || "video1";
  const adMap = {
    video1: "10",
    video2: "6",
    video3: "7",
    video4: "8"
  };
  const num = adMap[ad] || "1";
  const img = document.getElementById("heroImage");
  if (img) img.src = `./${num}.png`;
}

function updateCarouselImages() {
  const slides = document.querySelectorAll("#carouselSection .hero-bg");
  const nums = ["1", "2", "3", "4"];
  slides.forEach((slide, i) => {
    if (nums[i]) {
      slide.style.backgroundImage = `url(./${nums[i]}.png)`;
    }
  });
}

function initCarousel() {
  const el = document.getElementById("heroSwiper");
  if (el && window.Swiper) {
    if (el.swiper) {
      el.swiper.destroy(true, true);
    }
    new window.Swiper(el, {
      effect: "slide",
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
}

function initHeroMode() {
  const params = new URLSearchParams(window.location.search);
  const ad = params.get("ad");
  const heroSection = document.getElementById("heroSection");
  const carouselSection = document.getElementById("carouselSection");

  if (ad && AD_VIDEOS.includes(ad)) {
    if (heroSection) heroSection.style.display = "block";
    if (carouselSection) carouselSection.style.display = "none";
    applyHeroImage();
  } else {
    if (heroSection) heroSection.style.display = "none";
    if (carouselSection) carouselSection.style.display = "block";
    updateCarouselImages();
    initCarousel();
  }
}

function t(key) {
  return translations[currentLang][key] || translations.eng[key] || "";
}

function applyTranslations() {
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });
  htmlElement.lang = currentLang === "uzb" ? "uz" : currentLang;
  localStorage.setItem("landing-lang", currentLang);

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === currentLang);
  });

  if (langSelect) {
    langSelect.value = currentLang;
  }

  applyHeroImage();
  updateCarouselImages();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.dataset.lang;
    if (!supportedLangs.includes(selectedLang)) return;
    currentLang = selectedLang;
    applyTranslations();
  });
});

if (langSelect) {
  langSelect.addEventListener("change", (event) => {
    const selectedLang = event.target.value;
    if (!supportedLangs.includes(selectedLang)) return;
    currentLang = selectedLang;
    applyTranslations();
  });
}

const form = document.getElementById("registrationForm");
const formFields = document.getElementById("formFields");
const successState = document.getElementById("successState");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const formSubmitError = document.getElementById("formSubmitError");

function formatPhone(value) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);

  const a = digits.slice(0, 2);
  const b = digits.slice(2, 5);
  const c = digits.slice(5, 7);
  const d = digits.slice(7, 9);

  let output = "+998";
  if (a) output += ` ${a}`;
  if (b) output += ` ${b}`;
  if (c) output += ` ${c}`;
  if (d) output += ` ${d}`;
  return output;
}

function setFieldState(input, errorElement, isValid, errorText) {
  input.classList.remove("is-valid", "is-invalid");
  if (isValid) {
    input.classList.add("is-valid");
    errorElement.textContent = "";
  } else {
    input.classList.add("is-invalid");
    errorElement.textContent = errorText;
  }
}

function validateName() {
  const value = nameInput.value.trim();
  const valid = value.length >= 2;
  setFieldState(nameInput, nameError, valid, t("nameError"));
  return valid;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const phonePattern = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
  const valid = phonePattern.test(value);
  setFieldState(phoneInput, phoneError, valid, t("phoneError"));
  return valid;
}

if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    e.target.value = formatPhone(e.target.value);
    if (phoneError.textContent) validatePhone();
  });
}

if (nameInput) {
  nameInput.addEventListener("input", () => {
    if (nameError.textContent) validateName();
  });
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const validName = validateName();
    const validPhone = validatePhone();
    if (!validName || !validPhone) return;

    if (formSubmitError) {
      formSubmitError.hidden = true;
      formSubmitError.textContent = "";
    }

    const landing = typeof window !== "undefined" ? window.__landing : null;
    if (!landing) {
      if (formSubmitError) {
        formSubmitError.textContent = t("submitError");
        formSubmitError.hidden = false;
      }
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t("sending");

    const fullName = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const urlData = landing.getUrlAttributionData();
    const videoSourceInput = document.getElementById("videoSourceInput");
    if (videoSourceInput) {
      videoSourceInput.value = urlData.video_source || "";
    }

    landing.trackMetaLead(urlData, fullName, phone);

    try {
      const client = await landing.whenSupabaseReadyPromise(6000);
      if (!client) {
        if (formSubmitError) {
          formSubmitError.textContent = t("submitError");
          formSubmitError.hidden = false;
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span class="btn-label">${t("cta")}</span>`;
        return;
      }

      const row = landing.buildLeadRow(fullName, phone, urlData);
      const { error } = await client.from("course_leads").insert([row]);
      if (error) {
        console.error("[Lead] Supabase insert error:", error.message || error);
        if (formSubmitError) {
          formSubmitError.textContent = t("submitError");
          formSubmitError.hidden = false;
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span class="btn-label">${t("cta")}</span>`;
        return;
      }

      formFields.hidden = true;
      successState.hidden = false;
      form.reset();
    } catch (e) {
      console.error("[Lead] submit catch:", e);
      if (formSubmitError) {
        formSubmitError.textContent = t("submitError");
        formSubmitError.hidden = false;
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span class="btn-label">${t("cta")}</span>`;
    }
  });
}

applyTranslations();
initHeroMode();

(function () {
  "use strict";

  // var SUPABASE_URL = "https://miyoovimtupziuehtcxi.supabase.co"; // supabase url dev
  var SUPABASE_URL = "https://oqzluzzctiirxxhxsboc.supabase.co"; // supabase url prod
  // var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1peW9vdmltdHVweml1ZWh0Y3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzkwNzMsImV4cCI6MjA4MzYxNTA3M30.aaCqOF-_s5s5AN-_ElrWZWch8nSVHNmQ1fvC4hi2OoY"; // supabase key dev
  var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xemx1enpjdGlpcnh4aHhzYm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTU1NTEsImV4cCI6MjA4NDYzMTU1MX0.fBFFWgbv4teapHpENVums7lrN1Bq5w22enSuDFofbdU"
  var META_CAPI_ENDPOINT = "/.netlify/functions/meta-lead";
  var VISITS_SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzwl9B7VuoOA3msq_nGWuhTkgqrPgKCqMec6OhE165jNMk21v4AHOqaLow-cq1oT6jj/exec";

  function log() {
    if (typeof console !== "undefined" && console.log) console.log.apply(console, arguments);
  }
  function logErr() {
    if (typeof console !== "undefined" && console.error) console.error.apply(console, arguments);
  }

  function getSupabase() {
    return typeof window !== "undefined" && window.supabase && window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  function whenSupabaseReady(cb, maxWait) {
    maxWait = maxWait || 2000;
    var start = Date.now();
    log("[Supabase] waiting for client (maxWait=", maxWait, "ms), window.supabase=", typeof (window && window.supabase));
    function tryOnce() {
      var client = getSupabase();
      if (client) {
        log("[Supabase] client ready");
        cb(client);
        return;
      }
      if (Date.now() - start >= maxWait) {
        logErr("[Supabase] client NOT ready after", maxWait, "ms — check Supabase script loaded and URL/KEY");
        cb(null);
        return;
      }
      setTimeout(tryOnce, 150);
    }
    tryOnce();
  }

  function whenSupabaseReadyPromise(maxWait) {
    return new Promise(function (resolve) {
      whenSupabaseReady(function (client) {
        resolve(client);
      }, maxWait);
    });
  }

  function getUrlAttributionData() {
    log("[Attribution] getUrlAttributionData, href=", window.location.href);
    var search = typeof window !== "undefined" && window.location && window.location.search;
    var params = search && search.length >= 2 ? new URLSearchParams(search) : null;
    var data = {
      utm_source: params ? params.get("utm_source") || "" : "",
      utm_medium: params ? params.get("utm_medium") || "" : "",
      utm_campaign: params ? params.get("utm_campaign") || "" : "",
      utm_term: params ? params.get("utm_term") || "" : "",
      utm_content: params ? params.get("utm_content") || "" : "",
      fbclid: params ? params.get("fbclid") || "" : "",
      ad: params ? params.get("ad") || "" : ""
    };
    data.video_source = data.ad && AD_VIDEOS.includes(data.ad) ? data.ad : "organic";
    var hasAny =
      data.utm_source || data.utm_medium || data.utm_campaign || data.utm_term || data.utm_content || data.fbclid || data.ad;
    log("[Attribution] urlData=", data, "hasAny=", !!hasAny);
    return data;
  }

  function getCookie(name) {
    try {
      var v = "; " + document.cookie;
      var p = v.split("; " + name + "=");
      if (p.length !== 2) return "";
      var raw = p.pop().split(";").shift() || "";
      return decodeURIComponent(raw);
    } catch (e) {
      return "";
    }
  }

  function buildFbcFromFbclid(fbclid) {
    return fbclid ? "fb.1." + Math.floor(Date.now() / 1000) + "." + fbclid : "";
  }

  function fetchClientIp() {
    return fetch("https://api.ipify.org?format=json")
      .then(function (res) {
        if (!res.ok) throw new Error("ipify " + res.status);
        return res.json();
      })
      .then(function (data) {
        return data && data.ip ? data.ip : "";
      })
      .catch(function () {
        return "";
      });
  }

  function createEventId() {
    return "lead_" + Date.now() + "_" + Math.floor(Math.random() * 1000000000);
  }

  function trackMetaLead(urlData, fullName, phone) {
    var eventId = createEventId();
    try {
      if (typeof fbq !== "function") {
        log("[Meta] fbq not available, skip Lead");
      } else {
        var payload = {
          content_name: "IELTS consultation"
        };
        if (urlData.utm_source) payload.utm_source = urlData.utm_source;
        if (urlData.utm_medium) payload.utm_medium = urlData.utm_medium;
        if (urlData.utm_campaign) payload.utm_campaign = urlData.utm_campaign;
        if (urlData.utm_term) payload.utm_term = urlData.utm_term;
        if (urlData.utm_content) payload.utm_content = urlData.utm_content;
        fbq("track", "Lead", payload, { eventID: eventId });
        log("[Meta] Lead tracked via Pixel, event_id=", eventId);
      }
    } catch (e) {
      logErr("[Meta] Lead track failed", e);
    }

    sendMetaCapiLead(urlData, fullName, phone, eventId).catch(function (e) {
      logErr("[Meta CAPI] send failed", e);
    });
  }

  function sendMetaCapiLead(urlData, fullName, phone, eventId) {
    var eventSourceUrl = "";
    try {
      eventSourceUrl = window.location.href || "";
    } catch (e) {
      eventSourceUrl = "";
    }
    return fetchClientIp().then(function (ipAddress) {
      var requestBody = {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        full_name: fullName || "",
        phone: phone || "",
        fbp: getCookie("_fbp") || "",
        fbc: urlData.fbclid ? buildFbcFromFbclid(urlData.fbclid) : getCookie("_fbc") || "",
        fbclid: urlData.fbclid || "",
        user_agent: navigator.userAgent || "",
        ip_address: ipAddress || "",
        utm_source: urlData.utm_source || "",
        utm_medium: urlData.utm_medium || "",
        utm_campaign: urlData.utm_campaign || "",
        utm_term: urlData.utm_term || "",
        utm_content: urlData.utm_content || ""
      };
      return fetch(META_CAPI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (text) {
          throw new Error("Meta CAPI response " + res.status + ": " + text);
        });
      }
      return res.json();
    }).then(function (data) {
      log("[Meta CAPI] Lead sent, event_id=", eventId, "response=", data);
      return data;
    });
  }

  function getAttributionId() {
    try {
      return sessionStorage.getItem("attribution_id") || "";
    } catch (e) {
      return "";
    }
  }

  function sendVisitToSheet(urlData) {
    var userId = getAttributionId() || createEventId();
    var videoId = urlData.video_source || "organic";
    var source = urlData.utm_source || (urlData.ad ? "meta-ad" : "direct");
    return fetch(VISITS_SHEET_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        user_id: userId,
        video_id: videoId,
        source: source,
        device: navigator.userAgent || ""
      })
    }).then(function () {
      log("[Visits] Sheet send attempted (no-cors)", "user_id=", userId, "video_id=", videoId, "source=", source);
    });
  }

  function buildLeadRow(fullName, phone, urlData) {
    var fbclid = urlData.fbclid || "";
    var eventSourceUrl = "";
    try {
      eventSourceUrl = window.location.href || "";
    } catch (e) {
      eventSourceUrl = "";
    }
    return {
      full_name: fullName,
      phone: phone,
      utm_source: urlData.utm_source || "",
      utm_medium: urlData.utm_medium || "",
      utm_campaign: urlData.utm_campaign || "",
      utm_term: urlData.utm_term || "",
      utm_content: urlData.utm_content || "",
      // video_source: urlData.video_source || "organic",
      fbclid: fbclid,
      fbp: getCookie("_fbp") || "",
      fbc: buildFbcFromFbclid(fbclid),
      user_agent: navigator.userAgent || "",
      event: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: eventSourceUrl
    };
  }

  window.__landing = {
    getUrlAttributionData: getUrlAttributionData,
    whenSupabaseReadyPromise: whenSupabaseReadyPromise,
    trackMetaLead: trackMetaLead,
    buildLeadRow: buildLeadRow,
    sendVisitToSheet: sendVisitToSheet
  };

  function run() {
    log("[App] run() started, readyState=", document.readyState);

    function getFbpCookie() {
      var cookies = document.cookie;
      if (!cookies) return null;
      var start = cookies.indexOf("_fbp=");
      if (start === -1) return null;
      start += 5;
      var end = cookies.indexOf(";", start);
      if (end === -1) end = cookies.length;
      var value = cookies.slice(start, end).trim();
      return value || null;
    }
    function createFbpFallback() {
      var ts = Math.floor(Date.now() / 1000);
      var r = "";
      for (var i = 0; i < 10; i++) r += Math.floor(Math.random() * 10);
      return "fb.1." + ts + "." + r;
    }
    function setFbpCookie(value) {
      var maxAge = 90 * 24 * 60 * 60;
      document.cookie = "_fbp=" + encodeURIComponent(value) + "; path=/; max-age=" + maxAge + "; SameSite=Lax";
    }
    (function () {
      log("[Fbp] reading _fbp cookie");
      var fbp = getFbpCookie();
      if (!fbp) {
        log("[Fbp] no cookie, creating fallback");
        fbp = createFbpFallback();
        setFbpCookie(fbp);
        log("[Fbp] fallback set:", fbp);
      } else {
        log("[Fbp] existing _fbp:", fbp);
      }
    })();

    (function () {
      log("[Attribution] starting landing attribution flow");
      var urlData = getUrlAttributionData();

      function randId() {
        var s = "";
        for (var i = 0; i < 16; i++) s += Math.floor(Math.random() * 10);
        return s;
      }

      var id = getAttributionId();
      if (!id) {
        id = randId();
        log("[Attribution] id generated", id);
      } else {
        log("[Attribution] existing attribution_id found", id);
      }
      try {
        sessionStorage.setItem("attribution_id", id);
        log("[Attribution] attribution_id saved to sessionStorage");
      } catch (e) {
        logErr("[Attribution] sessionStorage setItem failed", e);
      }
      try {
        var sentKey = "visit_sent_" + id;
        var visitAlreadySent = sessionStorage.getItem(sentKey) === "1";
        if (!visitAlreadySent) {
          sendVisitToSheet(urlData)
            .then(function () {
              sessionStorage.setItem(sentKey, "1");
              log("[Visits] first page entry sent for attribution_id", id);
            })
            .catch(function (e) {
              logErr("[Visits] page-entry send failed", e);
            });
        } else {
          log("[Visits] skip duplicate page-entry for attribution_id", id);
        }
      } catch (e) {
        logErr("[Visits] sessionStorage dedupe failed", e);
        sendVisitToSheet(urlData).catch(function (err) {
          logErr("[Visits] page-entry send failed without dedupe", err);
        });
      }
      var goParams = [["id", id]];
      if (urlData.fbclid) goParams.push(["fbclid", urlData.fbclid]);
      if (urlData.utm_source) goParams.push(["utm_source", urlData.utm_source]);
      if (urlData.utm_medium) goParams.push(["utm_medium", urlData.utm_medium]);
      if (urlData.utm_campaign) goParams.push(["utm_campaign", urlData.utm_campaign]);
      if (urlData.utm_term) goParams.push(["utm_term", urlData.utm_term]);
      if (urlData.utm_content) goParams.push(["utm_content", urlData.utm_content]);
      var goQuery = goParams
        .map(function (p) {
          return encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1]);
        })
        .join("&");
      var goHref = "go.html?" + goQuery;

      var goLinks = document.querySelectorAll(
        'a[href="go.html"], a[href="/go"], a[href="go"], a[href^="go.html"], a[href^="/go?"]'
      );
      for (var i = 0; i < goLinks.length; i++) goLinks[i].href = goHref;
      log("[Attribution] go links updated, count=", goLinks.length, "params=", goQuery);

      log("[Attribution] attribution_logs writes disabled");
    })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
