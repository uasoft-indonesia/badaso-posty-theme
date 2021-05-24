# badaso-simple-theme
Official theme and the first theme created by badaso team

# Installation

- Install [badaso](https://github.com/uasoft-indonesia/badaso) and [badaso-blog-module](https://github.com/uasoft-indonesia/badaso-blog-module). After that, you can include the Badaso package with the following command.

```
composer require uasoft-indonesia/badaso-simple-theme:^1.0@alpha
```

- Run the following command.
```
npm install
```

- Run the following command.

```
php artisan badaso-simple-theme:setup
```

- Add the plugins to your `MIX_BADASO_PLUGINS` to `.env`. If you have another plugins installed, include them using delimiter comma (,).

```
MIX_BADASO_PLUGINS=badaso-simple-theme
```

- Add new route to `web.php`.

```php
Route::get('/', function () {
  return view('simple-theme::index');
});
```

- Fill the other variables in `.env` file.