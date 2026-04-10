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
$hero_background = 'hero/about-carl-lindy-team-photo.jpg';
$hero_actions = [
    [
        'label' => 'Speak to Our Team',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'View Services',
        'href' => home_url('/services/'),
        'primary' => false,
    ],
];

$about_cards = [
    [
        'title' => 'Truly Independent',
        'description' => 'We can supply products from major manufacturers including Chloride Power Electronics, Emerson Network Power, Eaton, Powerware, APC and more, so recommendations are based on fit, not vendor bias.',
    ],
    [
        'title' => 'End-to-End Delivery',
        'description' => 'From site surveys and installation through delivery, offloading, positioning, commissioning, battery health checks and replacements, we provide full turnkey support for larger systems.',
    ],
    [
        'title' => 'Long-Term Support',
        'description' => 'Manufacturer warranties, optional extended cover, tailored maintenance schedules, guaranteed response options, and routine service visits are all available to suit your requirements.',
    ],
];

$timeline_items = [
    [
        'date' => 'May 2000',
        'title' => 'Incorporation',
        'description' => 'The business was incorporated with a clear mission: offer genuinely independent advice on critical power protection.',
    ],
    [
        'date' => '2004 - 2008',
        'title' => 'Expanded Access & Sector Growth',
        'description' => 'We broadened manufacturer access and saw strong growth across healthcare and education as demand increased for resilient power infrastructure.',
    ],
    [
        'date' => '2012',
        'title' => 'Turnkey Delivery Model',
        'description' => 'Site surveys, installation, battery replacement, commissioning, and support were combined into one joined-up service.',
    ],
    [
        'date' => '2016 - 2019',
        'title' => 'Support & Monitoring Enhanced',
        'description' => 'We strengthened service coverage with tailored maintenance options, faster response pathways, and improved remote monitoring capabilities.',
    ],
    [
        'date' => '2023 - Today',
        'title' => 'Broader Reach, Same Dedicated Care',
        'description' => 'Our portfolio has broadened across councils, corporate organisations, IT resellers, and consultants while we remain a close-knit team focused on practical, responsive support.',
    ],
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light pps-section-muted pps-about-intro">
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
        <p class="pps-eyebrow">What We Do</p>
        <h2>Independent Advice Across Major Manufacturers</h2>
        <div class="pps-card-grid pps-card-grid-3">
            <?php foreach ($about_cards as $item) : ?>
                <article class="pps-card pps-support-card">
                    <h3><?php echo esc_html($item['title']); ?></h3>
                    <p><?php echo esc_html($item['description']); ?></p>
                </article>
            <?php endforeach; ?>
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
        <ol class="pps-about-timeline-list">
            <?php foreach ($timeline_items as $item) : ?>
                <li>
                    <p><?php echo esc_html($item['date']); ?></p>
                    <h3><?php echo esc_html($item['title']); ?></h3>
                    <span><?php echo esc_html($item['description']); ?></span>
                </li>
            <?php endforeach; ?>
        </ol>
    </div>
</section>

<section class="pps-section pps-section-dark">
    <div class="pps-container pps-cta-block pps-cta-block-dark">
        <div>
            <h2>Let&apos;s plan the right solution for your site.</h2>
            <p>Get in touch for free, unbiased professional advice on UPS and critical power infrastructure.</p>
        </div>
        <div class="pps-cta-buttons">
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Contact Us</a>
            <a class="pps-btn pps-btn-secondary" href="tel:01488685207">01488 685207</a>
        </div>
    </div>
</section>
<?php get_footer();
