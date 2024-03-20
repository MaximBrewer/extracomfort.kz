<?php

namespace App\Observers;

use App\Models\CallBack as ModelsCallBack;
use App\Models\User;
use App\Notifications\CallBackCreated;

class CallBack
{
    public function created(ModelsCallBack $model)
    {
        $user = new User();
        $user->email = 'pimax1978@icloud.com';
        $user->notify(new CallBackCreated($model));
    }
}
