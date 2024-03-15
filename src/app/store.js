import { configureStore } from '@reduxjs/toolkit';
import audiosReduce from '../Features/Audios/audiosSlice';
export default configureStore({
    reducer: {
        audios: audiosReduce
    }
})