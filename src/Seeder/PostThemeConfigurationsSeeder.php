<?php

use Illuminate\Database\Seeder;
use Uasoft\Badaso\Models\Configuration;

class PostThemeConfigurationsSeeder extends Seeder
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
            $settings = [
                0 => [
                    'key'          => 'postThemePrefix',
                    'display_name' => 'Post Theme prefix URL',
                    'value'        => '',
                    'details'      => '',
                    'type'         => 'text',
                    'order'        => 1,
                    'group'        => 'postTheme',
                    'can_delete'   => 0,
                ],
                1 => [
                    'key'          => 'postThemeNavbarTitle',
                    'display_name' => 'Navigation Bar Title',
                    'value'        => 'Post Theme',
                    'details'      => '',
                    'type'         => 'text',
                    'order'        => 2,
                    'group'        => 'postTheme',
                    'can_delete'   => 0,
                ],
                2 => [
                    'key'          => 'postThemeFacebookId',
                    'display_name' => 'Facebook ID for comment',
                    'value'        => '',
                    'details'      => '',
                    'type'         => 'text',
                    'order'        => 2,
                    'group'        => 'postTheme',
                    'can_delete'   => 0,
                ],
            ];

            foreach ($settings as $key => $value) {
                Configuration::where('key', $value['key'])->delete();
                Configuration::create($value);
            }

            \DB::commit();
        } catch (Exception $e) {
            throw new Exception('Exception occur '.$e);
            \DB::rollBack();
        }
    }
}