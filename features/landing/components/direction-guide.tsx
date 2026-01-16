"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin } from "lucide-react";
import { type Airport } from "../constants/airports";
import { useIsMobile } from "@/hooks/use-mobile";

interface DirectionGuideProps {
  airport: Airport;
  onBack: () => void;
  onDone: () => void;
}

interface DirectionSection {
  title: string;
  description: string;
}

// Parse directions into sections (Departure, Arrival, etc.)
function parseDirections(directions: string): DirectionSection[] {
  const sections: DirectionSection[] = [];
  const lines = directions.split("\n\n");
  
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    
    // Check if line starts with a section title (Departure, Arrival, Concourse, etc.)
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex > 0 && colonIndex < 50) {
      const title = trimmed.substring(0, colonIndex).trim();
      const description = trimmed.substring(colonIndex + 1).trim();
      sections.push({ title, description });
    } else {
      // If no colon, treat as continuation of previous section or standalone
      if (sections.length > 0) {
        sections[sections.length - 1].description += "\n\n" + trimmed;
      } else {
        sections.push({ title: "", description: trimmed });
      }
    }
  });
  
  return sections;
}

function DirectionCard({ title, description, isMobile }: { title: string; description: string; isMobile: boolean }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Gradient top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #9EC9FA 0%, #0960C1 33.65%, #0960C1 73.56%, #9EC9FA 100%)",
        }}
      />
      <Card className={`p-4 pt-5 border-t-0 rounded-xl rounded-t-2xl ${
        isMobile ? "bg-white dark:bg-[#16181C]" : "bg-white dark:bg-card/50"
      }`}>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
          <div className="flex-1">
            {title && (
              <h4 className="font-semibold text-sm text-primary-500 dark:text-foreground mb-1">
                {title}
              </h4>
            )}
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function DirectionGuide({ airport, onBack, onDone }: DirectionGuideProps) {
  const isMobile = useIsMobile();

  if(isMobile) {
    return (
      <div className="w-full max-w-lg mx-auto px-4">
        <div className="p-2 space-y-6">
          {/* Back Button */}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-white">BACK</span>
            </Button>
          </div>

          {/* Header */}
          <div className="py-6">
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              Direction Guide
            </h1>
            <p className="text-blue-200 text-sm md:text-base mt-1">
              Follow these instructions
            </p>
          </div>

          {/* Directions - grouped by terminal */}
          <div className="space-y-6 mb-6">
            {airport.terminals.map((terminal, terminalIndex) => {
              const sections = parseDirections(terminal.directions);
              return (
                <div key={terminalIndex} className="space-y-4">
                  {/* Terminal name header */}
                  <h3 className="font-semibold text-base text-white mb-2">
                    {terminal.name}
                  </h3>
                  
                  {/* Each section (Departure, Arrival, etc.) as separate row */}
                  {sections.map((section, sectionIndex) => (
                    <DirectionCard
                      key={sectionIndex}
                      title={section.title}
                      description={section.description}
                      isMobile={true}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Done Button */}
          <Button
            onClick={onDone}
            className="w-full bg-primary-500 hover:bg-primary-900 dark:bg-primary-500 text-white rounded-xl py-6 text-base font-medium"
          >
            Done
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <Card className="p-6 md:p-8 bg-white dark:bg-card shadow-xl rounded-3xl border-0">
        {/* Back Button */}
        <div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK</span>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-primary-950">
            Direction Guide
          </h1>
          <p className="text-blue-500 text-sm md:text-base mt-1">
            Follow these instructions
          </p>
        </div>

        {/* Directions - grouped by terminal */}
        <div className="space-y-6 mb-6">
          {airport.terminals.map((terminal, terminalIndex) => {
            const sections = parseDirections(terminal.directions);
            return (
              <div key={terminalIndex} className="space-y-4">
                {/* Terminal name header */}
                <h3 className="font-semibold text-base text-primary-500 dark:text-foreground mb-2">
                  {terminal.name}
                </h3>
                
                {/* Each section (Departure, Arrival, etc.) as separate row */}
                {sections.map((section, sectionIndex) => (
                  <DirectionCard
                    key={sectionIndex}
                    title={section.title}
                    description={section.description}
                    isMobile={false}
                  />
                ))}
              </div>
            );
          })}
        </div>

        {/* Done Button */}
        <Button
          onClick={onDone}
          className="w-full bg-primary-950 hover:bg-primary-900 dark:bg-primary-500 text-white rounded-xl py-6 text-base font-medium"
        >
          Done
        </Button>
      </Card>
    </div>
  );
}
