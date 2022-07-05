import { NutitritionContext } from "components/contexts/nutrition";
import { useContext } from "react";

export default function NutritionFeed()
{
    const { nutrition, setNutrition, initialized, setInitialized, loading, setIsLoading,error,setError } = useContext(NutitritionContext) ;
        console.log(nutrition)
    return (
        <div className="nutrition-feed">
            
        </div>
    )
}