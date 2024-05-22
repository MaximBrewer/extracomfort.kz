<?php

namespace App\Actions;

use TCG\Voyager\Actions\AbstractAction;

class AuthorizeAction extends AbstractAction
{
    public function getTitle()
    {
        return 'Авторизоваться';
    }

    public function getIcon()
    {
        return 'voyager-power';
    }

    public function getPolicy()
    {
        return 'read';
    }

    public function getAttributes()
    {
        return [
            'class' => 'btn btn-sm btn-success edit',
        ];
    }

    public function shouldActionDisplayOnDataType()
    {
        return $this->dataType->slug == 'users';
    }

    public function shouldActionDisplayOnRow($row)
    {
        return true;//in_array(!$row->role->name, ['admin']);


        // accountant
        // Бухгалтер

        // supervisor
        // Старший администратор

        // senior
        // Старший менеджер

        // nurse
        // Медсестра

        // manager
        // Менеджер сайта

        // sale
        // Продавцы-консультанты

        // specialist
        // Специалист

        // recieption
        // Ресепшн

        // admin
        // Руководитель

        // client
        // Клиент

    }

    public function getDefaultRoute()
    {
        return route('voyager.users.auth', ['id' => $this->data->id]);
    }
}
