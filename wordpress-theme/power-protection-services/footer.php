<?php
/**
 * Theme footer.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$quick_links = pps_quick_links_data();
$services    = pps_services_data();
$sectors     = pps_sector_data();
$maps_href   = 'https://www.google.com/maps/search/?api=1&query=Power+Protection+Services+Ltd%2C+Unit+2+Neates+Yard%2C+Hungerford%2C+Berkshire+RG17+0NB';
?>
</main>
<footer class="pps-footer">
    <div class="pps-container pps-footer-grid pps-footer-desktop">
        <div class="pps-footer-brand">
            <img class="pps-footer-logo" src="<?php echo esc_url(pps_image_url('logo-secondary.svg')); ?>" alt="Power Protection Services" />
            <p>
                Independent UPS installation, battery replacement, generator supply and maintenance support for
                critical power infrastructure across the UK.
            </p>
            <div class="pps-footer-desktop-cta">
                <a href="<?php echo esc_url(home_url('/contact/#contact')); ?>" class="pps-btn pps-btn-secondary">Book a Free Site Survey</a>
            </div>
        </div>
        <div class="pps-footer-links-col">
            <h4>Quick Links</h4>
            <ul>
                <?php foreach ($quick_links as $item) : ?>
                    <li><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['label']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div class="pps-footer-links-col">
            <h4>Services</h4>
            <ul>
                <?php foreach ($services as $item) : ?>
                    <li><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div class="pps-footer-links-col">
            <h4>Who We Help</h4>
            <ul>
                <?php foreach ($sectors as $item) : ?>
                    <li><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div class="pps-footer-contact-col">
            <h4>Contact</h4>
            <div class="pps-footer-contact-list">
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
            </div>
        </div>
    </div>

    <div class="pps-container pps-footer-mobile" data-footer-accordion>
        <div class="pps-footer-mobile-section">
            <button type="button" class="pps-footer-mobile-trigger" data-footer-toggle="quick-links" aria-expanded="false">
                <span>Quick Links</span>
                <span aria-hidden="true" class="pps-footer-mobile-chevron">▾</span>
            </button>
            <nav class="pps-footer-mobile-panel" data-footer-panel="quick-links" hidden>
                <?php foreach ($quick_links as $item) : ?>
                    <a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['label']); ?></a>
                <?php endforeach; ?>
            </nav>
        </div>

        <div class="pps-footer-mobile-section">
            <button type="button" class="pps-footer-mobile-trigger" data-footer-toggle="services" aria-expanded="false">
                <span>Services</span>
                <span aria-hidden="true" class="pps-footer-mobile-chevron">▾</span>
            </button>
            <div class="pps-footer-mobile-panel" data-footer-panel="services" hidden>
                <?php foreach ($services as $item) : ?>
                    <a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="pps-footer-mobile-section">
            <button type="button" class="pps-footer-mobile-trigger" data-footer-toggle="who-we-help" aria-expanded="false">
                <span>Who We Help</span>
                <span aria-hidden="true" class="pps-footer-mobile-chevron">▾</span>
            </button>
            <div class="pps-footer-mobile-panel" data-footer-panel="who-we-help" hidden>
                <?php foreach ($sectors as $item) : ?>
                    <a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a>
                <?php endforeach; ?>
            </div>
        </div>

        <div class="pps-footer-mobile-section">
            <button type="button" class="pps-footer-mobile-trigger" data-footer-toggle="contact" aria-expanded="true">
                <span>Contact</span>
                <span aria-hidden="true" class="pps-footer-mobile-chevron">▾</span>
            </button>
            <div class="pps-footer-mobile-panel pps-footer-mobile-contact" data-footer-panel="contact">
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
            </div>
        </div>

        <a href="<?php echo esc_url(home_url('/contact/#contact')); ?>" class="pps-btn pps-btn-secondary pps-footer-mobile-cta">Book a Free Site Survey</a>
    </div>

    <div class="pps-footer-legal">
        <div class="pps-container pps-footer-legal-inner">
            <p>&copy; <?php echo esc_html(wp_date('Y')); ?> Power Protection Services. All rights reserved.</p>
            <a href="https://998.co.uk" target="_blank" rel="noreferrer noopener" class="pps-footer-998" aria-label="Website by 998">
                <span>Website by</span>
                <span class="pps-footer-998-mark" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
