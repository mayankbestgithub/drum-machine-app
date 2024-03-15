import { createSlice } from '@reduxjs/toolkit';

const audiosSlice = createSlice({
    name: 'audios',
    initialState: {
        current: {},
        tracks: [{ id: 1, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', text: 'Q', type: 'Heater 1' },
        { id: 2, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', text: 'W', type: 'Heater 2' },
        { id: 3, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', text: 'E', type: 'Heater 3' },
        { id: 4, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', text: 'A', type: 'Heater 4' },
        { id: 5, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', text: 'S', type: 'Clap' },
        { id: 6, src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', text: 'D', type: 'Open-HH' },
        { id: 7, src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', text: 'Z', type: "Kick-n'-Hat" },
        { id: 8, src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', text: 'X', type: 'Kick' },
        { id: 9, src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', text: 'C', type: 'Closed-HH' }]

    },
    reducers: {
        play(state, action) {
            state.current = action.payload
        }

    }
})
export const { play } = audiosSlice.actions;
export const audioTrack = state => state.audios.tracks;
export const audioCurrent = state=> state.audios.current;
export default audiosSlice.reducer;