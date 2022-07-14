<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Controllers;

use Inertia\Inertia;

class PostController extends Controller
{
    public function __invoke($slug)
    {
        return Inertia::render('post', ['slug' => $slug], 'posty-theme::app');
    }
}
