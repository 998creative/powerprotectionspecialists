<?php
/**
 * Theme header.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$services = pps_services_data();
$sectors  = pps_sector_data();
$support  = pps_support_data();

$svg_allowed = [
    'svg' => ['viewBox' => true, 'fill' => true, 'aria-hidden' => true, 'class' => true],
    'path' => ['d' => true, 'stroke-width' => true, 'stroke-linecap' => true, 'stroke-linejoin' => true],
    'rect' => ['x' => true, 'y' => true, 'width' => true, 'height' => true, 'rx' => true, 'stroke-width' => true],
    'circle' => ['cx' => true, 'cy' => true, 'r' => true, 'stroke-width' => true],
];

$service_icon_svg = static function (string $slug): string {
    switch ($slug) {
        case 'site-surveys':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5.2" y="4.2" width="13.6" height="15.6" rx="2" stroke-width="1.8" /><path d="m8.4 10.3 1.8 1.8 3.6-3.6M8.4 15.2h7.2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'emergency-lighting':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4.2a5.1 5.1 0 0 0-3.6 8.7c.9.9 1.4 2 1.4 3.2h4.4c0-1.2.5-2.3 1.4-3.2A5.1 5.1 0 0 0 12 4.2Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M9.7 18.2h4.6M10.4 20.1h3.2" stroke-width="1.8" stroke-linecap="round" /></svg>';
        case 'electrical-installation':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.8 5.2 7.2v9.6l6.8 3.4 6.8-3.4V7.2L12 3.8Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M12 8.4v7.2M8.6 10.1 12 12l3.4-1.9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'equipment-relocation':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.2" y="7.2" width="8.8" height="8.8" rx="1.6" stroke-width="1.8" /><path d="M11.8 12h8M16.2 8.6 19.8 12l-3.6 3.4" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'full-installation':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.8 5.4 6.8v5.7c0 4 2.9 6.8 6.6 7.8 3.7-1 6.6-3.8 6.6-7.8V6.8L12 3.8Z" stroke-width="1.8" stroke-linejoin="round" /><path d="m9.1 12.1 2 2 3.8-3.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'ups-battery-replacement':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="7" width="15.8" height="10" rx="2.2" stroke-width="1.8" /><path d="M19.8 10h1.8v4h-1.8M10 9.5v5M7.5 12h5" stroke-width="1.8" stroke-linecap="round" /></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.2" stroke-width="1.8" /></svg>';
    }
};

$sector_icon_svg = static function (string $slug): string {
    switch ($slug) {
        case 'healthcare-and-nhs':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4.5" y="4.5" width="15" height="15" rx="2.5" stroke-width="1.8" /><path d="M12 8v8M8 12h8" stroke-width="1.8" stroke-linecap="round" /></svg>';
        case 'universities-and-education':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 9.5 12 5l8.5 4.5L12 14 3.5 9.5Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M7.5 11.7V15c0 1.7 2.1 3 4.5 3s4.5-1.3 4.5-3v-3.3" stroke-width="1.8" /></svg>';
        case 'government-and-local-council':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 9h16L12 5 4 9Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M6 9.5v7M10 9.5v7M14 9.5v7M18 9.5v7M4 17h16" stroke-width="1.8" /></svg>';
        case 'corporate':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="8" width="16" height="10" rx="2.2" stroke-width="1.8" /><path d="M9 8V6.8c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6V8" stroke-width="1.8" /><path d="M4 12.5h16" stroke-width="1.8" /></svg>';
        case 'telecoms-business':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="4.8" width="14" height="5.6" rx="1.5" stroke-width="1.8" /><rect x="5" y="13.6" width="14" height="5.6" rx="1.5" stroke-width="1.8" /><path d="M8.5 7.6h.01M8.5 16.4h.01M11 7.6h4.5M11 16.4h4.5" stroke-width="1.8" stroke-linecap="round" /></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10.5h16l-1.3-3.5H5.3L4 10.5Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M6 10.5V19h12v-8.5M10 19v-5h4v5" stroke-width="1.8" /></svg>';
    }
};

$support_icon_svg = static function (string $icon): string {
    switch ($icon) {
        case 'support':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.8 12.7v2.7a2 2 0 0 0 2 2h.9M17.2 12.7v2.7a2 2 0 0 1-2 2h-.9M7 12a5 5 0 0 1 10 0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /><rect x="4.8" y="11.5" width="2.8" height="4.8" rx="1.2" stroke-width="1.8" /><rect x="16.4" y="11.5" width="2.8" height="4.8" rx="1.2" stroke-width="1.8" /></svg>';
        case 'manuals':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3.8h7.8l4.2 4.2V20a1.8 1.8 0 0 1-1.8 1.8H7A1.8 1.8 0 0 1 5.2 20V5.6A1.8 1.8 0 0 1 7 3.8Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M14.8 3.8V8h4.2M8.6 12.5h6.8M8.6 16h6.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'faq':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 9.2a3.8 3.8 0 1 1 6.1 3c-.8.6-1.4 1-1.7 1.8M12 17h.01" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /><circle cx="12" cy="12" r="8.2" stroke-width="1.8" /></svg>';
        case 'blog':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 5.2h8.8L18.8 9v9.8a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8V7a1.8 1.8 0 0 1 1.8-1.8Z" stroke-width="1.8" stroke-linejoin="round" /><path d="M14.8 5.2V9h4M8.1 12h6.8M8.1 15.4h6.8" stroke-width="1.8" stroke-linecap="round" /></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.2" stroke-width="1.8" /></svg>';
    }
};

$support_image_map = [
    'support' => 'hero/services-maintenance.jpg',
    'manuals' => 'hero/hero-datacenter-blue.jpg',
    'faq' => 'hero/hero-datacenter-brett-4508751.jpg',
    'blog' => 'hero/about-carl-lindy-team-photo.jpg',
];
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="pps-header">
    <div class="pps-container pps-header-inner">
        <a class="pps-brand" href="<?php echo esc_url(home_url('/')); ?>">
            <img src="<?php echo esc_url(pps_image_url('logo.svg')); ?>" alt="Power Protection Services" />
            <span>Power Protection Services</span>
        </a>

        <button class="pps-nav-toggle" type="button" aria-expanded="false" aria-controls="pps-primary-nav">Menu</button>

        <nav id="pps-primary-nav" class="pps-nav" aria-label="Primary Navigation">
            <ul class="pps-nav-list">
                <li class="pps-nav-item pps-has-mega">
                    <button class="pps-nav-trigger" type="button" aria-expanded="false">Services
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="m5 8 5 5 5-5" stroke-width="1.8" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div class="pps-mega">
                        <div class="pps-mega-header">
                            <p class="pps-mega-label">Services</p>
                            <a href="<?php echo esc_url(home_url('/services/')); ?>" class="pps-mega-viewall">View all</a>
                        </div>
                        <div class="pps-mega-grid pps-mega-grid-3">
                            <?php foreach ($services as $item) : ?>
                                <a class="pps-mega-card pps-mega-card-image" href="<?php echo esc_url($item['href']); ?>">
                                    <span class="pps-mega-card-media">
                                        <img src="<?php echo esc_url(pps_image_url((string) $item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt'] ?? $item['title']); ?>" />
                                    </span>
                                    <span class="pps-mega-card-overlay"></span>
                                    <span class="pps-mega-card-primary">
                                        <span class="pps-mega-card-icon"><?php echo wp_kses($service_icon_svg((string) $item['slug']), $svg_allowed); ?></span>
                                        <strong><?php echo esc_html($item['title']); ?></strong>
                                    </span>
                                    <span class="pps-mega-card-secondary">
                                        <span><?php echo esc_html($item['description']); ?></span>
                                        <span class="pps-mega-chip">Learn More</span>
                                    </span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </li>

                <li class="pps-nav-item pps-has-mega">
                    <button class="pps-nav-trigger" type="button" aria-expanded="false">Who We Help
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="m5 8 5 5 5-5" stroke-width="1.8" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div class="pps-mega">
                        <div class="pps-mega-header">
                            <p class="pps-mega-label">Sectors</p>
                            <a href="<?php echo esc_url(home_url('/who-we-help/')); ?>" class="pps-mega-viewall">View all</a>
                        </div>
                        <div class="pps-mega-grid pps-mega-grid-3">
                            <?php foreach ($sectors as $item) : ?>
                                <a class="pps-mega-card pps-mega-card-image" href="<?php echo esc_url($item['href']); ?>">
                                    <span class="pps-mega-card-media">
                                        <img src="<?php echo esc_url(pps_image_url((string) $item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt'] ?? $item['title']); ?>" />
                                    </span>
                                    <span class="pps-mega-card-overlay"></span>
                                    <span class="pps-mega-card-primary">
                                        <span class="pps-mega-card-icon"><?php echo wp_kses($sector_icon_svg((string) $item['slug']), $svg_allowed); ?></span>
                                        <strong><?php echo esc_html($item['title']); ?></strong>
                                    </span>
                                    <span class="pps-mega-card-secondary">
                                        <span><?php echo esc_html($item['description'] ?? 'Sector specific UPS and power continuity support.'); ?></span>
                                        <span class="pps-mega-chip">Learn More</span>
                                    </span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </li>

                <li class="pps-nav-item pps-has-mega">
                    <button class="pps-nav-trigger" type="button" aria-expanded="false">Support
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="m5 8 5 5 5-5" stroke-width="1.8" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div class="pps-mega">
                        <div class="pps-mega-header">
                            <p class="pps-mega-label">Support</p>
                        </div>
                        <div class="pps-mega-grid pps-mega-grid-4">
                            <?php foreach ($support as $item) : ?>
                                <?php $support_image = $support_image_map[$item['icon'] ?? ''] ?? 'hero/hero-datacenter-blue.jpg'; ?>
                                <?php if (! empty($item['disabled'])) : ?>
                                    <div class="pps-mega-card pps-mega-card-image pps-disabled">
                                        <span class="pps-mega-card-media">
                                            <img src="<?php echo esc_url(pps_image_url($support_image)); ?>" alt="<?php echo esc_attr($item['title']); ?>" />
                                        </span>
                                        <span class="pps-mega-card-overlay"></span>
                                        <span class="pps-mega-card-primary">
                                            <span class="pps-mega-card-icon"><?php echo wp_kses($support_icon_svg((string) ($item['icon'] ?? '')), $svg_allowed); ?></span>
                                            <strong><?php echo esc_html($item['title']); ?></strong>
                                        </span>
                                        <span class="pps-mega-card-secondary">
                                            <span><?php echo esc_html($item['description']); ?></span>
                                            <span class="pps-mega-chip pps-mega-chip-disabled">Coming Soon</span>
                                        </span>
                                    </div>
                                <?php else : ?>
                                    <a class="pps-mega-card pps-mega-card-image" href="<?php echo esc_url($item['href']); ?>">
                                        <span class="pps-mega-card-media">
                                            <img src="<?php echo esc_url(pps_image_url($support_image)); ?>" alt="<?php echo esc_attr($item['title']); ?>" />
                                        </span>
                                        <span class="pps-mega-card-overlay"></span>
                                        <span class="pps-mega-card-primary">
                                            <span class="pps-mega-card-icon"><?php echo wp_kses($support_icon_svg((string) ($item['icon'] ?? '')), $svg_allowed); ?></span>
                                            <strong><?php echo esc_html($item['title']); ?></strong>
                                        </span>
                                        <span class="pps-mega-card-secondary">
                                            <span><?php echo esc_html($item['description']); ?></span>
                                            <span class="pps-mega-chip">Learn More</span>
                                        </span>
                                    </a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </li>

                <li class="pps-nav-item"><a href="<?php echo esc_url(home_url('/about/')); ?>">About Us</a></li>
                <li class="pps-nav-item"><a href="<?php echo esc_url(home_url('/contact/')); ?>">Contact</a></li>
            </ul>
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Book a Free Site Survey</a>
        </nav>
    </div>
</header>
<main class="pps-main">
