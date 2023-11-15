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
            $table->dropColumn('category_id');
            $table->dropColumn('subcategory_id');
            $table->dropColumn('subsubcategory_id');
            $table->string('path', 511)->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('facets', function (Blueprint $table) {
            $table->dropColumn('path');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('subcategory_id');
            $table->unsignedBigInteger('subsubcategory_id');
        });
    }
};
