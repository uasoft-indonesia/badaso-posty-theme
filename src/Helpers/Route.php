<?php

namespace Uasoft\Badaso\Theme\PostTheme\Helpers;

class Route
{
    public static function getController($key)
    {
        // get config 'controllers' from config/badaso-post-theme.php
        $controllers = config('badaso-post-theme.controllers');

        // if the key is not found, return $key
        if (!isset($controllers[$key])) {
            return 'Uasoft\\Badaso\\Theme\\PostTheme\\Controllers\\'.$key;
        }

        // return the value of the key
        return $controllers[$key];
    }
}
