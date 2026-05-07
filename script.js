const heroSwiperElement = document.getElementById("heroSwiper");
const htmlElement = document.documentElement;
const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");

if (heroSwiperElement && typeof window !== "undefined" && window.Swiper) {
  new window.Swiper(heroSwiperElement, {
    effect: "slide",
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    roundLengths: true,
    speed: 800,
    loop: true,
    grabCursor: true,
    parallax: true,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}

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
    slide4Badge: "📚 3 Course Formats",
    slide4Title: "Choose the Path That Fits You",
    slide4Desc: "CD IELTS Standard (6-8 months), Intensive (fast track), or Skill-Based (targeted weak areas). One centre, three proven paths to 7.5+.",

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
    phoneError: "Please enter a valid phone number."
  },

  uzb: {
    slide1Badge: "🔥 Eng Mashhur IELTS Kursi",
    slide1Title: "IELTS 7.0 – 8.0+ Natijaga Tezroq Erishing",
    slide1Desc:
      "Tajribali ustozlar, real imtihon strategiyalari va maxsus tizim orqali qisqa muddatda yuqori natija oling.",
    slide2Badge: "🚀 Kuchli IELTS Muhiti",
    slide2Title: "Har Kuni Real IELTS Atmosferasida O‘qing",
    slide2Desc:
      "Computer-based mock testlar va tajribali mentorlar bilan o‘zingizdagi real o‘sishni tezroq his qiling.",

    slide3Badge: "🎯 Haftalik O'sish Tizimi",
    slide3Title: "Har Hafta Mock Test",
    slide3Desc: "Har hafta to'liq CD IELTS mock testi — o'quvchilar uchun bepul. O'zingizning o'sishingizni har haftada ko'rasiz, kurs oxirida emas.",
    slide4Badge: "📚 3 Kurs Formati",
    slide4Title: "O'zingizga Mos Yo'lni Tanlang",
    slide4Desc: "CD IELTS Standart (6-8 oy), Intensive (tez natija), yoki Skill-Based (zaif tomonlarni kuchaytirish). 7.5+ ga eltuvchi uchta yo'l.",

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
    phoneError: "Iltimos, to'g'ri telefon raqamingizni kiriting."
  },

  rus: {
    slide1Badge: "🔥 Самый Популярный IELTS Курс",
    slide1Title: "Получите IELTS 7.0 – 8.0+ Быстрее, Чем Думаете",
    slide1Desc:
      "Обучайтесь с опытными наставниками по системе, основанной на реальных экзаменационных стратегиях.",

    slide2Badge: "🚀 Интенсивная Система Обучения",
    slide2Title: "Компьютерные пробные экзамены и полноценная подготовка к экзаменуe",
    slide2Desc:
      "Компьютерные пробные экзамены и продуманные планы обучения, которые позволяют вам совершенствоваться каждую неделю",
    slide3Badge: "🎯 Система Еженедельного Прогресса",
    slide3Title: "Каждую Неделю Мок. Каждый Раз Фидбэк.",
    slide3Desc: "Еженедельный полный CD IELTS мок с подробной обратной связью — бесплатно для студентов. Вы видите свой прогресс каждую неделю, а не только в конце.",
    slide4Badge: "📚 3 Формата Курса",
    slide4Title: "Выберите Подходящий Путь",
    slide4Desc: "CD IELTS Стандарт (6-8 месяцев), Интенсив (быстрый результат) или Skill-Based (работа над слабыми сторонами). Один центр — три проверенных пути к 7.5+.",
    formTitle: "Получите бесплатную консультацию",
    formSubtitle:
      "Оставьте свои данные, и наш консультант скоро свяжется с вами.",
    trust1: "Computer-based подготовка",
    trust2: "Бесплатный консультацию",
    nameLabel: "Полное имя",
    phoneLabel: "Номер телефона",
    micro1: "Мы свяжемся с вами в течение 30 минут.",
    cta: "Записаться на IELTS →",
    successTitle: "Заявка успешно отправлена!",
    successText: "Мы скоро вам позвоним.",
    sending: "Отправка...",
    nameError: "Пожалуйста, введите полное имя.",
    phoneError: "Пожалуйста, введите корректный номер телефона."
  }
};

const supportedLangs = Object.keys(translations);
let currentLang = localStorage.getItem("landing-lang");
if (!supportedLangs.includes(currentLang)) currentLang = "uzb";

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
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.dataset.lang;
    if (!supportedLangs.includes(selectedLang)) return;
    currentLang = selectedLang;
    applyTranslations();
  });
});

const form = document.getElementById("registrationForm");
const formFields = document.getElementById("formFields");
const successState = document.getElementById("successState");
const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");

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

    submitBtn.disabled = true;
    submitBtn.textContent = t("sending");

    await new Promise((resolve) => setTimeout(resolve, 900));

    submitBtn.disabled = false;
    submitBtn.innerHTML = `<span class='btn-label'>${t("cta")}</span>`;
    formFields.hidden = true;
    successState.hidden = false;
    form.reset();
  });
}

applyTranslations();