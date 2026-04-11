<?php
/**
 * Front page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$services = pps_services_data();
$sectors = pps_sector_data();
$supplier_logos = pps_supplier_logos_data();
$client_logos = pps_client_logos_data();
$testimonials = pps_testimonials_data();
$service_options = array_merge(array_map(static fn(array $service): string => (string) $service['title'], $services), ['Other']);
$sector_options = pps_contact_sector_options();
$maps_href = 'https://www.google.com/maps/search/?api=1&query=Power+Protection+Services+Ltd%2C+Unit+2+Neates+Yard%2C+Hungerford%2C+Berkshire+RG17+0NB';

$home_sector_copy = [
    'medium-business' => [
        'title' => 'Small and Medium Businesses',
        'description' => 'Scalable, practical backup power support for growing SMEs.',
    ],
    'corporate' => [
        'title' => 'Coorporate Organisations',
        'description' => 'Business continuity solutions for commercial and multi-site organisations.',
    ],
    'government-and-local-council' => [
        'title' => 'Government and Local Council',
        'description' => 'Resilient UPS support for councils, civic buildings and public services.',
    ],
    'universities-and-education' => [
        'title' => 'Universities and Education',
        'description' => 'Reliable backup for campus IT, lecture facilities and education infrastructure.',
    ],
    'telecoms-business' => [
        'title' => 'Telecoms Business',
        'description' => 'Project-ready UPS expertise for IT providers and delivery partners.',
    ],
    'healthcare-and-nhs' => [
        'title' => 'Healthcare & NHS',
        'description' => 'Clinical power protection for hospitals, labs and patient-critical systems.',
    ],
];

$why_us_cards = [
    [
        'title' => 'Independent',
        'description' => 'We work with all major UPS and generator manufacturers, so our advice is always unbiased - never driven by supplier incentives.',
        'icon' => 'independent',
    ],
    [
        'title' => 'Experienced',
        'description' => 'Over 25 years of experience delivering UPS installation, maintenance and power protection across the UK.',
        'icon' => 'experienced',
    ],
    [
        'title' => 'Certified',
        'description' => 'All installations meet NICEIC Approved Contractor standards. Our engineers are factory-trained by major UPS manufacturers and IEE qualified.',
        'icon' => 'certified',
    ],
    [
        'title' => 'Full Turnkey',
        'description' => 'From initial site survey to UPS installation, commissioning, maintenance and ongoing support - one team, one point of contact, zero handoff risk.',
        'icon' => 'turnkey',
    ],
];

$svg_allowed = [
    'svg' => ['viewbox' => true, 'viewBox' => true, 'fill' => true, 'aria-hidden' => true, 'class' => true],
    'path' => ['d' => true, 'stroke' => true, 'stroke-width' => true, 'stroke-linejoin' => true, 'stroke-linecap' => true],
    'rect' => ['x' => true, 'y' => true, 'width' => true, 'height' => true, 'rx' => true, 'stroke' => true, 'stroke-width' => true],
    'circle' => ['cx' => true, 'cy' => true, 'r' => true, 'stroke' => true, 'stroke-width' => true],
];

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

$why_icon_svg = static function (string $icon): string {
    switch ($icon) {
        case 'independent':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8.5h16M7.5 5.5v6M16.5 5.5v6M4 13.5h16v5H4z" stroke-width="1.8" stroke-linejoin="round" /></svg>';
        case 'experienced':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7.5" stroke-width="1.8" /><path d="M12 8v4l2.8 2.2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'certified':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.8 18.5 6v6.2c0 4.2-2.8 6.8-6.5 8-3.7-1.2-6.5-3.8-6.5-8V6L12 3.8Z" stroke-width="1.8" stroke-linejoin="round" /><path d="m9.4 12.2 1.8 1.9 3.5-3.8" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'turnkey':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="8.2" cy="12" r="3.2" stroke-width="1.8" /><path d="M11.4 12h8.2M16.8 12v2.3M14.7 12v1.6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.2" stroke-width="1.8" /></svg>';
    }
};

$button_icon_svg = static function (string $icon): string {
    switch ($icon) {
        case 'phone':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z" stroke-width="1.8" stroke-linejoin="round" /></svg>';
        case 'grid':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="7.2" height="7.2" rx="1.3" stroke-width="1.8" /><rect x="12.8" y="4" width="7.2" height="7.2" rx="1.3" stroke-width="1.8" /><rect x="4" y="12.8" width="7.2" height="7.2" rx="1.3" stroke-width="1.8" /><rect x="12.8" y="12.8" width="7.2" height="7.2" rx="1.3" stroke-width="1.8" /></svg>';
        case 'arrow-left':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5m6 6-6-6 6-6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'send':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m21 3-9.3 9.3M21 3l-6.3 18-3-8.7L3 9.3 21 3Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'survey':
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5.2" y="4.2" width="13.6" height="15.6" rx="2" stroke-width="1.8" /><path d="m8.4 10.3 1.8 1.8 3.6-3.6M8.4 15.2h7.2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        case 'arrow-right':
        default:
            return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>';
    }
};

get_header();
?>

<section class="pps-home-hero">
    <div class="pps-home-hero-media">
        <video autoplay loop muted playsinline preload="metadata" poster="<?php echo esc_url(pps_image_url('hero/hero-datacenter-brett-4508751.jpg')); ?>" aria-hidden="true">
            <source src="<?php echo esc_url(pps_video_url('pps-hero-vid.mp4')); ?>" type="video/mp4" />
        </video>
    </div>
    <div class="pps-home-hero-overlay"></div>
    <div class="pps-home-hero-fade"></div>
    <div class="pps-home-hero-ring pps-home-hero-ring-right"></div>
    <div class="pps-home-hero-ring pps-home-hero-ring-left"></div>

    <div class="pps-container pps-home-hero-inner">
        <div class="pps-home-hero-copy">
            <p class="pps-eyebrow">NICEIC Approved Contractor</p>
            <h1>UPS Installation &amp; Power Protection Services UK</h1>
            <p>
                Independent UPS system installation, maintenance and battery supply
                across the UK - keeping your critical infrastructure running.
            </p>
        </div>

        <div class="pps-home-hero-actions">
            <a href="#contact" class="pps-btn pps-btn-primary pps-btn--icon">
                <span>Book a Free Site Survey</span>
                <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('survey'), $svg_allowed); ?></span>
            </a>
            <a href="#services" class="pps-btn pps-btn-secondary pps-btn--icon">
                <span>Our Services</span>
                <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('grid'), $svg_allowed); ?></span>
            </a>
        </div>
    </div>

    <section class="pps-trustbar">
        <div class="pps-container">
            <div class="pps-trustbar-card">
                <p class="pps-eyebrow">Independent suppliers of all major UPS manufacturers</p>
                <div class="pps-trustbar-grid">
                    <?php foreach ($supplier_logos as $logo) : ?>
                        <div class="pps-trustbar-item">
                            <img src="<?php echo esc_url(pps_image_url($logo['image'])); ?>" alt="<?php echo esc_attr($logo['alt']); ?>" />
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
</section>

<section id="about" class="pps-section pps-home-about">
    <div class="pps-home-about-ring"></div>
    <div class="pps-container pps-home-about-grid">
        <div class="pps-home-about-media-wrap">
            <div class="pps-home-about-media-frame"></div>
            <img src="<?php echo esc_url(pps_image_url('hero/about-carl-lindy-team-photo.jpg')); ?>" alt="Team photo representing independent advisory support" />
        </div>

        <div class="pps-home-about-copy">
            <h2>Independent advice. No manufacturer bias.</h2>
            <p>
                Power Protection Services is an independent UK distributor and
                installer of UPS systems, batteries and standby generators. Because
                we work with all major manufacturers - not just one - we recommend
                what&apos;s right for your requirements, not what&apos;s right for our
                margins.
            </p>
            <p>
                Our customers include universities, hospitals, local councils, IT
                resellers and large corporate organisations.
            </p>
            <a href="<?php echo esc_url(home_url('/about/')); ?>">About us &rarr;</a>
        </div>
    </div>
</section>

<section id="services" class="pps-section pps-home-services" data-home-slider="services">
    <div class="pps-container">
        <p class="pps-eyebrow">Core Services</p>
        <h2>UPS &amp; Power Protection Services</h2>
        <p class="pps-section-intro">
            Practical, end-to-end UPS installation and power protection services
            designed around your uptime targets and UK compliance requirements.
        </p>
        <a href="#contact" class="pps-btn pps-btn-primary pps-home-services-cta pps-btn--icon">
            <span>Book a Free Site Survey</span>
            <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('survey'), $svg_allowed); ?></span>
        </a>

        <div class="pps-home-slider-nav">
            <div class="pps-home-slider-bar"><span data-home-slider-progress></span></div>
            <div class="pps-home-slider-arrows">
                <button type="button" aria-label="Previous services" data-home-slider-prev>&larr;</button>
                <button type="button" aria-label="Next services" data-home-slider-next>&rarr;</button>
            </div>
        </div>
    </div>

    <div class="pps-home-slider-viewport">
        <div class="pps-home-slider-track" data-home-slider-track>
            <?php foreach ($services as $item) : ?>
                <article class="pps-home-service-slide" data-home-slide>
                    <div class="pps-home-service-image">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                    </div>
                    <div class="pps-home-service-card">
                        <h3><?php echo esc_html($item['title']); ?></h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <a href="<?php echo esc_url($item['href']); ?>" class="pps-btn pps-btn-tertiary pps-btn--icon">
                            <span>Find out more</span>
                            <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('arrow-right'), $svg_allowed); ?></span>
                        </a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section id="who-we-help" class="pps-section pps-home-who">
    <div class="pps-container">
        <div class="pps-home-who-slab">
            <h2>Who We Help</h2>
            <p>You are statistically more likely to lose business to a power failure than a computer virus.</p>

            <div class="pps-home-sector-grid">
                <?php foreach ($sectors as $item) : ?>
                    <?php $copy = $home_sector_copy[$item['slug']] ?? null; ?>
                    <a class="pps-home-sector-tile" href="<?php echo esc_url($item['href']); ?>">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                        <span class="pps-home-sector-overlay"></span>
                        <span class="pps-home-sector-content">
                            <span class="pps-home-sector-icon"><?php echo wp_kses($sector_icon_svg((string) $item['slug']), $svg_allowed); ?></span>
                            <span class="pps-home-sector-title"><?php echo esc_html($copy['title'] ?? $item['title']); ?></span>
                            <span class="pps-home-sector-description"><?php echo esc_html($copy['description'] ?? $item['description']); ?></span>
                        </span>
                    </a>
                <?php endforeach; ?>
            </div>

            <div class="pps-home-who-actions">
                <a href="<?php echo esc_url(home_url('/who-we-help/')); ?>" class="pps-btn pps-btn-secondary pps-btn--icon">
                    <span>Learn more about who we help</span>
                    <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('arrow-right'), $svg_allowed); ?></span>
                </a>
                <a href="#contact" class="pps-btn pps-btn-primary pps-btn--icon">
                    <span>Speak to a real person</span>
                    <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('phone'), $svg_allowed); ?></span>
                </a>
            </div>
        </div>
    </div>

    <div class="pps-home-client-marquee">
        <div class="pps-home-client-track">
            <?php foreach (array_merge($client_logos, $client_logos, $client_logos, $client_logos) as $index => $logo) : ?>
                <div class="pps-home-client-logo" aria-hidden="<?php echo $index >= count($client_logos) ? 'true' : 'false'; ?>">
                    <img src="<?php echo esc_url(pps_image_url($logo['image'])); ?>" alt="<?php echo esc_attr($logo['alt']); ?>" />
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section id="testimonials" class="pps-section pps-home-testimonials" data-home-slider="testimonials">
    <div class="pps-container">
        <p class="pps-eyebrow">Trusted by many for over 25 years</p>
        <h2>What Our Clients Say</h2>

        <div class="pps-home-slider-nav">
            <div class="pps-home-slider-bar"><span data-home-slider-progress></span></div>
            <div class="pps-home-slider-arrows">
                <button type="button" aria-label="Previous testimonials" data-home-slider-prev>&larr;</button>
                <button type="button" aria-label="Next testimonials" data-home-slider-next>&rarr;</button>
            </div>
        </div>

        <div class="pps-home-testimonials-viewport">
            <div class="pps-home-testimonials-track" data-home-slider-track>
                <?php foreach ($testimonials as $item) : ?>
                    <article class="pps-home-testimonial" data-home-slide>
                        <div class="pps-home-testimonial-card">
                            <p>&ldquo;<?php echo esc_html($item['quote']); ?>&rdquo;</p>
                            <div>
                                <strong><?php echo esc_html($item['name']); ?></strong>
                                <span><?php echo esc_html($item['role']); ?> • <?php echo esc_html($item['company']); ?></span>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<section id="why-us" class="pps-section pps-home-why">
    <div class="pps-container">
        <p class="pps-eyebrow">Why Us</p>
        <h2>Why Choose Power Protection Services</h2>

        <div class="pps-home-why-grid">
            <?php foreach ($why_us_cards as $item) : ?>
                <article class="pps-home-why-card">
                    <span class="pps-home-why-icon"><?php echo wp_kses($why_icon_svg((string) ($item['icon'] ?? '')), $svg_allowed); ?></span>
                    <h3><?php echo esc_html($item['title']); ?></h3>
                    <p><?php echo esc_html($item['description']); ?></p>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section id="contact" class="pps-section pps-home-contact">
    <div class="pps-home-contact-ring"></div>
    <div class="pps-container pps-home-contact-grid">
        <div class="pps-home-contact-intro">
            <h2>Get in touch</h2>
            <p>
                Tell us about your UPS, generator or emergency lighting
                requirements and we&apos;ll respond within one business day with
                honest, unbiased advice.
            </p>
        </div>

        <form class="pps-home-contact-form" data-contact-form novalidate>
            <div class="pps-home-form-progress">
                <span data-contact-progress-step="1" class="active">1</span>
                <i></i>
                <span data-contact-progress-step="2">2</span>
                <i></i>
                <span data-contact-progress-step="3">3</span>
            </div>

            <div class="pps-home-form-step" data-contact-step="1">
                <label>
                    Which service are you interested in?
                    <select name="service" data-contact-input="service">
                        <option value="">Select a service</option>
                        <?php foreach ($service_options as $option) : ?>
                            <option value="<?php echo esc_attr($option); ?>"><?php echo esc_html($option); ?></option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <p class="pps-home-form-error" data-error-for="service"></p>
            </div>

            <div class="pps-home-form-step" data-contact-step="2" hidden>
                <label>
                    What sector are you in?
                    <select name="sector" data-contact-input="sector">
                        <option value="">Select your sector</option>
                        <?php foreach ($sector_options as $option) : ?>
                            <option value="<?php echo esc_attr($option); ?>"><?php echo esc_html($option); ?></option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <p class="pps-home-form-error" data-error-for="sector"></p>

                <label>
                    Where are you based?
                    <input type="text" name="location" placeholder="Town / City / Region" data-contact-input="location" />
                </label>
                <p class="pps-home-form-error" data-error-for="location"></p>
            </div>

            <div class="pps-home-form-step" data-contact-step="3" hidden>
                <div class="pps-home-form-two-col">
                    <label>
                        Name
                        <input type="text" name="name" data-contact-input="name" />
                    </label>
                    <label>
                        Company (optional)
                        <input type="text" name="company" data-contact-input="company" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" data-contact-input="email" />
                    </label>
                    <label>
                        Phone
                        <input type="tel" name="phone" data-contact-input="phone" />
                    </label>
                </div>
                <p class="pps-home-form-error" data-error-for="name"></p>
                <p class="pps-home-form-error" data-error-for="email"></p>
                <p class="pps-home-form-error" data-error-for="phone"></p>

                <fieldset>
                    <legend>How would you prefer to be contacted?</legend>
                    <label><input type="radio" name="preferredContact" value="email" checked data-contact-input="preferredContact" /> Email</label>
                    <label><input type="radio" name="preferredContact" value="phone" data-contact-input="preferredContact" /> Phone</label>
                    <label><input type="radio" name="preferredContact" value="dont-mind" data-contact-input="preferredContact" /> I don&apos;t mind</label>
                </fieldset>

                <label>
                    Message (optional)
                    <textarea name="message" rows="4" data-contact-input="message"></textarea>
                </label>
            </div>

            <div class="pps-home-form-actions">
                <button type="button" class="pps-btn pps-btn-tertiary pps-btn--icon pps-btn--icon-left" data-contact-back hidden>
                    <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('arrow-left'), $svg_allowed); ?></span>
                    <span>Back</span>
                </button>
                <button type="button" class="pps-btn pps-btn-primary pps-btn--icon" data-contact-next>
                    <span>Continue</span>
                    <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('arrow-right'), $svg_allowed); ?></span>
                </button>
                <button type="submit" class="pps-btn pps-btn-primary pps-btn--icon" data-contact-submit hidden>
                    <span>Submit</span>
                    <span class="pps-btn-icon"><?php echo wp_kses($button_icon_svg('send'), $svg_allowed); ?></span>
                </button>
            </div>

            <div class="pps-home-form-success" data-contact-success hidden>
                <p class="pps-home-form-success-title">Thank you</p>
                <p>Thank you for submitting. We will get back to you as soon as possible.</p>
            </div>
        </form>

        <aside class="pps-home-contact-direct">
            <p class="pps-eyebrow">Direct Contact</p>
            <a href="mailto:contact@powerprotectionservices.co.uk">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke-width="1.8" />
                    <path d="M4.5 7.5 12 13l7.5-5.5" stroke-width="1.8" stroke-linecap="round" />
                </svg>
                <span>contact@powerprotectionservices.co.uk</span>
            </a>
            <a href="tel:01488685207">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7.8 4.8 10.4 7c.6.5.8 1.4.4 2l-1.1 1.8c1 2 2.7 3.7 4.7 4.7l1.8-1.1c.7-.4 1.5-.2 2 .4l2.2 2.6c.6.7.5 1.8-.3 2.3-1 .7-2.2 1.1-3.4 1-2.4-.1-5.5-1.4-8.3-4.2S4.3 13.6 4.2 11.2c0-1.2.3-2.4 1-3.4.6-.8 1.6-.9 2.3-.3Z" stroke-width="1.8" stroke-linejoin="round" />
                </svg>
                <span>01488 685207</span>
            </a>
            <a href="<?php echo esc_url($maps_href); ?>" target="_blank" rel="noreferrer noopener">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 21s-5.5-4.7-5.5-9.3a5.5 5.5 0 1 1 11 0C17.5 16.3 12 21 12 21Z" stroke-width="1.8" stroke-linejoin="round" />
                    <circle cx="12" cy="11.7" r="2.1" stroke-width="1.8" />
                </svg>
                <span>
                    Power Protection Services Ltd<br />
                    Unit 2 Neates Yard<br />
                    Hungerford<br />
                    Berkshire RG17 0NB
                </span>
            </a>
        </aside>
    </div>
</section>

<?php
get_footer();
