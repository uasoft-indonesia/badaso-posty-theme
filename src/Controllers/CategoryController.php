<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Controllers;

use Inertia\Inertia;

class CategoryController extends Controller
{
    public function __invoke($slug)
    {
        return Inertia::render('category', ['slug' => $slug], 'posty-theme::app');
    }
}
