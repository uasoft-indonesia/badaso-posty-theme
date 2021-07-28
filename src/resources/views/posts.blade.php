@extends('post-theme::layouts.default')

@section('title', $post->title)

@section('description', $post->summary)

@section('url', url('/') . '/' . $slug)

@section('content')

<post-theme-post></post-theme-post>

@endsection