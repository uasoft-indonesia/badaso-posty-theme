<?php

namespace Uasoft\Badaso\Theme\PostTheme\Facades;

use Illuminate\Support\Facades\Facade;

class PostTheme extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'badaso-post-theme';
    }
}
