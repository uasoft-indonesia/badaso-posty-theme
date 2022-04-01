<?php

namespace Database\Seeders\Badaso\PostTheme;

use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Uasoft\Badaso\Models\Menu;
use Uasoft\Badaso\Models\MenuItem;

class PostThemeFixedMenuItemSeeder extends Seeder
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
        DB::beginTransaction();

        try {
            $menu_id = Menu::where('key', 'post-theme')->firstOrFail()->id;
            $menu_items = [
                0 => [
                    'menu_id'     => $menu_id,
                    'title'       => 'Configuration',
                    'url'         => '/post-theme-configuration',
                    'target'      => '_self',
                    'icon_class'  => 'settings',
                    'color'       => '',
                    'parent_id'   => null,
                    'order'       => 1,
                    'permissions' => 'browse_post_theme_configuration',
                ],
            ];

            $new_menu_items = [];
            foreach ($menu_items as $key => $value) {
                $menu_item = MenuItem::where('menu_id', $value['menu_id'])
                        ->where('url', $value['url'])
                        ->first();

                if (isset($menu_item)) {
                    continue;
                }

                MenuItem::create($value);
            }
        } catch (Exception $e) {
            throw new Exception('Exception occur '.$e);
            DB::rollBack();
        }

        DB::commit();
    }
}
