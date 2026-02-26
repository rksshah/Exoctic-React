# Exotic Fiber - Master Sitemap & Section Linkage

This document outlines the complete page structure for the "Exotic Fiber" e-commerce application, based on the Scope of Work, Home Page analysis, and Data Structure.

## 1. Core Shopping Pages

These pages handle the primary browsing and purchasing flow.

| Page Name | Route | Purpose |
| :--- | :--- | :--- |
| **Home** | `/` | Central hub, feature highlights, and navigation entry points. |
| **Shop All** | `/shop` | Full catalog view with sidebar filtering. |
| **Product Detail** | `/product/:slug` | Single product view, add to cart, reviews. |
| **Cart** | *(Managed via Modal/Sidebar)* | Review items before checkout. |
| **Checkout** | *(External/Mocked)* | Final purchase flow. |

### Collection Pages (Category Level)
Derived from `mockData.ts` categories.

| Page Name | Route | Link Source (Example) |
| :--- | :--- | :--- |
| **Color Wool** | `/collections/color-wool` | Main Menu > Shop, Home > "Shop Color" Card |
| **Fibers Roving** | `/collections/fibers-roving` | Home > Hero "Shop Fiber Roving" Button |
| **Luxury Yarns** | `/collections/luxury-yarns` | Main Menu > Shop |
| **Accessories** | `/collections/accessories` | Main Menu > Shop, Footer |

### Curated & Functional Collections
These correspond to specific "View All" buttons on Home sections.

| Page Name | Route | Link Source (Example) |
| :--- | :--- | :--- |
| **New Arrivals** | `/collections/new-arrivals` | Home > "Fresh from the Dyers" Section > View All |
| **Best Sellers** | `/collections/best-sellers` | Home > "Community Favorites" Section > View All |
| **Gift Sets** | `/collections/gift-sets` | Navigation > Gifts |
| **The Autumn Collection** | `/collections/autumn` | Home > Featured Collection Banner |

### SEO Landing Pages (High Intent)
Specific landing pages for search terms mentioned in Scope of Work.

| Page Name | Route | Purpose |
| :--- | :--- | :--- |
| **Merino Wool Roving** | `/collections/merino-wool-roving` | SEO Target: "buy merino roving" |
| **Cashmere Roving** | `/collections/cashmere-roving` | SEO Target: "luxury cashmere fiber" |
| **Natural Animal Fibers** | `/collections/natural-animal-fibers` | SEO Target: "undyed natural wool" |
| **Yarn for Felting** | `/collections/yarn-for-felting` | SEO Target: "felting supplies" |
| **Yarn for Hand Spinning** | `/collections/yarn-for-hand-spinning` | SEO Target: "spinning fiber" |

---

## 2. Brand & Storytelling (Trust Pages)

Pages designed to build authority and trust with the customer.

| Page Name | Route | Content Focus |
| :--- | :--- | :--- |
| **About Us** | `/pages/about` | Brand history, mission statement. |
| **Our Values** | `/pages/values` | Core principles (Quality, Community, Transparency). |
| **Our Factories** | `/pages/factories` | Supply chain transparency, mill partners. |
| **Sustainability** | `/pages/sustainability` | Eco-friendly practices, zero waste goals. |
| **Our Materials** | `/pages/materials` | Encyclopedia of fibers (Merino, Alpaca, etc.). |
| **How It Works** | `/pages/how-it-works` | Process breakdown: Sourcing -> Milling -> Dyeing. |

---

## 3. Content & Community

| Page Name | Route | Purpose |
| :--- | :--- | :--- |
| **Journal Index** | `/journal` | Blog feed (Tutorials, Patterns, News). |
| **Journal Article** | `/journal/:slug` | Individual blog post layout. |

---

## 4. Business & Support

| Page Name | Route | Purpose |
| :--- | :--- | :--- |
| **Wholesale / B2B** | `/pages/wholesale` | Information for bulk buyers/shops. |
| **Contact Us** | `/pages/contact` | Inquiry form (General, Order, Wholesale). |
| **FAQ** | `/pages/faq` | Common customer questions. |
| **Shipping Policy** | `/pages/shipping` | Rates, times, international info. |
| **Return & Exchange** | `/pages/returns` | Policy and return instructions. |

---

## 5. Customer Account

| Page Name | Route | Purpose |
| :--- | :--- | :--- |
| **Login / Register** | `/account/login` | Authentication entry point. |
| **My Account** | `/account` | Dashboard overview. |
| **Order History** | `/account/orders` | List of past orders and status. |

---

## Section to Page Mapping Analysis

This table analyzes specific UI sections (hypothetical or existing) and maps them to their destination pages.

| UI Section Location | Element / Button Text | Target Page (Route) |
| :--- | :--- | :--- |
| **Header** | Logo | `Home` (/) |
| **Header > Nav** | "Shop" | `Shop All` (/shop) |
| **Header > Nav** | "About" | `About Us` (/about) |
| **Header > Nav** | "Journal" | `Journal Index` (/journal) |
| **Hero Section** | "Shop Fiber Roving" | `Fibers Roving` (/collections/fibers-roving) |
| **Hero Section** | "Explore New Arrivals" | `New Arrivals` (/collections/new-arrivals) |
| **Featured Collection** | "View All Arrivals" | `New Arrivals` (/collections/new-arrivals) |
| **Category Grid** | "Color Wool" Card | `Color Wool` (/collections/color-wool) |
| **Category Grid** | "Luxury Yarns" Card | `Luxury Yarns` (/collections/luxury-yarns) |
| **Category Grid** | "Accessories" Card | `Accessories` (/collections/accessories) |
| **Best Sellers Row** | "Shop All Best Sellers" | `Best Sellers` (/collections/best-sellers) |
| **Sustainability Banner** | "Read Our Pledge" | `Sustainability` (/pages/sustainability) |
| **Materials Highlight** | "Learn About Our Wool" | `Our Materials` (/pages/materials) |
| **Footer > Shop** | "Gift Cards" | `Gift Sets` (/collections/gift-sets) |
| **Footer > Support** | "Shipping Info" | `Shipping Policy` (/pages/shipping) |
| **Footer > Support** | "Returns" | `Return & Exchange` (/pages/returns) |
| **Footer > Company** | "Wholesale" | `Wholesale` (/pages/wholesale) |
