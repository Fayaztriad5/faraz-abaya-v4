import Logo from "./Logo";

export default function Hero({ onShopLuxury }) {
  return (
    <section className="fa-hero">
      <style>{`
        .fa-hero {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          margin-bottom: 30px;
          padding: clamp(28px, 7vw, 78px) clamp(18px, 5vw, 56px);
          background: linear-gradient(132deg, #141416 0%, #1c1c1e 54%, #2b210f 100%);
          border: 1px solid rgba(201,168,76,.26);
          box-shadow: 0 18px 48px rgba(0,0,0,.22);
          isolation: isolate;
        }
        .fa-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            radial-gradient(circle at 15% 18%, rgba(232,201,106,.18), transparent 38%),
            linear-gradient(120deg, rgba(13,13,15,.32), rgba(13,13,15,.62) 55%, rgba(13,13,15,.82));
        }
        .fa-hero__logo-bg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -46%);
          z-index: 1;
          color: #d9b867;
          opacity: .12;
          pointer-events: none;
          filter: drop-shadow(0 0 30px rgba(201,168,76,.24));
        }
        .fa-hero__logo-bg svg {
          width: clamp(220px, 52vw, 500px);
          height: auto;
          transform-origin: center;
          animation: faHeroLogoIn 900ms ease-out 120ms both, faHeroLogoFloat 8s ease-in-out infinite;
        }
        .fa-hero__content {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 14px;
          max-width: 760px;
          animation: faHeroContentIn 700ms cubic-bezier(.24,.65,.23,1) both;
        }
        .fa-hero__kicker {
          color: #e8c96a;
          font-size: clamp(10px, 1.6vw, 12px);
          letter-spacing: .2em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .fa-hero__title {
          margin: 0;
          color: #f7f4ef;
          line-height: .95;
          font-size: clamp(36px, 10vw, 88px);
        }
        .fa-hero__title span {
          display: block;
          color: #e8c96a;
        }
        .fa-hero__subtitle {
          margin: 0;
          max-width: 58ch;
          color: rgba(247,244,239,.86);
          line-height: 1.75;
          font-size: clamp(13px, 2.6vw, 17px);
          text-wrap: balance;
        }
        .fa-hero__cta {
          margin-top: 8px;
          width: fit-content;
          min-height: 46px;
          padding: 0 22px;
          border: 1px solid rgba(232,201,106,.74);
          border-radius: 999px;
          background: linear-gradient(135deg, #c9a84c, #e8c96a);
          color: #151517;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .1em;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(201,168,76,.3);
          transition: transform .22s ease, box-shadow .22s ease;
        }
        @media (hover: hover) {
          .fa-hero__cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 30px rgba(201,168,76,.42);
          }
        }
        @media (max-width: 768px) {
          .fa-hero { border-radius: 18px; }
          .fa-hero__logo-bg { transform: translate(-50%, -45%); opacity: .1; }
        }
        @keyframes faHeroLogoIn {
          from { opacity: 0; transform: scale(.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes faHeroLogoFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.03); }
        }
        @keyframes faHeroContentIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="fa-hero__overlay" />
      <div className="fa-hero__logo-bg" aria-hidden="true">
        <Logo size={500} />
      </div>

      <div className="fa-hero__content">
        <p className="fa-hero__kicker">Faraz Abaya | Atelier Collection</p>

        <h1 className="font-display fa-hero__title">
          <span>Grace In</span>
          <span>Every Layer</span>
        </h1>

        <p className="fa-hero__subtitle">
          Premium modest fashion inspired by Arabic elegance, tailored for the modern woman.
        </p>

        <button className="fa-hero__cta" onClick={onShopLuxury}>
          Explore Luxury Abayas
        </button>
      </div>
    </section>
  );
}
