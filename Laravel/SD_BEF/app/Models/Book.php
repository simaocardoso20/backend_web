<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    // Campos que podem ser preenchidos em massa
    protected $fillable = [
        'name',
        'estimated_price',
        'paid_price',
        'user_id',
    ];

    // Define a relação: um livro pertence a um utilizador
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}