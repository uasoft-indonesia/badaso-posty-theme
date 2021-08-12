<?php

use Uasoft\Badaso\Models\Configuration;
use Uasoft\Badaso\Module\Post\Models\Post;

$config = Configuration::where('key', 'postThemePrefix')->first();

$themePrefix = isset($config) ? $config->value.'/' : '';

Route::group(['prefix' => $themePrefix.'{any?}', 'where' => [
    'any' => '^(?!'.config('badaso.api_route_prefix').'|'.config('badaso.admin_panel_route_prefix').').*$',
]], function () {
    $prefix = config('badaso-post.post_post_url_prefix') ? config('badaso-post.post_post_url_prefix').'/' : '';

    Route::get('/'.$prefix.'{slug?}', function ($slug = null) {
        if (empty($slug)) {
            return view('post-theme::index');
        }

        if (strpos($slug, 'category/') !== false) {
            $category = explode('/', $slug)[1];

            if (empty($category)) {
                return view('post-theme::errors.404');
            }

            return view('post-theme::category', compact('category'));
        }

        if (strpos($slug, 'search/') !== false) {
            $search = explode('/', $slug)[1];

            if (empty($search)) {
                return view('post-theme::errors.404');
            }

            return view('post-theme::search', compact('search'));
        }

        if ($slug === 'popular') {
            return view('post-theme::popular');
        }

        if ($slug === 'newest') {
            return view('post-theme::newest');
        }

        if (env('MIX_POST_THEME_PREFIX')) {
            $post = Post::select('title', 'summary')->where('slug', explode('/', $slug)[1])->first();
        } else {
            $post = Post::select('title', 'summary')->where('slug', $slug)->first();
        }

        if (empty($post)) {
            return view('post-theme::errors.404');
        }

        return view('post-theme::posts', compact('slug', 'post'));
    })->where('slug', '^(?!category|popular|newest|search).*$');
});
