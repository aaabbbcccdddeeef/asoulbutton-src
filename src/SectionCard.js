import { Card } from "antd";
import SoundButton from "./SoundButton";

export default function SectionCard(props) {

    const renderCard = () => {
        return (
            <div style={{display: 'flex'}}>
                {
                    props.config.audios.map((audio) =>
                        <SoundButton audioTitle={audio.title} key={audio.title} src={'/assets/' + props.config.directoryName + '/' + audio.src}/>)
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
