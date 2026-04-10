<?php
/**
 * Contact page template.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$eyebrow = 'Contact';
$title = 'Speak to our UPS & power protection team';
$description = "Need a new UPS system, battery replacements or generator support? Use the form below and we'll respond within one business day.";
$hero_background = 'hero/hero-datacenter-brett-4508751.jpg';
$hero_actions = [
    [
        'label' => 'Call 01488 685207',
        'href' => 'tel:01488685207',
        'primary' => true,
    ],
    [
        'label' => 'Email Us',
        'href' => 'mailto:contact@powerprotectionservices.co.uk',
        'primary' => false,
    ],
];

$services = pps_services_data();
$service_options = array_merge(array_map(static fn(array $service): string => (string) $service['title'], $services), ['Other']);
$sector_options = pps_contact_sector_options();
$maps_href = 'https://www.google.com/maps/search/?api=1&query=Power+Protection+Services+Ltd%2C+Unit+2+Neates+Yard%2C+Hungerford%2C+Berkshire+RG17+0NB';
$maps_embed_src = 'https://www.google.com/maps?q=Power+Protection+Services+Ltd,+Unit+2+Neates+Yard,+Hungerford,+Berkshire+RG17+0NB&output=embed';

get_header();
get_template_part('partials/hero');
?>
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
                <button type="button" class="pps-btn pps-btn-tertiary" data-contact-back hidden>Back</button>
                <button type="button" class="pps-btn pps-btn-primary" data-contact-next>Continue</button>
                <button type="submit" class="pps-btn pps-btn-primary" data-contact-submit hidden>Submit</button>
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

<section class="pps-section pps-section-light pps-map-section">
    <div class="pps-container">
        <p class="pps-eyebrow">Find Us</p>
        <h2>Where are we based?</h2>
        <div class="pps-map-link">
            <a href="<?php echo esc_url($maps_href); ?>" target="_blank" rel="noreferrer noopener">Open in Google Maps</a>
        </div>
        <div class="pps-map-wrap">
            <iframe
                title="Power Protection Services location map"
                src="<?php echo esc_url($maps_embed_src); ?>"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
</section>
<?php get_footer();
