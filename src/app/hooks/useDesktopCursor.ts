import { useEffect, useState } from "react";

// Enables the custom cursor only on devices with a fine pointer and hides the native cursor.
export function useDesktopCursor() {
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const shouldShowCustomCursor = !isMobile && hasFinePointer;

    setShowCustomCursor(shouldShowCustomCursor);

    if (!shouldShowCustomCursor) {
      return;
    }

    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
      a, button, input, textarea {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = previousCursor;
      style.remove();
    };
  }, []);

  return showCustomCursor;
}
