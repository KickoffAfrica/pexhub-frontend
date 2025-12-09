"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { faqs, type FAQ } from "../constants/faqs";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FAQListProps {
  onBack: () => void;
}

export function FAQList({ onBack }: FAQListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  if(isMobile){
    return (
        <div className="w-full max-w-lg mx-auto px-4">
      <div className="p-2  space-y-6">
        {/* Back Button */}
        <div>

      
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4 shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-white">BACK</span>
        </Button>
        </div>
        {/* Header */}
        <div className="mb-2 shrink-0">
          <h1 className="text-xl md:text-2xl font-bold text-white">
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
                  : "border-border hover:border-primary-200 bg-white dark:bg-[#16181C]"
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
                  {(() => {
                    const lines = faq.answer.split("\n");
                    const hasListItems = lines.some((line) => line.trim().startsWith("-"));
                    
                    if (!hasListItems) {
                      return (
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      );
                    }
                    
                    // Split into text and list sections
                    const parts: Array<{ type: "text" | "list"; content: string[] }> = [];
                    let currentText: string[] = [];
                    let currentList: string[] = [];
                    
                    lines.forEach((line) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith("-")) {
                        // If we have accumulated text, save it
                        if (currentText.length > 0) {
                          parts.push({ type: "text", content: currentText });
                          currentText = [];
                        }
                        // Add to list
                        currentList.push(trimmed.substring(1).trim());
                      } else if (trimmed) {
                        // If we have accumulated list items, save them
                        if (currentList.length > 0) {
                          parts.push({ type: "list", content: currentList });
                          currentList = [];
                        }
                        // Add to text
                        currentText.push(trimmed);
                      }
                    });
                    
                    // Add remaining items
                    if (currentText.length > 0) {
                      parts.push({ type: "text", content: currentText });
                    }
                    if (currentList.length > 0) {
                      parts.push({ type: "list", content: currentList });
                    }
                    
                    return (
                      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                        {parts.map((part, partIndex) => {
                          if (part.type === "text") {
                            return (
                              <p key={partIndex}>{part.content.join(" ")}</p>
                            );
                          } else {
                            return (
                              <ul key={partIndex} className="list-disc list-inside space-y-1 ml-2">
                                {part.content.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            );
                          }
                        })}
                      </div>
                    );
                  })()}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
    )
  }

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
                  {(() => {
                    const lines = faq.answer.split("\n");
                    const hasListItems = lines.some((line) => line.trim().startsWith("-"));
                    
                    if (!hasListItems) {
                      return (
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      );
                    }
                    
                    // Split into text and list sections
                    const parts: Array<{ type: "text" | "list"; content: string[] }> = [];
                    let currentText: string[] = [];
                    let currentList: string[] = [];
                    
                    lines.forEach((line) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith("-")) {
                        // If we have accumulated text, save it
                        if (currentText.length > 0) {
                          parts.push({ type: "text", content: currentText });
                          currentText = [];
                        }
                        // Add to list
                        currentList.push(trimmed.substring(1).trim());
                      } else if (trimmed) {
                        // If we have accumulated list items, save them
                        if (currentList.length > 0) {
                          parts.push({ type: "list", content: currentList });
                          currentList = [];
                        }
                        // Add to text
                        currentText.push(trimmed);
                      }
                    });
                    
                    // Add remaining items
                    if (currentText.length > 0) {
                      parts.push({ type: "text", content: currentText });
                    }
                    if (currentList.length > 0) {
                      parts.push({ type: "list", content: currentList });
                    }
                    
                    return (
                      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                        {parts.map((part, partIndex) => {
                          if (part.type === "text") {
                            return (
                              <p key={partIndex}>{part.content.join(" ")}</p>
                            );
                          } else {
                            return (
                              <ul key={partIndex} className="list-disc list-inside space-y-1 ml-2">
                                {part.content.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            );
                          }
                        })}
                      </div>
                    );
                  })()}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}

