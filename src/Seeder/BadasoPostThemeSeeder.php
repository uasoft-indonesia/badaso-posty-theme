<?php

use Illuminate\Database\Seeder;

class BadasoPostThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PostThemeMenusSeeder::class);
        $this->call(PostThemeFixedMenuItemSeeder::class);
        $this->call(PostThemePermissionsSeeder::class);
        $this->call(PostThemeContentsSeeder::class);
        $this->call(PostThemeConfigurationsSeeder::class);
    }
}
