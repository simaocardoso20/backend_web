
@extends('layouts.fe_master')

@section('content')

<h1>Sou a tua Homepage</h1>
<h3>Olá {{ isset ($myName) ? $myName : 'utilizador' }}!</h3>
<img src="{{ asset('images/bookzilla.png') }}" alt="">
<ul>
    <li><a href="{{route('users.add') }}">Adicionar Utilizador</a></li>
    <li><a href="{{ route('users.all') }}">Lista de Utilizadores</a></li>
    <li><a href="{{ route('tasks.add') }}">Adicionar Tarefas</a></li>
    <li><a href="{{ route('tasks.all') }}">Lista de Tarefas</a></li>
    <li><a href="{{ route('books.add') }}">Adicionar Livros</a></li>
    <li><a href="{{ route('books.all') }}">Lista de Livros</a></li>
</ul>

@endsection


