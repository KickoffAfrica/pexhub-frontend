"use client";

import { Card } from "@/components/ui/card";
import { FileText, HelpCircle, ReceiptText, TrendingUp } from "lucide-react";

interface SuggestedPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const prompts = [
  {
    icon: FileText,
    title: "Income Tax",
    question:
      "What are the current income tax rates for individuals in Nigeria?",
  },
  {
    icon: ReceiptText,
    title: "Registration",
    question: "How do I register for a Tax Identification Number (TIN)?",
  },
  {
    icon: TrendingUp,
    title: "VAT",
    question: "What are the new VAT regulations and rates for 2025?",
  },
  {
    icon: HelpCircle,
    title: "Deductions",
    question:
      "What tax deductions are available for small businesses in Nigeria?",
  },
];

export function SuggestedPrompts({ onSelectPrompt }: SuggestedPromptsProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-8">
      {/* Welcome message */}
      <div className="text-center mb-8 max-w-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 mb-4">
          <span className="text-2xl font-bold text-white">NT</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
          Welcome to Nigerian Tax Assistant
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Get instant answers to your questions about Nigeria's 2025 tax laws
          and regulations
        </p>
      </div>

      {/* Suggested prompts grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-3xl">
        {prompts.map((prompt, index) => {
          const Icon = prompt.icon;
          return (
            <Card
              key={index}
              className="p-4 cursor-pointer border-[#D2DAD7] dark:border-[#2E3A35] bg-[#F9FAFA] dark:bg-transparent hover:bg-accent hover:border-primary-500 transition-all duration-200 hover:shadow-md group"
              onClick={() => onSelectPrompt(prompt.question)}
            >
              <div className="flex flex-col md:flex-row items-start gap-3">
                <div className="shrink-0 p-3 rounded-lg bg-primary-muted group-hover:bg-primary-100 dark:group-hover:bg-primary-500/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 text-primary-300">
                    {prompt.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground line-clamp-3 font-normal">
                    {prompt.question}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Additional hint */}
      <p className="mt-8 text-xs md:text-sm text-muted-foreground text-center">
        Click on a suggestion above or type your own question below
      </p>
    </div>
  );
}
