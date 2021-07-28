<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title') | Post Theme</title>
    <meta content="@yield('url')" property="og:url">
    <meta content="@yield('title')" property="og:title">
    <meta content="Post Theme - @yield('description')..." property="og:description">
    @hasSection('image')<meta content="@yield('image')" property="og:image">@endif
    <meta content="article" property="og:type">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>
    @php
        $gtm = env('MIX_ANALYTICS_TRACKING_ID', 'undefined');
    @endphp
    <!-- Google Analytics -->
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
        ga('create', `{{ $gtm }}`, 'auto');
        ga('send', 'pageview');
    </script>
    <!-- End Google Analytics -->
</head>

<body>
    <div id="post-theme">
        <post-theme-layout>
            <post-theme-navbar class="mb-30"></post-theme-navbar>
            @yield('content')
            <post-theme-footer></post-theme-footer>
        </post-theme-layout>
    </div>
    <script src="{{ mix('js/post-theme.js') }}"></script>
</body>

</html>