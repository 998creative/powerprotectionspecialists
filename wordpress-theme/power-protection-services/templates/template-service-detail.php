<?php
/**
 * Template Name: Service Detail
 * Template Post Type: page
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$slug = (string) get_post_field('post_name', get_queried_object_id());
$service = pps_get_service_by_slug($slug);
$normalized_slug = pps_normalize_service_slug($slug);

$eyebrow = 'Services';
$title = $service['hero_title'] ?? pps_page_heading('Service');
$description = $service['description'] ?? (get_the_excerpt() ?: 'Detailed service content can be edited on this page.');
$hero_background = $service['image'] ?? 'hero/hero-datacenter-brett-4508751.jpg';
$hero_actions = [
    [
        'label' => 'Request a Free Quote',
        'href' => home_url('/contact/#contact'),
        'primary' => true,
    ],
    [
        'label' => 'Back to Services',
        'href' => home_url('/services/'),
        'primary' => false,
    ],
];

$highlights = is_array($service['highlights'] ?? null) ? $service['highlights'] : [];
$other_services = array_values(array_filter(
    pps_services_data(),
    static fn(array $item): bool => ($item['slug'] ?? '') !== $normalized_slug
));

get_header();
get_template_part('partials/hero');
?>
<section class="pps-section pps-section-light">
    <div class="pps-container">
        <?php if (! empty($highlights)) : ?>
            <h2>What this service includes</h2>
            <ul class="pps-feature-grid">
                <?php foreach ($highlights as $item) : ?>
                    <li><?php echo esc_html($item); ?></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>

        <div class="pps-prose">
            <?php while (have_posts()) : the_post(); the_content(); endwhile; ?>
        </div>
    </div>
</section>

<?php if (! empty($other_services)) : ?>
<section class="pps-section pps-section-light pps-section-muted">
    <div class="pps-container">
        <p class="pps-eyebrow">Other Services</p>
        <h2>Explore related services</h2>
        <div class="pps-card-grid pps-card-grid-3">
            <?php foreach ($other_services as $item) : ?>
                <article class="pps-card pps-image-card">
                    <a class="pps-image-card-media" href="<?php echo esc_url($item['href']); ?>">
                        <img src="<?php echo esc_url(pps_image_url($item['image'])); ?>" alt="<?php echo esc_attr($item['image_alt']); ?>" />
                    </a>
                    <div class="pps-image-card-content">
                        <h3><a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['title']); ?></a></h3>
                        <p><?php echo esc_html($item['description']); ?></p>
                        <a class="pps-btn pps-btn-tertiary" href="<?php echo esc_url($item['href']); ?>">Find out more</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php endif; ?>
<?php get_footer();
