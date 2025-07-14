<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UtilController extends Controller

{
public function index() {

     $myName = 'Simão';
     return view ('utils.homepage', compact('myName'));
    }

public function course() {
    return view('utils.course');
}

public function hello() {
    $myName = $this->getUser();
    return view('utils.hello');
}

public function welcome() {
    return view('utils.welcome', compact('myName'));
}

private function getUser() {
    //query à base de dados para buscar o user
    $myName = 'Simão';
    return $myName;
}

}
