import { create } from "zustand"

const useStore = create((set) => ({
    thumbColor: '#000000',
    trackColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    width: 16,
    borderRadius: 0,
    borderWidth: 3,
    borderStyle: 'solid',
    firefoxWidth: 'auto',
    changeThumbColor: (color) => set({ thumbColor: color }),
    changeTrack: (color) => set({ trackColor: color }),
    changeBorderColor: (color) => set({ borderColor: color }),
    changeCornerColor: (color) => set({ cornerColor: color }),
    changeWidth: (px) => set({ width: px }),
    changeBorderRadius: (px) => set({ borderRadius: px }),
    changeBorderWidth: (px) => set({ borderWidth: px }),
    changeBorderStyle: (style) => set({ borderStyle: style }),
    changeFirefoxWidth: (style) => set({ firefoxWidth: style }),
}))

export default useStore