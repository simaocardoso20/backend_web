<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function createUser() {
    return view('users.addusers');
    }


    public function listUsers() {
      $users = ['Gabriela', 'Maria', 'João', 'Pedro'];
    return view('users.allusers', compact('users'));
}
}
