import { MenuItems } from "./MenuItems";
import './Overview.scss';
import { Route } from 'react-router-dom';
import { MedalSummary } from "./MedalSummary";
import { SportsList } from "./SportsList";
import { WinnersList } from "./WinnersList";
import { Title } from "./Title";

export const Overview = (props: any) => {
    return (
        <div className="overview">
            <Title></Title>
            <MenuItems></MenuItems>
            <div>
                {props.medalTable ? <Route exact path={["/", "/medalsummary"]}><MedalSummary summary={props.medalTable.NOCMedals}/></Route> : null}
                {props.medalTable ? <Route exact path="/sportslist"><SportsList sportlist={props.medalTable.SportList}/></Route> : null}
                {props.medalTable ? <Route exact path="/winnerslist"><WinnersList sportlist={props.medalTable.SportList}/></Route> : null}
            </div>
        </div>
    );
}