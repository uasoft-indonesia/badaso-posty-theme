<?php

namespace Database\Seeders\Badaso\PostTheme;

use Illuminate\Database\Seeder;
use Uasoft\Badaso\Models\Menu;

class PostThemeMenusSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @throws Exception
     *
     * @return void
     */
    public function run()
    {
        \DB::beginTransaction();

        try {
            $menus = [
                0 => [
                    'key' => 'post-theme',
                    'display_name' => 'Post Theme',
                ],
            ];

            $new_menus = [];
            foreach ($menus as $key => $value) {
                $menu = Menu::where('key', $value['key'])->first();

                if (isset($menu)) {
                    continue;
                }
                Menu::create($value);
            }
        } catch (Exception $e) {
            throw new Exception('Exception occur '.$e);
            \DB::rollBack();
        }

        \DB::commit();
    }
}
