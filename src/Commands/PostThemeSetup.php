<?php

namespace Uasoft\Badaso\Theme\PostTheme\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

class PostThemeSetup extends Command
{
    protected $file;
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'badaso-post-theme:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup Badaso Post Theme';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->file = app('files');
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->updateWebpackMix();
        $this->updatePackageJson();
        $this->publishConfig();
    }

    protected function publishConfig()
    {
        Artisan::call('vendor:publish', ['--tag' => 'BadasoPostTheme']);

        $this->info('Badaso post theme provider published');
    }

    protected function checkExist($file, $search)
    {
        return $this->file->exists($file) && !Str::contains($this->file->get($file), $search);
    }

    protected function updateWebpackMix()
    {
        // mix
        $mix_file = base_path('webpack.mix.js');
        $search = 'Post Theme';

        if ($this->checkExist($mix_file, $search)) {
            $data =
                <<<'EOT'

        // Post Theme
        mix.js("vendor/badaso/post-theme/src/resources/js/app.js", "public/js/post-theme.js")
            .sass("vendor/badaso/post-theme/src/resources/js/assets/scss/style.scss", "public/css/post-theme.css")
            .vue();
        EOT;

            $this->file->append($mix_file, $data);
        }

        $this->info('webpack.mix.js updated');
    }

    protected function updatePackageJson()
    {
        $package_json = file_get_contents(base_path('package.json'));
        $decoded_json = json_decode($package_json, true);

        $decoded_json['dependencies']['vue-owl-carousel'] = '^2.0.3';
        $decoded_json['dependencies']['vue-clamp'] = '^0.3.2';

        $decoded_json['devDependencies']['vue-concise-slider'] = '^3.4.4';

        $encoded_json = json_encode($decoded_json, JSON_PRETTY_PRINT);
        file_put_contents(base_path('package.json'), $encoded_json);

        $this->info('package.json updated');
    }
}
