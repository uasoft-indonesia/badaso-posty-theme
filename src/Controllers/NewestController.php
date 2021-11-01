<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class NewestController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('newest', [], 'post-theme::app');
    }
}
