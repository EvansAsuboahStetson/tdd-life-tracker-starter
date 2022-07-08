import { useNutritionContext } from "components/contexts/nutrition"

import NutritionCards from "components/NutritionCards/NutritionCards"
import ProductGrid from "components/ProductGrid/ProductGrid"

export default function NutritionFeed({})
{
    const { nutritions } = useNutritionContext()  
    console.log(nutritions)
    return (
        <div className="nutrition-feed">
            <ProductGrid nutritions={nutritions} />
            
        </div>
    )
}