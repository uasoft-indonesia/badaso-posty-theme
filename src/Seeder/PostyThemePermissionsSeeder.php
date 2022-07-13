<?php

namespace Database\Seeders\Badaso\PostyTheme;

use Illuminate\Database\Seeder;
use Uasoft\Badaso\Models\Permission;
use Uasoft\Badaso\Models\Role;

class PostyThemePermissionsSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        $keys = [
            'browse_posty_theme_configuration',
            'edit_posty_theme_configuration',
        ];

        $administrator = Role::where('name', 'administrator')->firstOrFail();

        foreach ($keys as $key) {
            $permission = Permission::firstOrCreate([
                'key'        => $key,
                'table_name' => null,
            ]);

            $administrator->permissions()->attach($permission->id);
        }
    }
}
