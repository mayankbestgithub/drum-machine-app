import { useDispatch, useSelector } from 'react-redux';
import { audioCurrent, play } from '../Audios/audiosSlice';
import './Audio.css';

const Audio = (prop) => {
    const dispatch = useDispatch();
    const current = useSelector(audioCurrent)


    const handlePlay = (e) => {

        dispatch(play(prop.track));
        document.getElementById(e.target.value).play();
        prop.onaudioClick(current)


    }
    return (<button onClick={(event) => handlePlay(event)} value={prop.track.text} className="drum-pad"><audio id={prop.track.text} className="clip">
        <source src={prop.track.src} type="audio/mp3" />
    </audio>{prop.track.text}</button>)
}

export default Audio;