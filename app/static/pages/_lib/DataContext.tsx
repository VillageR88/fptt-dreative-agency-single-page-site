'use client';

import { createContext } from 'preact';
import { useRef } from 'preact/hooks';
import type { MutableRefObject, ReactNode } from 'preact/compat';

export const DataContext = createContext(
  {} as {
    menuButtonRef: MutableRefObject<HTMLButtonElement | null>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <DataContext.Provider
      value={{
        menuButtonRef,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
