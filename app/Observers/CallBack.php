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
        $user->email = setting('site.manager_email');
        $user->notify(new CallBackCreated($model));
    }
}
