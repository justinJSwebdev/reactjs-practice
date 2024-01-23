import { create } from 'zustand'

const useCounterStore = create((set) => ({
    count: 0,
    increasePopulation: () => set((state) => ({ bears: state.counter + 1 })),
    removeAllBears: () => set({ counter: 0 }),
}))
export default useCounterStore