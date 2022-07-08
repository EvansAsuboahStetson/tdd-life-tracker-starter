import "./ActivityFeed.css";
import SummaryStat from "components/SummaryStat/SummaryStat";
import {Link} from 'react-router-dom'

export default function ActivityFeed({appState,calorycalc}) {

  // const [calorycalc, setCalorycalc] = useState(0)
  // const { appState } = useAuthContext()
  // function calcAvg(arr) {

  //   let avg = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log("length", arr[i].calories)


  //     avg += parseInt(arr[i].calories)

  //   }

  //   return (avg / arr.length).toFixed(2)
  // }

  // useEffect(() => {
  //   if (appState.nutrition && appState.nutrition.length > 0) {
  //     setCalorycalc(calcAvg(appState.nutrition))
  //   }



  // },[])

  // console.log("useAuthContext", appState)

  return (
    <div className="activity-feed">
      <h2 className="heading">
        Hi  {appState.user.first_name}
        <br />
        Welcome
      </h2>
    
      <div className="actions">
        <h2 className="heading">Activity Feed</h2>
        <div className="buttons">
          <button className="addExerciseBtn" id="act-btn">
            Add Exercise
          </button>
          <button className="logSleepBtn" id="act-btn">
            Log Sleep
          </button>

          <Link to="/nutrition/create">
            <button className="Record Nutrition" id="act-btn">
              Record Nutrition
            </button>
          </Link>
        </div>
      </div>
      <SummaryStat calorycalc={calorycalc} />
    </div>
  );
}
