
@extends('layouts.fe_master')

@section('content')

<h1>Sou a tua Homepage</h1>
<h5>Olá {{ isset ($myName) ? $myName : 'utilizador' }}</h5>
<img src="{{ asset('images/praia.jpg') }}" alt="">
<ul>
    <li><a href="{{route('hello_route_name') }}">Hello</a></li>
    <li><a href="{{route('users.add') }}">Adicionar Utilizador</a></li>
    <li><a href="{{ route('users.all') }}">Lista de Utilizadores</a></li>
    <li><a href="{{ route('tasks.all') }}">Lista de Tasks</a></li>
    <li><a href="{{ route('tasks.add') }}">Adicionar Tasks</a></li>
</ul>

@endsection


