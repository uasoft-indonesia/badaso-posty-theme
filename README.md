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

- Run the following command to setup the `badaso-content`.

```
php artisan badaso-content:setup
```

- Run the following command to migrate `badaso-content` table.

```
php artisan migrate
```

- Run the following command.

```
php artisan badaso-post-theme:setup
```
