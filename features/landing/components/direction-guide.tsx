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

export function DirectionGuide({ airport, onBack, onDone }: DirectionGuideProps) {
  const isMobile = useIsMobile();

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

        {/* Directions Cards - one for each terminal */}
        <div className="space-y-4 mb-6">
          {airport.terminals.map((terminal, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden">
              {/* Gradient top border */}
              <div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(90deg, #9EC9FA 0%, #0960C1 33.65%, #0960C1 73.56%, #9EC9FA 100%)",
                }}
              />
              <Card className="p-4 pt-5 border-t-0 bg-white dark:bg-[#16181C] rounded-xl rounded-t-2xl">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base text-primary-500 dark:text-foreground">
                      {terminal.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {terminal.directions}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Done Button */}
        <Button
          onClick={onDone}
          className="w-full bg-primary-950 hover:bg-primary-900 dark:bg-primary-500 text-white rounded-xl py-6 text-base font-medium"
        >
          Done
        </Button>
      </div>
    </div>
    )
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

        {/* Directions Cards - one for each terminal */}
        <div className="space-y-4 mb-6">
          {airport.terminals.map((terminal, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden">
              {/* Gradient top border */}
              <div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: "linear-gradient(90deg, #9EC9FA 0%, #0960C1 33.65%, #0960C1 73.56%, #9EC9FA 100%)",
                }}
              />
              <Card className="p-4 pt-5 border-t-0 bg-white dark:bg-card/50 rounded-xl rounded-t-2xl">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-500 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base text-primary-500 dark:text-foreground">
                      {terminal.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {terminal.directions}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
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
