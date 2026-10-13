const marketplaceDetails = `SJ Bay is a full-stack e-commerce platform designed exclusively for San José State University students to buy and sell products within their campus community.

Built with React, Node.js, Express.js, and Firebase, SJ Bay provides a centralized marketplace where students can securely list products, discover items, manage purchases, and communicate through automated email notifications.

By requiring SJSU email verification, the platform aims to create a more trusted and accessible marketplace specifically for the university community.

---

## Core Workflows

### Student Authentication

Users register using their SJSU email address and verify their identity through Firebase Authentication before accessing seller functionality.

### Product Listings & Purchases

Students can upload product images, create listings, browse available products, save favorites, and manage their shopping carts. Completed purchases are recorded for future reference.

### Automated Email Notifications

Upon checkout, EmailJS triggers transactional notifications:

- **Buyers** receive purchase confirmations containing product details and seller contact information.
- **Sellers** receive notifications containing purchased product information and buyer contact details.

---

## Impact

SJ Bay creates a dedicated digital marketplace for SJSU students, simplifying campus commerce while promoting trust and accessibility.

By combining Firebase authentication, full-stack e-commerce functionality, and automated transaction notifications, SJ Bay delivers:

- **Accessibility** — A centralized marketplace tailored to the SJSU student community.
- **Trust** — University email verification to help establish a student-focused buying and selling environment.
- **Convenience** — Streamlined product listings, shopping carts, favorites, and purchase tracking.
- **Communication** — Automated buyer and seller notifications that simplify transactions.`;

export default marketplaceDetails;
