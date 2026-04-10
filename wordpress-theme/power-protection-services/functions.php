<?php
/**
 * Theme bootstrap.
 *
 * @package pps
 */

if (! defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/data.php';

function pps_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    register_nav_menus([
        'primary' => __('Primary Menu', 'pps'),
        'footer'  => __('Footer Menu', 'pps'),
    ]);
}
add_action('after_setup_theme', 'pps_theme_setup');

function pps_enqueue_assets(): void
{
    $theme_version = wp_get_theme()->get('Version');

    wp_enqueue_style('pps-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', [], null);
    wp_enqueue_style('pps-theme', get_stylesheet_uri(), [], $theme_version);
    wp_enqueue_style('pps-theme-main', get_template_directory_uri() . '/assets/css/main.css', ['pps-theme'], $theme_version);
    wp_enqueue_script('pps-theme', get_template_directory_uri() . '/assets/js/main.js', [], $theme_version, true);

    wp_localize_script('pps-theme', 'ppsTheme', [
        'manualsDataUrl' => pps_asset_url('data/manuals.json'),
    ]);
}
add_action('wp_enqueue_scripts', 'pps_enqueue_assets');

function pps_body_classes(array $classes): array
{
    $classes[] = 'pps-site';
    return $classes;
}
add_filter('body_class', 'pps_body_classes');

function pps_page_heading(string $fallback = ''): string
{
    if (is_front_page()) {
        return 'Power Protection Services UK';
    }

    $title = get_the_title();
    if (! empty($title)) {
        return $title;
    }

    return $fallback;
}

function pps_asset_url(string $path = ''): string
{
    $base = get_template_directory_uri() . '/assets/';
    return $path !== '' ? $base . ltrim($path, '/') : $base;
}

function pps_image_url(string $path): string
{
    return pps_asset_url('img/' . ltrim($path, '/'));
}

function pps_video_url(string $path): string
{
    return pps_asset_url('video/' . ltrim($path, '/'));
}
