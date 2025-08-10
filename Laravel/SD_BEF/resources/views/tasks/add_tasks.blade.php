@extends('layouts.fe_master')


@section('content')
<br></br>
    <h1>Olá! Aqui podes adicionar Tarefas</h1>
    <br></br>
    <form method="POST" action="{{ route('tasks.store') }}">
        @csrf <!--Verificação com token - para mais questões ver slides Sara-->
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome da Tarefa</label>
            <input required name="name" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <!--Se o utilizador tentar submeter sem nome, aparece este erro-->
            @error('name')
                Nome Inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Descrição</label>
            <input required name="description" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <!--Se o utilizador tentar submeter sem email, aparece este erro-->
            @error('description')
                Descrição Inválida
            @enderror
        </div>

        <div class="mb-3">
            <select name="user_id" id="" class="form-control-dark">
                @foreach ($users as $user)
                    {
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                    }
                @endforeach
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Submeter</button>
        </form>
        <br></br>
    <h5><a href="{{ route('homepage') }}">Homepage</a></h5>
    @endsection