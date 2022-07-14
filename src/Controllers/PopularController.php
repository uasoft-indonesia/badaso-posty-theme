<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Controllers;

use Inertia\Inertia;

class PopularController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('popular', [], 'posty-theme::app');
    }
}
