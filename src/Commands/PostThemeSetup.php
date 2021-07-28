<?php

namespace Uasoft\Badaso\Theme\PostTheme\Commands;

use Illuminate\Console\Command;
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
        $this->addingBadasoEnv();
        $this->updateWebpackMix();
        $this->updatePackageJson();
    }

    protected function envListUpload()
    {
        return [
            'MIX_FACEBOOK_APP_ID' => '',
            'MIX_NAVBAR_TITLE'    => '"Post Theme"',
            'MIX_FACEBOOK_URL'    => '',
            'MIX_TWITTER_URL'     => '',
            'MIX_INSTAGRAM_URL'   => '',
            'MIX_VIMEO_URL'       => '',
            'MIX_PATH_URL'        => '',
            'MIX_SKYPE_URL'       => '',
            'MIX_TELEGRAM_URL'    => '',
            'MIX_GOOGLE_URL'      => '',
            'MIX_YOUTUBE_URL'     => '',
        ];
    }

    protected function addingBadasoEnv()
    {
        try {
            $env_path = base_path('.env');

            $env_file = file_get_contents($env_path);
            $arr_env_file = explode("\n", $env_file);

            $env_will_adding = $this->envListUpload();

            $new_env_adding = [];
            foreach ($env_will_adding as $key_add_env => $val_add_env) {
                $status_adding = true;
                foreach ($arr_env_file as $key_env_file => $val_env_file) {
                    $val_env_file = trim($val_env_file);
                    if (substr($val_env_file, 0, 1) != '#' && $val_env_file != '' && strstr($val_env_file, $key_add_env)) {
                        $status_adding = false;
                        break;
                    }
                }
                if ($status_adding) {
                    $new_env_adding[] = "{$key_add_env}={$val_add_env}";
                }
            }

            foreach ($new_env_adding as $index_env_add => $val_env_add) {
                $arr_env_file[] = $val_env_add;
            }

            $env_file = join("\n", $arr_env_file);
            file_put_contents($env_path, $env_file);

            $this->info('Adding badaso env');
        } catch (\Exception $e) {
            $this->error('Failed adding badaso env '.$e->getMessage());
        }
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
        mix.js("vendor/badaso/post-theme/src/resources/js/app.js", "public/js/post-theme.js");
        mix.webpackConfig({ resolve: { alias: { 'vue$': 'vue/dist/vue.common.js' } } });
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
