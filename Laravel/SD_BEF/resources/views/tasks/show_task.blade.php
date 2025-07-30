@extends('layouts.fe_master')

@section('content')
    <h3>User: {{ $task->username }}</h3>
    <h6>Nome: {{ $task->name }}</h6>
    <h6>Description: {{ $task->description }}</h6>
@endsection
