"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function ModalSign({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const  MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed top-0 bottom-0 left-0 right-0 z-10 p-10 mx-auto bg-black/60"
      onClick={MouseEventHandler}
    >
      <div
        ref={wrapper}
        className="absolute p-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5"
      >
        {children}
      </div>
    </div>
  );
}