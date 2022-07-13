<?php

use Illuminate\Support\Facades\Route;
use Uasoft\Badaso\Theme\PostyTheme\Helpers\Route as HelpersRoute;
use Uasoft\Badaso\Theme\PostyTheme\Middlewares\HandleInertiaRequests;

$posty_route_prefix = config('badaso-posty-theme.posty_theme_prefix');

Route::prefix($posty_route_prefix)
    ->as('badaso.posty-theme.')
    ->middleware(['web', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', HelpersRoute::getController('HomeController'))->name('home');
        Route::get('/tag/{slug}', HelpersRoute::getController('TagController'))->name('tag');
        Route::get('/category/{slug}', HelpersRoute::getController('CategoryController'))->name('category');
        Route::get('/search/{slug?}', HelpersRoute::getController('SearchController'))->name('search');
        Route::get('/popular', HelpersRoute::getController('PopularController'))->name('popular');
        Route::get('/newest', HelpersRoute::getController('NewestController'))->name('newest');
        Route::get('/{slug}', HelpersRoute::getController('PostController'))->name('post');
    });
