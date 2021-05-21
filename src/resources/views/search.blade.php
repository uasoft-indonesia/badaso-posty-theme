@extends('simple-theme::layouts.default')

@section('title', $search)

@section('description', ' Search post: .' . $search)

@section('url', url('/search/' . $search))

@section('content')

<simple-theme-search></simple-theme-search>

@endsection