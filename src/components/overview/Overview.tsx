import './Overview.scss';
import { Route } from 'react-router-dom';
import { MenuItems } from "../menuitems/MenuItems";
import { MedalSummary } from "../medalsummary/MedalSummary";
import { SportsList } from "../sportslist/SportsList";
import { WinnersList } from "../winnerslist/WinnersList";
import { Title } from "../title/Title";

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