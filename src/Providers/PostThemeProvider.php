<?php

namespace Uasoft\Badaso\Theme\PostTheme\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Uasoft\Badaso\Theme\PostTheme\Commands\PostThemeSetup;
use Uasoft\Badaso\Theme\PostTheme\Facades\PostTheme as FacadesPostTheme;
use Uasoft\Badaso\Theme\PostTheme\PostTheme;

class PostThemeProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('PostTheme', FacadesPostTheme::class);

        $this->app->singleton('badaso-post-theme', function () {
            return new PostTheme();
        });

        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'badaso-post');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'post-theme');
        $this->loadRoutesFrom(__DIR__.'/../Routes/web.php');

        $this->publishes([
            __DIR__.'/../Config/badaso-post-theme.php' => config_path('badaso-post-theme.php'),
        ], 'BadasoPostTheme');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/uasoft-indonesia/post-theme'),
        ], 'BadasoPostThemeViews');
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
        $this->commands(PostThemeSetup::class);
    }
}
