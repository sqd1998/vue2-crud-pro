<template>
  <div class="father">
     <el-button type="primary" class="back" @click="goback">返回</el-button>
    <h1>music time</h1>
    <h3>HTML5 music player.</h3>
 <!--music：当前播放的音乐。 list：播放列表 ：showlrc：是否显示歌词-->
<aplayer :music="audio[0]" :list="audio"  :show-lrc="true" class="onMove" listMaxHeight="265px"></aplayer>
     <div class="btn">
       <el-button round @click="toGitee">Gitee</el-button>
       <el-button round @click="toGithub">Github</el-button>
     </div>
     <Evanyou class="bgc"></Evanyou>
  </div>
</template>

<script>

import aplayer from "vue-aplayer" 
import Evanyou from "../../components/Evanyou"

export default {
    components: {
       aplayer,
       Evanyou
    },
    data(){
    return{
        // 音频列表
        audio:  [
            {
                title:'Falling Down',
                artist: 'Wild Cards,James Delaney',
                src: 'http://music.163.com/song/media/outer/url?id=515454649.mp3',
                pic: 'https://p2.music.126.net/zyM2NUWMH43vrcObVVF8Hg==/109951164808458773.jpg?param=130y130',
                lrc: '[00:00.000] 作词 : Wild Cards[00:01.000] 作曲 : Wild Cards[00:27.89]Feel like I’m drunk when I’m sober[00:30.87]You’ve been turning me inside out[00:34.21]Know that I’ve lost my composure[00:36.99]It’s like I’ve been stuck in a blackout[00:40.88]Long night cold sweat I’m shaking[00:44.02]High time low points you take me[00:47.26]Missed calls long texts I’m slipping[00:50.64]Away too deep I’ve drifted[00:53.23][00:54.37]I feel a change in me lately[00:57.41]I’m all worked up when you’re not around[01:00.89]You might think that I’m crazy[01:03.89]But I can’t see straight when I’m falling down[01:17.67]No I can’t see straight when I’m falling down[01:26.18]Oooh[01:31.21]No I can’t see straight when I’m falling down[01:39.90]Oooh[01:44.92]No I can’t see straight when I’m falling down[01:47.93]Lost in a love hangover[01:51.16]Every day you’ve been sticking around[01:54.16]Wishing that I could hold ya[01:58.09]But I’m thinking you’d turn me down[02:01.47]Long night cold sweat I’m shaking[02:04.66]High time low points you take me[02:07.94]Missed calls long texts I’m slipping[02:11.42]Away too deep I’ve drifted[02:14.96]I feel a change in me lately[02:13.81][02:17.89]I’m all worked up when you’re not around[02:21.78]You might think that I’m crazy[02:24.81]But I can’t see straight when I’m falling down[02:38.99]No I can’t see straight when I’m falling down[02:48.26]Oooh[02:53.53]No I can’t see straight when I’m falling down[03:01.61]Oooh[03:06.83]No I can’t see straight when I’m falling down[03:11.71]When I’m falling down[03:15.09]When I’m falling down[03:18.76]When I’m falling down',
                theme: 'pic'
            },
            {
                title:'Memory Lane',
                artist: 'Tobu',
                url: 'http://music.163.com/song/media/outer/url?id=1962097169.mp3',
                pic: "https://p1.music.126.net/R-0cSaYW0Pw1kQuwJhzsUw==/109951167637769960.jpg?param=130y130" ,
                lrc: '[00:00.00] (,,•́ . •̀,,) 轻音乐,请欣赏~',
            },
            {
                title:'Life',
                artist: 'Tobu',
                url: 'http://music.163.com/song/media/outer/url?id=28830410.mp3',
                pic: 'https://p1.music.126.net/wZAKvN3mbj_QmVEMd786iQ==/109951167481004451.jpg?param=130y130', // prettier-ignore
                lrc: '[00:00.000] 作词 : Toms Burkovskis[00:01.000] 作曲 : Toms Burkovskis[00:58.34]Everything changes[01:30.09]Life[02:29.03]Life!',
            },
            {
                title:'水星记',
                artist: '郭顶',
                url: 'http://music.163.com/song/media/outer/url?id=441491828.mp3',
                pic: "https://p1.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg?param=130y130" ,
                lrc: '[00:00.000] 作词 : 郭顶[00:01.000] 作曲 : 郭顶[00:02.000] 编曲 : 郭顶[00:03.000] 监制 : 郭顶[00:19.200]着迷于你眼睛[00:21.510][00:22.910]银河有迹可循[00:25.040][00:26.160]穿过时间的缝隙[00:28.980][00:29.740]它依然真实地[00:32.750][00:33.460]吸引我轨迹[00:36.230][00:40.440]这瞬眼的光景[00:42.950][00:43.970]最亲密的距离[00:46.550][00:47.470]沿着你皮肤纹理[00:51.380]走过曲折手臂[00:54.040][00:54.960]做个梦给你[00:57.230][00:58.580]做个梦给你[01:01.249][01:03.668]等到看你银色满际[01:06.260][01:07.069]等到分不清季节更替[01:11.590][01:12.938]才敢说沉溺[01:16.078][01:19.980]还要多远才能进入你的心[01:26.200][01:27.170]还要多久才能和你接近[01:33.310][01:34.328]咫尺远近却[01:36.780]无法靠近的那个人[01:42.000]也等着和你相遇[01:47.610][01:49.030]环游的行星[01:51.750][01:52.269]怎么可以[01:55.170][01:56.129]拥有你[01:57.989][02:13.728]这瞬眼的光景[02:16.269][02:17.119]最亲密的距离[02:19.679][02:20.628]沿着你皮肤纹理[02:24.310]走过曲折手臂[02:27.359][02:28.060]做个梦给你[02:30.478][02:31.579]做个梦给你[02:34.619][02:36.589]等到看你银色满际[02:40.288]等到分不清季节更替[02:44.660][02:45.869]才敢说沉溺[02:53.138]还要多远才能进入你的心[02:59.399][03:00.329]还要多久才能和你接近[03:06.478][03:07.429]咫尺远近却[03:09.560]无法靠近的那个人[03:15.128]也等着和你相遇[03:20.638][03:21.829]环游的行星[03:24.739][03:25.388]怎么可以[03:29.079]拥有你[03:35.530][04:05.218]还要多远才能进入你的心[04:10.869][04:11.929]还要多久才能和你接近[04:18.028][04:19.050]咫尺远近却无法靠近的那个人[04:26.687]要怎么探寻[04:30.319]要多么幸运[04:33.538]才敢让你发觉你并不孤寂[04:39.778][04:40.509]当我还可以再跟你飞行[04:46.579][04:47.690]环游是无趣[04:50.569][04:51.339]至少可以[04:54.639][04:55.240]陪着你',
            },
             {
                title:'耳喃',
                artist: 'PIggy',
                url: 'http://music.163.com/song/media/outer/url?id=1803936748.mp3',
                pic: 'https://p2.music.126.net/nwtqhmB6pmSKOZQ7fbJjQw==/109951165536945801.jpg?param=130y130', // prettier-ignore
                lrc: '[00:00.000] 作词 : PIggy[00:01.000] 作曲 : PIggy[00:10.924]你看那月儿弯弯有几分似你[00:13.970]耀眼的月光 快照进我心[00:16.753]你说这是最美好的风景[00:22.265]但静悄悄距离却越靠越近[00:25.257]我们都发觉但却不言语[00:29.746]The song is for you[00:31.168]快带上随身听[00:33.366]想要每天清晨唱首love song 给你听[00:39.456]陪你数天上一闪亮晶晶[00:44.279]爱河有漫漫长路和温柔动人的你[00:50.512]我们就像是命中注定[00:55.611]让我做你的随身听[00:58.191]就算除了你没人听[01:02.761]穿过大海和森林[01:04.983]内存里装满回忆[01:07.137]你藏在满天星光里[01:09.584]承认我也为你着迷[01:13.191]每朵云都下落不明[01:15.783]月亮也不见踪迹[01:19.071]你喜欢听周杰伦的旋律[01:21.641]余佳运陶喆的r&b[01:24.737]我也能把情歌唱的动听[01:29.820]多少次坠入谷底又因你升起[01:32.961]为何你能让rappers变走心[01:37.369]我也想变很深情[01:38.849]可唱不好转音[01:41.297]I can sing like justin bieber 我有在学钢琴[01:46.661]为何要颤抖when you right with me[01:52.188]为见你一面 我环游遍了整个星系[01:58.218]千千万万遍哼的melody[02:03.534]让我做你的随身听[02:05.872]就算除了你没人听[02:10.286]穿过大海和森林[02:12.481]内存里装满回忆[02:14.744]你藏在满天星光里[02:17.046]承认我也为你着迷[02:20.565]每朵云都下落不明[02:23.365]月亮也不见踪迹[02:26.592]目光所及是你[02:28.088]诗和远方是你[02:28.940]我所有的日记[02:30.390]都写着我只喜欢你[02:31.862]夜色匆忙又何妨[02:33.425]朝朝暮暮是你[02:34.588]邂逅你是场宿命[02:36.070]回忆化成诗句[02:37.502]是对我重要的[02:38.613]让音符敲进心里[02:40.525]你能够梦到的[02:41.518]都跟我有着关系[02:43.134]要目不斜视[02:44.485]永远如此的望着你[02:47.414]得到你[02:49.420]想要每天清晨唱首love song 给你听[02:55.042]陪你数天上一闪亮晶晶[02:59.862]爱河有漫漫长路和温柔动人的你[03:06.275]我们就像是命中注定[03:11.382]让我做你的随身听[03:13.831]就算除了你没人听[03:18.551]穿过大海和森林[03:20.712]内存里装满回忆[03:22.909]你藏在满天星光里[03:25.255]承认我也为你着迷[03:28.855]每朵云都下落不明[03:31.919]月亮也不见踪迹',
            },
             {
                title:'下坠Falling',
                artist: 'Corki刘宗鑫',
                url: 'http://music.163.com/song/media/outer/url?id=1328146041.mp3',
                pic: "https://p2.music.126.net/TyQNalBMYwsCOl5sq_NBTA==/109951164573566845.jpg?param=130y130" ,
                lrc: '[00:00.000] 作词 : Corki刘宗鑫[00:01.000] 作曲 : Corki刘宗鑫[00:08.425]混音/制作：Corki[00:12.676]编曲：ZOZOO[00:17.151]当我拿起笔写下第一句之后[00:20.903]看到了尽头[00:24.908]你走后我无尽下坠持续拼凑[00:28.658]曾说的绿洲[00:32.409]封印思念魔咒[00:35.658]过往我保留[00:38.154]也没期待过[00:39.410]为你放下身段祈求[00:43.158]被现实压破头[00:48.409]喝醉后的梦里[00:50.160]我往前你退后[00:52.402]虚无的存在感[00:54.157]You know[00:56.154]放下我抛弃我[00:58.159]瞬间风起云涌[00:59.902]描绘的未来没了以后[01:03.155]我只期待你用天使般的手[01:07.903]再紧紧抱住我[01:11.155]对你卑微也只是一种习惯[01:15.403]在天亮了以后 我无尽下坠[01:22.903]曾经爱过你怨过你恨过你[01:25.411]尝试放弃你谁都想做自己[01:27.408]包容你一切不只是为了你[01:28.905]收起脾气也为了心中自己[01:31.160]放下一切束缚以为做得到[01:32.912]扒开旧的伤口腐烂我苦笑[01:34.655]破碎一地的我组建在重造[01:36.663]如果再相遇 会给你微笑[01:39.413]I lost my time 你别太意外[01:41.156]像个小孩天真的对你青睐[01:46.913]I lost my time 你别太意外[01:48.657]像个小孩天真的对你青睐[01:54.660]当路灯断了电[01:56.657]我被抽离到过去[01:58.907]想从头再和你[02:00.405]但我左右在迟疑[02:02.659]当世界倾斜我拉你回到故事里[02:06.665]可结局没能把你拥入我的怀里[02:10.414]封印思念魔咒[02:13.156]过往我保留[02:16.163]也没期待过[02:17.161]为你放下身段祈求[02:20.909]被现实压破头[02:28.156]喝醉后的梦里[02:30.164]我往前你退后[02:32.162]虚无的存在感[02:34.159]You know[02:35.910]抛下我放弃我[02:37.665]瞬间风起云涌[02:39.916]描绘的未来没了以后[02:42.911]我只期待你用天使般的手[02:47.915]再紧紧抱住我[02:50.911]对你卑微也只是一种习惯[02:55.416]在天亮了以后 我无尽下坠[03:04.913]喝醉后的梦里[03:06.910]我往前你退后[03:08.665]虚无的存在感[03:10.916]You know[03:12.413]抛下我放弃我[03:14.668]瞬间风起云涌[03:16.408]描绘的未来没了以后[03:19.660]我只期待你用天使般的手[03:24.165]再紧紧抱住我[03:27.414]对你卑微也只是一种习惯[03:31.919]在天亮了以后 我无尽下坠',
            },
              {
                title:'Something Just Like This(Megamix)',
                artist: 'AnDyWuMUSICLAND,Worry Free Studios',
                url: 'http://music.163.com/song/media/outer/url?id=471565537.mp3',
                pic: "https://p1.music.126.net/wyMwZZPaf2gOl8MKOFjGqA==/109951166171144362.jpg?param=130y130" ,
                lrc: "[00:00.00] (,,•́ . •̀,,) 轻音乐,请欣赏~",
            },
             {
                title:'At Least I Had Fun',
                artist: 'Martin Jensen,RANI',
                url: 'http://music.163.com/song/media/outer/url?id=1470902634.mp3',
                pic: "https://p1.music.126.net/SZqw86i_qlhgiLqugpeMtg==/109951165233266022.jpg?param=130y130" ,
                lrc: "[00:00.000] 作词 : Martin Jensen/Mads Dyhrberg/Jonas Kröper/Yoshi L.. H. Breen/Shannon Hilversum[00:00.620] 作曲 : Martin Jensen/Mads Dyhrberg/Jonas Kröper/Yoshi L.. H. Breen/Shannon Hilversum[00:01.240]Oh, oh[00:05.359]Oh, oh[00:08.330]Stuck in a daydream, in paradise[00:12.413]That summer feeling, uh-uuh-oh[00:16.689]Don’t need no reason, just living life[00:20.640]No time for sleeping[00:22.841][00:23.694]So we broke some hearts and we danced on cars all night long[00:27.933]Went to every bar, underneath the stars one by one[00:31.947]You told me to grow up, but I just can’t help myself[00:35.951]Maybe I’m messed up, and maybe I need some help[00:39.867][00:40.264]Yeah I woke up with a headache and my memory’s all gone[00:44.219]And I spent all of my money on martinis and rum[00:48.301]Now I only got one dollar till the end of the month[00:52.391]Should be sorry but not sorry[00:55.899]At least I had fun[00:59.124]Oh-oh[01:00.002]At least I had fun[01:04.082]At least I had fun[01:08.253]At least I had fun[01:11.051][01:12.423]No, Oh-yeah[01:14.507][01:16.484]Had good intentions, guess it went wrong (Oh)[01:20.817]But I aint tripping, no-oh[01:23.803][01:23.853]So we broke some hearts and we danced on cars all night long[01:27.968]Went to every bar, underneath the stars one by one[01:31.890]You told me to grow up, but I just can' t help myself[01:35.832]Maybe I’m messed up, and maybe I need some help[01:40.035][01:40.066]Yeah I woke up with a headache and my memory’s all gone[01:43.997]And I spent all of my money on martinis and rum[01:48.384]Now I only got one dollar till the end of the month[01:52.393]Should be sorry but not sorry[01:55.972]At least I had fun[01:59.322]Oh-oh[02:00.126]At least I had fun[02:03.981]At least I had fun[02:08.290]At least I had fun[02:12.366][02:13.622]I woke up with a headache and my memory’s all gone[02:17.392]And I spent all of my money on martinis and rum[02:21.446]Now I only got one dollar till the end of the month[02:25.662]Should be sorry but not sorry[02:28.970]At least I had fun[02:31.204][02:33.138]At least I had fun[02:36.519]Oh-oh[02:37.358]At least I had fun[02:41.299]At least I had fun[02:45.478]At least I had fun",
            },
            {
                title:'你一出现',
                artist: '范芽芽',
                url: 'http://music.163.com/song/media/outer/url?id=1900002723.mp3',
                pic: "https://p1.music.126.net/Hc1bVVznektMoCjoNwQl7w==/109951166681312788.jpg?param=130y130" ,
                lrc: "[00:00.000] 作词 : 许琭琭[00:01.000] 作曲 : 侯江浩[00:02.000] 编曲 : 侯江浩[00:03.000] 制作人 : 侯江浩[00:16.63]今天爱人还未出现[00:21.13]一切好像还没改变[00:24.34]不过我一个人 期待着明天[00:31.31]烟花怦然散开情节[00:35.23]绚烂的夜如此耀眼[00:38.40]温柔承载着我许下的心愿[00:45.67]让渺小的从前变成短短的瞬间[00:52.14]有你让幸福缓缓的呈现[00:59.49]你一出现 阴天变成晴天[01:03.28]隐隐约约 照亮了心里面[01:06.89]心心念念 听你的声音在耳边[01:13.84]你一出现 银河清晖满天[01:17.96]星星点点 连成浪漫幻觉[01:21.76]深深浅浅 勾勒出你我之间的寓言[01:43.96]让渺小的从前变成短短的瞬间[01:50.42]有你让幸福缓缓的呈现[01:57.97]你一出现 阴天变成晴天[02:01.39]隐隐约约 照亮了心里面[02:05.44]心心念念 听你的声音在耳边[02:11.84]你一出现 银河清晖满天[02:16.14]星星点点 连成浪漫幻觉[02:20.02]深深浅浅 勾勒出你我之间的寓言[02:41.80]你一出现 阴天变成晴天[02:45.03]隐隐约约 照亮了心里面[02:49.16]心心念念 听你的声音在耳边[02:55.73]你一出现 银河清晖满天[02:59.66]星星点点 连成浪漫幻觉[03:03.58]深深浅浅 勾勒出你我之间的寓言[03:05.227] 吉他 : 吴海峰[03:07.396] 贝斯 : 苏虹文[03:09.565] 和声 : 小手鹅混音工程师[03:11.734] 混音工程师 : 徐伊豆/褚晨茜@鲸伊Studio[03:13.903] 母带工程师 : 徐伊豆/褚晨茜@鲸伊Studio[03:16.072] 策划 : 吴飞雄[03:18.241] 监制 : 萧跃[03:20.410] 营销推广 : 噼里啪啦Studio[03:22.579] 发行 : 讯飞音乐[03:24.748] 未经著作权人书面许可，不得以任何方式（包括翻唱、翻录等）使用",
            },
             {
                title:'Bite',
                artist: 'D.O.',
                url: 'http://music.163.com/song/media/outer/url?id=1989964053.mp3',
                pic: "https://p2.music.126.net/dGPuRX4Oyni_3cNhHBIR0A==/109951167971994770.jpg?param=130y130" ,
                lrc: "[00:00.000] 作词 : 김혜정[00:01.000] 作曲 : Gesture/HeyFarmer[00:16.33]흐릿했던 시야가 좀 더 흐려진 기분야[00:23.11]하긴 뭐 매번 불친절한 세상, 세상[00:28.88]거대했던 착각 꽤 아파[00:33.20]It’s miserable miserable[00:35.76]어제와는 뭐라도 좀 다를 거라 믿었던 게 yeah[00:41.00]Mistake mistake, My bad[00:43.98]무심하게 그저 눈 감은 채[00:49.87]고요하길 원해 넌 허나 이번만은 쉽지 않아[00:53.99]잘 봐 날 봐[00:56.56]All I need is[00:57.61]One Bite One Bite[01:00.67]더 삼켜낼수록 강해지는 법[01:03.76]I need just One Bite yeah just One Bite[01:07.34]now you gotta know, yeah you gotta know[01:10.31]어둠의 한 귀퉁이 그 어디쯤[01:13.84]베어 물어 이른 새벽 동 트기 전 right now[01:17.80]One Bite, need just One Bite[01:20.91]now you gotta know, yeah you gotta know yeah[01:28.70]이 밤을 툭 갈라[01:30.51]더 파고들어가[01:32.00]긴 씁쓸함을 독배처럼 삼키네[01:35.44]내 무모한 판단[01:37.57]딱 하나면 돼 난[01:39.38]고독히 울린 howling[01:41.28]기준이 다 달라 말 많아[01:45.22]Unreasonable, reasonable[01:47.87]답이 뭐가 됐든 결코 피해갈 수 없으니까 yeah[01:53.43]No way no way, give up[01:56.08]무심하게 그저 눈 감은 채[02:01.89]고요하길 원해 넌 허나 이번만은 쉽지 않아[02:06.04]잘 봐 날 봐[02:08.31]All I need is[02:09.35]One Bite One Bite[02:12.46]더 삼켜낼수록 강해지는 법[02:15.24]I need just One Bite yeah just One Bite[02:19.37]now you gotta know, yeah you gotta know[02:22.46]어둠의 한 귀퉁이 그 어디쯤[02:25.79]베어 물어 이른 새벽 동 트기 전 right now[02:29.84]One Bite, need just One Bite[02:33.03]now you gotta know, yeah you gotta know yeah[02:36.46]Take out or break out[02:39.98]또 그게 뭐든 상관없지만[02:44.02]너 조심해 이 밤[02:46.29]Cause I will eat you up[02:49.61]All I need is[02:50.44]One Bite One Bite[02:53.58]더 삼켜낼수록 강해지는 법[02:56.54]I need just One Bite yeah just One Bite[03:00.46]now you gotta know, yeah you gotta know[03:03.44]어둠의 한 귀퉁이 그 어디쯤[03:06.92]베어 물어 이른 새벽 동 트기 전 right now[03:10.85]One Bite, need just One Bite[03:14.26]now you gotta know, yeah you gotta know yeah",
            },
        ],
    }
    },
    methods: {
      goback(){
        this.$router.go(-1)

      },
      toGithub(){
        location.href = "https://github.com/"
      },
      toGitee(){
        location.href = "https://gitee.com/"

      }
    }


}     
          
    

</script>

<style lang="less" scoped>
.father {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  // text-align: center;
  margin-top:90px;
  font-weight:normal;
  font-size:40px;
}
h3 {
  margin-top:40px;
  color: #999;
  font-weight:normal;
  letter-spacing:1px;
}
.onMove{
  margin-top:40px;
  width: 600px;
}
.back {
  margin-left: auto;
}
.btn .el-button {
  margin-top:40px;
  border: 1px solid #999;


}
.bgc {
  z-index: -1 !important;
}
</style>
