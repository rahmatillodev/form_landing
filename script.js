const courses = [
    {
      badge: "🔥 Eng ko‘p tanlangan",
      title: "CD IELTS — Standart",
      description:
        "Hozirgi darajang 5.5–6.5? 4–6 oy ichida 7.5+ ga chiqayotgan o‘quvchilar qatoriga qo‘shil. Har hafta real exam darajasidagi mock testlar — BEPUL. Joylar tez to‘lyapti, kech qolma.",
      accent: "linear-gradient(130deg, #1990e6, #2563eb)",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      badge: "⚡ Eng tez natija",
      title: "IELTS Intensive",
      description:
        "Vaqting kammi? Har kuni 2 soatlik intensiv mashg‘ulot bilan 1–2 oy ichida sezilarli sakrash qil. Bu kursni tanlaganlar ko‘pincha imtihonni birinchi urinishda topshiradi.",
      accent: "linear-gradient(130deg, #2563eb, #1990e6)",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      badge: "🎯 Aniq natija",
      title: "Skill Based IELTS",
      description:
        "Qayerda yiqilyapsan — Writingmi? Speakingmi? Har bir skill bo‘yicha alohida ‘breakthrough’ qilamiz. Natija: zaif joying kuchli tomoningga aylanadi.",
      accent: "linear-gradient(130deg, #1990e6, #0f172a)",
      image: "https://picsum.photos/800/600?random=3"
    },
    {
      badge: "🚀 Noldan start",
      title: "General English",
      description:
        "0 dan boshlayotganlar uchun. 6 oy ichida erkin gapiradigan darajaga chiqayotgan talabalar bor. Agar hozir boshlamasang — yana 1 yil yo‘qotasiz.",
      accent: "linear-gradient(130deg, #2563eb, #0f172a)",
      image: "https://picsum.photos/800/600?random=4"
    },
    {
      badge: "🚀 Compyuterda o‘rganish",
      title: "Compyuterda darslar",
      description:
        "Darslar kompyuterda o‘rganishga mo‘ljallangan. Platformadagi barcha darslar siz uchun o‘rganishga mos holda yaratilgan.",
      accent: "linear-gradient(130deg, #1990e6, #2563eb)",
      image: "https://picsum.photos/800/600?random=5"
    }
  ];

    const swiperWrapper = document.getElementById("swiperWrapper");
    const courseSwiperEl = document.getElementById("courseSwiper");

    function renderSwiperSlides() {
      if (!swiperWrapper) return;
      swiperWrapper.innerHTML = "";

      courses.forEach((course) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.style.setProperty("--slide-accent", course.accent);

        slide.innerHTML = `
          <div class="slide-image" style="background-image: url('${course.image}')"></div>
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <span class="slide-badge">${course.badge}</span>
            <h2 class="slide-title">${course.title}</h2>
            <p class="slide-description">${course.description}</p>
          </div>
        `;

        swiperWrapper.appendChild(slide);
      });
    }

    renderSwiperSlides();

    if (typeof window !== "undefined" && window.Swiper && courseSwiperEl) {
      // Swiper carousel (fade + autoplay + dots + arrows)
      // Docs: https://swiperjs.com/
      new window.Swiper(courseSwiperEl, {
        effect: "slide",
        speed: 900,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 1
          }
        }
      });
    } else {
      // Fallback: if Swiper fails to load, at least show the first slide content.
      // (No autoplay/navigation in fallback.)
      if (swiperWrapper && courses[0]) {
        swiperWrapper.innerHTML = `
          <div class="swiper-slide" style="--slide-accent: ${courses[0].accent}">
            <div class="slide-image" style="background-image: url('${courses[0].image}')"></div>
            <div class="slide-overlay"></div>
            <div class="slide-content">
              <span class="slide-badge">${courses[0].badge}</span>
              <h2 class="slide-title">${courses[0].title}</h2>
              <p class="slide-description">${courses[0].description}</p>
            </div>
          </div>
        `;
      }
    }

    const form = document.getElementById("registrationForm");
    const nameInput = document.getElementById("nameInput");
    const phoneInput = document.getElementById("phoneInput");
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("successMessage");
    const formFields = document.getElementById("formFields");
    const successState = document.getElementById("successState");

    // ----------------------------
    // Supabase lead capture (REST)
    // ----------------------------
    // NOTE:
    // - Client-only REST insert requires `course_leads` to allow INSERT for anon users (RLS policy).
    // - IP address is not reliably available from browser JS; `ip_address` will remain NULL.
    // - Keep URL/KEY in sync with the attribution block below.
    const SUPABASE_URL = "https://miyoovimtupziuehtcxi.supabase.co"; // dev
    const SUPABASE_KEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1peW9vdmltdHVweml1ZWh0Y3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzkwNzMsImV4cCI6MjA4MzYxNTA3M30.aaCqOF-_s5s5AN-_ElrWZWch8nSVHNmQ1fvC4hi2OoY"; // anon key (dev)

    function getCookie(name) {
      const cookies = typeof document !== "undefined" ? document.cookie : "";
      if (!cookies) return "";
      const parts = (`; ${cookies}`).split(`; ${name}=`);
      if (parts.length !== 2) return "";
      return decodeURIComponent(parts.pop().split(";").shift() || "");
    }

    function getUrlParams() {
      const search =
        typeof window !== "undefined" && window.location ? window.location.search : "";
      const params = search && search.length >= 2 ? new URLSearchParams(search) : null;
      return {
        utm_source: params ? params.get("utm_source") || "" : "",
        utm_medium: params ? params.get("utm_medium") || "" : "",
        utm_campaign: params ? params.get("utm_campaign") || "" : "",
        utm_term: params ? params.get("utm_term") || "" : "",
        utm_content: params ? params.get("utm_content") || "" : "",
        fbclid: params ? params.get("fbclid") || "" : ""
      };
    }

    function buildFbc(fbclid) {
      if (!fbclid) return "";
      const unixSeconds = Math.floor(Date.now() / 1000);
      return `fb.1.${unixSeconds}.${fbclid}`;
    }

    function buildLeadPayload() {
      const urlData = getUrlParams();
      const fbp = getCookie("_fbp") || "";
      const fbc = buildFbc(urlData.fbclid);

      return {
        full_name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        utm_source: urlData.utm_source || null,
        utm_medium: urlData.utm_medium || null,
        utm_campaign: urlData.utm_campaign || null,
        utm_term: urlData.utm_term || null,
        utm_content: urlData.utm_content || null,
        fbclid: urlData.fbclid || null,
        fbp: fbp || null,
        fbc: fbc || null,
        user_agent: (typeof navigator !== "undefined" && navigator.userAgent) ? navigator.userAgent : null,
        event: "lead_submit",
        event_time: Date.now(),
        event_source_url: (typeof window !== "undefined" && window.location) ? window.location.href : null
      };
    }

    async function insertCourseLead(payload) {
      const url = `${SUPABASE_URL}/rest/v1/course_leads`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) return;

      // Supabase errors are typically JSON; fall back to text if needed.
      let message = `Supabase error (HTTP ${res.status})`;
      try {
        const data = await res.json();
        if (data && (data.message || data.details || data.hint)) {
          message = data.message || data.details || data.hint;
        }
      } catch (_) {
        try {
          const text = await res.text();
          if (text) message = text;
        } catch (_) {
          // ignore
        }
      }

      throw new Error(message);
    }

    function formatUzbekPhone(value) {
      let digits = value.replace(/\D/g, "");

      if (digits.startsWith("998")) {
        digits = digits.slice(3);
      }

      digits = digits.slice(0, 9);

      const part1 = digits.slice(0, 2);
      const part2 = digits.slice(2, 5);
      const part3 = digits.slice(5, 7);
      const part4 = digits.slice(7, 9);

      let formatted = "+998";
      if (part1) formatted += ` ${part1}`;
      if (part2) formatted += ` ${part2}`;
      if (part3) formatted += ` ${part3}`;
      if (part4) formatted += ` ${part4}`;

      return formatted;
    }

    function validateName() {
      const value = nameInput.value.trim();
      const namePattern = /^[A-Za-zÀ-ÿ\s']+$/;

      if (value.length < 2) {
        nameError.textContent = "Iltimos, to'liq ismingizni kiriting";
        nameError.classList.add("is-visible");
        nameInput.classList.add("is-invalid");
        return false;
      }

      if (!namePattern.test(value)) {
        nameError.textContent = "Iltimos, to'liq ismingizni kiriting";
        nameError.classList.add("is-visible");
        nameInput.classList.add("is-invalid");
        return false;
      }

      nameError.textContent = "";
      nameError.classList.remove("is-visible");
      nameInput.classList.remove("is-invalid");
      return true;
    }

    function validatePhone() {
      const value = phoneInput.value.trim();
      const phonePattern = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;

      if (!phonePattern.test(value)) {
        phoneError.textContent = "Telefon raqamini to'g'ri kiriting";
        phoneError.classList.add("is-visible");
        phoneInput.classList.add("is-invalid");
        return false;
      }

      phoneError.textContent = "";
      phoneError.classList.remove("is-visible");
      phoneInput.classList.remove("is-invalid");
      return true;
    }

    phoneInput.addEventListener("input", (event) => {
      const formatted = formatUzbekPhone(event.target.value);
      event.target.value = formatted;
      if (phoneError.textContent) validatePhone();
    });

    nameInput.addEventListener("input", () => {
      if (nameError.textContent) validateName();
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      successMessage.textContent = "";
      successMessage.style.color = "var(--success)";

      const isNameValid = validateName();
      const isPhoneValid = validatePhone();

      if (!isNameValid || !isPhoneValid) {
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner" aria-hidden="true"></span><span>Yuborilmoqda...</span>';

      const payload = buildLeadPayload();
      const minDelay = new Promise((resolve) => setTimeout(resolve, 1500));

      try {
        // TODO: Replace fetch() here with real API endpoint
        await Promise.all([minDelay, insertCourseLead(payload)]);
        submitBtn.disabled = false;
        submitBtn.innerHTML = "<span class='btn-label'>Ariza yuborish →</span>";

        if (formFields) formFields.style.display = "none";
        if (successState) successState.hidden = false;
        form.reset();
      } catch (e) {
        await minDelay;
        submitBtn.disabled = false;
        submitBtn.innerHTML = "<span class='btn-label'>Ariza yuborish →</span>";
        successMessage.style.color = "var(--error)";
        successMessage.textContent =
          "❗ Yuborishda xatolik yuz berdi. Iltimos, yana bir bor urinib ko'ring.";
        if (typeof console !== "undefined" && console.error) {
          console.error("[course_leads] insert failed:", e && e.message ? e.message : e);
        }
      }
    });


    (function() {
        'use strict';
      
        function log() {
          if (typeof console !== 'undefined' && console.log) console.log.apply(console, arguments);
        }
        function logErr() {
          if (typeof console !== 'undefined' && console.error) console.error.apply(console, arguments);
        }
      
        function run() {
          log('[App] run() started, readyState=', document.readyState);
      
        var SUPABASE_URL = "https://miyoovimtupziuehtcxi.supabase.co"; // supabase url dev
        // var SUPABASE_URL = "https://oqzluzzctiirxxhxsboc.supabase.co"; // supabase url prod
        var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1peW9vdmltdHVweml1ZWh0Y3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzkwNzMsImV4cCI6MjA4MzYxNTA3M30.aaCqOF-_s5s5AN-_ElrWZWch8nSVHNmQ1fvC4hi2OoY"; // supabase key dev
        // var SUPABASE_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xemx1enpjdGlpcnh4aHhzYm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNTU1NTEsImV4cCI6MjA4NDYzMTU1MX0.fBFFWgbv4teapHpENVums7lrN1Bq5w22enSuDFofbdU"
        function getSupabase() {
          return typeof window !== 'undefined' && window.supabase && window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        }
        function whenSupabaseReady(cb, maxWait) {
          maxWait = maxWait || 2000;
          var start = Date.now();
          log('[Supabase] waiting for client (maxWait=', maxWait, 'ms), window.supabase=', typeof (window && window.supabase));
          function tryOnce() {
            var client = getSupabase();
            if (client) {
              log('[Supabase] client ready');
              cb(client);
              return;
            }
            if (Date.now() - start >= maxWait) {
              logErr('[Supabase] client NOT ready after', maxWait, 'ms — check Supabase script loaded and URL/KEY');
              return;
            }
            setTimeout(tryOnce, 150);
          }
          tryOnce();
        }
      
        // ——— Meta Pixel _fbp cookie: read or create ———
        function getFbpCookie() {
          var cookies = document.cookie;
          if (!cookies) return null;
          var start = cookies.indexOf('_fbp=');
          if (start === -1) return null;
          start += 5;
          var end = cookies.indexOf(';', start);
          if (end === -1) end = cookies.length;
          var value = cookies.slice(start, end).trim();
          return value || null;
        }
        function createFbpFallback() {
          var ts = Math.floor(Date.now() / 1000);
          var r = '';
          for (var i = 0; i < 10; i++) r += Math.floor(Math.random() * 10);
          return 'fb.1.' + ts + '.' + r;
        }
        function setFbpCookie(value) {
          var maxAge = 90 * 24 * 60 * 60;
          document.cookie = '_fbp=' + encodeURIComponent(value) + '; path=/; max-age=' + maxAge + '; SameSite=Lax';
        }
        (function() {
          log('[Fbp] reading _fbp cookie');
          var fbp = getFbpCookie();
          if (!fbp) {
            log('[Fbp] no cookie, creating fallback');
            fbp = createFbpFallback();
            setFbpCookie(fbp);
            log('[Fbp] fallback set:', fbp);
          } else {
            log('[Fbp] existing _fbp:', fbp);
          }
        })();
      
        // ——— Get attribution data from current page URL (always return object; empty if no params) ———
        function getUrlAttributionData() {
          log('[Attribution] getUrlAttributionData, href=', window.location.href);
          var search = typeof window !== 'undefined' && window.location && window.location.search;
          var params = (search && search.length >= 2) ? new URLSearchParams(search) : null;
          var data = {
            utm_source: params ? (params.get('utm_source') || '') : '',
            utm_medium: params ? (params.get('utm_medium') || '') : '',
            utm_campaign: params ? (params.get('utm_campaign') || '') : '',
            utm_term: params ? (params.get('utm_term') || '') : '',
            utm_content: params ? (params.get('utm_content') || '') : '',
            fbclid: params ? (params.get('fbclid') || '') : ''
          };
          var hasAny = data.utm_source || data.utm_medium || data.utm_campaign || data.utm_term || data.utm_content || data.fbclid;
          log('[Attribution] urlData=', data, 'hasAny=', !!hasAny);
          return data;
        }
      
        // ——— Landing attribution (save every visit to attribution_logs) ———
        (function() {
          log('[Attribution] starting landing attribution flow');
          var urlData = getUrlAttributionData();
      
          function randId() {
            var s = '';
            for (var i = 0; i < 16; i++) s += Math.floor(Math.random() * 10);
            return s;
          }
      
          // Generate id and set /go links NOW (before Supabase) so bot always gets this id
          var id = randId();
          log('[Attribution] id generated', id);
          try {
            sessionStorage.setItem('attribution_id', id);
            log('[Attribution] attribution_id saved to sessionStorage');
          } catch (e) {
            logErr('[Attribution] sessionStorage setItem failed', e);
          }
          // Build /go URL with Facebook parameters in Meta-standard format:
          // id, fbclid, utm_source, utm_medium, utm_campaign, utm_term, utm_content (only non-empty)
          var goParams = [['id', id]];
          if (urlData.fbclid) goParams.push(['fbclid', urlData.fbclid]);
          if (urlData.utm_source) goParams.push(['utm_source', urlData.utm_source]);
          if (urlData.utm_medium) goParams.push(['utm_medium', urlData.utm_medium]);
          if (urlData.utm_campaign) goParams.push(['utm_campaign', urlData.utm_campaign]);
          if (urlData.utm_term) goParams.push(['utm_term', urlData.utm_term]);
          if (urlData.utm_content) goParams.push(['utm_content', urlData.utm_content]);
          var goQuery = goParams.map(function(p) { return encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1]); }).join('&');
          var goHref = 'go.html?' + goQuery;
    
          var goLinks = document.querySelectorAll('a[href="go.html"], a[href="/go"], a[href="go"], a[href^="go.html"], a[href^="/go?"]');
          for (var i = 0; i < goLinks.length; i++) goLinks[i].href = goHref;
          log('[Attribution] go links updated, count=', goLinks.length, 'params=', goQuery);
      
          whenSupabaseReady(function(client) {
            log('[Attribution] Supabase ready, will save to attribution_logs, id=', id);
      
          function getC(name) {
            var v = '; ' + document.cookie;
            var p = v.split('; ' + name + '=');
            return p.length === 2 ? p.pop().split(';').shift() : '';
          }
          function getFbpWait(t) {
            t = t || 2000;
            return new Promise(function(r) {
              var start = Date.now();
              if (getC('_fbp')) { r(getC('_fbp')); return; }
              var iv = setInterval(function() {
      
                var x = getC('_fbp');
                if (x) { clearInterval(iv); r(x); }
                else if (Date.now() - start > t) { clearInterval(iv); r(''); }
              }, 100);
            });
          }
      
          var fbclid = urlData.fbclid;
          var fbc = fbclid ? 'fb.1.' + Math.floor(Date.now() / 1000) + '.' + fbclid : '';
          function getDeviceInfo() {
            var ua = navigator.userAgent || '';
            var os = 'Unknown';
            if (/Android/i.test(ua)) os = 'Android';
            else if (/iPhone|iPod/i.test(ua)) os = 'iOS';
            else if (/iPad/i.test(ua)) os = 'iPadOS';
            else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS';
            else if (/Windows/i.test(ua)) os = 'Windows';
            else if (/Linux/i.test(ua)) os = 'Linux';
            var browser = 'Unknown';
            if (/Edg\/|Edge/i.test(ua)) browser = 'Edge';
            else if (/OPR|Opera/i.test(ua)) browser = 'Opera';
            else if (/Chrome/i.test(ua) && !/Edg|OPR/i.test(ua)) browser = 'Chrome';
            else if (/Safari/i.test(ua) && !/Chrome|Chromium/i.test(ua)) browser = 'Safari';
            else if (/Firefox|FxiOS/i.test(ua)) browser = 'Firefox';
            return os + ' ' + browser;
          }
          var utms = {
            source: urlData.utm_source,
            medium: urlData.utm_medium,
            campaign: urlData.utm_campaign,
            term: urlData.utm_term,
            content: urlData.utm_content
          };
      
          function saveRow(row) {
            log('[Attribution] saveRow: calling insert attribution_logs, row keys=', Object.keys(row));
            return client.from('attribution_logs').insert([row]).then(function(res) {
              log('[Attribution] insert then: res=', res, 'res.error=', res && res.error, 'res.data=', res && res.data);
              if (res && res.error) {
                logErr('[Attribution] insert Supabase error:', res.error.message || res.error, 'code=', res.error.code, 'details=', res.error.details);
                return;
              }
              log('[Attribution] insert SUCCESS, id=', id);
            }).catch(function(e) {
              logErr('[Attribution] insert catch:', e && e.message, e);
            });
          }
      
          function getGeoData() {
            log('[Geo] request start');
            return new Promise(function(resolve) {
              var timeout = setTimeout(function() {
                log('[Geo] timeout, returning empty');
                resolve({ ip_address: '', city: '', state: '' });
              }, 5000);
              // geojs.io: free, CORS-enabled; fallback if rate-limited
              fetch('https://get.geojs.io/v1/ip/geo.json')
                .then(function(r) {
                  if (!r.ok) {
                    log('[Geo] fetch not ok', r.status, r.status === 429 ? '(rate limit)' : '');
                    return Promise.reject(new Error(r.status));
                  }
                  return r.json();
                })
                .then(function(data) {
                  clearTimeout(timeout);
                  var geo = {
                    ip_address: (data && data.ip) ? String(data.ip) : '',
                    city: (data && data.city) ? String(data.city) : '',
                    state: (data && data.region) ? String(data.region) : ''
                  };
                  log('[Geo] success', geo);
                  resolve(geo);
                })
                .catch(function(err) {
                  clearTimeout(timeout);
                  log('[Geo] request failed, using empty geo', err && err.message);
                  resolve({ ip_address: '', city: '', state: '' });
                });
            });
          }
      
          // 1) Insert row immediately (so it's always saved), then optionally enrich with geo
          function buildRow(geo) {
            return {
              id: id,
              ip_address: (geo && geo.ip_address) || '',
              city: (geo && geo.city) || '',
              state: (geo && geo.state) || '',
              device: getDeviceInfo(),
              fbp: getC('_fbp') || '',
              fbc: fbc,
              fbclid: fbclid,
              user_agent: navigator.userAgent || '',
              utm_source: utms.source,
              utm_medium: utms.medium,
              utm_campaign: utms.campaign,
              utm_term: utms.term,
              utm_content: utms.content
            };
          }
      
          log('[Attribution] step 1: insert now (geo empty), then fetch geo');
          var row = buildRow({});
          saveRow(row);
      
          getGeoData().then(function(geo) {
            log('[Attribution] geo received, optional update (may be blocked by RLS)', geo);
            if (geo && (geo.ip_address || geo.city || geo.state)) {
              client.from('attribution_logs').update({
                ip_address: geo.ip_address || '',
                city: geo.city || '',
                state: geo.state || ''
              }).eq('id', id).then(function(up) {
                if (up && up.error) logErr('[Attribution] geo update error:', up.error.message);
                else log('[Attribution] geo update done');
              });
            }
          });
      
          // 2) Enrich with _fbp from browser cookie when ready (no external API)
          log('[Attribution] step 3: waiting for _fbp cookie');
          getFbpWait(1500).then(function(fbp) {
            if (fbp) {
              log('[Attribution] fbp received, updating row');
              client.from('attribution_logs').update({ fbp: fbp }).eq('id', id).then(function(up) {
                log('[Attribution] fbp update then: up.error=', up && up.error);
                if (up && up.error) {
                  logErr('[Attribution] fbp update error:', up.error.message || up.error, 'details=', up.error.details);
                } else {
                  log('[Attribution] fbp update done');
                }
              });
            } else {
              log('[Attribution] no fbp after wait, skip update');
            }
          });
          }, 2500);
        })();
      
        // ——— Testimonials Swiper carousel (data from testimonials-data.js) ———
        (function() {
          var data = typeof window !== 'undefined' && window.TESTIMONIALS_DATA;
          var wrapper = document.getElementById('testimonials-swiper-wrapper');
          if (!Array.isArray(data) || !data.length || !wrapper) {
            log('[Testimonials] no data or wrapper, skip');
            return;
          }
          function starsHtml(n) {
            var s = '';
            for (var i = 0; i < (n || 5); i++) s += '<span class="material-symbols-outlined fill-current text-lg">star</span>';
            return s;
          }
          data.forEach(function(t) {
            var slide = document.createElement('div');
            slide.className = 'swiper-slide';
            slide.innerHTML =
              '<div class="testimonial-card rounded-2xl border border-primary/10 bg-background-light dark:bg-background-dark p-6 sm:p-8 shadow-sm transition-all hover:shadow-md flex flex-col h-full">' +
                '<blockquote class="testimonial-quote text-slate-600 dark:text-slate-400 text-sm sm:text-base italic flex-1 leading-relaxed">' + (t.quote || '') + '</blockquote>' +
                '<div class="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">' +
                  '<p class="text-sm font-bold text-slate-900 dark:text-white">' + (t.name || '') + '</p>' +
                  '<div class="flex gap-0.5 text-amber-400" aria-hidden="true">' + starsHtml(t.stars) + '</div>' +
                  '<p class="text-xs text-slate-500 dark:text-slate-400 w-full">' + (t.score || '') + '</p>' +
                '</div>' +
              '</div>';
            wrapper.appendChild(slide);
          });
          var swiperEl = document.querySelector('.testimonials-swiper');
          if (swiperEl && typeof window.Swiper !== 'undefined') {
            new window.Swiper('.testimonials-swiper', {
              slidesPerView: 1,
              spaceBetween: 24,
              loop: true,
              autoplay: { delay: 15000, disableOnInteraction: false },
              breakpoints: {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }
            });
            log('[Testimonials] Swiper ready');
          } else {
            log('[Testimonials] Swiper lib or element missing');
          }
        })();
    
        // ——— FAQ Accordion ———
        (function() {
          var triggers = document.querySelectorAll('.faq-trigger');
          if (!triggers.length) return;
          triggers.forEach(function(btn) {
            btn.addEventListener('click', function() {
              var item = btn.closest('.faq-item');
              var content = document.getElementById(btn.getAttribute('aria-controls'));
              var isOpen = item.classList.contains('is-open');
              document.querySelectorAll('.faq-item.is-open').forEach(function(openItem) {
                if (openItem !== item) {
                  openItem.classList.remove('is-open');
                  var openContent = openItem.querySelector('.faq-content');
                  if (openContent) openContent.setAttribute('aria-hidden', 'true');
                  openItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
                }
              });
              if (isOpen) {
                item.classList.remove('is-open');
                content.setAttribute('aria-hidden', 'true');
                btn.setAttribute('aria-expanded', 'false');
              } else {
                item.classList.add('is-open');
                content.setAttribute('aria-hidden', 'false');
                btn.setAttribute('aria-expanded', 'true');
              }
            });
          });
          log('[FAQ] accordion ready');
        })();
    
          log('[App] run() finished');
        }
      
        if (document.readyState === 'loading') {
          log('[App] waiting for DOMContentLoaded');
          document.addEventListener('DOMContentLoaded', run);
        } else {
          run();
        }
      })();
      