# GitHub Pages for Duotot

This folder contains the complete, standalone GitHub Pages website for **Duotot: Newborn Baby Tracker**.

## Structure
- `index.html`: Main product landing page (Hero, Features, Screenshots gallery, Video player, FAQs, CTA).
- `privacy.html`: Official Privacy Policy (Google Play compliant).
- `support.html`: Help & Support Center (Google Play compliant support contact URL).
- `terms.html`: Terms of Service & Medical Disclaimer.
- `assets/images/`: Optimized screenshots, app icon, feature graphic, and promo video.
- `assets/css/style.css`: Clean nursery design system.
- `assets/js/main.js`: Interactive screenshot gallery and FAQ accordion.
- `.nojekyll`: Ensures GitHub Pages serves all assets directly without Jekyll processing.

## How to Enable on GitHub (1-Minute Setup)
1. Push this repository to GitHub:
   ```bash
   git add docs/
   git commit -m "Add GitHub Pages website for Duotot"
   git push origin main
   ```
2. Go to your repository on GitHub:
   - Click **Settings** (top tab)
   - In the left sidebar, click **Pages**
   - Under **Build and deployment > Source**, select:
     - Branch: `main`
     - Folder: `/docs`
   - Click **Save**.
3. In ~30 seconds, your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## Google Play Console URLs
Once live, you can enter these direct URLs into Google Play Console:
- **App Website:** `https://<your-username>.github.io/<repo-name>/`
- **Privacy Policy URL:** `https://<your-username>.github.io/<repo-name>/privacy.html`
- **Support URL:** `https://<your-username>.github.io/<repo-name>/support.html`

