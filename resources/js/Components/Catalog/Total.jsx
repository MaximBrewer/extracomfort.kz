import { useLayout } from "@/Contexts/LayoutContext";
import { usePage } from "@inertiajs/react"

export default () => {

    const { products } = usePage().props

    const { numWord } = useLayout();

    return <div className="total-found-label fw-400-16-19">
        <span>Показано {products.meta.total} {numWord(products.meta.total, ['товар', 'товара', 'товаров'])}</span>
    </div>
}