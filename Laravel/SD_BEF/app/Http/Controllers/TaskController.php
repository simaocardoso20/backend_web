<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    public function allTasks(){

        $tasks = $this->getAllTasks();



        return view('tasks.all_tasks', compact('tasks'));
    }



    //função que retorna a view de uma task (o que estámos a clicar)
      public function viewTask($id)
    {
        $task = DB::table('tasks')
            ->join('users', 'users.id', '=', 'tasks.user_id')
            ->select('tasks.*', 'users.name as username')
            ->where('tasks.id', $id)
            ->first();
 
        return view('tasks.show_task', compact('task'));
    }
 
    public function deleteTask($id)
    {
        DB::table('tasks')->where('id', $id)->delete();
 
        return redirect()->route('tasks.show')->with('success', 'Tarefa eliminada com sucesso!');
    }


    public function createTask()
    {
        $users = DB::table('users')->select('id', 'name')->get();
        return view('tasks.add_tasks', compact('users'));
    }

    public function storeTask(Request $request){

    $request->validate([
            'name' => 'string|required|max:50',
            'description' => 'required|string|max:255',
            'user_id' => 'required'
            
        ]);

       // dd($request->all());

        Task::insert([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => $request->user_id,
]);

            return redirect()->route('tasks.all')->with('message', 'Tarefa adicionada com sucesso');
        
    }





    private function getAllTasks(){
        $tasks = Task::join('users', 'users.id', '=', 'tasks.user_id')
        ->select('tasks.*', 'users.name as username')
        ->get();

        return $tasks;
    }
}