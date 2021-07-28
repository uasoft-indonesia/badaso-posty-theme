<?php

use Uasoft\Badaso\Module\Post\Models\Post;

$prefix = config('badaso-post.post_post_url_prefix') ? '/'.config('badaso-post.post_post_url_prefix') : '';

Route::get('/category/{slug}', function ($slug) {
    return view('post-theme::category', compact('slug'));
});

Route::get('/popular', function () {
    return view('post-theme::popular');
});

Route::get('/newest', function () {
    return view('post-theme::newest');
});

Route::get('/search/{search}', function ($search) {
    return view('post-theme::search', compact('search'));
});

Route::get($prefix.'/'.'{slug}', function ($slug) {
    $post = Post::select('title', 'summary')->where('slug', $slug)->first();

    return view('post-theme::posts', compact('slug', 'post'));
});
