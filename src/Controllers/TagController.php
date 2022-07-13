<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Controllers;

use Inertia\Inertia;

class TagController extends Controller
{
    public function __invoke($slug)
    {
        return Inertia::render('tag', ['slug' => $slug], 'posty-theme::app');
    }
}
