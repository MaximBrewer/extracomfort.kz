<?php

namespace App\Observers;

use App\Models\Missing as ModelsMissing;
use App\Models\User;
use App\Notifications\MissingCreated;

class Missing
{
    public function created(ModelsMissing $model)
    {
        $user = new User();
        $user->email = 'pimax1978@icloud.com';
        $user->notify(new MissingCreated($model));
    }
}
