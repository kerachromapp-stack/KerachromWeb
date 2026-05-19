"use client";
import { useState } from "react";
import { Metadata } from "next";

const screenshots = [
  { src: "/images/app-home.jpg",          label: "Configuratore principale" },
  { src: "/images/app-editor.jpg",        label: "Editor con strumenti AI" },
  { src: "/images/app-abbigliamento.jpg", label: "Cambio stile abbigliamento" },
  { src: "/images/app-anteprima.jpg",     label: "Anteprima fotoceramica" },
  { src: "/images/app-prodotto.jpg",      label: "Prodotto finito personalizzato" },
  { src: "/images/app-ordini.jpg",        label: "Tracciamento ordini" },
  { src: "/images/app-conferma.jpg",      label: "Conferma ordine" },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --bg:       #f0f0ee;
          --bg-soft:  #e8e8e5;
          --bg-card:  #ffffff;
          --black:    #111111;
          --red:      #9B1B30;
          --red-l:    #b52238;
          --red-pale: rgba(155,27,48,0.08);
          --gray:     #666666;
          --gray-s:   #999999;
          --border:   rgba(0,0,0,0.1);
          --border-r: rgba(155,27,48,0.25);
        }
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{background:var(--bg);color:var(--black);font-family:'DM Sans',sans-serif;font-weight:300;overflow-x:hidden;-webkit-font-smoothing:antialiased;}

        /* NAV */
        .kc-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 24px;display:flex;align-items:center;justify-content:space-between;background:rgba(240,240,238,0.96);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);}
        .kc-logo{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;letter-spacing:0.08em;color:var(--black);text-decoration:none;}
        .kc-logo span{color:var(--red);}
        .kc-logo sup{font-size:8px;color:var(--gray-s);font-family:'DM Sans',sans-serif;font-weight:400;margin-left:2px;}
        .kc-nav-cta{background:var(--red);color:#fff;padding:10px 20px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;font-weight:500;text-decoration:none;border-radius:2px;transition:background 0.3s;font-family:'DM Sans',sans-serif;}
        .kc-nav-cta:hover{background:var(--red-l);}

        /* HERO */
        .kc-hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:110px 24px 56px;position:relative;overflow:hidden;background:var(--bg);}
        .kc-hero-accent{position:absolute;top:80px;right:0;width:40vw;height:60vh;background:linear-gradient(135deg,var(--red-pale) 0%,transparent 70%);pointer-events:none;}
        .kc-hero-tag{font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:var(--red);margin-bottom:20px;display:flex;align-items:center;gap:10px;animation:kcup 0.9s ease 0.1s both;}
        .kc-hero-tag::before{content:'';display:block;width:24px;height:1px;background:var(--red);}
        .kc-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(38px,10vw,60px);font-weight:300;line-height:1.07;color:var(--black);margin-bottom:20px;animation:kcup 0.9s ease 0.25s both;}
        .kc-h1 em{font-style:italic;color:var(--red);}
        .kc-hero-desc{font-size:15px;line-height:1.8;color:var(--gray);max-width:400px;margin-bottom:36px;animation:kcup 0.9s ease 0.4s both;}
        .kc-hero-actions{display:flex;flex-direction:column;gap:10px;animation:kcup 0.9s ease 0.55s both;}
        .kc-btn-main{background:var(--red);color:#fff;padding:17px 28px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:500;text-decoration:none;border-radius:2px;text-align:center;transition:background 0.3s;font-family:'DM Sans',sans-serif;display:block;}
        .kc-btn-main:hover{background:var(--red-l);}
        .kc-btn-ghost{border:1.5px solid var(--black);color:var(--black);padding:17px 28px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;font-weight:400;text-decoration:none;border-radius:2px;text-align:center;transition:border-color 0.3s,color 0.3s;font-family:'DM Sans',sans-serif;display:block;}
        .kc-btn-ghost:hover{border-color:var(--red);color:var(--red);}
        .kc-trust{margin-top:36px;display:flex;flex-wrap:wrap;gap:18px;animation:kcup 0.9s ease 0.7s both;}
        .kc-trust-item{display:flex;align-items:center;gap:7px;font-size:11px;color:var(--gray);}
        .kc-trust-dot{width:5px;height:5px;border-radius:50%;background:var(--red);flex-shrink:0;}

        /* STATS */
        .kc-stats{display:grid;grid-template-columns:repeat(3,1fr);background:var(--black);border-top:3px solid var(--red);}
        .kc-stat{padding:28px 16px;text-align:center;border-right:1px solid rgba(255,255,255,0.08);}
        .kc-stat:last-child{border-right:none;}
        .kc-stat-n{font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:300;color:var(--red);line-height:1;margin-bottom:6px;}
        .kc-stat-l{font-size:9px;letter-spacing:0.12em;text-transform:uppercase;color:#888;line-height:1.5;}

        /* SECTIONS */
        .kc-section{padding:72px 24px;}
        .kc-sec-tag{font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:var(--red);margin-bottom:14px;display:flex;align-items:center;gap:10px;}
        .kc-sec-tag::before{content:'';display:block;width:20px;height:1px;background:var(--red);flex-shrink:0;}
        .kc-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(28px,7vw,44px);font-weight:300;line-height:1.1;color:var(--black);margin-bottom:16px;}
        .kc-h2 em{font-style:italic;color:var(--red);}
        .kc-sec-text{font-size:15px;line-height:1.8;color:var(--gray);margin-bottom:12px;}

        /* APP SCREENSHOTS */
        .kc-app{background:var(--black);}
        .kc-app .kc-sec-tag{color:var(--red);}
        .kc-app .kc-sec-tag::before{background:var(--red);}
        .kc-app .kc-h2{color:#f0f0ee;}
        .kc-app .kc-sec-text{color:#888;}
        .kc-carousel{margin-top:40px;display:flex;flex-direction:column;align-items:center;gap:24px;}
        .kc-carousel-main{width:100%;max-width:320px;position:relative;}
        .kc-carousel-main img{width:100%;border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,0.5);display:block;}
        .kc-carousel-label{text-align:center;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#888;margin-top:14px;}
        .kc-carousel-dots{display:flex;gap:8px;justify-content:center;}
        .kc-dot{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,0.2);border:none;cursor:pointer;transition:background 0.3s,transform 0.3s;padding:0;}
        .kc-dot.active{background:var(--red);transform:scale(1.3);}
        .kc-carousel-thumbs{display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;max-width:100%;}
        .kc-carousel-thumbs::-webkit-scrollbar{height:3px;}
        .kc-carousel-thumbs::-webkit-scrollbar-track{background:rgba(255,255,255,0.05);}
        .kc-carousel-thumbs::-webkit-scrollbar-thumb{background:var(--red);}
        .kc-thumb{width:56px;height:56px;border-radius:8px;overflow:hidden;cursor:pointer;border:2px solid transparent;transition:border-color 0.3s;flex-shrink:0;}
        .kc-thumb.active{border-color:var(--red);}
        .kc-thumb img{width:100%;height:100%;object-fit:cover;}
        .kc-carousel-nav{display:flex;gap:12px;margin-top:8px;}
        .kc-nav-btn{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:#fff;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;transition:background 0.3s;}
        .kc-nav-btn:hover{background:var(--red);}

        /* HOW */
        .kc-how{background:var(--bg-soft);}
        .kc-how-steps{margin-top:40px;border:1px solid var(--border);border-radius:3px;overflow:hidden;background:var(--bg-card);}
        .kc-how-step{display:flex;gap:20px;align-items:flex-start;padding:22px 24px;border-bottom:1px solid var(--border);transition:background 0.3s;}
        .kc-how-step:last-child{border-bottom:none;}
        .kc-how-step:hover{background:var(--red-pale);}
        .kc-how-n{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:300;color:var(--red);line-height:1;min-width:30px;}
        .kc-how-step h4{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:400;margin-bottom:4px;color:var(--black);}
        .kc-how-step p{font-size:13px;line-height:1.7;color:var(--gray);}

        /* FEATURES */
        .kc-features{background:var(--bg);}
        .kc-features-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;margin-top:40px;}
        .kc-feat{background:var(--bg-card);padding:24px 20px;border-bottom:2px solid transparent;transition:border-color 0.3s;}
        .kc-feat:hover{border-bottom-color:var(--red);}
        .kc-feat-icon{font-size:20px;margin-bottom:10px;display:block;color:var(--red);}
        .kc-feat h4{font-family:'Cormorant Garamond',serif;font-size:17px;font-weight:400;margin-bottom:6px;color:var(--black);}
        .kc-feat p{font-size:12px;line-height:1.7;color:var(--gray);}

        /* PRODUCTS */
        .kc-products{background:var(--bg-soft);}
        .kc-products-list{display:flex;flex-direction:column;gap:2px;margin-top:40px;}
        .kc-product{background:var(--bg-card);padding:24px;display:flex;align-items:flex-start;gap:18px;border-left:3px solid transparent;transition:border-color 0.3s;}
        .kc-product:hover{border-left-color:var(--red);}
        .kc-product-num{font-family:'Cormorant Garamond',serif;font-size:13px;color:var(--red);letter-spacing:0.1em;min-width:26px;padding-top:4px;}
        .kc-product-tag{display:inline-block;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;color:var(--red);border:1px solid var(--border-r);padding:2px 8px;border-radius:20px;margin-bottom:6px;}
        .kc-product h3{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:400;margin-bottom:6px;color:var(--black);}
        .kc-product p{font-size:13px;line-height:1.75;color:var(--gray);}

        /* ORDERS */
        .kc-orders{background:var(--bg);}
        .kc-orders-flow{margin-top:40px;border:1px solid var(--border);border-radius:3px;overflow:hidden;background:var(--bg-card);}
        .kc-order-row{display:flex;align-items:center;gap:16px;padding:18px 24px;border-bottom:1px solid var(--border);}
        .kc-order-row:last-child{border-bottom:none;}
        .kc-order-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
        .kc-dot-pending{background:#f59e0b;}
        .kc-dot-working{background:#3b82f6;}
        .kc-dot-shipped{background:#8b5cf6;}
        .kc-dot-done{background:#22c55e;}
        .kc-order-label{color:var(--black);font-weight:500;min-width:110px;font-size:13px;}
        .kc-order-desc{color:var(--gray);font-size:12px;}

        /* REVIEWS */
        .kc-reviews{background:var(--black);}
        .kc-reviews .kc-sec-tag{color:var(--red);}
        .kc-reviews .kc-sec-tag::before{background:var(--red);}
        .kc-reviews .kc-h2{color:#f0f0ee;}
        .kc-reviews .kc-sec-text{color:#888;}
        .kc-reviews-grid{display:flex;flex-direction:column;gap:14px;margin-top:40px;}
        .kc-review-card{background:#1a1a1a;padding:28px 24px;border-radius:3px;border-left:3px solid var(--red);}
        .kc-review-stars{color:var(--red);font-size:16px;margin-bottom:12px;letter-spacing:2px;}
        .kc-review-text{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:300;font-style:italic;color:#f0f0ee;line-height:1.5;margin-bottom:16px;}
        .kc-review-author{display:flex;align-items:center;gap:10px;}
        .kc-review-avatar{width:36px;height:36px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;color:#fff;flex-shrink:0;}
        .kc-review-name{font-size:13px;font-weight:500;color:#f0f0ee;}
        .kc-review-meta{font-size:11px;color:#666;display:flex;align-items:center;gap:6px;}
        .kc-review-g{font-size:10px;color:#888;}
        .kc-review-cta{margin-top:28px;text-align:center;}
        .kc-review-cta a{display:inline-flex;align-items:center;gap:8px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:var(--red);border:1px solid var(--border-r);padding:12px 24px;border-radius:2px;text-decoration:none;transition:background 0.3s,color 0.3s;}
        .kc-review-cta a:hover{background:var(--red);color:#fff;}
        .kc-rating-summary{display:flex;align-items:center;gap:16px;margin-bottom:32px;padding:20px 24px;background:#1a1a1a;border-radius:3px;}
        .kc-rating-big{font-family:'Cormorant Garamond',serif;font-size:56px;font-weight:300;color:var(--red);line-height:1;}
        .kc-rating-info small{font-size:11px;color:#666;letter-spacing:0.08em;text-transform:uppercase;}
        .kc-rating-stars{font-size:18px;color:var(--red);letter-spacing:2px;margin:4px 0;}

        /* AUDIENCE */
        .kc-audience{background:var(--bg-soft);}
        .kc-audience-cards{display:flex;flex-direction:column;gap:2px;margin-top:40px;}
        .kc-aud-card{background:var(--bg-card);padding:28px 24px;border-left:3px solid transparent;transition:border-color 0.3s;}
        .kc-aud-card:hover{border-left-color:var(--red);}
        .kc-aud-tag{font-size:9px;letter-spacing:0.22em;text-transform:uppercase;color:var(--red);margin-bottom:10px;display:block;}
        .kc-aud-card h3{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:300;margin-bottom:8px;color:var(--black);}
        .kc-aud-card p{font-size:13px;line-height:1.75;color:var(--gray);}
        .kc-aud-pills{margin-top:12px;display:flex;flex-wrap:wrap;gap:6px;}
        .kc-aud-pill{font-size:10px;color:var(--gray);border:1px solid var(--border);padding:3px 10px;border-radius:20px;}

        /* DOWNLOAD */
        .kc-download{background:var(--black);text-align:center;}
        .kc-download .kc-sec-tag{justify-content:center;color:var(--red);}
        .kc-download .kc-sec-tag::before{background:var(--red);}
        .kc-download .kc-h2{color:#f0f0ee;margin-bottom:14px;}
        .kc-download .kc-sec-text{color:#888;margin-bottom:36px;max-width:360px;margin-left:auto;margin-right:auto;}
        .kc-store-btns{display:flex;flex-direction:column;gap:10px;margin-bottom:28px;}
        .kc-store-btn{display:flex;align-items:center;gap:14px;background:#1a1a1a;border:1.5px solid rgba(255,255,255,0.08);color:#f0f0ee;padding:15px 22px;border-radius:3px;text-decoration:none;transition:border-color 0.3s;}
        .kc-store-btn:hover{border-color:var(--red);}
        .kc-store-icon{font-size:24px;}
        .kc-store-text{text-align:left;}
        .kc-store-text small{display:block;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:#666;margin-bottom:1px;}
        .kc-store-text strong{display:block;font-size:15px;font-weight:400;font-family:'Cormorant Garamond',serif;color:#f0f0ee;}
        .kc-pricing-note{display:inline-flex;align-items:center;gap:8px;font-size:12px;color:#888;border:1px solid rgba(255,255,255,0.08);padding:10px 20px;border-radius:2px;}
        .kc-pricing-note b{color:var(--red);font-weight:500;}

        /* FOOTER */
        .kc-footer{background:var(--black);padding:36px 24px;border-top:3px solid var(--red);display:flex;flex-direction:column;gap:20px;align-items:center;text-align:center;}
        .kc-footer-logo{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;letter-spacing:0.08em;color:#f0f0ee;text-decoration:none;}
        .kc-footer-logo span{color:var(--red);}
        .kc-footer-links{display:flex;flex-wrap:wrap;gap:18px;justify-content:center;}
        .kc-footer-links a{color:#666;text-decoration:none;font-size:11px;transition:color 0.3s;}
        .kc-footer-links a:hover{color:var(--red);}
        .kc-footer p{font-size:10px;color:#444;letter-spacing:0.05em;}

        @keyframes kcup{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}

        @media(min-width:768px){
          .kc-nav{padding:20px 56px;}
          .kc-hero{padding:140px 56px 80px;}
          .kc-hero-actions{flex-direction:row;}
          .kc-btn-main,.kc-btn-ghost{display:inline-block;}
          .kc-section{padding:96px 56px;}
          .kc-stat{padding:44px;}
          .kc-stat-n{font-size:48px;}
          .kc-carousel{flex-direction:row;align-items:flex-start;justify-content:center;gap:48px;}
          .kc-carousel-main{max-width:280px;}
          .kc-carousel-thumbs{flex-direction:column;overflow-x:unset;overflow-y:auto;max-height:420px;}
          .kc-thumb{width:64px;height:64px;}
          .kc-how-steps{display:grid;grid-template-columns:1fr 1fr;}
          .kc-how-step:nth-child(odd){border-right:1px solid var(--border);}
          .kc-how-step:nth-child(3),.kc-how-step:nth-child(4){border-bottom:none;}
          .kc-features-grid{grid-template-columns:repeat(3,1fr);}
          .kc-products-list{display:grid;grid-template-columns:1fr 1fr;gap:2px;}
          .kc-reviews-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
          .kc-audience-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;}
          .kc-store-btns{flex-direction:row;justify-content:center;}
          .kc-footer{flex-direction:row;justify-content:space-between;padding:36px 56px;text-align:left;}
          .kc-footer-links{justify-content:flex-start;}
        }
      `}</style>

      {/* NAV */}
      <nav className="kc-nav">
        <a href="#" className="kc-logo">Kera<span>chrom</span><sup>ITALY®</sup></a>
        <a href="#download" className="kc-nav-cta">Inizia gratis</a>
      </nav>

      {/* HERO */}
      <section className="kc-hero">
        <div className="kc-hero-accent"></div>
        <div className="kc-hero-tag">Fotoceramica professionale digitale</div>
        <h1 className="kc-h1">Trasforma una foto<br/>in un ricordo <em>eterno</em></h1>
        <p className="kc-hero-desc">Con Kerachrom crei fotoceramiche e stampe commemorative di alta qualità direttamente dal tuo smartphone — in pochi minuti, senza competenze tecniche.</p>
        <div className="kc-hero-actions">
          <a href="#download" className="kc-btn-main">Crea il tuo primo progetto</a>
          <a href="#app" className="kc-btn-ghost">Guarda come funziona</a>
        </div>
        <div className="kc-trust">
          <div className="kc-trust-item"><div className="kc-trust-dot"></div>iOS · Android · Web</div>
          <div className="kc-trust-item"><div className="kc-trust-dot"></div>Intelligenza artificiale integrata</div>
          <div className="kc-trust-item"><div className="kc-trust-dot"></div>Pagamento sicuro via PayPal</div>
        </div>
      </section>

      {/* STATS */}
      <div className="kc-stats">
        <div className="kc-stat"><div className="kc-stat-n">3</div><div className="kc-stat-l">Piattaforme<br/>disponibili</div></div>
        <div className="kc-stat"><div className="kc-stat-n">AI</div><div className="kc-stat-l">Foto migliorata<br/>automaticamente</div></div>
        <div className="kc-stat"><div className="kc-stat-n">€70</div><div className="kc-stat-l">Prezzi<br/>a partire da</div></div>
      </div>

      {/* APP SCREENSHOTS */}
      <section id="app" className="kc-section kc-app">
        <div className="kc-sec-tag">L&apos;app in azione</div>
        <h2 className="kc-h2">Tutto quello che puoi<br/>fare con <em>Kerachrom</em></h2>
        <p className="kc-sec-text">Dal caricamento della foto alla fotoceramica finita — ogni passo guidato, ogni strumento a portata di tap.</p>
        <div className="kc-carousel">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'16px'}}>
            <div className="kc-carousel-main">
              <img src={screenshots[activeSlide].src} alt={screenshots[activeSlide].label} />
            </div>
            <div className="kc-carousel-label">{screenshots[activeSlide].label}</div>
            <div className="kc-carousel-nav">
              <button className="kc-nav-btn" onClick={() => setActiveSlide(i => (i - 1 + screenshots.length) % screenshots.length)}>←</button>
              <button className="kc-nav-btn" onClick={() => setActiveSlide(i => (i + 1) % screenshots.length)}>→</button>
            </div>
            <div className="kc-carousel-dots">
              {screenshots.map((_, i) => (
                <button key={i} className={`kc-dot${i === activeSlide ? ' active' : ''}`} onClick={() => setActiveSlide(i)} />
              ))}
            </div>
          </div>
          <div className="kc-carousel-thumbs">
            {screenshots.map((s, i) => (
              <div key={i} className={`kc-thumb${i === activeSlide ? ' active' : ''}`} onClick={() => setActiveSlide(i)}>
                <img src={s.src} alt={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="come-funziona" className="kc-section kc-how">
        <div className="kc-sec-tag">Il processo</div>
        <h2 className="kc-h2">Dal telefono alla<br/>ceramica in <em>5 passi</em></h2>
        <p className="kc-sec-text">Kerachrom guida l&apos;utente passo dopo passo. Non serve alcuna esperienza — l&apos;app fa il lavoro difficile per te.</p>
        <div className="kc-how-steps">
          <div className="kc-how-step"><div className="kc-how-n">1</div><div><h4>Carica la foto</h4><p>Seleziona dall&apos;album del telefono o dal computer. L&apos;app accetta qualsiasi formato.</p></div></div>
          <div className="kc-how-step"><div className="kc-how-n">2</div><div><h4>Ritaglia e migliora</h4><p>Ruota, ritaglia e migliora automaticamente la qualità con l&apos;intelligenza artificiale integrata.</p></div></div>
          <div className="kc-how-step"><div className="kc-how-n">3</div><div><h4>Personalizza sfondo e stile</h4><p>Scegli tra decine di sfondi (mare, naturali, colori) e cambia lo stile dell&apos;abbigliamento.</p></div></div>
          <div className="kc-how-step"><div className="kc-how-n">4</div><div><h4>Aggiungi testo e date</h4><p>Inserisci nome, date di nascita e morte con font, curvatura e colori personalizzabili.</p></div></div>
          <div className="kc-how-step"><div className="kc-how-n">5</div><div><h4>Ordina e traccia</h4><p>Conferma l&apos;ordine via PayPal, scarica il PDF di approvazione e traccia la spedizione in tempo reale.</p></div></div>
        </div>
      </section>

      {/* FUNZIONALITÀ */}
      <section id="funzionalita" className="kc-section kc-features">
        <div className="kc-sec-tag">Tecnologia integrata</div>
        <h2 className="kc-h2">Strumenti <em>intelligenti</em><br/>a portata di tap</h2>
        <p className="kc-sec-text">Funzionalità di intelligenza artificiale per rendere ogni foto perfetta per la stampa su ceramica.</p>
        <div className="kc-features-grid">
          <div className="kc-feat"><span className="kc-feat-icon">✦</span><h4>Migliora immagine AI</h4><p>Aumenta automaticamente qualità e nitidezza della foto prima della stampa.</p></div>
          <div className="kc-feat"><span className="kc-feat-icon">◈</span><h4>Rimozione sfondo</h4><p>Elimina lo sfondo originale in un tap e sostituiscilo con quello che preferisci.</p></div>
          <div className="kc-feat"><span className="kc-feat-icon">◻</span><h4>Libreria sfondi</h4><p>Mare, paesaggi naturali, colori solidi e sfondi dalla tua galleria personale.</p></div>
          <div className="kc-feat"><span className="kc-feat-icon">◑</span><h4>Stile abbigliamento</h4><p>Cambia il vestito con un guardaroba digitale integrato nell&apos;app.</p></div>
          <div className="kc-feat"><span className="kc-feat-icon">Aa</span><h4>Testo personalizzato</h4><p>Nome, date, font, curvatura e colore del testo completamente configurabili.</p></div>
          <div className="kc-feat"><span className="kc-feat-icon">↗</span><h4>Espandi immagine</h4><p>Adatta la foto al formato del prodotto scelto senza perdita di qualità.</p></div>
        </div>
      </section>

      {/* PRODOTTI */}
      <section id="prodotti" className="kc-section kc-products">
        <div className="kc-sec-tag">I nostri prodotti</div>
        <h2 className="kc-h2">Ogni formato,<br/>ogni <em>ricordo</em></h2>
        <p className="kc-sec-text">Dalla fotoceramica classica alle targhe commemorative, una gamma completa per ogni esigenza.</p>
        <div className="kc-products-list">
          <div className="kc-product"><div className="kc-product-num">01</div><div><span className="kc-product-tag">Bestseller</span><h3>Fotoceramica Ovale</h3><p>Il formato classico per le commemorazioni funebri. Disponibile in più dimensioni, con cornice opzionale.</p></div></div>
          <div className="kc-product"><div className="kc-product-num">02</div><div><span className="kc-product-tag">Moderno</span><h3>Fotoceramica Rettangolare</h3><p>Design contemporaneo senza cornice, bordi rialzati. Perfetta come oggetto d&apos;arredo e ricordo familiare.</p></div></div>
          <div className="kc-product"><div className="kc-product-num">03</div><div><span className="kc-product-tag">Versatile</span><h3>Fotoceramica Quadrata</h3><p>Formato quadrato elegante, ideale per ritratti singoli o di gruppo. Alta resa cromatica.</p></div></div>
          <div className="kc-product"><div className="kc-product-num">04</div><div><span className="kc-product-tag">Professionale</span><h3>Targhe Commemorative</h3><p>In porcellana di alta qualità, progettate per uso funerario e commemorativo professionale.</p></div></div>
          <div className="kc-product"><div className="kc-product-num">05</div><div><span className="kc-product-tag">Acciaio inox</span><h3>Stampe su Acciaio</h3><p>Resistenti alle intemperie, ideali per lapidi e monumenti in esterno. Durata illimitata.</p></div></div>
          <div className="kc-product"><div className="kc-product-num">06</div><div><span className="kc-product-tag">Gruppi</span><h3>Immagine di Gruppo</h3><p>Composizioni con più persone su un unico prodotto. Perfette per commemorazioni familiari.</p></div></div>
        </div>
      </section>

      {/* ORDINI */}
      <section id="ordini" className="kc-section kc-orders">
        <div className="kc-sec-tag">Gestione ordini</div>
        <h2 className="kc-h2">Traccia ogni ordine<br/>in <em>tempo reale</em></h2>
        <p className="kc-sec-text">Dal momento della conferma alla consegna a domicilio, Kerachrom ti aggiorna su ogni passaggio.</p>
        <div className="kc-orders-flow">
          <div className="kc-order-row"><div className="kc-order-dot kc-dot-pending"></div><div className="kc-order-label">In attesa</div><div className="kc-order-desc">Ordine ricevuto — PDF di approvazione generato e inviato via email</div></div>
          <div className="kc-order-row"><div className="kc-order-dot kc-dot-working"></div><div className="kc-order-label">In lavorazione</div><div className="kc-order-desc">Il prodotto è in produzione nel nostro laboratorio</div></div>
          <div className="kc-order-row"><div className="kc-order-dot kc-dot-shipped"></div><div className="kc-order-label">Spedito</div><div className="kc-order-desc">Il pacco è partito — puoi seguire la spedizione dall&apos;app</div></div>
          <div className="kc-order-row"><div className="kc-order-dot kc-dot-done"></div><div className="kc-order-label">Consegnato</div><div className="kc-order-desc">Il prodotto è arrivato a destinazione</div></div>
        </div>
      </section>

      {/* RECENSIONI */}
      <section id="recensioni" className="kc-section kc-reviews">
        <div className="kc-sec-tag">Cosa dicono di noi</div>
        <h2 className="kc-h2">Le parole dei<br/>nostri <em>clienti</em></h2>
        <div className="kc-rating-summary">
          <div className="kc-rating-big">4,5</div>
          <div className="kc-rating-info">
            <div className="kc-rating-stars">★★★★½</div>
            <div style={{fontSize:'13px',color:'#f0f0ee',marginBottom:'4px'}}>su Google Reviews</div>
            <small>Kerachrom Srl · Aversa (CE)</small>
          </div>
        </div>
        <div className="kc-reviews-grid">
          <div className="kc-review-card">
            <div className="kc-review-stars">★★★★☆</div>
            <p className="kc-review-text">&ldquo;Sempre pronti ad accontentare&rdquo;</p>
            <div className="kc-review-author">
              <div className="kc-review-avatar">G</div>
              <div>
                <div className="kc-review-name">Giuseppe De Stefano</div>
                <div className="kc-review-meta"><span className="kc-review-g">● Google</span> · 4/5 · 3 anni fa</div>
              </div>
            </div>
          </div>
          <div className="kc-review-card">
            <div className="kc-review-stars">★★★★★</div>
            <p className="kc-review-text">&ldquo;Un servizio eccellente, prodotti di altissima qualità&rdquo;</p>
            <div className="kc-review-author">
              <div className="kc-review-avatar">M</div>
              <div>
                <div className="kc-review-name">Mary Angeloni</div>
                <div className="kc-review-meta"><span className="kc-review-g">● Google</span> · 5/5 · 9 anni fa</div>
              </div>
            </div>
          </div>
        </div>
        <div className="kc-review-cta">
          <a href="https://g.page/r/kerachrom/review" target="_blank" rel="noopener noreferrer">
            ★ Lascia una recensione su Google
          </a>
        </div>
      </section>

      {/* PER CHI */}
      <section id="per-chi" className="kc-section kc-audience">
        <div className="kc-sec-tag">Per chi è Kerachrom</div>
        <h2 className="kc-h2">Una soluzione per<br/>ogni <em>esigenza</em></h2>
        <div className="kc-audience-cards">
          <div className="kc-aud-card"><span className="kc-aud-tag">Privati</span><h3>Famiglie e privati</h3><p>Crea ricordi permanenti dei tuoi cari. Compleanni, anniversari, commemorazioni — ogni momento merita di durare per sempre.</p><div className="kc-aud-pills"><span className="kc-aud-pill">Facile da usare</span><span className="kc-aud-pill">Dal telefono</span><span className="kc-aud-pill">Consegna a casa</span></div></div>
          <div className="kc-aud-card"><span className="kc-aud-tag">Professionisti</span><h3>Pompe funebri</h3><p>Offri un servizio digitale premium alle famiglie. Ordini gestiti dall&apos;app, PDF di approvazione e tracciamento incluso.</p><div className="kc-aud-pills"><span className="kc-aud-pill">Gestione ordini</span><span className="kc-aud-pill">PDF approvazione</span><span className="kc-aud-pill">Account dedicato</span></div></div>
          <div className="kc-aud-card"><span className="kc-aud-tag">Creativi</span><h3>Fotografi &amp; Studi</h3><p>Trasforma le tue sessioni fotografiche in prodotti fisici di alta qualità. Un servizio in più per i tuoi clienti.</p><div className="kc-aud-pills"><span className="kc-aud-pill">Alta risoluzione</span><span className="kc-aud-pill">Più formati</span><span className="kc-aud-pill">Branding</span></div></div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="kc-section kc-download">
        <div className="kc-sec-tag">Disponibile ovunque</div>
        <h2 className="kc-h2">Inizia il tuo primo<br/>progetto <em>oggi</em></h2>
        <p className="kc-sec-text">Scarica l&apos;app gratuitamente su iOS e Android, oppure accedi dal browser. Nessuna carta di credito richiesta.</p>
        <div className="kc-store-btns">
          <a href="#" className="kc-store-btn"><div className="kc-store-icon">🍎</div><div className="kc-store-text"><small>Scarica su</small><strong>App Store</strong></div></a>
          <a href="#" className="kc-store-btn"><div className="kc-store-icon">▶</div><div className="kc-store-text"><small>Disponibile su</small><strong>Google Play</strong></div></a>
          <a href="#" className="kc-store-btn"><div className="kc-store-icon">🌐</div><div className="kc-store-text"><small>Accedi dal</small><strong>Browser Web</strong></div></a>
        </div>
        <div className="kc-pricing-note"><b>✦</b> Prezzi a partire da €70 — pagamento sicuro via PayPal</div>
      </section>

      {/* FOOTER */}
      <footer className="kc-footer">
        <a href="#" className="kc-footer-logo">Kera<span>chrom</span></a>
        <div className="kc-footer-links">
          <a href="#">Chi siamo</a>
          <a href="#">FAQ</a>
          <a href="#">Traccia ordine</a>
          <a href="#">Termini e condizioni</a>
          <a href="#">Privacy</a>
          <a href="#">Contatti</a>
        </div>
        <p>© 2025 Kerachrom Italy® · kerachrom.com · kerachrom.it</p>
      </footer>

      <script type="application/ld+json" id="structured-data" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Kerachrom Srl",
        "description": "Fotoceramica professionale digitale — stampe commemorative su ceramica, porcellana e acciaio inox",
        "address": { "@type": "PostalAddress", "streetAddress": "Via Cirigliano, 204", "addressLocality": "Aversa", "addressRegion": "CE", "postalCode": "81031", "addressCountry": "IT" },
        "telephone": "081 890 3197",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "reviewCount": "2" },
        "url": "https://www.kerachrom.com"
      })}} />
    </>
  );
}
