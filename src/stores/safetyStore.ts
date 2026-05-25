import { create } from 'zustand'

interface SafetyState {
  severityScore: number
  latestFeedback: string

  setResult: (
    severity: number,
    feedback: string,
  ) => void
}

export const useSafetyStore =
  create<SafetyState>((set) => ({
    severityScore: 0,
    latestFeedback: '',

    setResult: (severity, feedback) =>
      set({
        severityScore: severity,
        latestFeedback: feedback,
      }),
  }))