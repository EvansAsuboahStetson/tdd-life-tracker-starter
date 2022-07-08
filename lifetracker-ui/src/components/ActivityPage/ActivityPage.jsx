import ActivityFeed from "components/ActivityFeed/ActivityFeed";
import { useAuthContext } from "components/contexts/auth";
import { useEffect, useState } from "react";

import "./ActivityPage.css";
export default function ActivityPage() {

    const [calorycalc, setCalorycalc] = useState(0)
    const { appState } = useAuthContext()
    function calcAvg(arr) {

        let avg = 0;
        for (let i = 0; i < arr.length; i++) {
            console.log("length", arr[i].calories)


            avg += parseInt(arr[i].calories)

        }

        return (avg / arr.length).toFixed(2)
    }

    useEffect(() => {
        if (appState.nutrition && appState.nutrition.length > 0) {
            setCalorycalc(calcAvg(appState.nutrition))
        }



    }, )
    return (
        <div className="activity-page">
            <div className="content">
                
                <ActivityFeed appState={appState} calorycalc={calorycalc} />
         
            </div>
        </div>

    )
}
