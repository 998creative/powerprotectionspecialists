<?php
/**
 * Template Name: Sector Detail
 * Template Post Type: page
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$slug = (string) get_post_field('post_name', get_queried_object_id());
$sector = pps_get_sector_by_slug($slug);

$eyebrow = 'Who We Help';
$title = $sector['hero_title'] ?? pps_page_heading('Sector');
$description = $sector['hero_description'] ?? (get_the_excerpt() ?: 'Sector-specific content can be edited on this page.');
$hero_background = $sector['image'] ?? 'sectors/corporate-divinetechygirl-1181406.jpg';
$hero_actions = [
    [
        'label' => 'Speak to Our Team',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'Back to Who We Help',
        'href' => home_url('/who-we-help/'),
        'primary' => false,
    ],
];

$blocks = is_array($sector['blocks'] ?? null) ? $sector['blocks'] : [];
$other_sectors = pps_other_sectors_data($slug);

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light pps-section-muted">
    <div class="pps-container">
        <article class="pps-panel pps-sector-content">
            <?php if (! empty($blocks)) : ?>
                <?php foreach ($blocks as $index => $block) : ?>
                    <?php
                    $type = $block['type'] ?? '';
                    if ($type === 'heading') :
                        ?>
                        <h2><?php echo esc_html((string) ($block['text'] ?? '')); ?></h2>
                    <?php elseif ($type === 'list' && ! empty($block['items']) && is_array($block['items'])) : ?>
                        <ul class="pps-bullets">
                            <?php foreach ($block['items'] as $item) : ?>
                                <li><?php echo esc_html((string) $item); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    <?php elseif ($type === 'paragraph') : ?>
                        <p><?php echo esc_html((string) ($block['text'] ?? '')); ?></p>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php else : ?>
                <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
            <?php endif; ?>
        </article>
    </div>
</section>

<?php if (! empty($other_sectors)) : ?>
<section class="pps-section pps-section-light" data-home-slider="other-sectors">
    <div class="pps-container">
        <p class="pps-eyebrow">Other Sectors We Serve</p>
        <h2>Explore other sectors we support</h2>
        <p class="pps-section-intro">We also support a range of other organisations with practical UPS and backup power solutions tailored to their environments.</p>
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
            <?php foreach ($other_sectors as $item) : ?>
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
<?php endif; ?>
<?php get_footer();
