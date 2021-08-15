import { Card } from "antd";
import SoundButton from "./SoundButton";
import {useEffect, useState} from "react";

export default function SectionCard(props) {
    const [states, setStates] = useState(Array(props.config.audios.length).fill(false));

    const flipState = (id) => (value) => {
        const tempStates = states;
        tempStates[id] = value;
        setStates(tempStates);
    }
    const renderCard = () => {
        return (
            <div style={{display: 'flex'}}>
                {
                    props.config.audios.map((audio) =>
                        <SoundButton
                            audioTitle={audio.title}
                            key={audio.title}
                            src={'/assets/' + props.config.directoryName + '/' + audio.src}
                            audioPanel={props.audioPanel}
                            updateAudio={props.updateAudio}
                        />)
                }
            </div>

        )

    }

    return (
        <Card title={props.config.sectionName} style={{marginTop: '2vh', marginLeft: '2vw', marginRight: '2vw'}}>
            {renderCard()}
        </Card>
    )
}
