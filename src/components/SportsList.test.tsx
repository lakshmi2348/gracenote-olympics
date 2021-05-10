import { act, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { SportsList } from "./SportsList";

describe('Sports List Component', () => {
    let container: HTMLDivElement = null;
    const data = [
        {
            "Sport": {
                "c_Name": "Speed Skating",
            },
            "Medals": {
                "n_Gold": '8',
                "n_Silver": '7',
                "n_Bronze": '8',
                "n_Total": '23'
            }
        },
        {
            "Sport": {
                "c_Name": "Short Track",
            },
            "Medals": {
                "n_Gold": '0',
                "n_Silver": '0',
                "n_Bronze": '1',
                "n_Total": '1'
            }
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
            render(<SportsList sportlist={data}></SportsList>)
        });
        const element = screen.getAllByTestId('sportslist');
        expect(element.length).toBe(2);
    });

    it('check if the sport details are rendered correctly', () => {
        act(() => {
            render(<SportsList sportlist={data}></SportsList>)
        });

        screen.getAllByTestId('sportslist').map((element, index) => {
            expect(element.getElementsByTagName('td').item(0).textContent).toBe(data[index].Sport.c_Name);
            expect(element.getElementsByTagName('td').item(1).textContent).toBe(data[index].Medals.n_Gold);
            expect(element.getElementsByTagName('td').item(2).textContent).toBe(data[index].Medals.n_Silver);
            expect(element.getElementsByTagName('td').item(3).textContent).toBe(data[index].Medals.n_Bronze);
            expect(element.getElementsByTagName('td').item(4).textContent).toBe(data[index].Medals.n_Total);
        })
    });
})
