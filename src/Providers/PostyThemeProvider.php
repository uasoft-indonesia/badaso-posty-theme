<?php

namespace Uasoft\Badaso\Theme\PostyTheme\Providers;

use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Uasoft\Badaso\Theme\PostyTheme\Commands\PostyThemeSetup;
use Uasoft\Badaso\Theme\PostyTheme\Facades\PostyTheme as FacadesPostyTheme;
use Uasoft\Badaso\Theme\PostyTheme\PostyTheme;

class PostyThemeProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('PostyTheme', FacadesPostyTheme::class);

        $this->app->singleton('badaso-posty-theme', function () {
            return new PostyTheme();
        });

        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'badaso-posty');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'posty-theme');
        $this->loadRoutesFrom(__DIR__.'/../Routes/web.php');

        $this->publishes([
            __DIR__.'/../Seeder'                        => database_path('seeders/Badaso/PostyTheme'),
            __DIR__.'/../Config/badaso-posty-theme.php' => config_path('badaso-posty-theme.php'),
            __DIR__.'/../Images/'                       => storage_path('app/public/photos/shares'),
            __DIR__.'/../resources/customization/'      => resource_path('js/badaso/theme/posty-theme/'),
        ], 'BadasoPostyTheme');

        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/uasoft-indonesia/posty-theme'),
        ], 'BadasoPostyThemeViews');
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
        $this->commands(PostyThemeSetup::class);
    }
}
