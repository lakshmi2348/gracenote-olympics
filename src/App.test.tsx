import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import App from "./App";

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

afterAll(() => {
  global.fetch.mockClear();
});

test("check if the app component is loaded", () => {
  act(() => {
    render(<App />, container);
  });

  const appElement = screen.getByTestId('app-medals-data');
  expect(appElement).toBeDefined();
});

test("renders medals data", async () => {
  const fakeResponse = {
    "NOCMedals": {
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
        },
        "SportList": [
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
                    "n_Total": 23
                },
                "GoldMedalList": [
                    {
                        "Participant": {
                            "n_PersonID": 169302,
                            "c_Participant": "Michel Mulder",
                            "c_ParticipantShort": "Mulder"
                        },
                        "n_EventPhaseID": 815523,
                        "Event": {
                            "n_ID": 11184,
                            "c_Name": "2 x 500m",
                            "c_Short": "2 x 500m"
                        },
                        "Gender": {
                            "n_ID": 1,
                            "c_Name": "Men",
                            "c_Short": "M"
                        },
                    }
                ],
                "SilverMedalList": [
                    {
                        "Participant": {
                            "n_PersonID": 166769,
                            "n_TeamID": null,
                            "c_Participant": "Jan Smeekens",
                            "c_ParticipantShort": "Smeekens"
                        },
                        "n_EventPhaseID": 815523,
                        "Event": {
                            "n_ID": 11184,
                            "c_Name": "2 x 500m",
                            "c_Short": "2 x 500m"
                        },
                        "Gender": {
                            "n_ID": 1,
                            "c_Name": "Men",
                            "c_Short": "M"
                        },
                        "TeamMembers": null
                    }
                ],
                "BronzeMedalList": [
                    {
                        "Participant": {
                            "n_PersonID": 148601,
                            "n_TeamID": null,
                            "c_Participant": "Ronald Mulder",
                            "c_ParticipantShort": "Mulder"
                        },
                        "n_EventPhaseID": 815523,
                        "Event": {
                            "n_ID": 11184,
                            "c_Name": "2 x 500m",
                            "c_Short": "2 x 500m"
                        },
                        "Gender": {
                            "n_ID": 1,
                            "c_Name": "Men",
                            "c_Short": "M"
                        },
                    }
                ]
            },
            {
                "Sport": {
                    "n_ID": 302,
                    "c_Name": "Short Track",
                    "c_Short": "STK"
                },
                "Medals": {
                    "n_Gold": 0,
                    "n_Silver": 0,
                    "n_Bronze": 1,
                    "n_Total": 1
                },
                "GoldMedalList": [],
                "SilverMedalList": [],
                "BronzeMedalList": [
                    {
                        "Participant": {
                            "n_PersonID": 703443,
                            "c_Participant": "Sjinkie Knegt",
                            "c_ParticipantShort": "Knegt"
                        },
                        "n_EventPhaseID": 816263,
                        "Event": {
                            "n_ID": 10131,
                            "c_Name": "1000m",
                            "c_Short": "1000m"
                        },
                        "Gender": {
                            "n_ID": 1,
                            "c_Name": "Men",
                            "c_Short": "M"
                        },
                    }
                ]
            }
        ]
    }

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeResponse)
    })
  );

  const mockSetState = jest.fn();
  const setMedalTable = jest.fn();

  jest.mock('react', () => ({
    useState: (initial: any) => [initial, mockSetState]
  }));

   act(() => {
    render(<App />, container);
  });

  expect(global.fetch).toHaveBeenCalledWith('/api/getMedalTable');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});


