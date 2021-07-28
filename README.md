# badaso/post-theme
Official theme and the first theme created by badaso team

# Installation

- Install [badaso](https://github.com/uasoft-indonesia/badaso) and [badaso-post-module](https://github.com/uasoft-indonesia/badaso-post-module). After that, you can include the Badaso package with the following command.

```
composer require badaso/post-theme
```

- Run the following command.
```
npm install
```

- Run the following command.

```
php artisan badaso-post-theme:setup
```

- Add the modules to your `MIX_BADASO_MODULES` to `.env`. If you have another modules installed, include them using delimiter comma (,).

```
MIX_BADASO_MODULES=post-theme
```

- Add new route to `web.php`.

```php
Route::get('{any}', function () {
  return view('post-theme::index');
})->where('any', '.*');
```

- Fill the other variables in `.env` file.
