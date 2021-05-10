import { act, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { WinnersList } from "./WinnersList"

describe('Winners List Component', () => {
    let container: HTMLDivElement = null;
    const winnersData = [
        {
            "Sport": {
                "n_ID": 103,
                "c_Name": "Speed Skating",
                "c_Short": "SSK"
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 8,
                "n_Total": 23,
                "n_RankGold": 1,
                "n_RankSortGold": 1,
                "n_RankTotal": 1,
                "n_RankSortTotal": 1
            },
            "GoldMedalList": [
                {
                    "Participant": {
                        "c_Participant": "Netherlands",
                        "c_ParticipantShort": "NED"
                    },
                    "Event": {
                        "n_ID": 10856,
                        "c_Name": "Team Pursuit 8 Laps",
                        "c_Short": "Team Pursuit"
                    }
                },
                {
                    "Participant": {
                        "c_Participant": "Netherlands",
                        "c_ParticipantShort": "NED"
                    },
                    "Event": {
                        "n_ID": 11148,
                        "c_Name": "Team Pursuit 6 Laps",
                        "c_Short": "Team Pursuit"
                    }
                }
            ],
            "SilverMedalList": [
                {
                    "Participant": {
                        "c_Participant": "Ireen Wüst",
                        "c_ParticipantShort": "Wüst"
                    },
                    "Event": {
                        "n_ID": 5,
                        "c_Name": "5000m",
                        "c_Short": "5000m"
                    }
                },
                {
                    "Participant": {
                        "c_Participant": "Sven Kramer",
                        "c_ParticipantShort": "Kramer"
                    },
                    "n_EventPhaseID": 815527,
                    "Event": {
                        "n_ID": 6,
                        "c_Name": "10000m",
                        "c_Short": "10000m"
                    }
                }
            ],
            "BronzeMedalList": [
                {
                    "Participant": {
                        "c_Participant": "Bob de Jong",
                        "c_ParticipantShort": "de Jong"
                    },
                    "Event": {
                        "n_ID": 6,
                        "c_Name": "10000m",
                        "c_Short": "10000m"
                    }
                }
            ]
        }
    ];
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });


    it('check if the sports list are rendered', () => {
        act(() => {
            render(<WinnersList sportlist={winnersData}></WinnersList>)
        });

        screen.getAllByTestId('winners-list').map((element, index) => {
            console.log(winnersData[index].Sport.c_Name);
            expect(element.getElementsByTagName('td').item(0).textContent).toBe(winnersData[index].GoldMedalList[index].Participant.c_Participant);
            expect(element.getElementsByTagName('td').item(2).textContent).toBe(winnersData[index].GoldMedalList[index].Event.c_Name);
            
        });
    });
})
