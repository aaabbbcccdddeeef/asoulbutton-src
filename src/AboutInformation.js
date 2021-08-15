import {Card, Divider} from 'antd'

export default function AboutInformation() {
    return (
        <Card style={{marginTop: '2vh', marginLeft: '2vw', marginRight: '2vw', height: '80vh'}}>
            <h2>A-Soul 按钮</h2>
            <p>A-Soul是乐华娱乐首个虚拟偶像企划，由五位小姐姐向晚，贝拉，珈乐，嘉然，乃琳组成。本项目收录了企划直播或视频作品中一些有趣的音频切片，供粉丝进行参考。</p>
            <Divider />
            <p>由asoul-button devTeam满怀爱意地采用Reactjs+antd开发，托管于Github Pages。</p>
            <p>灵感来自<a href="https://github.com/LionelChen/imi-button">imi-button</a>项目，按照GPLv3开源。</p>
            <Divider />
            <h3>想要添加音频？</h3>
            <p>查看
                <a href="https://github.com/asoulbutton/asoulbutton.github.io" target="_blank">asoul-button的Github Pages仓库</a>，
                音频文件按照assets/directoryName/fileName.*的结构存储，
                文件地址配置存储在config.json中。
                如果想要添加一个类别，则在sections数组中添加一个新对象，
                并注明其directoryName（目录名）和sectionName（实际在页面上显示的类别名），
                然后在其audios数组中添加若干描述音频信息的对象。
            </p>
            <p>
                audios数组中存储的对象需要注明两个属性：title和src。
                title是音频在页面上对应按钮显示的名称，src是文件名。
            </p>
            <p>
                添加完成后，你可以提交pull request。
            </p>
            <Divider />
            <h3>想要贡献代码？</h3>
            <p>查看<a href="https://github.com/asoulbutton/asoulbutton-src" target="_blank">asoul-button的源代码仓库</a>，
                所有代码按照GPLv3开源。欢迎star，fork，提issue。</p>
        </Card>
    )
}