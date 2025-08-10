@extends('layouts.fe_master')

@section('content')
    <br></br>
    <h1>Olá! Aqui podes {{ isset($myBook) ? 'editar o livro ' . $myBook->name : 'adicionar Livros' }}</h1>
    <br></br>
    
    {{-- Ação do formulário deve ser condicional --}}
    <form action="{{ isset($myBook) ? route('books.update', $myBook->id) : route('books.store') }}" method="POST">
        @csrf
        {{-- Adicionar método PUT apenas para a edição --}}
        @if(isset($myBook))
            @method('PUT')
        @endif
        
        <input type="hidden" name="id" value="{{ $myBook->id ?? '' }}" id="">

        <div class="mb-3">
            <label for="book_name" class="form-label">Nome do Livro</label>
            <input required name="name" type="text" class="form-control" id="book_name"
                aria-describedby="bookHelp" value="{{ $myBook->name ?? old('name') }}">
            @error('name')
                Nome Inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="estimated_price" class="form-label">Preço Estimado</label>
            <input required name="estimated_price" type="number" class="form-control" id="estimated_price"
                aria-describedby="estimatedPriceHelp" value="{{ $myBook->estimated_price ?? old('estimated_price') }}">
            @error('estimated_price')
                Preço Inválido
            @enderror
        </div>

        <div class="mb-3">
            <label for="paid_price" class="form-label">Preço Pago</label>
            <input name="paid_price" type="number" class="form-control" id="paid_price"
                aria-describedby="paidPriceHelp" value="{{ $myBook->paid_price ?? old('paid_price') }}">
            @error('paid_price')
                Preço Inválido
            @enderror
        </div>

        <div class="mb-3">
            <select name="user_id" id="" class="form-control-dark">
                @foreach ($users as $user)
                    <option value="{{ $user->id }}" @if (isset($myBook) && $myBook->user_id == $user->id) selected @endif>
                        {{ $user->name }}
                    </option>
                @endforeach
            </select>
        </div>

        <button type="submit" class="btn btn-primary">{{ isset($myBook) ? 'Atualizar' : 'Adicionar' }}</button>
    </form>
    <br></br>
    <h5><a href="{{ route('homepage') }}">Homepage</a></h5>
@endsection