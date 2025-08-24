"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      theme="system"
      richColors
      toastOptions={{
        style: {
          borderRadius: 12,
        },
      }}
    />
  );
}


