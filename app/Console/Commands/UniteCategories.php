<?php

namespace App\Console\Commands;

use App\Models\Category;
use Illuminate\Console\Command;

class UniteCategories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'unite:categories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private function reqCat($parent1, $parent2 = null)
    {
        foreach ($parent1->children as $cat) {
            try {
                $cat->accountingIds()->firstOrCreate([
                    'accounting_id' => $cat->accounting_id
                ]);
            } catch (\Throwable $e) {
            }
            $exists = false;
            if ($parent2) foreach ($parent2->children as $cat2) {
                if ($cat->name === $cat2->name) {
                    $exists = true;
                    $cat->accountingIds()->firstOrCreate([
                        'accounting_id' => $cat2->accounting_id
                    ]);
                    $this->reqCat($cat, $cat2);
                }
            }
            $exists || $this->reqCat($cat);
        }
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $deleteArr = [];
        foreach (Category::all() as $category) {
            $accountingIds = [];
            foreach ($category->accountingIds as $accountingId) {
                $accountingIds[] = $accountingId->entity_id;
            }
            if (count($accountingIds) > 1) {
                $deleteArr[] = $accountingIds[1];
            } elseif (count($accountingIds) == 1) {
                $parent = Category::find($accountingIds[0])->parent;
                dump(count($parent->accountingIds));
                // foreach ($parent->accountingIds as $accountingId) {
                //     dump(count($category->accountingIds));
                // }
            } else {
                dump($category->id);
            }
        }
    }
}
