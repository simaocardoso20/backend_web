<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // obrigatório
            $table->decimal('estimated_price', 8, 2); // obrigatório
            $table->decimal('paid_price', 8, 2)->nullable(); // não obrigatório
            $table->unsignedBigInteger('user_id'); // relação com a tabela users
            $table->timestamps();
 
            // chave estrangeira
            $table->foreign('user_id')->references('id')->on('users');
 
        });
    }
 
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};

