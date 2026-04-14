<?php
/**
 * About page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'About Us';
$title = 'Independent power protection specialists for over 25 years';
$description = 'We help organisations protect critical systems with dependable UPS and backup power solutions.';
$hero_background = 'hero/about-office.jpg';
$hero_actions = [
    [
        'label' => 'Speak to Our Team',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'View Services',
        'href' => home_url('/#services'),
        'primary' => false,
    ],
];

$about_cards = [
    [
        'title' => 'Truly Independent',
        'description' => 'We can supply products from major manufacturers including Chloride Power Electronics, Emerson Network Power, Eaton, Powerware, APC and more, so recommendations are based on fit, not vendor bias.',
        'icon' => 'independent',
    ],
    [
        'title' => 'End-to-End Delivery',
        'description' => 'From site surveys and installation through delivery, offloading, positioning, commissioning, battery health checks and replacements, we provide full turnkey support for larger systems.',
        'icon' => 'delivery',
    ],
    [
        'title' => 'Long-Term Support',
        'description' => 'Manufacturer warranties, optional extended cover, tailored maintenance schedules, guaranteed response options, and routine service visits are all available to suit your requirements.',
        'icon' => 'support',
    ],
];

$timeline_items = [
    [
        'date' => 'May 2000',
        'title' => 'Incorporation',
        'description' => 'The business was incorporated with a clear mission: offer genuinely independent advice on critical power protection.',
        'image' => 'hero/about-office.jpg',
        'image_alt' => 'Office workspace representing the company at incorporation',
    ],
    [
        'date' => '2004 - 2008',
        'title' => 'Expanded Access & Sector Growth',
        'description' => 'We broadened manufacturer access and saw strong growth across healthcare and education as demand increased for resilient power infrastructure.',
        'image' => 'services/services-site-surveys.jpg',
        'image_alt' => 'Power system planning and site assessment work',
    ],
    [
        'date' => '2012',
        'title' => 'Turnkey Delivery Model',
        'description' => 'Site surveys, installation, battery replacement, commissioning, and support were combined into one joined-up service.',
        'image' => 'services/services-full-installation.jpg',
        'image_alt' => 'Engineers completing UPS installation and commissioning',
    ],
    [
        'date' => '2016 - 2019',
        'title' => 'Support & Monitoring Enhanced',
        'description' => 'We strengthened service coverage with tailored maintenance options, faster response pathways, and improved remote monitoring capabilities.',
        'image' => 'hero/services-maintenance.jpg',
        'image_alt' => 'Maintenance and monitoring of critical power systems',
    ],
    [
        'date' => '2023 - Today',
        'title' => 'Broader Reach, Same Dedicated Care',
        'description' => 'Our portfolio has broadened across councils, corporate organisations, IT resellers, and consultants while we remain a close-knit team focused on practical, responsive support.',
        'image' => 'hero/about-carl-lindy-team-photo.jpg',
        'image_alt' => 'Power Protection Services team photo',
    ],
];

$about_icon_svg = static function (string $icon): string {
    switch ($icon) {
        case 'independent':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.8 5.2 7.2v9.6l6.8 3.4 6.8-3.4V7.2L12 3.8Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M9 12.2 11.2 14.4 15.6 10" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'delivery':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.2 7.5h15.6M4.2 12h15.6M4.2 16.5h15.6" stroke-width="1.8" stroke-linecap="round" /><path d="M14.6 5.6 19.6 12l-5 6.4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'support':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7.8" stroke-width="1.8" /><path d="M12 7.8v4.8l3.2 2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.2" stroke-width="1.8" /></svg>';
    }
};

$svg_allowed = [
    'svg' => [
        'viewBox' => true,
        'fill' => true,
        'aria-hidden' => true,
    ],
    'path' => [
        'd' => true,
        'stroke-width' => true,
        'stroke-linecap' => true,
        'stroke-linejoin' => true,
    ],
    'circle' => [
        'cx' => true,
        'cy' => true,
        'r' => true,
        'stroke-width' => true,
    ],
];

get_header();
get_template_part('partials/hero', null, [
    'eyebrow' => $eyebrow ?? '',
    'title' => $title ?? '',
    'description' => $description ?? '',
    'hero_background' => $hero_background ?? '',
    'hero_actions' => $hero_actions ?? [],
]);
?>
<section class="pps-section pps-section-light pps-about-intro">
    <div class="pps-container pps-two-col">
        <div class="pps-prose">
            <h2>Friendly specialists. Personal support.</h2>
            <p>Founded by Carl Donovan in May 2000, our business has always focused on practical, honest advice and responsive support. As a smaller team, we get to know our clients properly and stay closely involved from first conversation through to long-term aftercare.</p>
            <p>Since incorporation over 25 years ago, we&apos;ve supported organisations across IT and telecoms environments with tailored UPS and power protection solutions. Our welcoming team takes pride in being approachable, dependable, and easy to work with.</p>
        </div>
        <div class="pps-home-about-media-wrap">
            <div class="pps-home-about-media-frame"></div>
            <img src="<?php echo esc_url(pps_image_url('hero/about-carl-lindy-team-photo.jpg')); ?>" alt="Carl and the Power Protection Services team" />
        </div>
    </div>
</section>

<section class="pps-section pps-section-light pps-about-cards">
    <div class="pps-container">
        <div class="pps-about-cards-desktop-copy">
            <p class="pps-eyebrow">What We Do</p>
            <h2>Independent Advice Across Major Manufacturers</h2>
        </div>
        <div class="pps-about-cards-desktop-grid pps-card-grid pps-card-grid-3">
            <?php foreach ($about_cards as $item) : ?>
                <article class="pps-card pps-support-card">
                    <div class="pps-about-card-icon">
                        <?php echo wp_kses($about_icon_svg((string) ($item['icon'] ?? '')), $svg_allowed); ?>
                    </div>
                    <h3><?php echo esc_html($item['title']); ?></h3>
                    <p><?php echo esc_html($item['description']); ?></p>
                </article>
            <?php endforeach; ?>
        </div>
        <div class="pps-about-cards-mobile" data-about-cards-stack>
            <div class="pps-about-cards-mobile-sticky">
                <p class="pps-eyebrow">What We Do</p>
                <h2>Independent Advice Across Major Manufacturers</h2>
                <div class="pps-about-cards-mobile-stage" data-about-cards-stage>
                    <?php foreach ($about_cards as $item) : ?>
                        <article class="pps-card pps-support-card pps-about-cards-mobile-card" data-about-card>
                            <div class="pps-about-card-icon">
                                <?php echo wp_kses($about_icon_svg((string) ($item['icon'] ?? '')), $svg_allowed); ?>
                            </div>
                            <h3><?php echo esc_html($item['title']); ?></h3>
                            <p><?php echo esc_html($item['description']); ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="pps-about-cards-mobile-track" data-about-cards-track aria-hidden="true"></div>
        </div>
        <p class="pps-section-intro">
            Our customers include universities, hospitals, city and county councils, corporate organisations, electrical contractors, IT resellers, project management companies and consultants. Our goal is always the same: the highest level of service and support by combining practical expertise with dedicated care.
        </p>
    </div>
</section>

<section class="pps-section pps-section-light pps-section-muted pps-about-timeline">
    <div class="pps-container">
        <p class="pps-eyebrow">Our Journey</p>
        <h2>Timeline of Growth</h2>
        <p class="pps-section-intro">Built steadily since incorporation, with practical experience across installation, maintenance, and long-term support.</p>
        <div class="pps-about-timeline-grid" data-about-timeline>
            <ol class="pps-about-timeline-list" style="--pps-timeline-count: <?php echo esc_attr((string) count($timeline_items)); ?>;">
                <?php foreach ($timeline_items as $index => $item) : ?>
                    <li class="<?php echo 0 === $index ? 'is-active' : ''; ?>" data-about-timeline-item data-about-index="<?php echo esc_attr((string) $index); ?>" tabindex="0">
                        <p><?php echo esc_html($item['date']); ?></p>
                        <h3><?php echo esc_html($item['title']); ?></h3>
                        <span><?php echo esc_html($item['description']); ?></span>
                    </li>
                <?php endforeach; ?>
            </ol>
            <aside class="pps-about-timeline-media">
                <?php foreach ($timeline_items as $index => $item) : ?>
                    <figure class="pps-about-timeline-media-item <?php echo 0 === $index ? 'is-active' : ''; ?>" data-about-media-item data-about-media-index="<?php echo esc_attr((string) $index); ?>">
                        <img src="<?php echo esc_url(pps_image_url((string) ($item['image'] ?? 'hero/about-carl-lindy-team-photo.jpg'))); ?>" alt="<?php echo esc_attr((string) ($item['image_alt'] ?? $item['title'])); ?>" />
                    </figure>
                <?php endforeach; ?>
                <div class="pps-about-timeline-media-overlay">
                    <p class="pps-about-timeline-media-date" data-about-media-date><?php echo esc_html($timeline_items[0]['date']); ?></p>
                    <p class="pps-about-timeline-media-title" data-about-media-title><?php echo esc_html($timeline_items[0]['title']); ?></p>
                </div>
            </aside>
        </div>
        <p class="pps-about-timeline-mobile-hint">Swipe sideways to explore the timeline.</p>
    </div>
</section>

<section class="pps-about-cta-strip">
    <div class="pps-container pps-about-cta-strip-inner">
        <div>
            <h2>Let&apos;s plan the right solution for your site.</h2>
            <p>Get in touch for free, unbiased professional advice on UPS and critical power infrastructure.</p>
        </div>
        <div class="pps-cta-buttons">
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Contact Us</a>
            <a class="pps-btn pps-btn-secondary pps-btn--icon pps-btn--icon-left" href="tel:01488685207">
                <span class="pps-btn-icon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z" stroke-width="1.8" stroke-linejoin="round" />
                    </svg>
                </span>
                01488 685207
            </a>
        </div>
    </div>
</section>
<?php get_footer();
