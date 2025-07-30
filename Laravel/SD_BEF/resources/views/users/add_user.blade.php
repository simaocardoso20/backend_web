@extends('layouts.fe_master')


@section('content')

    <h6>Olá aqui podes adicionar users</h6>

    <form method="POST" action="{{ route( 'users.store' )}}">
  @csrf
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nome</label>
    <input name="name" type="text" class="form-control" id="name" aria-describedby="emailHelp">
        @error('name')
                nome inválido
            @enderror
</div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
    
@endsection