<?php

namespace App\Observers;

use App\Models\Termin as ModelsTermin;
use App\Models\User;
use App\Notifications\TerminCreated;

class Termin
{
    public function created(ModelsTermin $model)
    {
        $user = new User();
        $user->email = setting('site.manager_email');
        $user->notify(new TerminCreated($model));
    }
}
