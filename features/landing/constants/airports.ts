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
        name: "MMIA Terminal 1",
        directions: "Departure hall: Customer Service desk is immediately to your left as you enter through Gate C beside the screening machine.\n\nE Arrival hall: Another desk sits beside baggage carousel 3, on the left to entrance of the Hall.\n\nD Arrival Hall: Customer Service Desk sits between the two Carousel's, straight down from the entrance of the Hall.",
      },
      {
        name: "MMIA Terminal 2",
        directions: "Departure hall: The FAAN Customer Service desk is in the center of the concourse, as you exit the escalators by your left hand side and beneath the main flight display boards.\n\nArrival Hall Lobby: You will find Customer Service opposite the lift in front of BK BUREAU DE CHANGE & BAGOBIRI BUREAU DE CHANGE.",
      },
      {
        name: "MMA Domestic Terminal 1",
        directions: "Concourse Alpha: on entry, past Security, the FAAN Customer Service desk sits midway between the SLOT Service Kiosk and NCAA desk on the right.\n\nConcourse Zulu: on entry past Security, the Customer Service Desk is on the immediate left after the jewelry kiosk.",
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
        name: "International Terminal",
        directions: "Departure hall: The FAAN Customer Service desk sits in the centre of the concourse to the right of the main flight information displays, opposite the escalators and under the blue-and-white signage.\n\nArrival hall: You'll find the desk just past immigration, to the left as you exit arrivals.",
      },
      {
        name: "Domestic Terminal",
        directions: "Departure hall: Immediately to your left as you enter through the main doors.\n\nArrival hall: On the left as you exit the baggage claim area.",
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
        directions: "Departure area: As you enter through the door of the main terminal, The FAAN Customer Service desk is on your left just by the door opposite the Security screening machine.\n\nArrival area: After you collect your baggage before you exit the carousel area just before the door. The Customer Service desk sits on the left (it's a white and orange cubicle that has customer service sticker on it).",
      },
    ],
  },
];
