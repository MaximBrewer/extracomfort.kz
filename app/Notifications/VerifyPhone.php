<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Laraketai\Mobizon\MobizonChannel;
use Laraketai\Mobizon\MobizonMessage;

class VerifyPhone extends Notification
{
    use Queueable;

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [MobizonChannel::class];
    }

    /**
     * Get the sms representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Laraketai\Mobizon\MobizonMessage
     */

    public function toMobizon($notifiable)
    {
        // return MobizonMessage::create("Ваш код - " . $notifiable->code);
    }
}
