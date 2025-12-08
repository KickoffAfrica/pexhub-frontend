export interface Airport {
  id: string;
  city: string;
  name: string;
  code: string;
  directions: string;
}

export const airports: Airport[] = [
  {
    id: "lagos",
    city: "Lagos",
    name: "Murtala Muhammed International",
    code: "MMIA",
    directions: "Terminal 2, Arrivals Hall, near the main exit beside the currency exchange booth.",
  },
  {
    id: "abuja",
    city: "Abuja",
    name: "Nnamdi Azikiwe International",
    code: "NAIA",
    directions: "Terminal 1, Ground Floor, near the baggage claim area beside the tourist information desk.",
  },
  {
    id: "kano",
    city: "Kano",
    name: "Mallam Aminu Kano International",
    code: "MAKIA",
    directions: "Main Terminal, Departures Hall, next to the check-in counters on the left side.",
  },
  {
    id: "owerri",
    city: "Owerri",
    name: "Sam Mbakwe Cargo Airport",
    code: "SMA",
    directions: "Terminal Building, Ground Floor, near the main entrance beside the airline offices.",
  },
];

