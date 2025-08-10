@extends('layouts.fe_master')

@section('content')
    <br></br>
    <h1>Editar Livro "{{ $myBook->name }}"</h1>

    {{-- A secção @section('content') estava a ser duplicada --}}
     <br></br>
    <form action="{{ route('books.update', $myBook->id) }}" method="POST">
        @csrf
        @method('PUT')
        <input type="hidden" name="id" value="{{ $myBook->id }}" id="">
        <div class="mb-3">
            <label for="exampleInputBook" class="form-label">Nome do Livro</label>
            <input required name="name" type="text" class="form-control" id="book_name"
                aria-describedby="bookHelp" value="{{ $myBook->name }}">
            @error('name')
                Nome Inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="exampleInputEstimatedPrice" class="form-label">Preço Estimado</label>
            <input required name="estimated_price" type="number" step="0.01" class="form-control" id="estimated_price"
                aria-describedby="estimatedPriceHelp" value="{{ $myBook->estimated_price }}">
            @error('estimated_price')
                Preço Inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="exampleInputPaidPrice" class="form-label">Preço Pago</label>
            <input name="paid_price" type="number" step="0.01" class="form-control" id="paid_price"
                aria-describedby="paidPriceHelp" value="{{ $myBook->paid_price }}">
            @error('paid_price')
                Preço Inválido
            @enderror
        </div>

        <div class="mb-3">
    <select name="user_id" id="" class="form-control-dark">
                @foreach ($users as $user)
                    <option value="{{ $user->id }}" @if ($myBook->user_id == $user->id) selected @endif>
                        {{ $user->name }}</option>
                @endforeach
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Atualizar</button>
    </form>
    <br></br>
    <h5><a href="{{ route('homepage') }}">Homepage</a></h5>
@endsection