"use client";

import { useRef, type RefObject } from "react";

export function useDragScroll<T extends HTMLElement>(ref: RefObject<T | null>) {
  const state = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent) => {
    if (!ref.current) return;
    state.current = {
      down: true,
      startX: e.clientX,
      startScroll: ref.current.scrollLeft,
      moved: false,
    };
    ref.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!state.current.down || !ref.current) return;
    const delta = e.clientX - state.current.startX;
    if (Math.abs(delta) > 3) state.current.moved = true;
    ref.current.scrollLeft = state.current.startScroll - delta;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    state.current.down = false;
    ref.current?.releasePointerCapture(e.pointerId);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return { onPointerDown, onPointerMove, onPointerUp, onClickCapture };
}
