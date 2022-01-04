<?php

namespace Uasoft\Badaso\Theme\PostTheme\Controllers;

use Inertia\Inertia;

class SearchController extends Controller
{
    public function __invoke($search = null)
    {
        return Inertia::render('search', ['search' => $search], 'post-theme::app');
    }
}
