import { useEffect, useState } from "react";
import './WinnersList.scss';

export const WinnersList = (props: any) => {
    const [player, setPlayers] = useState([]);
    
    useEffect(() => {
        let athleteList=[];
        athleteList = props.sportlist.map((sport: any) => {
            let athletes: any[] = [];
            sport.GoldMedalList.map((player: any) => {
                athletes.push({
                    "athlete": player.Participant.c_Participant,
                    "sport": sport.Sport.c_Name,
                    "event": player.Event.c_Name,
                    "gold": 1,
                    "silver": 0,
                    "bronze": 0
                });
            });
            sport.SilverMedalList.map((player: any) => {
                athletes.push({
                    "athlete": player.Participant.c_Participant,
                    "sport": sport.Sport.c_Name,
                    "event": player.Event.c_Name,
                    "gold": 0,
                    "silver": 1,
                    "bronze": 0
                });
            });
            sport.BronzeMedalList.map((player: any) => {
                athletes.push({
                    "athlete": player.Participant.c_Participant,
                    "sport": sport.Sport.c_Name,
                    "event": player.Event.c_Name,
                    "gold": 0,
                    "silver": 0,
                    "bronze": 1
                });
            })
            return athletes;
        });
        setPlayers(athleteList);
    }, []);

    return (
        <table className="card">
            <tr className="overview-table">
                <th className="table-item">Athlete</th>
                <th className="table-item">Sport</th>
                <th className="table-item">Event</th>
                <th className="table-item">Gold</th>
                <th className="table-item">Silver</th>
                <th className="table-item">Bronze</th>
            </tr>
            {
                player.map((sport: any) => {
                    return sport.map((item: any) => {
                        return (
                            <tr className="overview-table" data-testid="winners-list">
                                <td className="table-item">{item.athlete}</td>
                                <td className="table-item">{item.sport}</td>
                                <td className="table-item">{item.event}</td>
                                <td className="table-item">{item.gold}</td>
                                <td className="table-item">{item.silver}</td>
                                <td className="table-item">{item.bronze}</td>
                            </tr>
                        );
                    })
                })
            }
        </table>
    );
}

