"use client";

import { useEffect } from "react";

export default function DisableCopy() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return null;
}