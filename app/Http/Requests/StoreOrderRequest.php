<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $arr = [
            'name' => 'required|max:255',
            'lastname' => 'required|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|max:255',
            // 'comment' => 'required|min:10|max:2048',
            'delivery_id' => 'required',
            'payment_id' => 'required',
        ];
        if ($this->delivery_id == 1) {
            $arr = array_merge($arr, [
                'region' => 'required',
                'city' => 'required',
                'street' => 'required',
                'house' => 'required',
                // 'appartement' => 'required',
            ]);
        }
        return $arr;
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'name' => 'Имя',
            'lastname' => 'Фамилия',
            'email' => 'E-mail',
            'phone' => 'Телефон',
            'comment' => 'Комментарий',
            'delivery_id' => 'Способ доставки',
            'payment_id' => 'Способ оплаты',
            'region' => 'Область',
            'city' => 'Город',
            'street' => 'Улица',
            'house' => 'Дом',
            'appartement' => 'Квартира',
        ];
    }
}
