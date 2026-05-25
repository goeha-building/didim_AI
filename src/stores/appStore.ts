import { create } from 'zustand'

interface AppState {
  seedPoints: number
  fontScale: number
  highContrast: boolean

  addSeed: (amount: number) => void
  toggleContrast: () => void
  increaseFont: () => void
  decreaseFont: () => void
}

export const useAppStore = create<AppState>((set) => ({
  seedPoints: 120,
  fontScale: 1,
  highContrast: false,

  addSeed: (amount) =>
    set((state) => ({
      seedPoints: state.seedPoints + amount,
    })),

  toggleContrast: () =>
    set((state) => ({
      highContrast: !state.highContrast,
    })),

  increaseFont: () =>
    set((state) => ({
      fontScale: Math.min(state.fontScale + 0.1, 1.5),
    })),

  decreaseFont: () =>
    set((state) => ({
      fontScale: Math.max(state.fontScale - 0.1, 0.8),
    })),
}))