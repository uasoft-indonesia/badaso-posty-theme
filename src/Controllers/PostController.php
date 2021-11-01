<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class PostController extends Controller
{
    public function __invoke($slug)
    {
        return Inertia::render('post', ['slug' => $slug], 'post-theme::app');
    }
}
