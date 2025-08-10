@extends('layouts.fe_master')
@section('content')
<br></br>
    <h1>Olá! Aqui terás todos os livros</h1>
<br></br>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Oferta</th>
                <th scope="col">Valor Estimado</th>
                <th scope="col">Valor Pago</th>
                <th scope="col">Saldo</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($books as $book)
                <tr>
                    <th scope="row">{{ $book->id }}</th>
                    <td>{{ $book->name }}</td>
                    
                    {{-- CÓDIGO CORRIGIDO: Agora mostra apenas o nome do utilizador --}}
                    <td>
                        @if ($book->user)
                            {{ $book->user->name }}
                        @else
                            N/A
                        @endif
                    </td>
                    
                    <td>€{{ number_format($book->estimated_price, 2, ',', '.') }}</td>
                    <td>
                        @if ($book->paid_price !== null)
                            €{{ number_format($book->paid_price, 2, ',', '.') }}
                        @else
                            N/A
                        @endif
                    </td> 
                    <td>
                        @if ($book->paid_price !== null)
                            €{{ number_format($book->estimated_price - $book->paid_price, 2, ',', '.') }}
                        @else
                            N/A
                        @endif
                    </td>
                           
                    <td>
                        <a href="{{route('books.show', $book->id)}}" class="btn btn-info me-2">Ver/Editar</a>
                        <a href="{{route('books.delete', $book->id)}}" class="btn btn-danger">Apagar</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
    <h5><a href="{{ route('homepage') }}">Homepage</a></h5>
@endsection