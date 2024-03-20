<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('facets', function (Blueprint $table) {
            $table->unsignedBigInteger('option_id')->nullable();
            $table->unsignedBigInteger('option_value_id')->nullable();
            $table->text('option_value')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('facets', function (Blueprint $table) {
            $table->dropColumn('option_id');
            $table->dropColumn('option_value_id');
            $table->dropColumn('option_value');
        });
    }
};
