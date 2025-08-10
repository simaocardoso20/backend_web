@extends('layouts.fe_master')
 
@section('content')
<br></br>
    <h1>Editar User "{{ $myUser->name }}"</h1>
<br></br>
    <form method="POST" action="{{ route('users.update') }}">
        @csrf
        @method('PUT')
        <input type="hidden" name="id" value="{{ $myUser->id }}">

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome</label>
            <input required name="name" type="text" class="form-control" id="name">
            @error('name')
                nome inválido
            @enderror
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input disabled name="email" type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" value="{{ $myUser->email }}">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            @error('email')
                email inválido
            @enderror
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Morada</label>
            <input type="text" class="form-control" name="address" value="{{ $myUser->address }}">
        </div>
         <div class="mb-3">
            <label for="" class="form-label">NIF</label>
            <input type="text" @if ($myUser->nif != 'ainda não tinhamos nif') readonly @endif class="form-control" name="nif" value="{{ $myUser->nif }}">
        </div>
        
 
        <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
    <br></br>
    <h5><a href="{{ route('homepage') }}">Back to Homepage</a></h5>

@endsection