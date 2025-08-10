<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    //

public function allBooks()
    {
    $books = Book::with('user')->get();
    $users = User::all(); // <-- Adicionado: busca todos os utilizadores

    foreach ($books as $book) {
        if ($book->paid_price !== null) {
            $book->difference = $book->paid_price - $book->estimated_price;
        } else {
            $book->difference = null;
        }
    }

    // Passa a lista de livros E a lista de utilizadores para a vista
    return view('books.all_books', compact('books', 'users')); 
}

    /**
     * Show the form for creating a new resource.
     */
    public function createBook()
    {
        // Busca todos os utilizadores para preencher o dropdown no formulário
        $users = User::all();
        return view('books.add_books', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeBook(Request $request)
    {
        // Validação dos dados do formulário
        $request->validate([
            'name' => 'required|string|max:255',
            'estimated_price' => 'required|numeric|min:0',
            'paid_price' => 'nullable|numeric|min:0',
            'user_id' => 'required|exists:users,id', // Verifica se o user_id existe na tabela users
        ]);

        // Criar um novo livro na base de dados
        Book::create($request->all());

        // Redirecionar de volta para a lista de livros com uma mensagem de sucesso
        return redirect()->route('books.all')->with('success', 'Livro adicionado com sucesso!');
    }

    /**
     * Display the specified resource.
     */
        public function viewBook(Book $book){
        $myBook = $book;

        $users = User::all();
        return view('books.show_book', compact('myBook', 'users'));
    }


 

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        // Validação dos dados do formulário
        $request->validate([
            'name' => 'required|string|max:255',
            'estimated_price' => 'required|numeric|min:0',
            'paid_price' => 'nullable|numeric|min:0',
            'user_id' => 'required|exists:users,id',
        ]);

        // Atualiza o livro na base de dados
        $book->update($request->all());

        // Redireciona de volta para a lista de livros com uma mensagem de sucesso
        return redirect()->route('books.all')->with('success', 'Livro atualizado com sucesso!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deleteBook(Book $book)
    {
        // Apaga o livro da base de dados
        $book->delete();

        // Redireciona de volta para a lista de livros com uma mensagem de sucesso
        return redirect()->route('books.all')->with('success', 'Livro apagado com sucesso!');
    }
}

