"use client";

import { Card } from "@/components/ui/card";
import { MapPin, MessageCircle, Phone, HelpCircle, ChevronRight } from "lucide-react";

interface SupportOptionsProps {
  onFindSupport: () => void;
  onChatWithUs: () => void;
  onCallUs: () => void;
  onFAQ: () => void;
}

export function SupportOptions({
  onFindSupport,
  onChatWithUs,
  onCallUs,
  onFAQ,
}: SupportOptionsProps) {
  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <Card className="p-6 md:p-8 bg-white dark:bg-[#16181C] shadow-xl rounded-3xl border-0">
        {/* Header */}
        <div className="text-center mb-2 md:mb-4">
          <h1 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Welcome to the FAAN Passenger Experience Hub (PExHub)
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
          How can we help you today?
          </p>
        </div>

        {/* Support Options */}
        <div className="space-y-3 md:space-y-4">
          {/* Find Support Desk - Full width */}
          <Card
            className="p-4 md:p-5 cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-200 bg-white dark:bg-background rounded-2xl group relative overflow-hidden"
            onClick={onFindSupport}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 p-2.5 rounded-md bg-[#0857B033] dark:bg-[#0857B033]">
                <MapPin className="h-5 w-5 text-primary-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-base md:text-lg text-primary-500 dark:text-foreground">
                  Find Support Desk
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Locate the nearest support help desk at your terminal.
                </p>
              </div>
            </div>
            {/* Large background icon */}
            <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-16 w-16 text-teal/10 dark:text-teal/5" />
          </Card>

          {/* Chat With Us and Call Us - Side by side */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Chat With Us */}
            <Card
              className="p-4 cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-200 bg-white dark:bg-background rounded-2xl"
              onClick={onChatWithUs}
            >
              <div className="shrink-0 p-2.5 rounded-md bg-secondary-50  w-fit mb-3">
                <MessageCircle className="h-5 w-5 text-secondary-500" />
              </div>
              <h3 className="font-semibold text-base text-primary-500 dark:text-foreground">
                Chat With Us
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Start a conversation on WhatsApp for instant replies.
              </p>
            </Card>

            {/* Call Us */}
            <Card
              className="p-4 cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-200 bg-white dark:bg-background rounded-2xl"
              onClick={onCallUs}
            >
              <div className="shrink-0 p-2.5 rounded-xl bg-[#FFF7ED] dark:bg-[#FF690033] w-fit mb-3">
                <Phone className="h-5 w-5 text-[#EA580C] dark:text-[#F79664]" />
              </div>
              <h3 className="font-semibold text-base text-primary-500 dark:text-foreground">
                Call Us
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Speak directly with a support agent via phone.
              </p>
            </Card>
          </div>

          {/* FAQ - Full width row */}
          <Card
            className="p-4 cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-200 bg-white dark:bg-background rounded-2xl flex flex-row items-center justify-between gap-0"
            onClick={onFAQ}
          >
            <div className="flex items-center gap-3">
              <div className="shrink-0 p-2.5 rounded-xl bg-[#FAF5FF] dark:bg-[#AD46FF33]
">
                <HelpCircle className="h-5 w-5 dark:text-[#C490F4] text-[#9333EA]" />
              </div>
              <h3 className="font-semibold text-base text-primary-500 dark:text-foreground">
                Frequently Asked Questions
              </h3>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
          </Card>
        </div>
      </Card>
    </div>
  );
}

