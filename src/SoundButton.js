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
        if (playState) {
            props.audioPanel.pause();
            props.audioPanel.currentTime = 0;
        } else {
            props.audioPanel.pause();
            props.audioPanel.currentTime = 0;
            const newAudio = new Audio(props.src);
            props.updateAudio(newAudio);
            props.audioPanel.addEventListener('ended', handleEnded);
            props.audioPanel.addEventListener('paused', handlePaused);
            props.audioPanel.play();
            setPlayState((prev) => !prev);
        }


    }
    const renderButton = () => {
        if (playState) {
            return (
                <LoadingOutlined />
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