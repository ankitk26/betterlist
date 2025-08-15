import { create } from "zustand";

type PlaylistEditorStore = {
  selectedTrackIds: Set<string>;
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  getSelected: () => string[];
  clearAll: () => void;
};

export const usePlaylistEditorStore = create<PlaylistEditorStore>(
  (set, get) => ({
    selectedTrackIds: new Set(),

    add: (trackId: string) =>
      set((state) => {
        const next = new Set(state.selectedTrackIds);
        next.add(trackId);
        return { selectedTrackIds: next };
      }),

    remove: (trackId: string) =>
      set((state) => {
        const next = new Set(state.selectedTrackIds);
        next.delete(trackId);
        return { selectedTrackIds: next };
      }),

    toggle: (trackId) =>
      set((state) => {
        const next = new Set(state.selectedTrackIds);
        if (next.has(trackId)) {
          next.delete(trackId);
        } else {
          next.add(trackId);
        }
        return { selectedTrackIds: next };
      }),

    getSelected: () => {
      // returns a fresh array of IDs
      return Array.from(get().selectedTrackIds);
    },

    clearAll: () => set({ selectedTrackIds: new Set() }),
  })
);
