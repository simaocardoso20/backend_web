@extends('layouts.fe_master')

@section('content')
<br></br>
<h1>Editar Tarefa "{{ $myTask->name }}"</h1>
     <br></br>
    <form method="POST" action="{{ route('tasks.update') }}">
        @csrf
        @method('PUT')
        <input type="hidden" name="id" value="{{ $myTask->id }}" id="">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome da Tarefa</label>
            <input required name="name" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" value="{{ $myTask->name }}">
            <!--Se o utilizador tentar submeter sem nome, aparece este erro-->
            @error('name')
                Nome Inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Descrição</label>
            <input name="description" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" value="{{ $myTask->description }}">

        </div>

        <div class="mb-3">
    <select name="user_id" id="" class="form-control-dark">
                @foreach ($users as $user)
                    {
                    <option value="{{ $user->id }}" @if ($myTask->user_id == $user->id) selected @endif>
                        {{ $user->name }}</option>
                    }
                @endforeach
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
    <br></br>
    <h5><a href="{{ route('homepage') }}">Homepage</a></h5>
@endsection