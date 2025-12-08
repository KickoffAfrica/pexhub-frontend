export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-pexhub",
    question: "What is PExHub?",
    answer: "PExHub (Passenger Experience Hub) is FAAN's official digital support platform designed to help airport passengers quickly access assistance, find support desks, contact customer service, and get answers to common questions.",
  },
  {
    id: "supported-airports",
    question: "Which airports are supported on PExHub?",
    answer: "PExHub currently supports all major Nigerian airports managed by FAAN, including Murtala Muhammed International Airport (Lagos), Nnamdi Azikiwe International Airport (Abuja), Mallam Aminu Kano International Airport (Kano), and Sam Mbakwe Cargo Airport (Owerri).",
  },
  {
    id: "find-customer-service",
    question: "How do I find a physical customer service desk?",
    answer: "Use the 'Find Support Desk' option on the main screen, select your current airport, and you'll receive detailed directions to the nearest customer service desk at your terminal.",
  },
  {
    id: "chat-with-representative",
    question: "How do I chat with a FAAN representative?",
    answer: "Click 'Chat With Us' on the main screen to start a conversation with our support team via WhatsApp. Our representatives are available to assist you with any queries or concerns.",
  },
  {
    id: "call-for-support",
    question: "How can I call FAAN for immediate support?",
    answer: "Use the 'Call Us' option to access our toll-free support line. Our agents are available 24/7 to assist you with urgent matters or general inquiries.",
  },
  {
    id: "issues-we-help-with",
    question: "What type of issues can FAAN customer support help with?",
    answer: "Our support team can assist with lost luggage, flight information, terminal navigation, accessibility services, complaints, security concerns, and general airport inquiries.",
  },
  {
    id: "report-missing-item",
    question: "How do I report a missing item?",
    answer: "Visit the nearest customer service desk or use the 'Call Us' option to report a missing item. Provide details such as the item description, last known location, and your contact information.",
  },
  {
    id: "arrival-time",
    question: "How early should I arrive at the airport?",
    answer: "For domestic flights, we recommend arriving at least 2 hours before departure. For international flights, please arrive at least 3 hours before your scheduled departure time.",
  },
  {
    id: "accessibility-services",
    question: "Can I get help with accessibility or mobility services?",
    answer: "Yes! FAAN provides wheelchair assistance, priority boarding, and other accessibility services. Contact our support team in advance or visit the customer service desk upon arrival to arrange assistance.",
  },
  {
    id: "flight-status",
    question: "Where can I check my flight status?",
    answer: "Flight status information is available on the departure/arrival boards throughout the terminal. You can also contact your airline directly or ask at any information desk for real-time updates.",
  },
];

