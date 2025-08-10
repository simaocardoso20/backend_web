<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilController;
use App\Http\Controllers\BookController;

// Rota da página inicial que aponta diretamente para o controlador
Route::get('/homepage', [UtilController::class, 'index'])->name('homepage');

Route::get('/hello', [UtilController::class, 'sayHello'])->name('hello_route_name');
Route::get('/curso', function(){
    return '<h1>Olá alunos SD</h1>';
});

Route::get('/modules/{name}', function($name){
    return '<h1>Este é o módulo de:'.$name.'</h1>';
});

/* routes for Users */
//rota que nos vai carregar um formulário

Route::get('/add-users', [UserController::class, 'createUser'])->name('users.add');
Route::post('/store-user', [UserController::class, 'storeUser'])->name('users.store');

//Rota que pega nos dados do formulario para fazer um update
Route::put('/update-user', [UserController::class, 'updateUser'])->name('users.update');



Route::get('/users', [UserController::class, 'allUsers'])->name('users.all');
Route::get('/view-user/{id}', [UserController::class, 'viewUser'])->name('user.show');
Route::get('/delete-user/{id}', [UserController::class, 'deleteUser'])->name('users.delete');




/* routes for Tasks */


// rota que apresenta o formulário para adicionar uma nova task
Route::get('/add-tasks', [TaskController::class, 'createTask'])->name('tasks.add');

// rota que pega nos dados do formulario e envia para o servidor
Route::post('/store-task', [TaskController::class, 'storeTask'])->name('tasks.store');

//rota que mostra tabela com todas as tarefas
Route::get('/tasks', [TaskController::class, 'allTasks'])->name('tasks.all');

//Ao clicar numa tarefa, mostra todas as informaçoes dessa tarefa
Route::get('/view-task/{id}', [TaskController::class, 'viewTask'])->name('tasks.show');

//rota que elimina uma tarefa
Route::get('/delete-task/{id}', [TaskController::class, 'deleteTask'])->name('tasks.delete');

//Rota que pega nos dados do formulario para fazer um update
Route::put('/update-task', [TaskController::class, 'updateTask'])->name('tasks.update');




/* routes for Books */

// rota que apresenta o formulário para adicionar um novo livro
Route::get('/add-books', [BookController::class, 'createBook'])->name('books.add');

// rota que pega nos dados do formulario e envia para o servidor
Route::post('/store-book', [BookController::class, 'storeBook'])->name('books.store');

//rota que mostra tabela com todas as tarefas
Route::get('/books', [BookController::class, 'allBooks'])->name('books.all');

//Ao clicar numa tarefa, mostra todas as informaçoes dessa tarefa
Route::get('/view-book/{book}', [BookController::class, 'viewBook'])->name('books.show');

//rota que elimina uma tarefa
Route::get('/delete-book/{book}', [BookController::class, 'deleteBook'])->name('books.delete');

// ADICIONADO: Rota para atualizar a oferta de um livro
Route::put('/update-books/{book}', [BookController::class, 'update'])->name('books.update');



/* routes for testing proposes */
Route::get('/test-queries', [UserController::class, 'testSqlQueries']);


Route::fallback(function(){
    return "<a href=".route('hello_route_name').">Estás perdido?</a>";
});


