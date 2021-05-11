import { act, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { WinnersList } from "./WinnersList"

describe('Winners List Component', () => {
    let container: HTMLDivElement = null;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });


    it('check if the winners list are rendered', () => {
        const data = [
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
                            "c_Participant": "Michel Mulder",
                            "c_ParticipantShort": "NED"
                        },
                        "Event": {
                            "n_ID": 10856,
                            "c_Name": "2 * 500m",
                            "c_Short": "Team Pursuit"
                        }
                    }
                ],
                "SilverMedalList": [],
                "BronzeMedalList": []
            }
        ];

        act(() => {
            render(<WinnersList sportlist={data}></WinnersList>)
        });

        const element = screen.getAllByTestId('winnerslist');
        screen.getAllByTestId('winnerslist').map((element, index) => {
            expect(element.getElementsByTagName('td').item(0).textContent).toBe('Michel Mulder');
            expect(element.getElementsByTagName('td').item(1).textContent).toBe('Speed Skating');
            expect(element.getElementsByTagName('td').item(2).textContent).toBe('2 * 500m');
            expect(element.getElementsByTagName('td').item(3).textContent).toBe('1');
            expect(element.getElementsByTagName('td').item(4).textContent).toBe('0');
            expect(element.getElementsByTagName('td').item(5).textContent).toBe('0');
        })
    });
})
