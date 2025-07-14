

@extends('layouts.fe_master')

@section('content')

<img src="{{ asset('images/praia.jpg') }}" alt="">

<h1>Olá {{ isset ($myName) ? $myName : 'utilizador' }}</h1>
<ul>
    <li><a href="{{ route('home_name') }}">Voltar</a></li>
</ul>
@endsection
