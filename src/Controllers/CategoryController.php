<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class CategoryController extends Controller
{
    public function __invoke($slug)
    {
        return Inertia::render('category', ['slug' => $slug], 'post-theme::app');
    }
}
