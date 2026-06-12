"use client";

import { useState, useEffect } from "react";

// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  en: {
    dir:"ltr",
    nav:{ about:"About", services:"Services", work:"Work", why:"Why Us", testimonials:"Testimonials", contact:"Contact" },
    hero:{ tag:"Creative Digital Agency", h1:"We Build", h2:"Digital", h3:"Empires.", sub:"Branding, content, web & growth — all under one space.", cta1:"Start a Project", cta2:"View Our Work" },
    about:{ tag:"Who We Are", h:"One Space. Infinite Possibilities.", body:"We are a full-service creative agency obsessed with one thing: making your brand impossible to ignore. From strategy to execution, we own the entire creative journey.", s1:"50+", s1l:"Brands Built", s2:"3", s2l:"Countries", s3:"98%", s3l:"Client Retention" },
    services:{ tag:"What We Do", h:"Services That Move Brands Forward",
      items:[
        {t:"Branding", d:"Identity systems that make brands unforgettable — logo, color, voice, and visual language."},
        {t:"Web Development", d:"High-performance websites and apps built for speed, scale, and conversion."},
        {t:"Content Creation", d:"Photography, video, and copy that stops the scroll and tells your story."},
        {t:"Social Media", d:"Strategy, content calendars, and community management to grow your audience."},
        {t:"Digital Marketing", d:"Full-funnel campaigns that drive qualified traffic and measurable ROI."},
        {t:"Ads Management", d:"Meta, Google & TikTok ads managed for maximum reach and return."},
        {t:"Pro Studio", d:"State-of-the-art podcast and media production studio — rent or collaborate."},
      ]
    },
    work:{ tag:"Our Work", h:"Selected Projects",
      items:[
        {cat:"Branding", t:"Brand Identity Design", d:"Complete visual identity system — logo, colors, typography and brand guidelines."},
        {cat:"Web Design", t:"Website Development", d:"Custom high-performance website built for speed, conversion and scale.", link:"https://noblefinishrenovaties.nl"},
        {cat:"Personal Branding", t:"Saher Aldarwish", d:"Full personal brand strategy, content & social growth for Arabic-speaking creator.", link:"https://www.instagram.com/saheraldarwish1?igsh=MXI2N3BwMGs4M2pkZQ%3D%3D&utm_source=qr", iglink:"https://www.instagram.com/saheraldarwish1?igsh=MXI2N3BwMGs4M2pkZQ%3D%3D&utm_source=qr"},
        {cat:"Digital Marketing", t:"Performance Ads Campaign", d:"Multi-platform ad campaign delivering strong ROAS and measurable growth."},
        {cat:"Content Creation", t:"Social Media Content", d:"Scroll-stopping content strategy with consistent visual identity across platforms."},
        {cat:"Studio Production", t:"Podcast Production", d:"End-to-end podcast production — recording, editing and post-production in our studio."},
      ]
    },
    why:{ tag:"Why One Space", h:"The Difference Is In The Details",
      items:[
        {t:"All In One", d:"Strategy, design, development, content, and growth — one team, zero silos."},
        {t:"Results First", d:"We don\'t do pretty for pretty\'s sake. Every decision is tied to outcomes."},
        {t:"Cultural Fluency", d:"We craft for Arabic, European, and global markets with native understanding."},
        {t:"Speed + Quality", d:"Fast turnarounds without compromising the craft. That\'s the standard."},
      ]
    },
    testimonials:{ tag:"What Clients Say", h:"Trusted by Bold Brands",
      items:[
        {n:"Layla Al-Farsi", r:"CEO, Nour Group", q:"One Space didn\'t just build us a brand — they gave us a presence. The rebrand tripled our walk-in traffic."},
        {n:"Daan Visser", r:"Founder, MedCore", q:"Our new website converts at 3× our old one. The attention to detail is unlike any agency we\'ve worked with."},
        {n:"Sara Mousa", r:"Marketing Director, Bloom", q:"Within 3 months they turned our social media into our #1 acquisition channel. Unreal results."},
      ]
    },
    contact:{ tag:"Let\'s Talk", h:"Ready to Build Something Great?", sub:"Tell us about your project and we\'ll get back within 24 hours.", name:"Your Name", email:"Email Address", msg:"Tell us about your project", btn:"Send Message" },
    footer:{ tagline:"One Space. Your Brand\'s Universe.", links:["Privacy Policy","Terms of Service"], copy:"© 2025 One Space Studio. All rights reserved." },
  },
  nl: {
    dir:"ltr",
    nav:{ about:"Over Ons", services:"Diensten", work:"Werk", why:"Waarom Wij", testimonials:"Klanten", contact:"Contact" },
    hero:{ tag:"Creatief Digitaal Bureau", h1:"Wij Bouwen", h2:"Digitale", h3:"Imperia.", sub:"Branding, content, web & groei — alles onder één dak.", cta1:"Start een Project", cta2:"Bekijk Ons Werk" },
    about:{ tag:"Wie Wij Zijn", h:"Één Ruimte. Oneindig Mogelijk.", body:"Wij zijn een full-service creatief bureau, geobsedeerd door één ding: jouw merk onmogelijk te negeren maken. Van strategie tot uitvoering.", s1:"50+", s1l:"Merken Gebouwd", s2:"3", s2l:"Landen", s3:"98%", s3l:"Klantbehoud" },
    services:{ tag:"Wat Wij Doen", h:"Diensten Die Merken Vooruit Bewegen",
      items:[
        {t:"Branding", d:"Identiteitssystemen die merken onvergetelijk maken."},
        {t:"Webontwikkeling", d:"Krachtige websites en apps gebouwd voor snelheid en conversie."},
        {t:"Content Creatie", d:"Fotografie, video en tekst die de scroll stopt."},
        {t:"Social Media", d:"Strategie en community management om jouw publiek te laten groeien."},
        {t:"Digitale Marketing", d:"Full-funnel campagnes die gekwalificeerd verkeer opleveren."},
        {t:"Advertentiebeheer", d:"Meta-, Google- en TikTok-advertenties voor maximaal rendement."},
        {t:"Pro Studio", d:"Ultramodern podcast- en mediaproductiestudio — huur of werk samen."},
      ]
    },
    work:{ tag:"Ons Werk", h:"Geselecteerde Projecten",
      items:[
        {cat:"Branding", t:"Merkidentiteit Ontwerp", d:"Compleet visueel identiteitssysteem — logo, kleuren, typografie en merkrichtlijnen."},
        {cat:"Web Design", t:"Website Ontwikkeling", d:"Maatwerk website gebouwd voor snelheid, conversie en schaalbaarheid.", link:"https://noblefinishrenovaties.nl"},
        {cat:"Personal Branding", t:"Saher Aldarwish", d:"Volledige personal brand strategie, content & sociale groei voor Arabischtalige creator.", link:"https://www.instagram.com/saheraldarwish1?igsh=MXI2N3BwMGs4M2pkZQ%3D%3D&utm_source=qr", iglink:"https://www.instagram.com/saheraldarwish1?igsh=MXI2N3BwMGs4M2pkZQ%3D%3D&utm_source=qr"},
        {cat:"Digitale Marketing", t:"Performance Advertentiecampagne", d:"Multi-platform campagne met sterke ROAS en meetbare groei."},
        {cat:"Content Creatie", t:"Social Media Content", d:"Opvallende contentstrategie met consistente visuele identiteit op alle platforms."},
        {cat:"Studio Productie", t:"Podcast Productie", d:"End-to-end podcastproductie — opname, editing en postproductie in onze studio."},
      ]
    },
    why:{ tag:"Waarom One Space", h:"Het Verschil Zit In De Details",
      items:[
        {t:"Alles In Één", d:"Strategie, design, development en groei — één team, nul silo\'s."},
        {t:"Resultaat Eerst", d:"We doen niet mooi voor mooi. Elke beslissing is verbonden aan resultaten."},
        {t:"Culturele Vaardigheid", d:"We creëren voor Arabische, Europese en mondiale markten."},
        {t:"Snelheid + Kwaliteit", d:"Snelle doorlooptijden zonder afbreuk aan de kwaliteit."},
      ]
    },
    testimonials:{ tag:"Wat Klanten Zeggen", h:"Vertrouwd Door Gedurfde Merken",
      items:[
        {n:"Layla Al-Farsi", r:"CEO, Nour Group", q:"One Space heeft ons niet alleen een merk gebouwd — ze gaven ons een aanwezigheid."},
        {n:"Daan Visser", r:"Oprichter, MedCore", q:"Onze nieuwe website converteert 3× beter dan onze oude."},
        {n:"Sara Mousa", r:"Marketingdirecteur, Bloom", q:"Binnen 3 maanden maakten ze onze social media tot ons nummer 1 acquisitiekanaal."},
      ]
    },
    contact:{ tag:"Laten We Praten", h:"Klaar Om Iets Geweldigs Te Bouwen?", sub:"Vertel ons over jouw project en we reageren binnen 24 uur.", name:"Jouw Naam", email:"E-mailadres", msg:"Vertel ons over jouw project", btn:"Bericht Versturen" },
    footer:{ tagline:"One Space. Het Universum Van Jouw Merk.", links:["Privacybeleid","Gebruiksvoorwaarden"], copy:"© 2025 One Space Studio. Alle rechten voorbehouden." },
  },
  ar: {
    dir:"rtl",
    nav:{ about:"من نحن", services:"خدماتنا", work:"أعمالنا", why:"لماذا نحن", testimonials:"العملاء", contact:"تواصل" },
    hero:{ tag:"وكالة إبداعية رقمية", h1:"نبني", h2:"إمبراطوريات", h3:"رقمية.", sub:"العلامة التجارية، المحتوى، الويب والنمو — كل شيء في مكان واحد.", cta1:"ابدأ مشروعك", cta2:"شاهد أعمالنا" },
    about:{ tag:"من نحن", h:"مساحة واحدة. إمكانيات لا نهاية لها.", body:"نحن وكالة إبداعية متكاملة، مهووسون بشيء واحد: جعل علامتك التجارية أمرًا لا يمكن تجاهله. من الاستراتيجية إلى التنفيذ.", s1:"+50", s1l:"علامة تجارية", s2:"3", s2l:"دول", s3:"98%", s3l:"ولاء العملاء" },
    services:{ tag:"ما نقدمه", h:"خدمات تدفع العلامات التجارية إلى الأمام",
      items:[
        {t:"العلامة التجارية", d:"أنظمة هوية تجعل العلامات التجارية لا تُنسى."},
        {t:"تطوير المواقع", d:"مواقع وتطبيقات عالية الأداء مبنية للسرعة والتحويل."},
        {t:"إنشاء المحتوى", d:"تصوير وفيديو ونصوص توقف التمرير وتروي قصتك."},
        {t:"إدارة التواصل الاجتماعي", d:"استراتيجية وتقويمات محتوى لتنمية جمهورك."},
        {t:"التسويق الرقمي", d:"حملات متكاملة تجلب زيارات مؤهلة وعائدًا قابلًا للقياس."},
        {t:"إدارة الإعلانات", d:"إعلانات Meta وGoogle وTikTok تُدار لأقصى وصول وعائد."},
        {t:"استوديو احترافي", d:"استوديو بودكاست ووسائط إعلامية متطورة  للإيجار أو التعاون."},
      ]
    },
    work:{ tag:"أعمالنا", h:"مشاريع مختارة",
      items:[
        {cat:"هوية بصرية", t:"تصميم الهوية البصرية", d:"نظام هوية بصرية متكامل — شعار، ألوان، طباعة وإرشادات العلامة التجارية."},
        {cat:"تصميم ويب", t:"تطوير موقع إلكتروني", d:"موقع مخصص وعالي الأداء مبني للسرعة والتحويل والنمو.", link:"https://noblefinishrenovaties.nl"},
        {cat:"البراند الشخصي", t:"Saher Aldarwish", d:"استراتيجية براند شخصي متكاملة، محتوى ونمو على السوشيال ميديا للمبدع العربي.", link:"https://www.instagram.com/saheraldarwish1?igsh=MXI2N3BwMGs4M2pkZQ%3D%3D&utm_source=qr", iglink:"https://www.instagram.com/saheraldarwish1?igsh=MXI2N3BwMGs4M2pkZQ%3D%3D&utm_source=qr"},
        {cat:"تسويق رقمي", t:"حملة إعلانية متكاملة", d:"حملة متعددة المنصات بعائد استثمار قوي ونمو قابل للقياس."},
        {cat:"إنشاء محتوى", t:"محتوى السوشيال ميديا", d:"استراتيجية محتوى جذابة بهوية بصرية موحدة عبر جميع المنصات."},
        {cat:"إنتاج استوديو", t:"إنتاج بودكاست", d:"إنتاج بودكاست متكامل — تسجيل، مونتاج وما بعد الإنتاج في استوديونا."},
      ]
    },
    why:{ tag:"لماذا One Space", h:"الفرق يكمن في التفاصيل",
      items:[
        {t:"كل شيء في مكان واحد", d:"استراتيجية، تصميم، تطوير، محتوى ونمو — فريق واحد، بدون حواجز."},
        {t:"النتائج أولًا", d:"لا نصنع الجمال من أجل الجمال. كل قرار مرتبط بنتائج ملموسة."},
        {t:"الإلمام الثقافي", d:"نصمم للأسواق العربية والأوروبية والعالمية بفهم عميق."},
        {t:"السرعة + الجودة", d:"أوقات تسليم سريعة دون المساس بالحرفة. هذا هو المعيار."},
      ]
    },
    testimonials:{ tag:"ماذا يقول العملاء", h:"موثوق به من العلامات الجريئة",
      items:[
        {n:"ليلى الفارسي", r:"الرئيسة التنفيذية، مجموعة نور", q:"One Space لم يبنِ لنا علامة تجارية فحسب — بل منحنا حضورًا مختلفًا تمامًا."},
        {n:"دان فيسر", r:"المؤسس، MedCore", q:"موقعنا الجديد يحوّل بمعدل ثلاثة أضعاف موقعنا القديم. الاهتمام بالتفاصيل لا مثيل له."},
        {n:"سارة موسى", r:"مدير تسويق، Bloom", q:"في غضون 3 أشهر حوّلوا وسائل التواصل الاجتماعي لدينا إلى قناة الاستحواذ رقم 1."},
      ]
    },
    contact:{ tag:"لنتحدث", h:"هل أنت مستعد لبناء شيء عظيم؟", sub:"أخبرنا عن مشروعك وسنرد خلال 24 ساعة.", name:"اسمك", email:"البريد الإلكتروني", msg:"أخبرنا عن مشروعك", btn:"إرسال الرسالة" },
    footer:{ tagline:"One Space. كون علامتك التجارية.", links:["سياسة الخصوصية","شروط الخدمة"], copy:"© 2025 One Space Studio. جميع الحقوق محفوظة." },
  },
};

// ── Real Logo (actual PNG embedded) ──────────────────────────────────────────
const LOGO_B64 = "data:image/png;base64,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";
const SAHER_PHOTO = "/saher-photo.png";

const FAVICON_B64 = "data:image/png;base64,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";


const Logo = ({ size = 36, glow }) => (
  <img
    src={LOGO_B64}
    width={size}
    height={size}
    alt="One Space Logo"
    style={{
      display: "block",
      objectFit: "contain",
      filter: glow
        ? "drop-shadow(0 0 8px rgba(122,204,22,0.55)) brightness(1.05)"
        : "none",
    }}
  />
);

const GREEN = "#7ACC16";
const DARK  = "#06080A";
const NAVY  = "#0B0F14";

// ── App ───────────────────────────────────────────────────────────────────────
export default function OneSpace() {
  const [lang, setLang]       = useState("en");
  const [menu, setMenu]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]   = useState("hero");
  const [hSvc, setHSvc]       = useState(null);
  const [sent, setSent]       = useState(false);

  const t    = T[lang];
  const rtl  = t.dir === "rtl";
  const disp = rtl ? "'Cairo',system-ui,sans-serif" : "'Playfair Display',Georgia,serif";
  const body = rtl ? "'Cairo',system-ui,sans-serif" : "'Plus Jakarta Sans',system-ui,sans-serif";

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      ["hero","about","services","work","why","testimonials","contact"].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 100 && r.bottom >= 100) setActive(id);
      });
    };
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.documentElement.dir  = t.dir;
    document.documentElement.lang = lang;
    if (menu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [lang, t.dir, menu]);

  const go = id => {
    setMenu(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }), 280);
  };

  const nav = [
    {id:"about", label:t.nav.about},
    {id:"services", label:t.nav.services},
    {id:"work", label:t.nav.work},
    {id:"why", label:t.nav.why},
    {id:"testimonials", label:t.nav.testimonials},
    {id:"contact", label:t.nav.contact},
  ];

  const icons = ["✦","⬡","👤","⚡","▲","◉"];

  return (
    <>
      <link rel="icon" type="image/png" href={FAVICON_B64}/>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      <div className="os-root" style={{ fontFamily:body, direction:t.dir }}>

        {/* ══ HEADER ══ */}
        <header className={`os-header ${scrolled ? "scrolled" : ""}`}>
          <div className="os-logo" onClick={() => go("hero")}>
            <Logo size={34} glow />
            <div className="os-logo-text">
              <span className="os-logo-name" style={{ fontFamily:disp }}>One Space</span>
              <span className="os-logo-sub">Studio</span>
            </div>
          </div>
          <div className="os-header-right">
            <div className="os-lang">
              {["en","nl","ar"].map(l => (
                <button key={l} className={`os-lang-btn ${lang===l?"active":""}`}
                  onClick={() => setLang(l)}>{l.toUpperCase()}</button>
              ))}
            </div>
            <button className="os-menu-btn" onClick={() => setMenu(true)}>
              <span className="os-hamburger">
                <span/><span/>
              </span>
              <span className="os-menu-label">Menu</span>
            </button>
          </div>
        </header>

        {/* ══ OVERLAY MENU ══ */}
        <div className={`os-overlay ${menu ? "open" : ""}`}>
          <div className="os-overlay-top">
            <div className="os-logo">
              <Logo size={36} glow />
              <div className="os-logo-text">
                <span className="os-logo-name" style={{ fontFamily:disp }}>One Space</span>
                <span className="os-logo-sub">Studio</span>
              </div>
            </div>
            <button className="os-close-btn" onClick={() => setMenu(false)}>✕</button>
          </div>
          <nav className="os-overlay-nav">
            {nav.map(item => (
              <button key={item.id}
                className={`os-nav-item ${active===item.id?"active":""}`}
                style={{ fontFamily:disp }}
                onClick={() => go(item.id)}>
                <span>{item.label}</span>
                <span className="os-nav-arrow">{rtl ? "←" : "→"}</span>
              </button>
            ))}
          </nav>
          <div className="os-overlay-langs">
            {["en","nl","ar"].map(l => (
              <button key={l} className={`os-lang-btn ${lang===l?"active":""}`}
                onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>

        {/* ══ HERO ══ */}
        <section id="hero" className="os-hero">
          <div className="os-hero-bg"/>
          <div className="os-hero-grid"/>
          <div className="os-hero-watermark"><Logo size={280}/></div>
          <div className="os-hero-content">
            <div className="os-tag">
              <span className="os-tag-dot"/>
              <span style={{ fontFamily:body }}>{t.hero.tag}</span>
            </div>
            <h1 className="os-h1" style={{ fontFamily:disp }}>
              <span className="os-h1-white">{t.hero.h1}</span>
              <span className="os-h1-green" style={{ fontStyle: rtl?"normal":"italic" }}>{t.hero.h2}</span>
              <span className="os-h1-white">{t.hero.h3}</span>
            </h1>
            <p className="os-hero-sub" style={{ fontFamily:body }}>{t.hero.sub}</p>
            <div className="os-hero-ctas">
              <button className="os-btn-primary" style={{ fontFamily:body }}
                onClick={() => go("contact")}>{t.hero.cta1}</button>
              <button className="os-btn-secondary" style={{ fontFamily:body }}
                onClick={() => go("work")}>{t.hero.cta2}</button>
            </div>
          </div>
          <div className="os-scroll-hint" style={{ fontFamily:body }}>
            <span className="os-scroll-line"/>SCROLL
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section id="about" className="os-section os-navy">
          <div className="os-container">
            <div className="os-two-col">
              <div>
                <Tag label={t.about.tag} body={body}/>
                <h2 className="os-h2" style={{ fontFamily:disp }}>{t.about.h}</h2>
                <p className="os-body-text" style={{ fontFamily:body }}>{t.about.body}</p>
                <div className="os-stats">
                  {[[t.about.s1,t.about.s1l],[t.about.s2,t.about.s2l],[t.about.s3,t.about.s3l]].map(([n,l],i) => (
                    <div key={i} className="os-stat">
                      <span className="os-stat-num" style={{ fontFamily:disp }}>{n}</span>
                      <span className="os-stat-label" style={{ fontFamily:body }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="os-about-visual">
                <div className="os-glow-orb"/>
                <Logo size={100} glow/>
                <span className="os-visual-label" style={{ fontFamily:body }}>ONE SPACE STUDIO</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section id="services" className="os-section os-dark">
          <div className="os-container">
            <Tag label={t.services.tag} body={body}/>
            <h2 className="os-h2" style={{ fontFamily:disp }}>{t.services.h}</h2>
            <div className="os-services-grid">
              {t.services.items.map((s,i) => (
                <div key={i} className={`os-svc-card ${hSvc===i?"hover":""}`}
                  onMouseEnter={() => setHSvc(i)} onMouseLeave={() => setHSvc(null)}>
                  <span className="os-svc-num" style={{ fontFamily:body }}>{String(i+1).padStart(2,"0")}</span>
                  <span className="os-svc-title" style={{ fontFamily:disp }}>{s.t}</span>
                  <span className="os-svc-desc" style={{ fontFamily:body }}>{s.d}</span>
                  <div className="os-svc-line"/>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WORK ══ */}
        <section id="work" className="os-section os-navy">
          <div className="os-container">
            <Tag label={t.work.tag} body={body}/>
            <h2 className="os-h2" style={{ fontFamily:disp }}>{t.work.h}</h2>
            <div className="os-work-grid">
              {t.work.items.map((w,i) => (
                <div key={i} className="os-work-card"
                  onClick={() => w.link && window.open(w.link, "_blank")}
                  style={{ cursor: w.link ? "pointer" : "default" }}>
                  <div className={`os-work-thumb os-thumb-${i%6}`}>
                    {(w.link && !w.link.includes("instagram")) ? (
                      <div className="os-iframe-wrap">
                        <iframe src={w.link} className="os-iframe-preview" scrolling="no" loading="lazy" title={w.t} sandbox="allow-scripts allow-same-origin"/>
                        <div className="os-iframe-overlay"/>
                        <div className="os-iframe-bar" style={{fontFamily:body}}>
                          <span className="os-iframe-dots"><span/><span/><span/></span>
                          <span className="os-iframe-url">{w.link.replace("https://","")}</span>
                          <span className="os-iframe-ext-icon">↗</span>
                        </div>
                      </div>
                    ) : w.iglink ? (
                      /* Saher Aldarwish — use his profile photo as cover */
                      <div className="os-saher-cover">
                        <img src={SAHER_PHOTO} alt="Saher Aldarwish" className="os-saher-img"/>
                        <div className="os-saher-overlay"/>
                        <div className="os-saher-profile">
                          <img src={SAHER_PHOTO} alt="Saher Aldarwish" className="os-saher-avatar"/>
                          <div>
                            <p className="os-saher-name" style={{fontFamily:body}}>@saheraldarwish1</p>
                            <p className="os-saher-followers" style={{fontFamily:body}}>27.4K followers</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="os-work-placeholder">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:.35}}>
                          <rect x="3" y="3" width="18" height="18" rx="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span className="os-placeholder-text" style={{fontFamily:body}}>
                          {lang==="ar" ? "أضف صورة مشروعك" : lang==="nl" ? "Voeg projectafbeelding toe" : "Add project image"}
                        </span>
                      </div>
                    )}
                    <div className="os-work-cat-badge" style={{fontFamily:body}}>{w.cat}</div>
                    {w.link && w.link.includes("instagram") && (
                      <div className="os-work-link-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                        Instagram
                      </div>
                    )}
                  </div>
                  <div className="os-work-body">
                    <span className="os-work-cat" style={{ fontFamily:body }}>{w.cat}</span>
                    <span className="os-work-title" style={{ fontFamily:disp }}>{w.t}</span>
                    <span className="os-work-desc" style={{ fontFamily:body }}>{w.d}</span>
                    {w.link && (
                      <a href={w.link} target="_blank" rel="noopener noreferrer"
                        className={w.link.includes("instagram") ? "os-work-ig-btn" : "os-work-web-btn"}
                        style={{ fontFamily:body }}
                        onClick={e => e.stopPropagation()}>
                        {w.link.includes("instagram") ? (
                          <>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                            {lang==="ar" ? "تابع على انستغرام" : lang==="nl" ? "Volg op Instagram" : "Follow on Instagram"}
                          </>
                        ) : (
                          <>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                              <polyline points="15 3 21 3 21 9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            {lang==="ar" ? "زيارة الموقع" : lang==="nl" ? "Bekijk website" : "Visit Website"}
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY ══ */}
        <section id="why" className="os-section os-dark">
          <div className="os-container">
            <div className="os-why-layout">
              <div className="os-why-left">
                <Tag label={t.why.tag} body={body}/>
                <h2 className="os-h2" style={{ fontFamily:disp }}>{t.why.h}</h2>
              </div>
              <div className="os-why-cards">
                {t.why.items.map((w,i) => (
                  <div key={i} className="os-why-card">
                    <div className="os-why-icon">{["⚡","📈","🌍","⏱️"][i]}</div>
                    <div>
                      <p className="os-why-title" style={{ fontFamily:disp }}>{w.t}</p>
                      <p className="os-why-desc" style={{ fontFamily:body }}>{w.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section id="testimonials" className="os-section os-navy">
          <div className="os-container">
            <Tag label={t.testimonials.tag} body={body}/>
            <h2 className="os-h2" style={{ fontFamily:disp }}>{t.testimonials.h}</h2>
            <div className="os-test-grid">
              {t.testimonials.items.map((item,i) => (
                <div key={i} className="os-test-card">
                  <div className="os-stars">★★★★★</div>
                  <p className="os-test-quote" style={{ fontFamily:body }}>"{item.q}"</p>
                  <div className="os-test-author">
                    <div className="os-test-avatar" style={{ background:`hsl(${i*70+90},40%,28%)` }}>
                      <span style={{ fontFamily:disp }}>{item.n[0]}</span>
                    </div>
                    <div>
                      <p className="os-test-name" style={{ fontFamily:body }}>{item.n}</p>
                      <p className="os-test-role" style={{ fontFamily:body }}>{item.r}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <div className="os-cta-wrap">
          <div className="os-cta-banner">
            {/* Decorative blobs */}
            <div className="os-cta-blob os-cta-blob-1"/>
            <div className="os-cta-blob os-cta-blob-2"/>
            <div className="os-cta-blob os-cta-blob-3"/>
            {/* Grid overlay */}
            <div className="os-cta-grid"/>
            {/* Content */}
            <div className="os-cta-inner">
              <div className="os-cta-badge" style={{ fontFamily:body }}>
                <span className="os-cta-badge-dot"/>
                {lang==="ar" ? "جاهز للبدء؟" : lang==="nl" ? "Klaar om te starten?" : "Ready to start?"}
              </div>
              <h2 className="os-cta-h" style={{ fontFamily:disp }}>
                {lang==="ar" ? (
                  <><span className="os-cta-white">هل أنت مستعد لبناء</span>{" "}
                  <span className="os-cta-green" style={{ fontStyle:"normal" }}>شيء عظيم</span>
                  <span className="os-cta-white">؟</span></>
                ) : lang==="nl" ? (
                  <><span className="os-cta-white">Klaar om iets</span>{" "}
                  <span className="os-cta-green" style={{ fontStyle:"italic" }}>geweldigs</span>{" "}
                  <span className="os-cta-white">te bouwen?</span></>
                ) : (
                  <><span className="os-cta-white">Let's Build Something</span>{" "}
                  <span className="os-cta-green" style={{ fontStyle:"italic" }}>Extraordinary.</span></>
                )}
              </h2>
              <p className="os-cta-sub" style={{ fontFamily:body }}>
                {lang==="ar"
                  ? "فريقنا جاهز لتحويل فكرتك إلى واقع. تواصل معنا اليوم."
                  : lang==="nl"
                  ? "Ons team staat klaar om jouw visie werkelijkheid te maken. Neem vandaag contact op."
                  : "Our team is ready to turn your vision into reality. Get in touch today."}
              </p>
              <div className="os-cta-actions">
                <button className="os-cta-primary-btn" style={{ fontFamily:body }}
                  onClick={() => go("contact")}>
                  <span>{t.hero.cta1}</span>
                  <span className="os-cta-arrow">{rtl ? "←" : "→"}</span>
                </button>
                <button className="os-cta-ghost-btn" style={{ fontFamily:body }}
                  onClick={() => go("work")}>
                  {t.hero.cta2}
                </button>
              </div>
              {/* Trust strip */}
              <div className="os-cta-trust" style={{ fontFamily:body }}>
                <span className="os-trust-item">
                  <span className="os-trust-dot"/>
                  {lang==="ar" ? "رد خلال 24 ساعة" : lang==="nl" ? "Reactie binnen 24u" : "Response within 24h"}
                </span>
                <span className="os-trust-sep"/>
                <span className="os-trust-item">
                  <span className="os-trust-dot"/>
                  {lang==="ar" ? "استشارة مجانية" : lang==="nl" ? "Gratis consult" : "Free consultation"}
                </span>
                <span className="os-trust-sep"/>
                <span className="os-trust-item">
                  <span className="os-trust-dot"/>
                  {lang==="ar" ? "+50 مشروع ناجح" : lang==="nl" ? "50+ projecten" : "50+ projects delivered"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="os-section os-dark">
          <div className="os-container">
            <div className="os-contact-layout">
              <div>
                <Tag label={t.contact.tag} body={body}/>
                <h2 className="os-h2" style={{ fontFamily:disp }}>{t.contact.h}</h2>
                <p className="os-body-text" style={{ fontFamily:body }}>{t.contact.sub}</p>
                {[
                  {icon:"✉", text:"hello@onespace.studio"},
                  {icon:"📍", text:"Wiekenweg 42 N, 3815 KL Amersfoort, Nederland"},
                  {icon:"📞", text:"+31 6 43075037"},
                ].map((d,i) => (
                  <div key={i} className="os-contact-row">
                    <div className="os-contact-icon">{d.icon}</div>
                    <span style={{ fontFamily:body }}>{d.text}</span>
                  </div>
                ))}
              </div>
              <div className="os-form-side">
                {sent ? (
                  <div className="os-form-success">
                    <Logo size={52} glow/>
                    <h3 style={{ fontFamily:disp }}>
                      {lang==="ar" ? "تم الإرسال!" : lang==="nl" ? "Verstuurd!" : "Message Sent!"}
                    </h3>
                    <p style={{ fontFamily:body }}>
                      {lang==="ar" ? "سنتواصل معك خلال 24 ساعة." : lang==="nl" ? "We nemen binnen 24 uur contact op." : "We\'ll be in touch within 24 hours."}
                    </p>
                  </div>
                ) : (
                  <div className="os-form">
                    <input className="os-input" placeholder={t.contact.name} style={{ fontFamily:body }}/>
                    <input className="os-input" placeholder={t.contact.email} style={{ fontFamily:body }}/>
                    <textarea className="os-textarea" placeholder={t.contact.msg} style={{ fontFamily:body }}/>
                    <button className="os-btn-primary os-submit" style={{ fontFamily:body }}
                      onClick={() => setSent(true)}>{t.contact.btn}</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="os-footer">
          <div className="os-container">
            <div className="os-footer-top">
              <div className="os-footer-brand">
                <div className="os-logo">
                  <Logo size={32}/>
                  <div className="os-logo-text">
                    <span className="os-logo-name" style={{ fontFamily:disp }}>One Space</span>
                    <span className="os-logo-sub">Studio</span>
                  </div>
                </div>
                <p className="os-footer-tagline" style={{ fontFamily:body }}>{t.footer.tagline}</p>
              </div>
              <div>
                <p className="os-footer-col-title" style={{ fontFamily:body }}>Navigate</p>
                <div className="os-footer-links">
                  {nav.map(n => (
                    <span key={n.id} className="os-footer-link" style={{ fontFamily:body }}
                      onClick={() => go(n.id)}>{n.label}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="os-footer-col-title" style={{ fontFamily:body }}>Social</p>
                {["Instagram","LinkedIn","TikTok","Behance"].map(s => (
                  <div key={s} className="os-footer-link" style={{ fontFamily:body }}>{s}</div>
                ))}
              </div>
            </div>
            <div className="os-footer-bottom">
              <span style={{ fontFamily:body }}>{t.footer.copy}</span>
              <div className="os-footer-legal">
                {t.footer.links.map(l => (
                  <span key={l} className="os-footer-legal-link" style={{ fontFamily:body }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </footer>

        {/* ══ WHATSAPP FLOAT BUTTON ══ */}
        <div className="os-wa-wrap">
          {/* CTA Card */}
          <div className="os-wa-cta-card">
            <div className="os-wa-cta-top">
              <div className="os-wa-cta-avatar">
                <img src={LOGO_B64} width="28" height="28" alt="One Space" style={{objectFit:"contain"}}/>
              </div>
              <div>
                <p className="os-wa-cta-name" style={{fontFamily:body}}>One Space Studio</p>
                <p className="os-wa-cta-status" style={{fontFamily:body}}>
                  <span className="os-wa-online-dot"/>
                  {lang==="ar" ? "متاح الآن" : lang==="nl" ? "Nu beschikbaar" : "Online now"}
                </p>
              </div>
              <button className="os-wa-cta-close" onClick={e => { e.currentTarget.closest('.os-wa-wrap').classList.toggle('hide-cta'); }}>✕</button>
            </div>
            <p className="os-wa-cta-msg" style={{fontFamily:body}}>
              {lang==="ar"
                ? "👋 مرحباً! هل أنت مهتم بخدماتنا؟ تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك."
                : lang==="nl"
                ? "👋 Hallo! Geïnteresseerd in onze diensten? Neem nu contact op voor een gratis consult en een offerte op maat."
                : "👋 Hi there! Interested in our services? Reach out now for a free consultation and a custom quote for your project."}
            </p>
            <a
              href="https://wa.me/31643075037"
              target="_blank"
              rel="noopener noreferrer"
              className="os-wa-cta-btn"
              style={{fontFamily:body}}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {lang==="ar" ? "ابدأ المحادثة" : lang==="nl" ? "Start gesprek" : "Start conversation"}
            </a>
          </div>

          {/* Main WhatsApp button */}
          <a
            href="https://wa.me/31643075037"
            target="_blank"
            rel="noopener noreferrer"
            className="os-wa-btn"
            aria-label="WhatsApp"
          >
            <svg className="os-wa-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="os-wa-pulse"/>
          </a>
        </div>

      </div>

      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; font-size:16px; }
        body { background:${DARK}; -webkit-font-smoothing:antialiased; }
        button { cursor:pointer; border:none; background:none; }
        input, textarea { border:none; outline:none; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-track { background:${DARK}; }
        ::-webkit-scrollbar-thumb { background:rgba(122,204,22,.25); border-radius:2px; }

        /* ── Root ── */
        .os-root { color:#fff; overflow-x:hidden; }

        /* ── Header ── */
        .os-header {
          position:fixed; top:0; left:0; right:0; z-index:90;
          display:flex; align-items:center; justify-content:space-between;
          padding:14px 20px;
          transition:background .4s ease, border-color .4s ease;
          border-bottom:1px solid transparent;
        }
        .os-header.scrolled {
          background:rgba(6,8,10,.92);
          backdrop-filter:blur(24px) saturate(1.4);
          border-bottom-color:rgba(122,204,22,.1);
        }
        @media(min-width:768px){
          .os-header { padding:18px 48px; }
        }

        /* ── Logo ── */
        .os-logo { display:flex; align-items:center; gap:10px; cursor:pointer; }
        .os-logo-text { display:flex; flex-direction:column; line-height:1; }
        .os-logo-name { font-size:15px; font-weight:600; color:#fff; }
        .os-logo-sub { font-size:9px; color:rgba(122,204,22,.65); letter-spacing:2px; text-transform:uppercase; margin-top:2px; font-weight:400; }
        @media(min-width:768px){
          .os-logo-name { font-size:17px; }
        }

        /* ── Header right ── */
        .os-header-right { display:flex; align-items:center; gap:10px; }
        @media(min-width:768px){ .os-header-right { gap:16px; } }

        /* ── Lang switcher ── */
        .os-lang {
          display:flex; gap:2px;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.07);
          border-radius:100px; padding:3px 4px;
        }
        .os-lang-btn {
          padding:4px 9px; border-radius:100px;
          font-size:10px; font-weight:500; letter-spacing:.6px;
          color:rgba(255,255,255,.4); background:transparent;
          transition:all .2s;
        }
        .os-lang-btn.active {
          background:${GREEN}; color:#000; font-weight:700;
        }
        @media(min-width:768px){
          .os-lang-btn { padding:5px 13px; font-size:11px; }
        }

        /* ── Menu button ── */
        .os-menu-btn {
          display:flex; align-items:center; gap:8px;
          padding:8px 14px; border-radius:100px;
          border:1.5px solid rgba(122,204,22,.3);
          color:rgba(255,255,255,.8); font-size:12px; font-weight:500;
          transition:all .25s; letter-spacing:.3px;
        }
        .os-menu-btn:hover { border-color:${GREEN}; color:${GREEN}; }
        .os-hamburger { display:flex; flex-direction:column; gap:3px; }
        .os-hamburger span { display:block; height:1.5px; background:currentColor; border-radius:2px; transition:width .2s; }
        .os-hamburger span:first-child { width:16px; }
        .os-hamburger span:last-child { width:10px; }
        .os-menu-label { display:none; }
        @media(min-width:768px){
          .os-menu-btn { padding:9px 22px; font-size:13px; }
          .os-menu-label { display:inline; }
        }

        /* ── Overlay ── */
        .os-overlay {
          position:fixed; inset:0; z-index:200;
          background:rgba(6,8,10,.97);
          backdrop-filter:blur(40px);
          display:flex; flex-direction:column;
          padding:20px;
          opacity:0; pointer-events:none;
          transition:opacity .4s cubic-bezier(.16,1,.3,1);
        }
        .os-overlay.open { opacity:1; pointer-events:auto; }
        @media(min-width:768px){ .os-overlay { padding:28px 48px; } }

        .os-overlay-top {
          display:flex; align-items:center; justify-content:space-between;
          margin-bottom:28px;
        }
        @media(min-width:768px){ .os-overlay-top { margin-bottom:44px; } }

        .os-close-btn {
          width:44px; height:44px; border-radius:50%;
          background:rgba(255,255,255,.05);
          border:1.5px solid rgba(255,255,255,.1);
          color:rgba(255,255,255,.7); font-size:16px;
          display:flex; align-items:center; justify-content:center;
          transition:all .2s;
        }
        .os-close-btn:hover { border-color:${GREEN}; color:${GREEN}; }

        /* ── Nav items ── */
        .os-overlay-nav { display:flex; flex-direction:column; gap:8px; flex:1; }
        .os-nav-item {
          display:flex; align-items:center; justify-content:space-between;
          width:100%; padding:14px 20px; border-radius:100px;
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.06);
          color:rgba(255,255,255,.82);
          font-size:clamp(15px,3.5vw,22px);
          font-weight:500; letter-spacing:-.2px;
          transition:all .25s; text-align:start;
        }
        .os-nav-item.active { background:${GREEN}; color:#000; border-color:transparent; }
        .os-nav-item:not(.active):hover {
          background:rgba(122,204,22,.06);
          border-color:rgba(122,204,22,.18);
        }
        .os-nav-arrow { font-size:12px; opacity:.3; font-family:sans-serif; }
        @media(min-width:768px){
          .os-nav-item { padding:18px 32px; font-size:clamp(16px,2.5vw,26px); }
        }

        .os-overlay-langs {
          display:flex; gap:8px; margin-top:20px;
        }
        .os-overlay-langs .os-lang-btn {
          padding:8px 18px; font-size:13px;
        }

        /* ── Hero ── */
        .os-hero {
          min-height:100svh;
          display:flex; align-items:center;
          position:relative; overflow:hidden;
          padding:100px 20px 80px;
        }
        @media(min-width:768px){ .os-hero { padding:130px 48px 100px; } }

        .os-hero-bg {
          position:absolute; inset:0; z-index:0;
          background:
            radial-gradient(ellipse 90% 60% at 50% -5%, rgba(122,204,22,.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 85% 85%, rgba(122,204,22,.04) 0%, transparent 60%),
            ${DARK};
        }
        .os-hero-grid {
          position:absolute; inset:0; z-index:0; opacity:.025;
          background-image:
            linear-gradient(rgba(122,204,22,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,204,22,1) 1px, transparent 1px);
          background-size:64px 64px;
        }
        .os-hero-watermark {
          position:absolute; z-index:0; opacity:.04; pointer-events:none;
          right:5%; top:50%; transform:translateY(-50%);
        }
        [dir="rtl"] .os-hero-watermark { right:auto; left:5%; }

        .os-hero-content { position:relative; z-index:1; max-width:900px; width:100%; }

        /* ── Tag pill ── */
        .os-tag {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(122,204,22,.09);
          border:1px solid rgba(122,204,22,.22);
          border-radius:100px; padding:6px 14px; margin-bottom:24px;
          font-size:10px; font-weight:600; color:${GREEN};
          letter-spacing:1.8px; text-transform:uppercase;
        }
        @media(min-width:768px){ .os-tag { padding:7px 18px; font-size:11px; margin-bottom:32px; } }
        .os-tag-dot {
          width:5px; height:5px; border-radius:50%;
          background:${GREEN}; box-shadow:0 0 5px ${GREEN};
          flex-shrink:0;
        }

        /* ── H1 ── */
        .os-h1 {
          font-size:clamp(46px,11vw,120px);
          line-height:.95; letter-spacing:-2px;
          margin-bottom:0;
        }
        [dir="rtl"] .os-h1 { line-height:1.15; letter-spacing:-1px; font-size:clamp(40px,10vw,110px); }
        .os-h1-white { display:block; color:rgba(255,255,255,.9); }
        .os-h1-green { display:block; color:${GREEN}; }

        /* ── Hero sub ── */
        .os-hero-sub {
          font-size:clamp(14px,2vw,18px); color:rgba(255,255,255,.48);
          max-width:480px; line-height:1.75; font-weight:300;
          margin-top:20px; margin-bottom:36px;
        }
        @media(min-width:768px){ .os-hero-sub { margin-top:28px; margin-bottom:48px; } }

        /* ── CTAs ── */
        .os-hero-ctas { display:flex; gap:12px; flex-wrap:wrap; }
        .os-btn-primary {
          padding:14px 28px; border-radius:100px;
          background:${GREEN}; color:#000; font-weight:600;
          font-size:14px; letter-spacing:.3px;
          box-shadow:0 0 28px rgba(122,204,22,.28);
          transition:all .3s cubic-bezier(.16,1,.3,1);
        }
        .os-btn-primary:hover { transform:translateY(-3px); box-shadow:0 0 44px rgba(122,204,22,.42); }
        .os-btn-secondary {
          padding:13px 26px; border-radius:100px;
          background:transparent; color:rgba(255,255,255,.7);
          font-weight:400; font-size:14px;
          border:1.5px solid rgba(255,255,255,.13);
          transition:all .3s;
        }
        .os-btn-secondary:hover { border-color:rgba(122,204,22,.4); color:${GREEN}; }
        @media(min-width:768px){
          .os-btn-primary { padding:16px 38px; font-size:15px; }
          .os-btn-secondary { padding:15px 36px; font-size:15px; }
        }

        /* ── Scroll hint ── */
        .os-scroll-hint {
          position:absolute; bottom:28px;
          left:20px;
          display:flex; align-items:center; gap:10px;
          color:rgba(255,255,255,.25); font-size:10px;
          letter-spacing:2px; text-transform:uppercase;
        }
        [dir="rtl"] .os-scroll-hint { left:auto; right:20px; }
        @media(min-width:768px){ .os-scroll-hint { left:48px; bottom:40px; } }
        [dir="rtl"] @media(min-width:768px){ .os-scroll-hint { left:auto; right:48px; } }
        .os-scroll-line { width:32px; height:1px; background:rgba(255,255,255,.15); }

        /* ── Sections ── */
        .os-section { padding:72px 20px; }
        @media(min-width:768px){ .os-section { padding:110px 48px; } }
        .os-dark { background:${DARK}; }
        .os-navy { background:${NAVY}; }
        .os-container { max-width:1200px; margin:0 auto; }

        /* ── Section tag (reusable) ── */
        .os-stag {
          display:inline-flex; align-items:center; gap:8px;
          margin-bottom:16px;
        }
        .os-stag-dot { width:5px; height:5px; border-radius:50%; background:${GREEN}; box-shadow:0 0 5px ${GREEN}; }
        .os-stag-label { font-size:11px; font-weight:600; color:${GREEN}; letter-spacing:2px; text-transform:uppercase; }

        /* ── H2 ── */
        .os-h2 {
          font-size:clamp(26px,5vw,56px);
          font-weight:700; letter-spacing:-1.5px; line-height:1.05;
          margin-bottom:20px; color:#fff;
        }
        [dir="rtl"] .os-h2 { letter-spacing:-.5px; line-height:1.25; font-weight:800; }
        @media(min-width:768px){ .os-h2 { margin-bottom:28px; } }

        /* ── Body text ── */
        .os-body-text {
          color:rgba(255,255,255,.5); font-size:15px;
          line-height:1.8; font-weight:300; margin-bottom:36px;
        }
        @media(min-width:768px){ .os-body-text { font-size:16px; margin-bottom:48px; } }

        /* ── Two-col layout ── */
        .os-two-col { display:grid; grid-template-columns:1fr; gap:40px; }
        @media(min-width:768px){ .os-two-col { grid-template-columns:1fr 1fr; gap:80px; align-items:center; } }

        /* ── Stats ── */
        .os-stats { display:flex; gap:32px; flex-wrap:wrap; }
        @media(min-width:768px){ .os-stats { gap:48px; } }
        .os-stat { display:flex; flex-direction:column; gap:4px; }
        .os-stat-num { font-size:clamp(36px,6vw,52px); font-weight:700; color:${GREEN}; line-height:1; letter-spacing:-1.5px; }
        [dir="rtl"] .os-stat-num { font-weight:900; letter-spacing:0; }
        .os-stat-label { font-size:11px; color:rgba(255,255,255,.35); letter-spacing:1px; text-transform:uppercase; font-weight:400; }

        /* ── About visual ── */
        .os-about-visual {
          border-radius:20px;
          background:rgba(122,204,22,.03);
          border:1px solid rgba(122,204,22,.1);
          padding:40px; min-height:280px;
          display:flex; align-items:center; justify-content:center;
          position:relative; overflow:hidden;
        }
        @media(min-width:768px){ .os-about-visual { min-height:340px; } }
        .os-glow-orb {
          position:absolute; width:200px; height:200px; border-radius:50%;
          background:radial-gradient(circle, rgba(122,204,22,.18) 0%, transparent 70%);
          top:50%; left:50%; transform:translate(-50%,-50%);
          pointer-events:none;
        }
        .os-visual-label {
          position:absolute; bottom:20px; left:20px;
          font-size:9px; color:rgba(255,255,255,.18);
          letter-spacing:2px; text-transform:uppercase;
        }
        [dir="rtl"] .os-visual-label { left:auto; right:20px; }

        /* ── Services ── */
        .os-services-grid {
          display:grid;
          grid-template-columns:1fr;
          gap:0; margin-top:40px;
          border:1px solid rgba(255,255,255,.04);
        }
        @media(min-width:600px){ .os-services-grid { grid-template-columns:1fr 1fr; } }
        @media(min-width:1024px){ .os-services-grid { grid-template-columns:1fr 1fr 1fr; } }

        .os-svc-card {
          padding:28px 28px 36px;
          background:rgba(255,255,255,.015);
          border-right:1px solid rgba(255,255,255,.04);
          border-bottom:1px solid rgba(255,255,255,.04);
          position:relative; overflow:hidden;
          transition:background .3s; cursor:default;
        }
        .os-svc-card.hover { background:rgba(122,204,22,.05); }
        @media(min-width:768px){ .os-svc-card { padding:36px 40px 44px; } }
        .os-svc-num { display:block; font-size:10px; font-weight:700; color:rgba(122,204,22,.4); letter-spacing:2.5px; margin-bottom:16px; transition:color .3s; }
        .os-svc-card.hover .os-svc-num { color:${GREEN}; }
        .os-svc-title { display:block; font-size:clamp(16px,2vw,20px); font-weight:600; margin-bottom:10px; color:rgba(255,255,255,.88); letter-spacing:-.2px; }
        .os-svc-desc { display:block; font-size:13px; color:rgba(255,255,255,.4); line-height:1.65; font-weight:300; }
        .os-svc-line {
          position:absolute; bottom:0; left:0; right:auto;
          width:0; height:2px; background:${GREEN};
          transition:width .4s cubic-bezier(.16,1,.3,1);
        }
        [dir="rtl"] .os-svc-line { left:auto; right:0; }
        .os-svc-card.hover .os-svc-line { width:100%; }

        /* ── Work ── */
        .os-work-grid {
          display:grid; grid-template-columns:1fr;
          gap:16px; margin-top:40px;
        }
        @media(min-width:600px){ .os-work-grid { grid-template-columns:1fr 1fr; } }
        @media(min-width:1024px){ .os-work-grid { grid-template-columns:1fr 1fr 1fr; } }

        .os-work-card {
          border-radius:16px; overflow:hidden;
          background:rgba(255,255,255,.025);
          border:1px solid rgba(255,255,255,.06);
          transition:all .4s cubic-bezier(.16,1,.3,1);
        }
        .os-work-card:hover { transform:translateY(-5px); border-color:rgba(122,204,22,.2); box-shadow:0 16px 48px rgba(0,0,0,.4); }

        .os-work-thumb {
          height:180px; display:flex; align-items:center; justify-content:center; position:relative;
        }
        @media(min-width:768px){ .os-work-thumb { height:210px; } }
        .os-thumb-0 { background:linear-gradient(135deg, rgba(122,204,22,.16) 0%, rgba(6,8,10,.85) 100%); }
        .os-thumb-1 { background:linear-gradient(135deg, rgba(122,204,22,.1) 0%, rgba(15,30,60,.9) 100%); }
        .os-thumb-2 { background:linear-gradient(135deg, rgba(60,200,80,.13) 0%, rgba(6,8,10,.85) 100%); }
        .os-thumb-3 { background:linear-gradient(135deg, rgba(122,204,22,.09) 0%, rgba(30,10,50,.9) 100%); }
        .os-thumb-4 { background:linear-gradient(135deg, rgba(122,204,22,.17) 0%, rgba(6,8,10,.85) 100%); }
        .os-thumb-5 { background:linear-gradient(135deg, rgba(80,180,60,.12) 0%, rgba(6,8,10,.85) 100%); }

        .os-work-body { padding:18px 20px 22px; }
        @media(min-width:768px){ .os-work-body { padding:22px 26px 26px; } }
        

        /* Website iframe preview */
        .os-iframe-wrap {
          position:relative; width:100%; height:100%;
          overflow:hidden; border-radius:0;
        }
        .os-iframe-preview {
          width:200%; height:200%;
          transform:scale(0.5); transform-origin:top left;
          border:none; pointer-events:none;
          background:#fff;
        }
        .os-iframe-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 60%, rgba(6,8,10,.85) 100%);
          pointer-events:none;
        }
        .os-iframe-bar {
          position:absolute; top:10px; left:10px; right:10px;
          display:flex; align-items:center; gap:8px;
          background:rgba(6,8,10,.75); backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,.1); border-radius:8px;
          padding:6px 10px; font-size:11px; color:rgba(255,255,255,.5);
          font-weight:300;
        }
        .os-iframe-dots { display:flex; gap:4px; }
        .os-iframe-dots span { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,.2); }
        .os-iframe-dots span:first-child { background:rgba(255,100,100,.5); }
        .os-iframe-dots span:nth-child(2) { background:rgba(255,200,50,.5); }
        .os-iframe-dots span:last-child { background:rgba(122,204,22,.5); }
        .os-iframe-url { flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .os-iframe-ext-icon { font-size:12px; opacity:.4; }

        /* Saher cover */
        .os-saher-cover {
          position:relative; width:100%; height:100%; overflow:hidden;
        }
        .os-saher-img {
          width:100%; height:100%; object-fit:cover; object-position:top center;
          filter:brightness(.75);
          transition:transform .6s cubic-bezier(.16,1,.3,1);
        }
        .os-work-card:hover .os-saher-img { transform:scale(1.06); }
        .os-saher-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 30%, rgba(6,8,10,.85) 100%);
        }
        .os-saher-profile {
          position:absolute; bottom:14px; left:14px;
          display:flex; align-items:center; gap:10px;
        }
        [dir="rtl"] .os-saher-profile { left:auto; right:14px; }
        .os-saher-avatar {
          width:38px; height:38px; border-radius:50%;
          border:2px solid rgba(122,204,22,.6);
          object-fit:cover; object-position:top center; flex-shrink:0;
        }
        .os-saher-name { font-size:12px; font-weight:600; color:#fff; }
        .os-saher-followers { font-size:11px; color:rgba(255,255,255,.55); font-weight:300; margin-top:1px; }

        /* Placeholder */
        .os-work-placeholder {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:10px; width:100%; height:100%;
          border:1.5px dashed rgba(122,204,22,.18); border-radius:8px;
          margin:16px; width:calc(100% - 32px);
        }
        .os-placeholder-text { font-size:11px; color:rgba(255,255,255,.25); letter-spacing:.8px; font-weight:300; }

        /* Cat badge on thumb */
        .os-work-cat-badge {
          position:absolute; bottom:14px; left:14px;
          font-size:10px; font-weight:700; color:${GREEN};
          letter-spacing:1.8px; text-transform:uppercase;
          background:rgba(6,8,10,.7); backdrop-filter:blur(8px);
          border:1px solid rgba(122,204,22,.2); border-radius:100px;
          padding:4px 10px;
        }
        [dir="rtl"] .os-work-cat-badge { left:auto; right:14px; }
        .os-work-title { display:block; font-size:clamp(16px,2vw,19px); font-weight:600; margin-bottom:6px; color:rgba(255,255,255,.88); letter-spacing:-.2px; }
        .os-work-desc { display:block; font-size:13px; color:rgba(255,255,255,.42); line-height:1.6; font-weight:300; margin-bottom:14px; }

        /* Instagram badge on thumbnail */
        .os-work-link-badge {
          position:absolute; top:14px; right:14px;
          display:inline-flex; align-items:center; gap:5px;
          background:rgba(0,0,0,.55); backdrop-filter:blur(8px);
          border:1px solid rgba(255,255,255,.15); border-radius:100px;
          padding:5px 10px; font-size:11px; color:rgba(255,255,255,.75);
          font-weight:500; letter-spacing:.3px;
        }
        [dir="rtl"] .os-work-link-badge { right:auto; left:14px; }

        /* Instagram follow button */
        .os-work-ig-btn {
          display:inline-flex; align-items:center; gap:7px;
          padding:9px 16px; border-radius:100px;
          background:linear-gradient(135deg, rgba(193,53,132,.25) 0%, rgba(88,81,219,.2) 100%);
          border:1px solid rgba(193,53,132,.35);
          color:rgba(255,255,255,.75); font-size:12px; font-weight:500;
          text-decoration:none; transition:all .25s; letter-spacing:.2px;
        }
        .os-work-ig-btn:hover {
          background:linear-gradient(135deg, rgba(193,53,132,.4) 0%, rgba(88,81,219,.35) 100%);
          border-color:rgba(193,53,132,.6); color:#fff; transform:translateY(-1px);
        }
        /* Website visit button */
        .os-work-web-btn {
          display:inline-flex; align-items:center; gap:7px;
          padding:9px 16px; border-radius:100px;
          background:rgba(122,204,22,.08);
          border:1px solid rgba(122,204,22,.25);
          color:rgba(255,255,255,.7); font-size:12px; font-weight:500;
          text-decoration:none; transition:all .25s; letter-spacing:.2px;
        }
        .os-work-web-btn:hover {
          background:rgba(122,204,22,.15);
          border-color:rgba(122,204,22,.5);
          color:#7ACC16; transform:translateY(-1px);
        }

        /* ── Why ── */
        .os-why-layout { display:grid; grid-template-columns:1fr; gap:40px; }
        @media(min-width:768px){ .os-why-layout { grid-template-columns:1fr 1fr; gap:80px; align-items:start; } }
        .os-why-left { }
        @media(min-width:768px){ .os-why-left { position:sticky; top:110px; } }
        .os-why-cards { display:flex; flex-direction:column; gap:14px; }
        .os-why-card {
          display:flex; gap:16px; align-items:flex-start;
          padding:24px 24px; border-radius:16px;
          background:rgba(255,255,255,.02);
          border:1px solid rgba(255,255,255,.05);
          transition:all .3s;
        }
        @media(min-width:768px){ .os-why-card { padding:28px 32px; gap:20px; } }
        .os-why-card:hover { background:rgba(122,204,22,.04); border-color:rgba(122,204,22,.16); }
        .os-why-icon {
          width:40px; height:40px; border-radius:10px; flex-shrink:0;
          background:rgba(122,204,22,.1); border:1px solid rgba(122,204,22,.18);
          display:flex; align-items:center; justify-content:center; font-size:18px;
        }
        @media(min-width:768px){ .os-why-icon { width:44px; height:44px; font-size:20px; } }
        .os-why-title { font-size:clamp(15px,1.8vw,18px); font-weight:600; margin-bottom:6px; color:rgba(255,255,255,.9); letter-spacing:-.2px; }
        .os-why-desc { font-size:13px; color:rgba(255,255,255,.42); line-height:1.65; font-weight:300; }

        /* ── Testimonials ── */
        .os-test-grid { display:grid; grid-template-columns:1fr; gap:16px; margin-top:40px; }
        @media(min-width:600px){ .os-test-grid { grid-template-columns:1fr 1fr; } }
        @media(min-width:1024px){ .os-test-grid { grid-template-columns:1fr 1fr 1fr; } }

        .os-test-card {
          padding:28px 24px; border-radius:18px;
          background:rgba(255,255,255,.022);
          border:1px solid rgba(255,255,255,.05);
          display:flex; flex-direction:column; justify-content:space-between; gap:20px;
        }
        @media(min-width:768px){ .os-test-card { padding:36px 32px; } }
        .os-stars { color:${GREEN}; font-size:12px; letter-spacing:3px; }
        .os-test-quote { font-size:14px; color:rgba(255,255,255,.6); line-height:1.78; font-weight:300; }
        .os-test-author { display:flex; align-items:center; gap:12px; }
        .os-test-avatar {
          width:42px; height:42px; border-radius:50%; flex-shrink:0;
          border:1.5px solid rgba(122,204,22,.2);
          display:flex; align-items:center; justify-content:center;
          font-size:16px; font-weight:600;
        }
        .os-test-name { font-size:14px; font-weight:600; color:rgba(255,255,255,.88); }
        .os-test-role { font-size:12px; color:rgba(255,255,255,.35); margin-top:2px; font-weight:300; }

        /* ── CTA Banner ── */
        .os-cta-wrap { padding:0 20px 72px; }
        @media(min-width:768px){ .os-cta-wrap { padding:0 48px 100px; } }

        .os-cta-banner {
          border-radius:28px; padding:52px 28px 44px;
          background:#0B0F14;
          border:1px solid rgba(122,204,22,.2);
          position:relative; overflow:hidden;
          box-shadow:0 0 80px rgba(122,204,22,.06), inset 0 1px 0 rgba(122,204,22,.12);
        }
        @media(min-width:768px){ .os-cta-banner { padding:80px 72px; } }

        /* animated blobs */
        .os-cta-blob {
          position:absolute; border-radius:50%; pointer-events:none;
          animation:ctaFloat 8s ease-in-out infinite;
        }
        .os-cta-blob-1 {
          width:400px; height:400px; top:-120px; right:-120px;
          background:radial-gradient(circle, rgba(122,204,22,.1) 0%, transparent 65%);
          animation-delay:0s;
        }
        .os-cta-blob-2 {
          width:300px; height:300px; bottom:-80px; left:-60px;
          background:radial-gradient(circle, rgba(122,204,22,.07) 0%, transparent 65%);
          animation-delay:-3s;
        }
        .os-cta-blob-3 {
          width:200px; height:200px; top:50%; left:45%;
          background:radial-gradient(circle, rgba(122,204,22,.05) 0%, transparent 65%);
          animation-delay:-6s;
        }
        [dir="rtl"] .os-cta-blob-1 { right:auto; left:-120px; }
        [dir="rtl"] .os-cta-blob-2 { left:auto; right:-60px; }
        @keyframes ctaFloat {
          0%,100% { transform:translateY(0) scale(1); }
          50% { transform:translateY(-16px) scale(1.04); }
        }

        /* grid overlay */
        .os-cta-grid {
          position:absolute; inset:0; pointer-events:none;
          opacity:.025;
          background-image:
            linear-gradient(rgba(122,204,22,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(122,204,22,1) 1px, transparent 1px);
          background-size:56px 56px;
        }

        .os-cta-inner { position:relative; z-index:1; max-width:800px; }

        /* badge */
        .os-cta-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(122,204,22,.1); border:1px solid rgba(122,204,22,.25);
          border-radius:100px; padding:6px 14px; margin-bottom:24px;
          font-size:11px; font-weight:600; color:#7ACC16;
          letter-spacing:1.5px; text-transform:uppercase;
        }
        .os-cta-badge-dot {
          width:6px; height:6px; border-radius:50%;
          background:#7ACC16; box-shadow:0 0 6px #7ACC16;
          animation:ctaPulse 2s ease-in-out infinite;
        }
        @keyframes ctaPulse {
          0%,100% { box-shadow:0 0 4px #7ACC16; transform:scale(1); }
          50% { box-shadow:0 0 10px #7ACC16; transform:scale(1.3); }
        }

        /* headline */
        .os-cta-h {
          font-size:clamp(28px,5.5vw,64px);
          font-weight:700; line-height:1.05;
          letter-spacing:-1.5px; margin-bottom:16px;
        }
        [dir="rtl"] .os-cta-h { letter-spacing:-.5px; font-weight:800; line-height:1.2; font-size:clamp(26px,5vw,58px); }
        .os-cta-white { color:rgba(255,255,255,.92); }
        .os-cta-green { color:#7ACC16; }

        .os-cta-sub {
          color:rgba(255,255,255,.45); font-size:15px;
          font-weight:300; line-height:1.7; margin-bottom:36px;
          max-width:520px;
        }
        @media(min-width:768px){ .os-cta-sub { font-size:16px; margin-bottom:44px; } }

        /* action buttons */
        .os-cta-actions { display:flex; flex-direction:column; gap:12px; margin-bottom:36px; }
        @media(min-width:480px){ .os-cta-actions { flex-direction:row; align-items:center; gap:14px; } }

        .os-cta-primary-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:15px 32px; border-radius:100px;
          background:#7ACC16; color:#000; font-weight:700;
          font-size:14px; letter-spacing:.3px; border:none; cursor:pointer;
          box-shadow:0 0 32px rgba(122,204,22,.35), 0 4px 20px rgba(0,0,0,.4);
          transition:all .3s cubic-bezier(.16,1,.3,1);
        }
        .os-cta-primary-btn:hover {
          transform:translateY(-3px);
          box-shadow:0 0 52px rgba(122,204,22,.5), 0 8px 32px rgba(0,0,0,.4);
        }
        @media(min-width:768px){ .os-cta-primary-btn { padding:17px 40px; font-size:15px; } }
        .os-cta-arrow {
          display:inline-block; font-family:sans-serif;
          transition:transform .25s;
        }
        .os-cta-primary-btn:hover .os-cta-arrow { transform:translateX(4px); }
        [dir="rtl"] .os-cta-primary-btn:hover .os-cta-arrow { transform:translateX(-4px); }

        .os-cta-ghost-btn {
          display:inline-flex; align-items:center;
          padding:14px 28px; border-radius:100px;
          background:transparent; color:rgba(255,255,255,.65);
          font-weight:400; font-size:14px;
          border:1.5px solid rgba(255,255,255,.12);
          cursor:pointer; transition:all .3s; letter-spacing:.2px;
        }
        .os-cta-ghost-btn:hover { border-color:rgba(122,204,22,.35); color:#7ACC16; }

        /* trust strip */
        .os-cta-trust {
          display:flex; flex-wrap:wrap; align-items:center; gap:10px;
        }
        .os-trust-item {
          display:inline-flex; align-items:center; gap:6px;
          font-size:12px; color:rgba(255,255,255,.3); font-weight:300;
        }
        .os-trust-dot {
          width:4px; height:4px; border-radius:50%;
          background:#7ACC16; opacity:.6; flex-shrink:0;
        }
        .os-trust-sep {
          width:1px; height:12px;
          background:rgba(255,255,255,.1);
          display:none;
        }
        @media(min-width:480px){ .os-trust-sep { display:block; } }

        /* ── Contact ── */
        .os-contact-layout { display:grid; grid-template-columns:1fr; gap:48px; }
        @media(min-width:768px){ .os-contact-layout { grid-template-columns:1fr 1fr; gap:80px; align-items:start; } }
        .os-contact-row {
          display:flex; align-items:center; gap:12px;
          padding:12px 0; border-bottom:1px solid rgba(255,255,255,.05);
          color:rgba(255,255,255,.55); font-size:14px; font-weight:300;
        }
        .os-contact-icon {
          width:36px; height:36px; border-radius:9px; flex-shrink:0;
          background:rgba(122,204,22,.08); border:1px solid rgba(122,204,22,.15);
          display:flex; align-items:center; justify-content:center; font-size:14px;
        }

        /* ── Form ── */
        .os-form { display:flex; flex-direction:column; gap:14px; }
        .os-form-side { }
        .os-input {
          width:100%; padding:14px 18px; border-radius:12px;
          background:rgba(255,255,255,.03);
          border:1.5px solid rgba(255,255,255,.07);
          color:#fff; font-size:14px; font-weight:300;
          transition:border-color .2s;
        }
        .os-input:focus { border-color:rgba(122,204,22,.4); }
        .os-input::placeholder { color:rgba(255,255,255,.22); }
        .os-textarea {
          width:100%; padding:14px 18px; border-radius:12px;
          background:rgba(255,255,255,.03);
          border:1.5px solid rgba(255,255,255,.07);
          color:#fff; font-size:14px; font-weight:300; resize:vertical;
          min-height:130px; line-height:1.6;
          transition:border-color .2s;
        }
        .os-textarea:focus { border-color:rgba(122,204,22,.4); }
        .os-textarea::placeholder { color:rgba(255,255,255,.22); }
        .os-submit { width:100%; padding:15px 32px; margin-top:4px; }
        .os-form-success {
          padding:52px 36px; text-align:center; border-radius:20px;
          background:rgba(122,204,22,.04); border:1.5px solid rgba(122,204,22,.18);
          display:flex; flex-direction:column; align-items:center; gap:16px;
        }
        .os-form-success h3 { font-size:24px; font-weight:700; }
        .os-form-success p { color:rgba(255,255,255,.45); font-size:14px; font-weight:300; }

        /* ── Footer ── */
        .os-footer {
          background:#040608;
          border-top:1px solid rgba(255,255,255,.04);
          padding:52px 20px 32px;
        }
        @media(min-width:768px){ .os-footer { padding:60px 48px 36px; } }
        .os-footer-top {
          display:grid; grid-template-columns:1fr 1fr;
          gap:32px; margin-bottom:44px;
        }
        @media(min-width:768px){ .os-footer-top { grid-template-columns:1.4fr 1fr 1fr; gap:48px; } }
        .os-footer-brand { grid-column:1/-1; }
        @media(min-width:768px){ .os-footer-brand { grid-column:auto; } }
        .os-footer-tagline { font-size:13px; color:rgba(255,255,255,.28); line-height:1.6; font-weight:300; margin-top:12px; max-width:240px; }
        .os-footer-col-title { font-size:10px; color:rgba(255,255,255,.2); letter-spacing:2px; text-transform:uppercase; margin-bottom:16px; font-weight:400; }
        .os-footer-links { display:flex; flex-direction:column; gap:10px; }
        .os-footer-link { font-size:13px; color:rgba(255,255,255,.35); cursor:pointer; font-weight:300; transition:color .2s; display:block; }
        .os-footer-link:hover { color:${GREEN}; }
        .os-footer-bottom {
          border-top:1px solid rgba(255,255,255,.04);
          padding-top:22px;
          display:flex; flex-direction:column; gap:10px;
        }
        @media(min-width:768px){ .os-footer-bottom { flex-direction:row; justify-content:space-between; } }
        .os-footer-bottom > span { font-size:12px; color:rgba(255,255,255,.18); font-weight:300; }
        .os-footer-legal { display:flex; gap:20px; }
        .os-footer-legal-link { font-size:12px; color:rgba(255,255,255,.18); cursor:pointer; font-weight:300; }

        /* ── WhatsApp Float ── */
        .os-wa-wrap {
          position:fixed;
          bottom:28px; right:28px;
          z-index:150;
          display:flex; flex-direction:column; align-items:flex-end; gap:12px;
        }
        [dir="rtl"] .os-wa-wrap { right:auto; left:28px; align-items:flex-start; }

        /* CTA card */
        .os-wa-cta-card {
          width:min(300px, calc(100vw - 80px));
          background:rgba(10,14,18,.96);
          backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,.1);
          border-radius:18px;
          padding:18px;
          box-shadow:0 8px 40px rgba(0,0,0,.5);
          animation:waCardIn .4s cubic-bezier(.16,1,.3,1) both;
        }
        .os-wa-wrap.hide-cta .os-wa-cta-card { display:none; }
        @keyframes waCardIn {
          from { opacity:0; transform:translateY(12px) scale(.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        /* Card top row */
        .os-wa-cta-top {
          display:flex; align-items:center; gap:10px; margin-bottom:14px;
        }
        .os-wa-cta-avatar {
          width:42px; height:42px; border-radius:50%; flex-shrink:0;
          background:rgba(122,204,22,.12);
          border:1.5px solid rgba(122,204,22,.3);
          display:flex; align-items:center; justify-content:center;
          overflow:hidden;
        }
        .os-wa-cta-name {
          font-size:13px; font-weight:600; color:#fff; line-height:1.2;
        }
        .os-wa-cta-status {
          display:flex; align-items:center; gap:5px;
          font-size:11px; color:rgba(255,255,255,.4); margin-top:2px; font-weight:300;
        }
        .os-wa-online-dot {
          width:7px; height:7px; border-radius:50%;
          background:#25D366; flex-shrink:0;
          box-shadow:0 0 5px rgba(37,211,102,.6);
          animation:waBlink 2s ease-in-out infinite;
        }
        @keyframes waBlink {
          0%,100% { opacity:1; } 50% { opacity:.5; }
        }
        .os-wa-cta-close {
          margin-left:auto; background:none; border:none;
          color:rgba(255,255,255,.3); font-size:14px; cursor:pointer;
          padding:4px; line-height:1; transition:color .2s;
          flex-shrink:0;
        }
        [dir="rtl"] .os-wa-cta-close { margin-left:0; margin-right:auto; }
        .os-wa-cta-close:hover { color:rgba(255,255,255,.7); }

        /* Message bubble */
        .os-wa-cta-msg {
          font-size:13px; color:rgba(255,255,255,.65);
          line-height:1.65; font-weight:300;
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.07);
          border-radius:12px; padding:12px 14px;
          margin-bottom:14px;
        }

        /* CTA button */
        .os-wa-cta-btn {
          display:flex; align-items:center; justify-content:center; gap:8px;
          width:100%; padding:12px 16px; border-radius:100px;
          background:#25D366; color:#000;
          font-size:13px; font-weight:700; text-decoration:none;
          letter-spacing:.3px;
          transition:all .25s cubic-bezier(.16,1,.3,1);
          box-shadow:0 4px 16px rgba(37,211,102,.35);
        }
        .os-wa-cta-btn:hover {
          background:#1fba58;
          box-shadow:0 6px 24px rgba(37,211,102,.5);
          transform:translateY(-1px);
        }

        /* Main WA button */
        .os-wa-btn {
          width:58px; height:58px; border-radius:50%;
          background:#25D366; color:#fff;
          display:flex; align-items:center; justify-content:center;
          text-decoration:none; flex-shrink:0;
          box-shadow:0 4px 24px rgba(37,211,102,.45), 0 2px 8px rgba(0,0,0,.3);
          transition:all .3s cubic-bezier(.16,1,.3,1);
          position:relative;
        }
        .os-wa-btn:hover { transform:scale(1.08) translateY(-2px); box-shadow:0 8px 32px rgba(37,211,102,.6); }
        .os-wa-icon { width:28px; height:28px; position:relative; z-index:1; }
        .os-wa-pulse {
          position:absolute; inset:-4px; border-radius:50%;
          border:2px solid rgba(37,211,102,.5);
          animation:waPulse 2.5s ease-in-out infinite;
        }
        @keyframes waPulse {
          0%   { transform:scale(1);    opacity:.7; }
          70%  { transform:scale(1.35); opacity:0; }
          100% { transform:scale(1.35); opacity:0; }
        }
      `}</style>
    </>
  );
}

// ── Tag component ─────────────────────────────────────────────────────────────
function Tag({ label, body }) {
  return (
    <div className="os-stag">
      <span className="os-stag-dot"/>
      <span className="os-stag-label" style={{ fontFamily:body }}>{label}</span>
    </div>
  );
}
