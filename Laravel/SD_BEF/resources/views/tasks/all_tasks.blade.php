@extends('layouts.fe_master')
@section('content')
<br></br>
    <h1>Olá! Aqui terás todas as tarefas</h1>
    <br></br>
    @if (session('message'))
        <div class="alert alert-success">
            {{ session('message') }}
        </div>
    @endif
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Description</th>
                <th scope="col">Nome Responsável</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            @foreach ($tasks as $task)
                <tr>
                    <th scope="row">{{ $task->id }}</th>
                    <td>{{ $task->name }}</td>
                    <td>{{ $task->description }}</td>
                    <td>{{ $task->username }}</td>
                    <td><a href="{{ route('tasks.show', $task->id) }}" class="btn btn-info me-2">Ver / Editar</a><a
                            href="{{ route('tasks.delete', $task->id) }}" class="btn btn-danger">Apagar</a></td>
                </tr>
            @endforeach


        </tbody>
    </table>
    <h5><a href="{{ route('homepage') }}">Homepage</a></h5>
@endsection