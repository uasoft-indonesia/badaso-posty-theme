---
sidebar_position: 1
---

# Installation

1. Install [badaso](https://github.com/uasoft-indonesia/badaso) and [badaso-post-module](https://github.com/uasoft-indonesia/badaso-post-module). After that, you can include the Badaso package with the following command.

```
composer require badaso/post-theme
```

2. Run the following command.
```
npm install
```

3. Run the following command to setup the `badaso-content`.

```
php artisan badaso-content:setup
```

4. Run the following command to migrate `badaso-content` table.

```
php artisan migrate
```

5. Run the following command.

```
php artisan badaso-post-theme:setup
```
