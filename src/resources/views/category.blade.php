@extends('simple-theme::layouts.default')

@section('title', ucfirst($slug))

@section('description', ucfirst($slug) . ' category badaso simple theme.')

@section('url', url('/category/' . $slug))

@section('content')

<simple-theme-category></simple-theme-category>

@endsection