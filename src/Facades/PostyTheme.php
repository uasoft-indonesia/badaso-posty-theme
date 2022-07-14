<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Facades;

use Illuminate\Support\Facades\Facade;

class PostyTheme extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'badaso-posty-theme';
    }
}
