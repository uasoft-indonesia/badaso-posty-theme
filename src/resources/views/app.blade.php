<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Post Theme</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        window.Laravel = {
            csrfToken: '{{ csrf_token() }}'
        }
    </script>

    @php
        $measurement_id = env('MIX_ANALYTICS_TRACKING_ID', null);
    @endphp

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="{{ "https://www.googletagmanager.com/gtag/js?id={$measurement_id}" }}"></script>
    <script>
        window.measurement_id = '{{ $measurement_id }}'
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
    </script>

    <link rel="stylesheet" href="{{ asset('css/post-theme.css') }}">
    <script defer src="{{ asset('js/post-theme.js') }}"></script>
</head>

<body scroll-region>
    @routes
    @inertia
</body>

</html>
