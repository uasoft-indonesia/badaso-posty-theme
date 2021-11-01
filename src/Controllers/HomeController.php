<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('index', [], 'post-theme::app');
    }
}
