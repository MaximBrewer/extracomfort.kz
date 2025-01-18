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
        $user->email = setting('site.order_email');
        $user->notify(new MissingCreated($model));
    }
}
