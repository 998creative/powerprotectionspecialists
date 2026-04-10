<?php
/**
 * Reusable hero section partial.
 *
 * Expects: $eyebrow, $title, $description
 * Optional: $hero_background, $hero_actions
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

$hero_background = isset($hero_background) ? (string) $hero_background : '';
$hero_actions = isset($hero_actions) && is_array($hero_actions) ? $hero_actions : [];
?>
<section class="pps-hero<?php echo $hero_background !== '' ? ' pps-hero-has-bg' : ''; ?>">
    <?php if ($hero_background !== '') : ?>
        <div class="pps-hero-media">
            <img src="<?php echo esc_url(pps_image_url($hero_background)); ?>" alt="" />
        </div>
        <div class="pps-hero-overlay"></div>
        <div class="pps-hero-fade"></div>
        <div class="pps-hero-glow"></div>
    <?php endif; ?>
    <div class="pps-container pps-hero-inner">
        <div class="pps-hero-copy">
            <?php if (! empty($eyebrow)) : ?>
                <p class="pps-eyebrow"><?php echo esc_html($eyebrow); ?></p>
            <?php endif; ?>
            <h1><?php echo esc_html($title); ?></h1>
            <?php if (! empty($description)) : ?>
                <p><?php echo esc_html($description); ?></p>
            <?php endif; ?>
            <?php if (! empty($hero_actions)) : ?>
                <div class="pps-hero-actions">
                    <?php foreach ($hero_actions as $action) : ?>
                        <?php
                        $href = isset($action['href']) ? (string) $action['href'] : '';
                        $label = isset($action['label']) ? (string) $action['label'] : '';
                        if ($href === '' || $label === '') {
                            continue;
                        }
                        $is_primary = ! empty($action['primary']);
                        ?>
                        <a class="pps-btn <?php echo $is_primary ? 'pps-btn-primary' : 'pps-btn-secondary'; ?>" href="<?php echo esc_url($href); ?>">
                            <?php echo esc_html($label); ?>
                        </a>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>
