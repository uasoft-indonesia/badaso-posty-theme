<?php

use Illuminate\Database\Seeder;
use Uasoft\Badaso\Module\Content\Models\Content;

class PostThemeContentsSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     */
    public function run()
    {
        \DB::beginTransaction();

        try {
            $contents = [
                0 => [
                    'slug'  => 'post-theme-social-media',
                    'label' => 'Post Theme Social Media',
                    'value' => '{"facebook":{"name":"facebook","label":"Facebook","type":"group","data":{"image":{"name":"image","label":"Image","type":"image","data":"files/shares/facebook.svg"},"url":{"name":"url","label":"URL","type":"url","data":{"url":"#","text":"Facebook Logo"}}}},"twitter":{"name":"twitter","label":"Twitter","type":"group","data":{"image":{"name":"image","label":"Image","type":"image","data":"files/shares/twitter.svg"},"url":{"name":"url","label":"URL","type":"url","data":{"url":"#","text":"Twitter Logo"}}}},"instagram":{"name":"instagram","label":"Instagram","type":"group","data":{"image":{"name":"image","label":"Image","type":"image","data":"files/shares/instagram.svg"},"url":{"name":"url","label":"URL","type":"url","data":{"url":"#","text":"Instagram Logo"}}}},"telegram":{"name":"telegram","label":"Telegram","type":"group","data":{"image":{"name":"image","label":"Image","type":"image","data":"files/shares/telegram.svg"},"url":{"name":"url","label":"URL","type":"url","data":{"url":"#","text":"Telegram Logo"}}}},"youtube":{"name":"youtube","label":"Youtube","type":"group","data":{"image":{"name":"image","label":"Image","type":"image","data":"files/shares/youtube.svg"},"url":{"name":"url","label":"URL","type":"url","data":{"url":"#","text":"Youtube Logo"}}}}}',
                ],
            ];

            foreach ($contents as $key => $content) {
                Content::where('slug', $content['slug'])->delete();
                Content::create($content);
            }

            \DB::commit();
        } catch (Exception $e) {
            \DB::rollBack();

            throw new Exception('Exception occur '.$e);
        }
    }
}
