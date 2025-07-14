<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\UtilController;
use Illuminate\Support\Facades\Route;

Route::get('/',[UtilController::class, 'welcome'] );

Route::get('/home', [UtilController::class, 'index'])->name('home_name');

Route::get('/hello',[UtilController::class, 'hello'] )->name('hello_route_name');

// Route::get('/hello', function () {
//     return '<h1>Olá Mundo!</h1><a href="' . route('home_name') . '">Voltar</a>';
// })->name('hello_route_name');


Route::get('/curso', [UtilController::class, 'course']);

route::get('/modules/{name}', function ($name) {
    return '<h1>Este é o módulo de: '.$name.'</h1>';
});


Route::get('/curso/{name}', function ($name) {
    return "<h2>Olá curso de $name</h2>";
});

Route::fallback(function () {
   return "<a href=".route('home_route_name') . ">Estás perdido?</a>";
});

Route::get('/addusers',[UserController::class, 'createUser'] )->name('users.add');


Route::get('/allusers',[UserController::class, 'listUsers'] )->name('users.list');
