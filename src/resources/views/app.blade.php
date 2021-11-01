<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Post Theme</title>
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
  <link rel="stylesheet" href="{{ asset('css/post-theme.css') }}">
  <script defer src="{{ asset('js/post-theme.js') }}"></script>
</head>

<body scroll-region>
  @routes
  @inertia
</body>

</html>