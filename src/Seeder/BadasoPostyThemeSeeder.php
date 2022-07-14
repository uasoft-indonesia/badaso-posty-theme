<?php

namespace Database\Seeders\Badaso\PostyTheme;

use Illuminate\Database\Seeder;

class BadasoPostyThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PostyThemeMenusSeeder::class);
        $this->call(PostyThemeFixedMenuItemSeeder::class);
        $this->call(PostyThemePermissionsSeeder::class);
        $this->call(PostyThemeContentsSeeder::class);
        $this->call(PostyThemeConfigurationsSeeder::class);
    }
}
