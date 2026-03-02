const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --gold: #C9A84C;
    --gold-light: #E8C96A;
    --charcoal: #1C1C1E;
    --pearl: #FAF8F5;
    --pearl-dark: #F0EDE8;
    --text-muted: #8A8A8E;
    --navbar-h: 60px;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-text-size-adjust: 100%; }
  body { font-family: 'Jost', sans-serif; background: var(--pearl); overflow-x: hidden; }

  .font-display { font-family: 'Cormorant Garamond', serif !important; }

  /* Navbar */
  .navbar-blur {
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    background: rgba(250,248,245,.96);
    border-bottom: 1px solid rgba(201,168,76,.2);
  }
  .nav-desktop { display: none; }
  @media (min-width: 640px) { .nav-desktop { display: flex; } }
  .nav-hamburger { display: flex; }
  @media (min-width: 640px) { .nav-hamburger { display: none; } }

  .mobile-drawer {
    position: fixed;
    top: var(--navbar-h);
    left: 0;
    right: 0;
    background: rgba(250,248,245,.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(201,168,76,.2);
    padding: 16px 20px 24px;
    z-index: 49;
    transform: translateY(-110%);
    transition: transform .3s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 12px 40px rgba(0,0,0,.12);
  }
  .mobile-drawer.open { transform: translateY(0); }

  /* Hero */
  .hero-luxe {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    border-radius: 24px;
    margin-bottom: 30px;
    min-height: clamp(360px, 64vw, 620px);
    border: 1px solid rgba(201,168,76,.28);
    background: linear-gradient(128deg, #131315 0%, #1C1C1E 45%, #2a1f0c 100%);
    box-shadow: 0 20px 52px rgba(0,0,0,.24);
  }
  .hero-luxe-bg {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(114deg, rgba(250,248,245,.18), rgba(201,168,76,.06) 26%, rgba(15,15,17,.38) 66%), url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1600&h=1100&q=80');
    background-size: cover;
    background-position: center;
    opacity: .36;
    animation: heroAmbient 20s ease-in-out infinite alternate;
  }
  .hero-luxe-shade {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 18% 18%, rgba(232,201,106,.28), transparent 42%), radial-gradient(circle at 85% 76%, rgba(201,168,76,.22), transparent 46%);
    mix-blend-mode: screen;
    animation: heroGlow 8s ease-in-out infinite;
  }
  .hero-luxe-logo-wrap {
    position: absolute;
    inset: auto;
    right: -38px;
    bottom: -72px;
    z-index: 1;
    opacity: .16;
    color: var(--gold);
    filter: drop-shadow(0 0 28px rgba(201,168,76,.34));
    pointer-events: none;
  }
  .hero-luxe-logo-wrap svg {
    width: clamp(220px, 40vw, 400px);
    height: auto;
    transform-origin: center;
    animation: heroLogoReveal 1s ease-out .15s both, heroLogoFloat 8s ease-in-out infinite;
  }
  .hero-luxe-content {
    position: relative;
    z-index: 2;
    min-height: inherit;
    display: grid;
    align-content: center;
    justify-items: center;
    text-align: center;
    gap: 14px;
    padding: clamp(26px, 8vw, 74px) clamp(18px, 4.5vw, 48px);
    animation: heroFadeLift .8s cubic-bezier(.24,.65,.23,1) both;
  }
  .hero-luxe-kicker {
    color: var(--gold);
    font-size: clamp(10px, 1.5vw, 12px);
    letter-spacing: .22em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .hero-luxe-title {
    display: grid;
    gap: 2px;
    line-height: .95;
    color: #f5f2ec;
    font-size: clamp(40px, 11vw, 96px);
  }
  .hero-luxe-title span {
    display: block;
    opacity: 0;
    transform: translateY(14px);
    animation: heroTitleIn .8s forwards;
  }
  .hero-luxe-title span:nth-child(2) {
    color: #e8c96a;
    animation-delay: .2s;
  }
  .hero-luxe-subtitle {
    max-width: 560px;
    color: rgba(245,242,236,.78);
    font-size: clamp(13px, 2.6vw, 17px);
    line-height: 1.8;
    text-wrap: balance;
  }
  .hero-luxe-cta {
    margin-top: 8px;
    min-height: 46px;
    padding: 0 22px;
    border-radius: 999px;
    border: 1px solid rgba(232,201,106,.72);
    background: linear-gradient(135deg, #C9A84C, #E8C96A);
    color: #151517;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    letter-spacing: .1em;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: transform .24s ease, box-shadow .24s ease;
    box-shadow: 0 10px 26px rgba(201,168,76,.35);
  }
  @media (hover: hover) {
    .hero-luxe-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px rgba(201,168,76,.45);
    }
  }
  @media (min-width: 900px) {
    .hero-luxe-content { justify-items: start; text-align: left; }
    .hero-luxe-subtitle { max-width: 520px; }
    .hero-luxe-logo-wrap { right: 6%; bottom: -44px; opacity: .14; }
  }
  @media (max-width: 560px) {
    .hero-luxe-logo-wrap {
      right: 50%;
      transform: translateX(50%);
      bottom: -96px;
      opacity: .12;
    }
  }

  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 640px) { .product-grid { gap: 16px; } }
  @media (min-width: 768px) { .product-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
  @media (min-width: 1100px) { .product-grid { grid-template-columns: repeat(4, 1fr); } }

  /* Product Card */
  .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  @media (hover: hover) {
    .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,.13) !important; }
  }
  .img-zoom { overflow: hidden; }
  .img-zoom img { transition: transform 0.5s ease; }
  @media (hover: hover) { .img-zoom:hover img { transform: scale(1.07); } }
  .card-name { font-size: clamp(13px, 3.5vw, 18px); }
  .card-price { font-size: clamp(15px, 4vw, 22px); }
  .btn-card-view {
    display: block;
    width: 100%;
    padding: 9px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-family: 'Jost', sans-serif;
    letter-spacing: 0.06em;
    margin-top: 8px;
    text-align: center;
  }
  @media (min-width: 640px) { .btn-card-view { font-size: 12px; padding: 8px 14px; } }

  /* Category Pills */
  .pills-row {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 4px;
    margin-bottom: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .pills-row::-webkit-scrollbar { display: none; }
  @media (min-width: 640px) { .pills-row { gap: 10px; margin-bottom: 28px; } }
  .cat-pill {
    white-space: nowrap;
    cursor: pointer;
    transition: all .25s;
    border: 1.5px solid rgba(201,168,76,.3);
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding: 7px 14px;
    border-radius: 100px;
  }
  @media (min-width: 640px) { .cat-pill { font-size: 13px; padding: 8px 18px; } }

  /* Features */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 36px;
  }
  .feature-card {
    background: #fff;
    border-radius: 16px;
    padding: 16px 12px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(0,0,0,.05);
    border: 1px solid rgba(201,168,76,.14);
  }
  .feature-icon-wrap {
    width: 42px;
    height: 42px;
    margin: 0 auto 10px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    color: var(--gold);
    background: linear-gradient(135deg, rgba(201,168,76,.14), rgba(201,168,76,.04));
    border: 1px solid rgba(201,168,76,.28);
  }
  @media (min-width: 640px) { .features-grid { grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 48px; } }

  /* Product Detail */
  .detail-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
  @media (min-width: 768px) { .detail-grid { grid-template-columns: 1fr 1fr; gap: 48px; } }
  .detail-title { font-size: clamp(26px, 7vw, 40px); }
  .detail-price { font-size: clamp(26px, 7vw, 38px); }

  .size-btn {
    border: 1.5px solid #D1CDC7;
    cursor: pointer;
    transition: all .2s;
    background: #fff;
    font-family: 'Jost', sans-serif;
    font-size: 14px;
    font-weight: 500;
    min-width: 48px;
    min-height: 48px;
    border-radius: 14px;
  }
  .size-btn.active { border-color: var(--gold); background: var(--charcoal); color: #fff; }

  .detail-cta-wrap {
    position: sticky;
    bottom: 0;
    background: rgba(250,248,245,.97);
    backdrop-filter: blur(12px);
    padding: 12px 0 8px;
    z-index: 10;
  }
  @media (min-width: 768px) { .detail-cta-wrap { position: static; background: none; backdrop-filter: none; padding: 0; } }

  .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .trust-card { text-align: center; padding: 10px 6px; border-radius: 14px; background: var(--pearl-dark); }
  @media (min-width: 480px) { .trust-card { padding: 14px; } }

  /* Footer */
  .footer-grid { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 28px; }
  @media (min-width: 640px) { .footer-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; } }

  /* Buttons */
  .btn-wa {
    background: linear-gradient(135deg,#25D366,#128C7E);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all .3s;
    box-shadow: 0 4px 15px rgba(37,211,102,.35);
    min-height: 48px;
  }
  @media (hover:hover) { .btn-wa:hover { transform:translateY(-2px); box-shadow:0 8px 25px rgba(37,211,102,.45); } }
  .btn-gold {
    background: linear-gradient(135deg,#C9A84C,#E8C96A);
    color: #1C1C1E;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: all .3s;
    box-shadow: 0 4px 15px rgba(201,168,76,.3);
    min-height: 44px;
  }
  @media (hover:hover) { .btn-gold:hover { transform:translateY(-2px); } }
  .btn-outline {
    background: transparent;
    color: var(--gold);
    border: 1.5px solid var(--gold);
    cursor: pointer;
    transition: all .3s;
    min-height: 44px;
  }
  @media (hover:hover) { .btn-outline:hover { background:var(--gold); color:var(--charcoal); } }

  /* Cart */
  .cart-btn { position: relative; }
  .cart-count {
    background: var(--charcoal);
    color: var(--gold);
    border-radius: 999px;
    font-size: 11px;
    padding: 2px 8px;
    font-weight: 600;
  }
  .cart-drawer {
    position: fixed;
    top: var(--navbar-h);
    right: 0;
    width: min(420px, 100%);
    height: calc(100vh - var(--navbar-h));
    background: #fff;
    box-shadow: -12px 0 40px rgba(0,0,0,.18);
    transform: translateX(110%);
    transition: transform .3s ease;
    z-index: 98;
    display: flex;
    flex-direction: column;
  }
  .cart-drawer.open { transform: translateX(0); }
  .cart-header {
    padding: 18px 20px;
    border-bottom: 1px solid rgba(201,168,76,.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cart-close {
    background: none;
    border: none;
    font-size: 26px;
    cursor: pointer;
    color: var(--text-muted);
  }
  .cart-items {
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }
  .cart-item {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 12px;
    align-items: center;
  }
  .cart-item img {
    width: 72px;
    height: 90px;
    border-radius: 12px;
    object-fit: cover;
  }
  .cart-item-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    color: var(--charcoal);
  }
  .cart-item-meta {
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    color: var(--text-muted);
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .cart-item-controls {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 8px;
    flex-wrap: wrap;
  }
  .cart-qty {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(201,168,76,.3);
    border-radius: 999px;
    padding: 2px 8px;
    font-family: 'Jost', sans-serif;
    font-size: 13px;
  }
  .cart-qty button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 24px;
    height: 24px;
  }
  .cart-size {
    border: 1px solid rgba(201,168,76,.3);
    border-radius: 10px;
    padding: 6px 10px;
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    background: #fff;
  }
  .cart-remove {
    margin-top: 6px;
    background: none;
    border: none;
    color: #b42318;
    font-size: 12px;
    font-family: 'Jost', sans-serif;
    cursor: pointer;
    padding: 0;
  }
  .cart-footer {
    margin-top: auto;
    padding: 18px 20px 22px;
    border-top: 1px solid rgba(201,168,76,.2);
  }
  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Jost', sans-serif;
    color: var(--charcoal);
    margin-bottom: 12px;
    font-size: 14px;
  }
  .cart-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.35);
    z-index: 97;
  }
  @media (max-width: 640px) {
    .cart-drawer {
      width: 100%;
      height: 85vh;
      top: auto;
      bottom: 0;
      border-radius: 18px 18px 0 0;
      transform: translateY(110%);
    }
    .cart-drawer.open { transform: translateY(0); }
  }

  /* Admin responsive */
  @media (max-width: 720px) {
    .admin-header { flex-direction: column; align-items: flex-start; gap: 10px; height: auto; padding: 14px 20px; }
    .admin-actions { width: 100%; flex-wrap: wrap; }
    .admin-actions button { flex: 1 1 auto; }
  }
  @media (max-width: 640px) {
    .admin-table thead { display: none; }
    .admin-table tr { display: grid; gap: 8px; padding: 12px 16px; }
    .admin-table td { display: flex; justify-content: space-between; align-items: center; padding: 6px 0 !important; }
    .admin-table td::before {
      content: attr(data-label);
      font-size: 10px;
      color: var(--text-muted);
      font-family: 'Jost', sans-serif;
      letter-spacing: .12em;
      text-transform: uppercase;
    }
    .admin-product-cell { justify-content: flex-end; gap: 10px; }
    .admin-actions-cell { justify-content: flex-end; width: 100%; }
  }

  /* Float WhatsApp */
  .float-wa {
    position: fixed;
    bottom: 20px;
    right: 16px;
    z-index: 99;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,#25D366,#128C7E);
    box-shadow: 0 4px 20px rgba(37,211,102,.5);
    cursor: pointer;
    border: none;
    transition: transform .2s;
  }
  @media (min-width:640px) { .float-wa { bottom:24px; right:24px; width:54px; height:54px; } }
  @media (hover:hover) { .float-wa:hover { transform:scale(1.1); } }

  /* Misc */
  .badge-pill {
    font-family: 'Jost',sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 100px;
  }
  .like-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    background: rgba(255,255,255,.92);
    backdrop-filter: blur(8px);
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s;
  }
  @media (hover:hover) { .like-btn:hover { transform:scale(1.1); } }
  .thumb { border:2px solid transparent; cursor:pointer; transition:all .2s; border-radius:8px; overflow:hidden; }
  .thumb.active { border-color:var(--gold); }
  .divider { height:1px; background:linear-gradient(90deg,transparent,var(--gold),transparent); margin:16px 0; }
  .admin-row:hover { background:rgba(201,168,76,.05) !important; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  .fade-up { animation:fadeUp .45s ease forwards; }
  input:focus,select:focus,textarea:focus { outline:none; border-color:var(--gold)!important; box-shadow:0 0 0 3px rgba(201,168,76,.15); }
  ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-thumb{background:var(--gold);border-radius:3px}

  @keyframes heroFadeLift {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroTitleIn {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroAmbient {
    0% { transform: scale(1) translateX(0); }
    100% { transform: scale(1.06) translateX(-14px); }
  }
  @keyframes heroGlow {
    0%, 100% { opacity: .72; }
    50% { opacity: .46; }
  }
  @keyframes heroLogoReveal {
    from { opacity: 0; transform: translateY(12px) scale(.92); }
    to { opacity: .16; transform: translateY(0) scale(1); }
  }
  @keyframes heroLogoFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.03); }
  }
`;

export default globalStyles;
