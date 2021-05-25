<?php

namespace Uasoft\Badaso\Theme\SimpleTheme\Facades;

use Illuminate\Support\Facades\Facade;

class SimpleTheme extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'badaso-simple-theme';
    }
}
