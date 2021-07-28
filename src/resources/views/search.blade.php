@extends('post-theme::layouts.default')

@section('title', $search)

@section('description', ' Search post: .' . $search)

@section('url', url('/search/' . $search))

@section('content')

<post-theme-search></post-theme-search>

@endsection