import { create } from 'zustand';

interface State {
  images: ImageType;
  oldImage: ImageTypeOne;
  compare: boolean;

  // methods
  setOldImages: (oldImage: ImageTypeOne) => void;
  setImages: (images: ImageType) => void;
  setCompare: (compare: boolean) => void;
}

type ImageTypeOne = string | null;
type ImageType = ImageTypeOne | string[];

export const useUIImages = create<State>((set) => ({
  images: null,
  oldImage: null,
  compare: false,

  setOldImages: (oldImage) => set({ oldImage }),
  setImages: (images) => set({ images }),
  setCompare: (compare) => set({ compare }),
}));
