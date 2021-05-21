<?php

use Uasoft\Badaso\Module\Blog\Models\Post;
use Uasoft\Badaso\Theme\SimpleTheme\Helpers\CaseConvert;

$prefix = config('badaso.blog_post_url_prefix') ? '/' . config('badaso.blog_post_url_prefix') : '';

Route::get('/category/{slug}', function ($slug) {
    return view('simple-theme::category', compact("slug"));
});

Route::get('/search/{search}', function ($search) {
    return view('simple-theme::search', compact("search"));
});

Route::get($prefix . '{slug}', function ($slug) {
    $post = Post::select('title', 'summary')->where('slug', $slug)->first();
    return view('simple-theme::posts', compact("slug", "post"));
});

Route::get('/{any?}', function () {
    return view('simple-theme::errors.404');
});