---
sidebar_position: 1
---

# Installation

1. Install [badaso](https://github.com/uasoft-indonesia/badaso) and [badaso-post-module](https://github.com/uasoft-indonesia/badaso-post-module). Setelah itu, Anda dapat memasukkan paket Badaso dengan perintah berikut.

```
composer require badaso/post-theme
```

2. Jalankan perintah berikut.
```
npm install
```

3. Jalankan perintah berikut untuk mengatur `badaso-content`.

```
php artisan badaso-content:setup
```

4. Jalankan perintah berikut untuk memigrasi tabel `badaso-content`.

```
php artisan migrate
```

5. Jalankan perintah berikut.

```
php artisan badaso-post-theme:setup
```
