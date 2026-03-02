/**
 * ============================================================
 *  productImages.js — Faraz Abaya Image Registry
 * ============================================================
 *
 *  SINGLE SOURCE OF TRUTH for all product image URLs.
 *  Import this into mockData.js — never put image URLs
 *  directly inside product objects.
 *
 *  HOW TO REPLACE WITH YOUR OWN PHOTOS
 *  ─────────────────────────────────────
 *  1. Upload your product photo to any image host:
 *       • Cloudinary (free tier): cloudinary.com
 *       • Your own server/S3 bucket
 *       • Vercel's public/ folder (put images in /public/images/)
 *
 *  2. Copy the direct image URL (must end in .jpg / .png / .webp)
 *
 *  3. Replace the URL string in the correct product entry below.
 *
 *  4. Each product has exactly 3 slots:
 *       main  → shown on the product card grid
 *       alt1  → first gallery thumbnail in ProductDetail
 *       alt2  → second gallery thumbnail in ProductDetail
 *
 *  NAMING CONVENTION
 *  ─────────────────
 *  Keys follow the pattern:  PRODUCT_ID_SLOT
 *  Example:  P1_MAIN, P1_ALT1, P1_ALT2
 *
 *  IMAGE REQUIREMENTS (for consistent e-commerce look)
 *  ────────────────────────────────────────────────────
 *  • Aspect ratio : 3:4  (portrait — width:height = 3:4)
 *  • Min resolution: 600 × 800 px
 *  • Subject: full-length Islamic abaya, modest fashion only
 *  • Background: clean studio, neutral wall, or soft outdoor
 *  • NO: shoes as focal item, western dresses, crop tops,
 *         irrelevant accessories, male subjects
 *
 *  STOCK PHOTO SOURCES (free, commercial-use OK)
 *  ──────────────────────────────────────────────
 *  • Unsplash  → https://unsplash.com/s/photos/abaya
 *  • Pexels    → https://www.pexels.com/search/abaya/
 *  • Pixabay   → https://pixabay.com/images/search/abaya/
 *
 *  UNSPLASH DIRECT URL FORMAT
 *  ──────────────────────────
 *  https://images.unsplash.com/photo-{ID}?w=600&q=80&fit=crop&crop=top
 *  The `crop=top` parameter keeps the face/garment in frame.
 *
 * ============================================================
 */

/**
 * ============================================================
 * productImages.js — Faraz Abaya Image Registry
 * ============================================================
 */

/**
 * ============================================================
 * productImages.js — Faraz Abaya Image Registry (FIXED)
 * ============================================================
 */

// ── Base URL builder ──────────────────────
const unsplash = (photoId, opts = "w=600&q=80&fit=crop&crop=top") =>
  `https://images.unsplash.com/photo-${photoId}?${opts}`;

// ════════════════════════════════════════════════════════════
//  PRODUCT 1 — Nida Pearl Abaya (Luxury)
// ════════════════════════════════════════════════════════════
export const P1_MAIN = unsplash("pNs_ZQ3BoP0"); 
export const P1_ALT1 = unsplash("1609102026400-34039864988e"); 
export const P1_ALT2 = unsplash("1609101918341-945722512686"); 

// ════════════════════════════════════════════════════════════
//  PRODUCT 2 — Crepe Office Abaya (Office)
// ════════════════════════════════════════════════════════════
export const P2_MAIN = unsplash("SZbVjTh3klw"); 
export const P2_ALT1 = unsplash("1565553642973-6afe791aee33"); 
export const P2_ALT2 = unsplash("1585128719715-46776b56a0d1"); 

// ════════════════════════════════════════════════════════════
//  PRODUCT 3 — Cotton Daily Comfort (Daily Wear)
// ════════════════════════════════════════════════════════════
export const P3_MAIN = unsplash("1631558230230-07e86821262d"); 
export const P3_ALT1 = unsplash("1621235123906-8968953f47b2"); 
export const P3_ALT2 = unsplash("1609357601569-8041c4912239"); 

// ════════════════════════════════════════════════════════════
//  PRODUCT 4 — Student Lite Abaya (Students)
// ════════════════════════════════════════════════════════════
export const P4_MAIN = unsplash("YBVF3BKtw44"); 
export const P4_ALT1 = unsplash("1588613146340-738997a39396"); 
export const P4_ALT2 = unsplash("1598550476439-6847785fce6e"); 

// ════════════════════════════════════════════════════════════
//  PRODUCT 5 — Royal Embroidered Abaya (Luxury)
// ════════════════════════════════════════════════════════════
export const P5_MAIN = unsplash("1595171730005-7389280d00f7"); 
export const P5_ALT1 = unsplash("1627568598424-6981882d2645"); 
export const P5_ALT2 = unsplash("1583391733956-3750e0ff4e8b");

// ════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW PRODUCT (Future Scalability)
//  ──────────────────────────────────────────────
//  1. Find your Unsplash photo ID from the URL:
//     https://unsplash.com/photos/[this-is-the-id]
//
//  2. Add 3 entries here following the same pattern:
//     export const P6_MAIN = unsplash("your-photo-id-here");
//     export const P6_ALT1 = unsplash("your-photo-id-here");
//     export const P6_ALT2 = unsplash("your-photo-id-here");
//
//  3. Add the product object to INITIAL_PRODUCTS in mockData.js
//     and reference: imgs: [P6_MAIN, P6_ALT1, P6_ALT2]
//
//  TO USE YOUR OWN HOSTED IMAGE instead of Unsplash:
//     export const P6_MAIN = "https://yoursite.com/images/product6.jpg";
// ════════════════════════════════════════════════════════════
