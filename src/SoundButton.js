import {Button} from "antd";

export default function SoundButton(props) {
    const audio = new Audio(props.src);

    const handleClick = () => {
        audio.play().catch((err) => {
            console.log("audio play err", err)
        });
    }

    return (
        <div style={{marginLeft: '5px'}}>
            <Button onClick={handleClick} shape="round">
                {props.audioTitle}
            </Button>
        </div>
    )
}