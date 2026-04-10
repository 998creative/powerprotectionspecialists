<?php
/**
 * Support page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Support';
$title = 'Support & Aftercare Services';
$description = 'Ongoing technical support for UPS and standby power systems, from day-to-day troubleshooting to long-term maintenance planning.';
$hero_background = 'hero/services-maintenance.jpg';
$hero_actions = [
    [
        'label' => 'Call 01488 685207',
        'href' => 'tel:01488685207',
        'primary' => true,
    ],
    [
        'label' => 'Contact Support',
        'href' => home_url('/contact/#contact'),
        'primary' => false,
    ],
];

$support_cards = pps_support_cards_data();
$warranty_points = [
    'Extended warranty options are available on selected models, with cover up to five years.',
    'Standard UK warranty typically covers non-consumable parts and labour when systems are operated within published guidelines.',
    'Batteries are consumable items and are normally covered by a one-year manufacturer warranty.',
];

$svg_allowed = [
    'svg' => ['viewbox' => true, 'fill' => true, 'aria-hidden' => true],
    'path' => ['d' => true, 'stroke-width' => true, 'stroke-linecap' => true, 'stroke-linejoin' => true],
    'rect' => ['x' => true, 'y' => true, 'width' => true, 'height' => true, 'rx' => true, 'stroke-width' => true],
    'circle' => ['cx' => true, 'cy' => true, 'r' => true, 'stroke-width' => true],
];

$support_icon_svg = static function (string $icon): string {
    switch ($icon) {
        case 'support':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.8 10.4a4.2 4.2 0 1 1 8.4 0v4.1a2.7 2.7 0 0 1-2.7 2.7h-3a2.7 2.7 0 0 1-2.7-2.7v-4.1Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M5.8 11.4v2.5M18.2 11.4v2.5M12 7.2v-1.4" stroke-width="1.8" stroke-linecap="round" /></svg>';
        case 'maintenance':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.6 5.3a4.2 4.2 0 0 0-5.4 5.4l-4.7 4.7a1.8 1.8 0 1 0 2.5 2.5l4.7-4.7a4.2 4.2 0 0 0 5.4-5.4l-2.3 2.3-2.3-.4-.4-2.3 2.5-2.1Z" stroke-width="1.8" stroke-linejoin="round" /></svg>';
        case 'health':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.5" y="4.5" width="15" height="15" rx="2.5" stroke-width="1.8" /><path d="M12 8v8M8 12h8" stroke-width="1.8" stroke-linecap="round" /></svg>';
        case 'generator':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.8" y="7.2" width="16.4" height="9.6" rx="2.2" stroke-width="1.8" /><path d="M7.4 11.9h4.6M16.8 9.8v4.2M14.7 11.9h4.2M5.8 17.2v2M18.2 17.2v2" stroke-width="1.8" stroke-linecap="round" /></svg>';
        case 'battery':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="7" width="15.8" height="10" rx="2.2" stroke-width="1.8" /><path d="M19.8 10h1.8v4h-1.8M10 9.5v5M7.5 12h5" stroke-width="1.8" stroke-linecap="round" /></svg>';
        case 'repair':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8.8h12M9.4 5.8h5.2M8.6 8.8l.9 9.2h5l.9-9.2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /><path d="M10.2 13.2h3.6" stroke-width="1.8" stroke-linecap="round" /></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.2" y="7.2" width="8.8" height="8.8" rx="1.6" stroke-width="1.8" /><path d="M11.8 12h8M16.2 8.6 19.8 12l-3.6 3.4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
    }
};

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light pps-section-muted">
    <div class="pps-container pps-two-col pps-support-panels">
        <article class="pps-panel">
            <h2>Technical support you can actually reach</h2>
            <p>Our team works closely with manufacturers and combines practical field experience with product-level support to help you resolve issues quickly and keep critical systems running.</p>
            <p>We focus on long-term reliability, not one-off fixes. After installation and commissioning, we stay involved with proactive service and responsive guidance whenever you need us.</p>
        </article>

        <article class="pps-panel">
            <p class="pps-eyebrow">Warranties</p>
            <h2>Clear warranty support</h2>
            <ul class="pps-bullets">
                <?php foreach ($warranty_points as $point) : ?>
                    <li><?php echo esc_html($point); ?></li>
                <?php endforeach; ?>
            </ul>
        </article>
    </div>
</section>

<section class="pps-section pps-section-light" data-home-slider="aftercare">
    <div class="pps-container">
        <p class="pps-eyebrow">Aftercare Services</p>
        <h2>What our support includes</h2>

        <div class="pps-home-slider-nav">
            <div class="pps-home-slider-bar"><span data-home-slider-progress></span></div>
            <div class="pps-home-slider-arrows">
                <button type="button" aria-label="Previous aftercare services" data-home-slider-prev>&larr;</button>
                <button type="button" aria-label="Next aftercare services" data-home-slider-next>&rarr;</button>
            </div>
        </div>
    </div>

    <div class="pps-home-slider-viewport pps-aftercare-slider-viewport">
        <div class="pps-home-slider-track pps-aftercare-slider-track" data-home-slider-track>
            <?php foreach ($support_cards as $item) : ?>
                <article class="pps-aftercare-slide" data-home-slide>
                    <div class="pps-aftercare-card">
                        <div class="pps-aftercare-icon">
                            <?php echo wp_kses($support_icon_svg((string) ($item['icon'] ?? '')), $svg_allowed); ?>
                        </div>
                        <h3><?php echo esc_html($item['title']); ?></h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <ul class="pps-inline-bullets">
                            <?php foreach ($item['bullets'] as $bullet) : ?>
                                <li><?php echo esc_html($bullet); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="pps-section pps-section-dark">
    <div class="pps-container pps-cta-block pps-cta-block-dark">
        <div>
            <h2>Need immediate support?</h2>
            <p>Tell us what system you have in place and what issue you are seeing. We will help you plan the right next step quickly.</p>
        </div>
        <div class="pps-cta-buttons">
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Request Support</a>
            <a class="pps-btn pps-btn-secondary" href="tel:01488685207">01488 685207</a>
        </div>
    </div>
</section>
<?php get_footer();
