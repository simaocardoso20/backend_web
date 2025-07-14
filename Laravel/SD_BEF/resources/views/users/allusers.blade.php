@extends('layouts.fe_master')

@section('content')
<h2>Visualizar lista de utilizadores: </h2>


<ul>
@foreach ($users as $user)
    <li>{{ $user }}</li>
@endforeach
</ul>

<ul>
<a href="{{ route('home_name') }}">Voltar</a>

@endsection
