@extends('post-theme::layouts.default')

@section('title', ucfirst($category))

@section('description', ucfirst($category) . ' category badaso post theme.')

@section('url', url('/category/' . $category))

@section('content')

<post-theme-category></post-theme-category>

@endsection