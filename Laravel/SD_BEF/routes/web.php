<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function () {
    return view('welcome');
});

Route::get('/hello', function () {
    return '<h1>Olá mundo</h1>';
});

Route::get('/curso', function () {
    return "<h2>Olá curso SD</h2>";
});
