<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class TagController extends Controller
{
    public function __invoke($slug)
    {
        return Inertia::render('tag', ['slug' => $slug], 'post-theme::app');
    }
}
