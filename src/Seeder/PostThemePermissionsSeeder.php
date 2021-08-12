<?php

namespace Database\Seeders\Badaso\PostTheme;

use Illuminate\Database\Seeder;
use Uasoft\Badaso\Models\Permission;

class PostThemePermissionsSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $keys = [
            'browse_post_theme_configuration',
            'edit_post_theme_configuration',
        ];

        foreach ($keys as $key) {
            Permission::firstOrCreate([
                'key'        => $key,
                'table_name' => null,
            ]);
        }
    }
}
