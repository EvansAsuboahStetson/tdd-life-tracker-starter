import NutritionCards from "components/NutritionCards/NutritionCards"
import "./ProductGrid.css"

export default function ProductGrid({ nutritions = [] }) {
  
  
  return (
    <div id="Buy" className="ProductGrid">
      <div className="content">
        <div className="grid">
          {nutritions?.map((nutrition) => (
            <NutritionCards
              key={nutrition.id}
              nutrition={nutrition}
             
            />
          ))}
          {!nutritions?.length ? (
            <div className="card">
              <p>No products available</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
