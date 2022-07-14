<?php

namespace Database\Seeders\Badaso\PostyTheme;

use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Uasoft\Badaso\Models\Configuration;

class PostyThemeConfigurationsSeeder extends Seeder
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
            $settings = [
                0 => [
                    'key'          => 'postyThemeNavbarTitle',
                    'display_name' => 'Navigation Bar Title',
                    'value'        => 'Posty Theme',
                    'details'      => '',
                    'type'         => 'text',
                    'order'        => 1,
                    'group'        => 'postyTheme',
                    'can_delete'   => 0,
                ],
                1 => [
                    'key'          => 'postyThemeFacebookId',
                    'display_name' => 'Facebook ID for comment',
                    'value'        => '',
                    'details'      => '',
                    'type'         => 'text',
                    'order'        => 2,
                    'group'        => 'postyTheme',
                    'can_delete'   => 0,
                ],
            ];

            foreach ($settings as $key => $value) {
                Configuration::where('key', $value['key'])->delete();
                Configuration::create($value);
            }

            DB::commit();
        } catch (Exception $e) {
            throw new Exception('Exception occur '.$e);
            DB::rollBack();
        }
    }
}
