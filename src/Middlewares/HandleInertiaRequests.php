<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Middlewares;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Uasoft\Badaso\Helpers\ApiResponse;
use Uasoft\Badaso\Helpers\Config;
use Uasoft\Badaso\Module\Content\Models\Content;
use Uasoft\Badaso\Module\Post\Models\Category;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'posty-theme::app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function share(Request $request)
    {
        $social_media = ApiResponse::success(Content::select(['id', 'value'])->where('slug', 'posty-theme-social-media')->first())->original['data'] ?? [];

        return array_merge(parent::share($request), [
            'appName'     => Config::get('postyThemeNavbarTitle'),
            'categories'  => Category::all(['id', 'title', 'slug']),
            'socialMedia' => $social_media,
        ]);
    }
}
