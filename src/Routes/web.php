<?php

use Illuminate\Support\Facades\Route;
use Uasoft\Badaso\Theme\PostTheme\Middlewares\HandleInertiaRequests;

$post_route_prefix = config('badaso-post-theme.post_theme_prefix');

Route::prefix($post_route_prefix)
    ->as('badaso.post-theme.')
    ->namespace('Uasoft\Badaso\Theme\PostTheme\Controllers')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', 'HomeController')->name('home');
        Route::get('/category/{slug}', 'CategoryController')->name('category');
        Route::get('/search/{slug?}', 'SearchController')->name('search');
        Route::get('/popular', 'PopularController')->name('popular');
        Route::get('/newest', 'NewestController')->name('newest');
        Route::get('/{slug}', 'PostController')->name('post');
    });
