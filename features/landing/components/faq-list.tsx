"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { faqs, type FAQ } from "../constants/faqs";
import { useState } from "react";

interface FAQListProps {
  onBack: () => void;
}

export function FAQList({ onBack }: FAQListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <Card className="p-6 md:p-8 bg-white dark:bg-dark-800 shadow-xl rounded-3xl border-0 max-h-[85vh] overflow-hidden flex flex-col">
        {/* Back Button */}
        <div>

      
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4 shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK</span>
        </Button>
        </div>
        {/* Header */}
        <div className="mb-2 shrink-0">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ List */}
        <div className="space-y-2 overflow-y-auto flex-1 -mr-2 pr-2 scrollbar-hide">
          {faqs.map((faq) => (
            <Card
              key={faq.id}
              className={`cursor-pointer border transition-all duration-200 rounded-xl overflow-hidden py-0 gap-0 ${
                expandedId === faq.id
                  ? "border-primary-300 bg-primary-50/50 dark:bg-primary-500/5"
                  : "border-border hover:border-primary-200 bg-white dark:bg-card"
              }`}
              onClick={() => toggleExpand(faq.id)}
            >
              <div className="px-4 py-3 flex items-center justify-between">
                <h3 className="font-medium text-sm md:text-base text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronRight
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    expandedId === faq.id ? "rotate-90" : ""
                  }`}
                />
              </div>
              {expandedId === faq.id && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}

