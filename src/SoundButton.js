import {Button} from "antd";
import {useEffect, useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";

export default function SoundButton(props) {
    const [playState, setPlayState] = useState(false);

    const handleEnded = () => {
        if (props.audioPanel.currentSrc === props.src) {
            setPlayState(false);
        }
    }
    const handlePaused = () => {
        if (props.audioPanel.currentSrc === props.src) {
            setPlayState(false);
        }
    }

    const handleClick = () => {
        props.audioPanel.pause();
        props.audioPanel.currentTime = 0;
        const newAudio = new Audio(props.src);
        props.updateAudio(newAudio);
        newAudio.addEventListener('ended', handleEnded);
        newAudio.play();
        console.log("start");
    }
    const renderButton = () => {
        if (props.playState) {
            return (
                props.audioTitle
            )
        } else {
            return (
                props.audioTitle
            )
        }
    }

    return (
        <div style={{marginLeft: '5px'}}>
            <Button onClick={handleClick} shape="round" type="">
                {renderButton()}
            </Button>
        </div>
    )
}