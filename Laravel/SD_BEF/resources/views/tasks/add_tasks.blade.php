@extends('layouts.fe_master')


@section('content')

    <h6>Olá aqui podes adicionar tasks</h6>

    <form method="POST" action="{{ route( 'tasks.store' )}}">
  @csrf
    <div class="mb-3">
    <label for="InputName" class="form-label">Nome da tarefa</label>
    <input name="name" type="text" class="form-control" id="name" aria-describedby="nameHelp">
        @error('name')
                nome inválido
            @enderror
</div>
<div class="mb-3">
    <label for="InputDescription" class="form-label">Descrição da tarefa</label>
    <input name="description" type="text" class="form-control" id="InputDescription" aria-describedby="descriptionHelp">
<div id="description" class="form-text">Escreve aqui a descrição da tarefa</div>
        @error('description')
                descrição inválida
            @enderror
</div>

<div class="mb-3">
            <label for="user_id" class="form-label">Utilizador</label>
            <select name="user_id" id="user_id" class="form-select" aria-describedby="userHelp">
                <option value="">Seleciona um utilizador</option>
                @error('user_id')
                    <div class="alert alert-danger">{{ $message }}</div>
                     @enderror
                @foreach ($users as $user)
                <option value="{{ $user->id }}">{{ $user->name }}</option>
         @endforeach
        </select>

        <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
@endsection