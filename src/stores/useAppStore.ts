import { create } from "zustand";

type AppStore = {
  count: number;
  increment: () => void;
};

const useAppStore = create<AppStore>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useAppStore;
