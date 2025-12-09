"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

interface CallUsProps {
  onBack: () => void;
}

// Placeholder phone number - can be updated later
const TOLL_FREE_NUMBER = "0700-FAAN-HELP";
const TOLL_FREE_NUMBER_2 = "080 0000 3226";
const TOLL_FREE_NUMBER_3 = "02013303226";
const TEL_LINK = "tel:+23480 0000 3226"; // Numeric equivalent for tel: link


export function CallUs({ onBack }: CallUsProps) {
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
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Call Us
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Our agents are available 24/7 to assist you.
          </p>
        </div>

        {/* Phone Card */}
        {/* <Card className="p-6 bg-gradient-to-r from-orange-light/50 to-transparent dark:from-orange/10 border-0 rounded-xl mb-6 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-orange-light dark:bg-orange/20 mb-4">
            <Phone className="h-6 w-6 text-orange" />
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
            TOLL FREE
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary-500 dark:text-foreground">
            {TOLL_FREE_NUMBER}
          </p>
        </Card> */}

        <div className="relative mb-6 rounded-xl overflow-hidden">
          {/* Gradient top border */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              //   background: "linear-gradient(90deg, #9EC9FA 0%, #0960C1 33.65%, #0960C1 73.56%, #9EC9FA 100%)",
              background:
                "linear-gradient(90deg, #FABD9E 0%, #EA580C 33.65%, #EA580C 73.56%, #FABD9E 100%)",
            }}
          />
          <Card className="p-4 pt-5  border-t-0 border-primary-50 dark:border-[#FCD8C5] bg-white dark:bg-background rounded-xl rounded-t-2xl">
            <div className="flex flex-col items-center  gap-3">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-orange-light dark:bg-orange/20 mb-4">
                <Phone className="h-6 w-6 text-orange" />
              </div>
              <div className=" flex items-center flex-col justify-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  TOLL FREE
                </p>
                <a href={`tel:${TOLL_FREE_NUMBER_2}`} className="block">

                <p className="text-2xl md:text-3xl font-bold text-primary-950 dark:text-foreground">
                  {TOLL_FREE_NUMBER_2}
                </p>
                </a>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 mt-2">
                 PAY AS YOU GO 
                </p>
                <a href={`tel:${TOLL_FREE_NUMBER_3}`} className="block">

                <p className="text-2xl md:text-3xl font-bold text-primary-950 dark:text-foreground">
                  {TOLL_FREE_NUMBER_3}
                </p>
                </a>
                
              </div>
            </div>
         
        {/* Note */}
        <p className="text-xs text-muted-foreground text-center">
          Note: Standard network charges may apply. If using a tablet, ensure it
          supports voice calls.
        </p>
          </Card>
        </div>

       

        
      </Card>
    </div>
  );
}
