export interface Terminal {
  name: string;
  directions: string;
}

export interface Airport {
  id: string;
  city: string;
  name: string;
  code: string;
  terminals: Terminal[];
}

export const airports: Airport[] = [
  {
    id: "lagos",
    city: "Lagos",
    name: "Murtala Muhammed International",
    code: "MMIA",
    terminals: [
      {
        name: "Lagos (MM1)",
        directions: "Terminal 2, Arrivals Hall, near the main exit beside the currency exchange booth.",
      },
      {
        name: "MMA1",
        directions: "Departures Hall, near the FAAN Customer Service Desk beside the airline check-in counters.",
      },
    ],
  },
  {
    id: "abuja",
    city: "Abuja",
    name: "Nnamdi Azikiwe International",
    code: "NAIA",
    terminals: [
      {
        name: "Main Terminal",
        directions: "Terminal 1, Ground Floor, near the baggage claim area beside the tourist information desk.",
      },
    ],
  },
  {
    id: "kano",
    city: "Kano",
    name: "Mallam Aminu Kano International",
    code: "MAKIA",
    terminals: [
      {
        name: "Main Terminal",
        directions: "Main Terminal, Departures Hall, next to the check-in counters on the left side.",
      },
    ],
  },
  {
    id: "owerri",
    city: "Owerri",
    name: "Sam Mbakwe Cargo Airport",
    code: "SMA",
    terminals: [
      {
        name: "Main Terminal",
        directions: "Terminal Building, Ground Floor, near the main entrance beside the airline offices.",
      },
    ],
  },
];
