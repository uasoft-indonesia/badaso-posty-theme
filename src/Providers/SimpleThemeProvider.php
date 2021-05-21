<?php

namespace Uasoft\Badaso\Theme\SimpleTheme\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Uasoft\Badaso\Theme\SimpleTheme\SimpleTheme;
use Uasoft\Badaso\Theme\SimpleTheme\Facades\SimpleTheme as FacadesSimpleTheme;
use Uasoft\Badaso\Theme\SimpleTheme\Commands\SimpleThemeSetup;

class SimpleThemeProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('SimpleTheme', FacadesSimpleTheme::class);

        $this->app->singleton('badaso-simple-theme', function () {
            return new SimpleTheme();
        });

        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'badaso-blog');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'simple-theme');
        $this->loadRoutesFrom(__DIR__.'/../Routes/web.php');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/uasoft-indonesia/simple-theme'),
        ], 'BadasoSimpleThemeViews');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerConsoleCommands();
    }

    /**
     * Register the commands accessible from the Console.
     */
    private function registerConsoleCommands()
    {
        $this->commands(SimpleThemeSetup::class);
    }
}
