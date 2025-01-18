<?php

namespace App\Observers;

use App\Models\User;
use App\Notifications\OrderCreated;

class Order
{
    public function created(\App\Models\Order $model)
    {
        $user = new User();
        $user->email = setting('site.manager_email');
        $user->notify(new OrderCreated($model));
    }
}
