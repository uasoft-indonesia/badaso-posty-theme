@extends('post-theme::layouts.default')

@section('title', ucfirst($slug))

@section('description', ucfirst($slug) . ' category badaso post theme.')

@section('url', url('/category/' . $slug))

@section('content')

<post-theme-category></post-theme-category>

@endsection