export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-pexhub",
    question: "What is PExHub?",
    answer: "PExHub (Passenger Experience Hub) is a digital support platform created by FAAN to help passengers quickly access assistance, directions, and information across Nigerian airports.",
  },
  {
    id: "supported-airports",
    question: "Which airports are supported on PExHub?",
    answer: "PExHub currently supports:\n- Murtala Muhammed International Airport, Lagos\n- Muritala Muhammed International Airport, Terminal 1 Lagos \n- Nnamdi Azikiwe International Airport, Abuja\n- Mallam Aminu Kano International Airport, Kano\n- Sam Mbakwe Airport, Owerri",
  },
  {
    id: "find-customer-service",
    question: "How do I find a physical customer service desk?",
    answer: "Select your airport on the landing page. You will receive a simple guide showing where to locate the nearest customer support desk within that airport.",
  },
  {
    id: "chat-with-representative",
    question: "How do I chat with a FAAN representative?",
    answer: "Click Chat With Us. You will be redirected to the official FAAN WhatsApp support bot for real-time assistance.",
  },
  {
    id: "call-for-support",
    question: "How can I call FAAN for immediate support?",
    answer: "Click Call Us on the landing page to view the direct customer support phone number for your selected airport.",
  },
  {
    id: "issues-we-help-with",
    question: "What type of issues can FAAN customer support help with?",
    answer: "Support can assist with:\n- Flight information guidance\n- Lost & found inquiries\n- Airport navigation\n- Complaints or service issues\n- Accessibility support\n- General passenger assistance",
  },
  {
    id: "report-missing-item",
    question: "How do I report a missing item?",
    answer: "Select your airport → choose Customer Support Desk or Chat With Us to report lost property and follow the recovery process.",
  },
  {
    id: "arrival-time",
    question: "How early should I arrive at the airport?",
    answer: "- Local flights: 2 hours before departure\n- International flights: 3 hours before departure",
  },
  {
    id: "accessibility-services",
    question: "Can I get help with accessibility or mobility services?",
    answer: "Yes. FAAN provides assistance for elderly passengers, passengers with disabilities, and unaccompanied minors. Use Chat With Us or Find PHC stand for help.",
  },
  {
    id: "flight-status",
    question: "Where can I get updates on flight status?",
    answer: "PExHub does not show live flight updates yet. Passengers should check with their airline at the terminal or through their airline's website.",
  },
  {
    id: "make-complaint",
    question: "How do I make a complaint?",
    answer: "Use the Chat With Us option or visit the customer service desk in your airport to submit a complaint or feedback.",
  },
  {
    id: "wifi-availability",
    question: "Is Wi-Fi available at the airport?",
    answer: "Wi-Fi availability varies by airport. Check with the customer service desk for the most accurate information.",
  },
];
