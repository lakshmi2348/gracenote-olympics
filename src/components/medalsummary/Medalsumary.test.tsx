import { act, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { Header } from "../header/Header";
import { MedalSummary } from "./MedalSummary";

describe('Medal Summary Component', () => {
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


    test('check if the team logo is rendered', () => {
        const data = {
            "NOC": {
                "n_ID": 1,
                "c_Name": "Netherlands",
                "c_Short": "NED",
                "n_GeoID": 2201
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 9,
                "n_Total": 24
            }
        };
        act(() => {
            render(<MedalSummary summary={data}></MedalSummary>)
        });
        const imgElement = screen.getByAltText('logo');
        expect(imgElement).toBeInTheDocument();
    });

    test('check if the team country is rendered', () => {
        const data = {
            "NOC": {
                "n_ID": 1,
                "c_Name": "Netherlands",
                "c_Short": "NED",
                "n_GeoID": 2201
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 9,
                "n_Total": 24
            }
        };
        act(() => {
            render(<MedalSummary summary={data}></MedalSummary>)
        });
        const element = screen.getByTestId('noc-name');
        expect(element.textContent).toBe('Netherlands');
    });

    test('check if the team gold medal value is rendered', () => {
        const data = {
            "NOC": {
                "n_ID": 1,
                "c_Name": "Netherlands",
                "c_Short": "NED",
                "n_GeoID": 2201
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 9,
                "n_Total": 24
            }
        };
        act(() => {
            render(<MedalSummary summary={data}></MedalSummary>)
        });
        const element = screen.getByTestId('noc-gold');
        expect(element.textContent).toBe('8');
    });

    test('check if the team silver medal value is rendered', () => {
        const data = {
            "NOC": {
                "n_ID": 1,
                "c_Name": "Netherlands",
                "c_Short": "NED",
                "n_GeoID": 2201
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 9,
                "n_Total": 24
            }
        };
        act(() => {
            render(<MedalSummary summary={data}></MedalSummary>)
        });
        const element = screen.getByTestId('noc-silver');
        expect(element.textContent).toBe('7');
    });

    test('check if the team bronze medal value is rendered', () => {
        const data = {
            "NOC": {
                "n_ID": 1,
                "c_Name": "Netherlands",
                "c_Short": "NED",
                "n_GeoID": 2201
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 9,
                "n_Total": 24
            }
        };
        act(() => {
            render(<MedalSummary summary={data}></MedalSummary>)
        });
        const element = screen.getByTestId('noc-bronze');
        expect(element.textContent).toBe('9');
    });

    test('check if the team total medals value is rendered', () => {
        const data = {
            "NOC": {
                "n_ID": 1,
                "c_Name": "Netherlands",
                "c_Short": "NED",
                "n_GeoID": 2201
            },
            "Medals": {
                "n_Gold": 8,
                "n_Silver": 7,
                "n_Bronze": 9,
                "n_Total": 24
            }
        };
        act(() => {
            render(<MedalSummary summary={data}></MedalSummary>)
        });
        const element = screen.getByTestId('noc-total');
        expect(element.textContent).toBe('24');
    });

})
