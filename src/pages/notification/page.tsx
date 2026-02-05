"use client";

import * as React from "react";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppNotification, notifications } from "@/constants/landingPage";
import WebContainer from "@/lib/webContainer";

type SectionKey = "today" | "yesterday" | "thisMonth";

const SECTIONS: Array<{ key: SectionKey; label: string }> = [
  { key: "today", label: "Today" },
  { key: "yesterday", label: "Yesterday" },
  { key: "thisMonth", label: "This Month" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 mb-3 md:text-[16px] font-bold text-foreground">
      {children}
    </p>
  );
}

function NotificationRow({ note }: { note: AppNotification }) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl border px-4 py-4 transition-colors",
        note.unread
          ? " dark:bg-primary/15 dark:border-primary/25"
          : "bg-background border-border dark:bg-background dark:border-border"
      )}
    >
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#805AF5] to-[#CD99FF] flex items-center justify-center shrink-0">
        <Bell className="h-5 w-5 text-white" fill="currentColor" stroke="currentColor" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[14px] sm:text-[15px] text-foreground truncate">
          {note.text}
        </p>
        <p className="mt-1 text-[12px] text-muted-foreground">{note.time}</p>
      </div>

      {note.unread ? (
        <span className="h-2 w-2 rounded-full bg-foreground/80 dark:bg-primary shrink-0" />
      ) : null}
    </div>
  );
}


export default function NotificationPage() {
  return (
    <WebContainer>
    <div className="w-full ">
      <div className="border-b border-border pb-6">
        <h1 className="text-[24px] md:text-[28px] font-medium text-foreground">
          Notifications
        </h1>
        <p className="text-[14px] md:text-[16px] text-foreground">
          Stay informed with real-time updates on generations, credits, subscriptions, and platform activity.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        {SECTIONS.map((s) => {
          const list = notifications[s.key] ?? [];
          if (!list.length) return null;

          return (
            <div key={s.key}>
              <SectionTitle>{s.label}</SectionTitle>
              <div className="space-y-3">
                {list.map((n) => (
                  <NotificationRow key={n.id} note={n} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </WebContainer>
  );
}
