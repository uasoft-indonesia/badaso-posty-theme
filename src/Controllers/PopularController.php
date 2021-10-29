<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class PopularController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('popular', [], 'post-theme::app');
    }
}
