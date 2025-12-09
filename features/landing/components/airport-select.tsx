"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { airports, type Airport } from "../constants/airports";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AirportSelectProps {
  onBack: () => void;
  onSelectAirport: (airport: Airport) => void;
}

export function AirportSelect({ onBack, onSelectAirport }: AirportSelectProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleSelect = (airport: Airport) => {
    setSelectedId(airport.id);
    // Small delay for visual feedback before navigating
    setTimeout(() => {
      onSelectAirport(airport);
    }, 150);
  };

  if(isMobile) {
    return (
      <div className="w-full max-w-lg mx-auto px-4">
        <div className="p-2  space-y-6">
        {/* Back Button */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex  gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-white">BACK</span>
          </Button>
        </div>
        {/* Header */}
        <div className="py-6">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Select Airport
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Choose your current airport terminal.
          </p>
        </div>

        {/* Airport List */}
        <div className="space-y-3">
          {airports.map((airport) => (
            <Card
              key={airport.id}
              className={`p-3 cursor-pointer border transition-all duration-200 rounded-xl flex items-center justify-between flex-row ${
                selectedId === airport.id
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-500/10"
                  : "border-border hover:border-primary-300 bg-white dark:bg-background"
              }`}
              onClick={() => handleSelect(airport)}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`font-semibold text-base ${
                      selectedId === airport.id
                        ? "text-primary-500"
                        : "text-primary-500 dark:text-foreground"
                    }`}
                  >
                    {airport.city}
                  </h3>
                  {airport.terminals.length > 1 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400">
                      {airport.terminals.length} terminals
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {airport.name} ({airport.code})
                </p>
              </div>
              <ChevronRight
                className={`h-5 w-5 ${
                  selectedId === airport.id
                    ? "text-primary-500"
                    : "text-muted-foreground"
                }`}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <Card className="p-6 md:p-8 bg-white dark:bg-dark-800 shadow-xl rounded-3xl border-0">
        {/* Back Button */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex  gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK</span>
          </Button>
        </div>
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Select Airport
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Choose your current airport terminal.
          </p>
        </div>

        {/* Airport List */}
        <div className="space-y-3">
          {airports.map((airport) => (
            <Card
              key={airport.id}
              className={`p-3 cursor-pointer border transition-all duration-200 rounded-xl flex items-center justify-between flex-row ${
                selectedId === airport.id
                  ? "border-primary-500 bg-primary-50 dark:bg-primary-500/10"
                  : "border-border hover:border-primary-300 bg-white dark:bg-background"
              }`}
              onClick={() => handleSelect(airport)}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    className={`font-semibold text-base ${
                      selectedId === airport.id
                        ? "text-primary-500"
                        : "text-primary-500 dark:text-foreground"
                    }`}
                  >
                    {airport.city}
                  </h3>
                  {airport.terminals.length > 1 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400">
                      {airport.terminals.length} terminals
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {airport.name} ({airport.code})
                </p>
              </div>
              <ChevronRight
                className={`h-5 w-5 ${
                  selectedId === airport.id
                    ? "text-primary-500"
                    : "text-muted-foreground"
                }`}
              />
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
