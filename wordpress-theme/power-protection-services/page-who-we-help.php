<?php
/**
 * Who we help page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Who We Help';
$title = 'Who we help across the UK';
$description = 'We support healthcare, education, government and local council, coorporate organisations, IT partners and SMEs with independent UPS and backup power services.';
$hero_background = 'sectors/corporate-divinetechygirl-1181406.jpg';
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
$sectors = pps_sector_data();

$coverage_examples = [
    ['region' => 'South East', 'examples' => 'Hungerford, Newbury, Reading, Oxford, Swindon'],
    ['region' => 'London & Home Counties', 'examples' => 'Greater London, Surrey, Berkshire, Hampshire'],
    ['region' => 'Midlands & South West', 'examples' => 'Birmingham, Bristol and surrounding areas'],
    ['region' => 'North, Scotland & Wales', 'examples' => 'Manchester, Leeds, Liverpool, Glasgow, Edinburgh, Cardiff'],
];

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light pps-section-muted" data-home-slider="sectors">
    <div class="pps-container">
        <p class="pps-eyebrow">Sectors We Serve</p>
        <h2>Business sectors we support</h2>
        <p class="pps-section-intro">We tailor recommendations by sector, so each organisation gets the right balance of resilience, compliance, scalability and long-term support.</p>
        <div class="pps-home-slider-nav">
            <div class="pps-home-slider-bar"><span data-home-slider-progress></span></div>
            <div class="pps-home-slider-arrows">
                <button type="button" aria-label="Previous sectors" data-home-slider-prev>&larr;</button>
                <button type="button" aria-label="Next sectors" data-home-slider-next>&rarr;</button>
            </div>
        </div>
    </div>

    <div class="pps-home-slider-viewport pps-sector-slider-viewport">
        <div class="pps-home-slider-track pps-sector-slider-track" data-home-slider-track>
            <?php foreach ($sectors as $item) : ?>
                <article class="pps-sector-slide" data-home-slide>
                    <div class="pps-sector-slide-image">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                    </div>
                    <div class="pps-sector-slide-card">
                        <h3><?php echo esc_html($item['title']); ?></h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <p class="pps-mini-heading">Typical needs</p>
                        <ul class="pps-inline-bullets">
                            <?php foreach ($item['highlights'] as $highlight) : ?>
                                <li><?php echo esc_html($highlight); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <a class="pps-btn pps-btn-tertiary" href="<?php echo esc_url($item['href']); ?>">Learn More</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="pps-section pps-section-light pps-coverage-section">
    <div class="pps-container pps-two-col pps-coverage-grid">
        <div class="pps-prose">
            <p class="pps-eyebrow">UK Coverage</p>
            <h2>Where do we cover?</h2>
            <p>We cover most of the UK. Based in Hungerford, Berkshire, we regularly support sites locally and nationwide for UPS installation, maintenance, battery replacement and wider power protection projects.</p>
            <p>If your town or region is not listed below, we can still help. Share your location and we will confirm coverage quickly.</p>
        </div>
        <aside class="pps-panel">
            <h3>Example areas we regularly support</h3>
            <ul class="pps-coverage-list">
                <?php foreach ($coverage_examples as $area) : ?>
                    <li>
                        <strong><?php echo esc_html($area['region']); ?></strong>
                        <span><?php echo esc_html($area['examples']); ?></span>
                    </li>
                <?php endforeach; ?>
            </ul>
        </aside>
    </div>
</section>

<section class="pps-section pps-section-dark">
    <div class="pps-container pps-cta-block pps-cta-block-dark">
        <div>
            <h2>Need support for your organisation?</h2>
            <p>Tell us about your site and we&apos;ll recommend a practical UPS and backup power approach that fits your environment.</p>
        </div>
        <div class="pps-cta-buttons">
            <a class="pps-btn pps-btn-primary" href="<?php echo esc_url(home_url('/contact/#contact')); ?>">Contact Us</a>
            <a class="pps-btn pps-btn-secondary" href="tel:01488685207">01488 685207</a>
        </div>
    </div>
</section>
<?php get_footer();
