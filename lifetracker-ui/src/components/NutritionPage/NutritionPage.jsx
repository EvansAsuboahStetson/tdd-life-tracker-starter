import "./NutritionPage.css";
import { useNavigate, Link } from "react-router-dom";
import NutritionFeed from "components/NutririonFeed/NutritionFeed";

import { NutritionContextProvider, useNutritionContext } from "../contexts/nutrition";
export default function NutritionContainer() {
  return (
    <NutritionContextProvider>
      <Nutrition />
    </NutritionContextProvider>
  )
}
function Nutrition({appState }) {
  console.log(appState)

  return (
    <div className="nutrition-page">
      <div className="content">
        <div className="heading">
          <h1>Nutrition</h1>
        </div>
        <div className="overview">
          <div className="main">
            <h1>Overview</h1>
            <Link className="link-component" to="/nutrition/create">
              <button>Record Nutrition</button>
            </Link>
          </div>
          <NutritionFeed
            appState={appState} />
        </div>
      </div>
    </div>
  );
  }

