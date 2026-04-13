# Power Protection Services WordPress Theme

This is the first full migration pass from the current Next.js build to WordPress.

## Included in this pass

- Full theme scaffold and core templates
- Shared structured data in `inc/data.php` for:
  - Services (titles, descriptions, highlights, images, slugs)
  - Who We Help sectors (hero copy, highlights, long-form blocks, images, slugs)
  - Support dropdown links/cards
  - FAQ content
- Expanded page templates with migrated section layouts:
  - `front-page.php`
  - `page-services.php`
  - `templates/template-service-detail.php`
  - `page-who-we-help.php`
  - `page-who-can-we-help.php`
  - `templates/template-sector-detail.php`
  - `page-support.php`
  - `page-manuals.php`
  - `page-faqs.php`
  - `page-contact.php`
  - `page-about.php`
- Manuals module in WP theme:
  - Search
  - Brand chips
  - Type dropdown filter
  - Count + clear filters
  - Client-side rendering grouped by brand/category
- Manuals dataset generated at:
  - `assets/data/manuals.json` (328 entries)
- Theme image assets copied into:
  - `assets/img/hero`
  - `assets/img/services`
  - `assets/img/sectors`

## Install

1. Copy folder to your WordPress install:
   - `wp-content/themes/power-protection-services`
2. Activate **Power Protection Services** in WP Admin > Appearance > Themes.
3. In **Settings > Permalinks**, use `Post name`.
4. In **Settings > Reading**:
   - Set a static homepage and assign your Home page.

## Page setup (recommended)

Create these pages/slugs:

- `/`
- `/about/`
- `/services/`
- `/contact/`
- `/support/`
- `/manuals/`
- `/faqs/`
- `/who-we-help/`
- `/who-can-we-help/`

Create child pages under `/services/` and set template **Service Detail**:

- `/services/ups-sales-supply-only/`
- `/services/ups-installation/`
- `/services/maintenance-health-checks/`
- `/services/ups-battery-replacement/`
- `/services/ups-removal-disposal/`
- `/services/equipment-relocation/`

Legacy service slugs are still supported for backward compatibility:
`/services/site-surveys/`, `/services/emergency-lighting/`, `/services/electrical-installation/`, `/services/full-installation/`.

Create child pages under `/who-can-we-help/` and set template **Sector Detail**:

- `/who-can-we-help/medium-business/`
- `/who-can-we-help/corporate/`
- `/who-can-we-help/government-and-local-council/`
- `/who-can-we-help/universities-and-education/`
- `/who-can-we-help/telecoms-business/`
- `/who-can-we-help/healthcare-and-nhs/`

## Manuals note

This migration pass points manuals to the source PDF URLs (from the imported 328-entry manifest). If you want all manuals hosted fully under your WP domain, we can switch `manuals.json` to local URLs in the next step once your final storage path is confirmed.

## Next phase (after theme sign-off)

- Build the custom in-house page editor plugin (no third-party plugin dependency)
- Add per-page section editor controls for headings/body/buttons
- Add editable SEO meta and alt text controls
