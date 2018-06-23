//全局组件
Vue.component('shopheader',{
    props:{
        state:{
            type:Object
        }
    },
    data(){
        return{
            user:{
                currentname:'',
                currentpassword:'',
            }
        }
    },
    template:`
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow" id="top">
            <h5 class="my-0 mr-md-auto font-weight-normal text-danger p-2">XX商城</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="p-2 text-dark" href="#" v-on:click="changeisshop">我的购物车</a>
                <a class="p-2 text-dark" href="#">已买商品</a>
                <a class="p-2 text-dark" href="#">浏览过</a>
            </nav>
            <template v-if='!this.state.logined'>
                <a class="btn btn-outline-primary mr-2" href="#" v-on:click='login'>登录</a>
                <a class="btn btn-outline-primary" href="#" v-on:click='register'>注册</a>
            </template>
            <template v-else>
                <h5 class="text-bold text-info">{{user.currentname}}</h5>
                <button class="btn btn-primary" v-on:click='signout'>退出</button>
            </template>
            <div class="fixed-bottom text-right h2 mr-2">
                <a href="#top" class="nav-link text-success">Top</a>
            </div>
        </div>
    `,
    methods:{
        login(){
            if(!this.state.logined){
                this.state.islogin = true;
            }else{
                alert('你已经登陆啦!')
            }
        },
        register(){
            if(!this.state.logined){
                this.state.isregister = true;
            }else{
                alert('请退出当前账号完成注册!')
            }
        },
        signout(){
            alert('退出成功！')
            this.state.logined = false;
            this.user.currentname = '';
            this.user.currentpassword = '';
        },
        changeisshop(){
            if(!this.state.logined){
                alert("您还没有登陆哦!")
            }else{
                this.state.isshop = true;
            }
        }
    },
    mounted(){
        vm.$on('get',user=>{
            this.user.currentname = user.name;
            this.user.currentpassword = user.password;
        })
    }
})


var vm = new Vue();
new Vue({
    el:'#app',
    data(){
        return{
            users: [
                {
                    username: "张三",
                    password: "zhangsan",
                    shop:[],
                }, 
                {
                    username: "李四",
                    password: "lisi",
                    shop:[],
                }, 
                {
                    username: "王五",
                    password: "wangwu",
                    shop:[],
                }
            ],
            state:{
                islogin:false,
                isregister:false,
                logined:false,
                isshop:false
            }
        }
    },

    //局部组件
    components:{
        'maincontent':{
            props:{
                state:{
                    type:Object
                },
                users:{
                    type:Array
                }
            },
            data(){
                return{
                    search:'',
                    goodslist:[
                        //男友&运动
                        {
                            title:"2018夏季新款韩版潮流九分裤男士修身小脚裤宽松青少年休闲裤百搭哈伦裤潮男9分裤男裤子",
                            price:"85.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180305_17b4elk2gg6k2a33lfebbajl77ca7_640x960.jpg"
                        },
                        {
                            title:"TRZ新款2018男士裤子夏季休闲裤男生裤子韩版纯色宽松毛边直筒裤日系百搭棉麻九分裤",
                            price:"158.00",
                            image:"http://s11.mogucdn.com/mlcdn/c45406/180312_2hihhch6gafebd5jfbg62jj23c83e_640x960.jpg"
                        },
                        {
                            title:"菜鸟男装2018夏季新款韩版百搭港风复古撞色拼接圆领宽松短袖宽松T恤休闲男装T恤",
                            price:"85.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180313_0bic0elkl08ebgi3i41j06gi751cj_640x960.jpg"
                        },
                        {
                            title:"男鞋一脚蹬帆布鞋2018夏季新款韩版潮流懒人鞋子休闲布鞋百搭豆豆鞋男板鞋",
                            price:"99.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180227_40j6jahjge5036b5i4bic29e9bcb8_800x800.jpg"
                        },
                        {
                            title:"吾喜欢2018夏季新款韩版百搭连帽短袖男士5分袖情侣休闲青年日韩潮男装拼色防晒上衣",
                            price:"92.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/170518_01179c07cbg6kc6i1908alf4601l7_640x960.jpg"
                        },
                        {
                            title:"YIWEIMAN意威曼夏季男鞋2018新款韩版潮流百搭男鞋原宿风休闲运动网鞋透气小白鞋男",
                            price:"226.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180508_64b520gkahk95i7aabbilhlbd2b2a_640x960.jpg"
                        },
                        {
                            title:"2018夏季新品笔记印花衬衫领短袖T恤男潮拼接撞色五分袖体恤男半袖",
                            price:"99.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180406_5kah4e5ba1chf878h85f8e4i1j456_640x960.jpg"
                        },
                        {
                            title:"夏季新品男鞋子韩版板鞋潮流百搭亚麻布鞋厚底帆布鞋男士休闲鞋透气运动青年社会小白鞋男潮鞋",
                            price:"113.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180428_2f87lh7baa36f6cl2df6j8igl9c88_640x960.jpg"
                        },
                        {
                            title:"@陌菲男装 夏款全村的希望宽松原宿风个性潮流男士短袖T恤学生班服情侣装半袖男",
                            price:"70.00",
                            image:"http://s11.mogucdn.com/mlcdn/c45406/180430_28i65ba79gfac206lgl3hjlbfk36c_640x960.jpg"
                        },
                        {
                            title:"2018夏季韩版低帮透气男鞋老北京帆布鞋男民族鞋子休闲鞋一脚蹬爸爸鞋豆豆鞋",
                            price:"99.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180409_27ele1f7j7lh303akficed35l0ffi_800x800.jpg"
                        },
                        {
                            title:"大话西游周星驰2018短袖T恤男中国风情侣大码打底衫圆领打底衫",
                            price:"70.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180302_4j711e5a881f6ae8b4ialj64hcc0f_640x960.jpg"
                        },
                        {
                            title:"透气小白鞋男运动鞋百搭白色跑步鞋休闲男鞋潮鞋子2018韩版椰子鞋男夏季内增高男鞋",
                            price:"199.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180416_0c6ke5egek004cgd7iajh0ij42lll_640x960.jpg"
                        },
                        {
                            title:"扎克2018春夏季男装日系卡通印花圆领纯棉打底大码短袖男T恤",
                            price:"59.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180115_365iel6jcig1i0kfb1972al4i23ac_640x960.jpg"
                        },
                        {
                            title:"2018夏季新款男士字母印花短袖t恤韩版修身圆领半袖体恤打底衫潮男上衣纯棉半截袖个性T恤",
                            price:"49.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180414_436469019igcgcal74h4f4clc1kg6_640x960.jpg"
                        },
                        {
                            title:"菜鸟男装2018夏季新款韩版百搭品质日系亚麻短袖t恤男士复古宽松棉麻半截袖潮男",
                            price:"39.00",
                            image:"https://s3.mogucdn.com/mlcdn/17f85e/180307_8bi69c65a7dig6lelj58f83975g84_640x960.jpg"
                        },
                        {
                            title:"(月销过万)情侣纯棉夏季潮流T恤男短袖日系卡通印花上衣棉青年纯色水洗圆领男生半袖体恤",
                            price:"49.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/170519_41jjabilgj8eh2g5dg0e2bk6kj4k4_640x960.jpg"
                        },
                        {
                            title:"阿迪达斯女鞋情侣三叶草贝壳头板鞋一脚蹬粉红休闲鞋女小白鞋",
                            price:"729.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180323_67ha9dc71k1beicg2f76dhk601006_640x960.jpg"
                        },
                        {
                            title:"短袖t恤男新款2018韩版潮流学生夏季纯棉潮牌男士半袖圆领潮体恤",
                            price:"49.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180422_0hfl3a6k806bbdad07hbl3kf4k2j7_640x960.jpg"
                        },
                        {
                            title:"2018夏季新款韩版潮流短袖t恤男士圆领半袖体恤青少年打底衫百搭上衣条纹半截袖",
                            price:"49.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180514_8298h0f215kh1caj6i40ldgb8dji3_640x960.jpg"
                        },
                        {
                            title:"2018男装短袖T恤男士夏装韩版宽松刺绣休闲学生t恤短袖青少年半袖上衣百搭bf风潮",
                            price:"59.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180426_25jke9f7215ka543i2j3e57g5127i_640x960.jpg"
                        },
                        {
                            title:"2018夏季新款简约刺绣短袖T恤男韩版宽松休闲学生大码百搭潮流半袖体恤衫男士短袖情侣",
                            price:"69.00",
                            image:"https://s3.mogucdn.com/mlcdn/55cf19/180311_3e49ic0f66iefgc2ba61chik4f9f4_640x960.jpg"
                        },
                        {
                            title:"假两件迷彩短袖t恤男加肥加大码宽松体恤夏季装潮流胖子复古嘻哈半袖夏装衣服夏天男装",
                            price:"68.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180325_1id3e26a6e02c48077709b3k833gd_640x960.jpg"
                        },
                        {
                            title:"夏季日系条纹宽松韩版中袖半截袖五分袖学生短袖t恤潮流衣服男装",
                            price:"49.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180512_7d0kc54hhhjj0fej818fb16b31e9d_640x960.jpg"
                        },
                        {
                            title:"2018夏季新款原宿字母刺绣潮流短袖T恤男士日系学生百搭宽松半袖衣服夏装韩版体恤衫男生夏天",
                            price:"49.00",
                            image:"https://s3.mogucdn.com/mlcdn/c45406/180505_8cg0l4a80kd4jjdkd566ji2161405_640x960.jpg"
                        },

                        //女鞋&包包
                        {
                            title:"凉鞋女2018新款粗跟中跟女士夏季一字扣带晚晚同款真皮学生复古鞋",
                            price:"89.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180424_44e35c33j3fhhg1hld0l83klig0li_1000x1500.jpg"
                        },
                        {
                            title:"新款小白鞋女夏季透气浅口单鞋女简约板鞋一脚登懒人鞋百搭韩版女鞋",
                            price:"112.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180429_8ecakkblkad7a8hi33hhlg38g36a0_645x960.jpg"
                        },
                        {
                            title:"chic港风运动凉鞋女2018新款韩版百搭魔术贴平底网红休闲ins女鞋夏季学生厚底露趾凉鞋",
                            price:"112.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180510_25l261l329e7g07a0f2da03l960bi_640x960.jpg"
                        },
                        {
                            title:"2018新款韩版蝴蝶结可爱凉拖鞋女夏外穿时尚百搭沙滩鞋穆勒鞋女鞋",
                            price:"98.00",
                            image:"http://s3.mogucdn.com/mlcdn/55cf19/180514_18d7gaaakgi3lkbjd8365h7gh5h9h_640x960.jpg"
                        },
                        {
                            title:"2018夏季新款鞋子女2018夏季新款百搭学生水钻平跟人字拖夹趾拖鞋套趾凉拖潮女鞋女",
                            price:"70.00",
                            image:"http://s3.mogucdn.com/p2/170226/68534377_1a67db99d890e64cc53e672d9hid1_640x960.jpg"
                        },
                        {
                            title:"ins超火小白鞋春夏季新款运动鞋女鞋子韩版ulzzang原宿休闲百搭chic复古港风老爹鞋",
                            price:"84.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180418_3i3d8ajhcgj0cda1ahfh0k51b0265_640x960.jpg"
                        },
                        {
                            title:"2018夏季新款女鞋水钻铆钉平底鞋子女百搭学生套趾凉拖鞋女夏外穿",
                            price:"89.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180429_0hifjde81ikac5eakfe8a61i14cfd_640x960.jpg"
                        },
                        {
                            title:"凉鞋女2018夏季新款格子港味休闲复古原宿凉鞋夏平底网红学生罗马鞋厚底增高鞋子",
                            price:"85.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180516_40e021e0b910lei927f32a347ia60_640x960.jpg"
                        },
                        {
                            title:"文艺范蕾丝单鞋女夏2018新品韩版软底防滑平底交叉搭扣学生鞋条纹软妹休闲复古镂空罗马鞋潮",
                            price:"99.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180525_4lkba9idkh36jck7fii494cgj5859_640x960.jpg"
                        },
                        {
                            title:"2018新款凉鞋女夏蝴蝶结软妹平底包头鞋尖头低跟仙女一字扣罗马鞋",
                            price:"512.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180407_7hl0de1bj8ibh5k9e837b55918777_640x960.jpg"
                        },
                        {
                            title:"2018韩版chic女夏季新款帆布鞋百搭学生网布透气板鞋ulzzang",
                            price:"94.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180425_3dl3dej5jcdb57kk80dj2e8h807fd_640x960.jpg"
                        },
                        {
                            title:"新款水钻凉鞋女2018夏季韩版百搭露趾一字扣带厚底松糕港风学生沙滩凉鞋女潮",
                            price:"99.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180417_16ck2905lh2533475idk083a143ja_640x960.jpg"
                        },
                        {
                            title:"手抓信封包包女2018新款韩版百搭斜挎包横款方形肩包小香风菱格链条包夏季ins女包学生小包",
                            price:"85.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180514_88i9hcd44di8c3bajjedg6eg3gi3k_640x960.jpg"
                        },
                        {
                            title:"明星同款包包女2018新款韩国chic复古漆皮迷你小方包潮链条包原宿风亮面锁扣包百搭斜挎包",
                            price:"78.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180405_61cclc8fl551he52820g500113ffa_640x960.jpg"
                        },
                        {
                            title:"上新ins超火夏天小包包女2018新款潮韩版仙女包百搭单肩斜挎包包迷你小包",
                            price:"99.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180507_82bj9egd8c2f8a6dc2c0dbce8bdhc_960x1377.jpg"
                        },
                        {
                            title:"【小雅推荐】买大送小 包中包 小水桶包潮女包2018新款韩版百搭夏天小包包单肩斜挎包通勤包",
                            price:"39.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180430_88cd8gib3i5ei0k8i25j2jl5c57l5_640x960.jpg"
                        },
                        {
                            title:"韩版时尚宽肩带卡通挂件撞色水桶包新款休闲百搭质感斜挎包单肩包",
                            price:"88.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/171027_68adgh6agk3g43j2l8068dikfa3df_640x960.jpg"
                        },
                        {
                            title:"明星同款铝框拉杆箱万向轮行李箱学生女旅行箱20寸22寸24寸",
                            price:"136.00",
                            image:"http://s3.mogucdn.com/p2/161224/125294633_64iab4l0a03107l31133cfd6kd7fc_640x960.jpg"
                        },
                        {
                            title:"【王妃家】新款简约清新可爱猴子大容量女士短款钱包学生钱夹皮夹",
                            price:"50.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/171113_3c0d4g07f91l6gk0g247ae1adhg9e_640x960.jpg"
                        },
                        {
                            title:"欧洲站水钻铆钉小包包女2018新款韩版个性锁扣小方包明星同款女包气质单肩包复古潮百搭斜挎包",
                            price:"84.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180426_3e0b673gii5d747h7719de0fc7i03_640x960.jpg"
                        },
                        {
                            title:"迪丽热巴同款包包女2018新款时尚漆皮铆钉小方包百搭链条单肩斜挎包潮",
                            price:"97.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180402_2j6fglbj5g875j447f6h65hgkd1bf_640x960.jpg"
                        },
                        {
                            title:"2018包包女新款百搭大容量单肩大包韩版时尚复古手提小方包",
                            price:"2099.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/171003_2418h54ha5ai1c9090ecda9k92h7d_640x960.jpg"
                        },
                        {
                            title:"2018新款包包女包日系少女学院风小挎包原宿风韩版潮百搭宽肩带字母单肩包小包包斜挎包",
                            price:"98.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180312_81494jk429294ceca2dhg24c8b173_640x960.jpg"
                        },
                        {
                            title:"2018新款ins超火夏天小包包女包潮韩版少女桃心镭射百搭单肩明星同款链条小包小清新斜挎包",
                            price:"98.00",
                            image:"http://s3.mogucdn.com/mlcdn/c45406/180425_0c3b7k9b277klggl0k23b72il4g64_640x960.jpg"
                        },

                        //书籍
                        {
                            title:"OReilly精品图书系列：JavaScript权威指南（第6版）",
                            price:"112.00",
                            image:"https://img11.360buyimg.com/n1/s200x200_jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg"
                        },
                        {
                            title:"JavaScript高级程序设计（第3版） [Professional JavaScript for Web Developers 3rd Edition]",
                            price:"77.00",
                            image:"https://img11.360buyimg.com/n1/s200x200_g14/M05/0D/15/rBEhVVIhQfAIAAAAAARQ4BH6fHkAACrGADsdqgABFD4831.jpg"
                        },
                        {
                            title:"JavaScript从入门到精通（标准版）",
                            price:"67.00",
                            image:"https://img12.360buyimg.com/n1/s200x200_jfs/t5635/355/7524928010/392996/25478b33/5971affbNa0a26129.jpg"
                        },
                        {
                            title:"JavaScript语言精粹（修订版）",
                            price:"23.00",
                            image:"https://img13.360buyimg.com/n1/s200x200_g13/M02/04/0E/rBEhVFHbZw0IAAAAAALFxgN_LSsAAA3fgLESAwAAsXe559.jpg"
                        },
                        {
                            title:"【JS入门】正版包邮 JavaScript 从入门到精通（赠光盘）JavaScript入门",
                            price:"58.00",
                            image:"https://img10.360buyimg.com/n1/s200x200_jfs/t2065/45/970162816/366291/e300df21/5639b0aaN34faf826.jpg"
                        },
                        {
                            title:"JavaScript设计模式",
                            price:"46.00",
                            image:"https://img14.360buyimg.com/n1/s200x200_jfs/t1381/11/1302063823/85003/86409de/55c451daNf96a1c1c.jpg"
                        },
                        {
                            title:"深入浅出Node.js",
                            price:"53.00",
                            image:"https://img13.360buyimg.com/n1/s200x200_jfs/t6094/107/710811867/382815/4d54717/592bf165N755a88f0.jpg"
                        },
                        {
                            title:"Node.js硬实战：115个核心技巧",
                            price:"86.00",
                            image:"https://img10.360buyimg.com/n1/s200x200_jfs/t3154/275/4458168308/153672/a9b5507b/584839baN45eeec7b.jpg"
                        },
                        {
                            title:"Node.js设计模式（第2版）",
                            price:"85.00",
                            image:"https://img10.360buyimg.com/n1/s200x200_jfs/t14314/51/2316840235/374845/a85f9d18/5a94375dN8d4fef14.jpg"
                        },
                        {
                            title:"Web前端技术丛书：新时期的Node.js入门",
                            price:"38.00",
                            image:"https://img10.360buyimg.com/n1/s200x200_jfs/t15307/73/1574150762/99195/f33e7700/5a530814N76c7e0fc.jpg"
                        },
                        {
                            title:"包邮 Node.js区块链开发 计算机与互联网 书箱|5828733",
                            price:"40.00",
                            image:"https://img13.360buyimg.com/n1/s200x200_jfs/t19327/163/1579081462/31191/675b1068/5acf24ceNd8a0a5f5.jpg"
                        },
                        {
                            title:"Node.js实战",
                            price:"54.00",
                            image:"https://img12.360buyimg.com/n1/s200x200_g16/M00/00/1B/rBEbRlNq7V8IAAAAAAYFS_3OMQsAAAKwAFddy0ABgVj894.jpg"
                        },

                        //手机
                        {
                            title:"moqi/摩奇i7十核4G吃鸡游戏手机王者 专用安卓双卡游戏手柄长待机",
                            price:"1780.00",
                            image:"https://gd3.alicdn.com/imgextra/i4/23119264/TB20oo2ftzJ8KJjSspkXXbF7VXa_!!23119264.jpg"
                        },
                        {
                            title:"现货YotaPhone3优它3双屏墨水屏yota3俄罗斯YOTA3正品手机国礼版",
                            price:"2999.00",
                            image:"https://gd4.alicdn.com/imgextra/i4/52225887/TB2x.HSn26H8KJjy0FjXXaXepXa_!!52225887.jpg_400x400.jpg"
                        },
                        {
                            title:"GEMRY/詹姆士 R19 plus全网通4G双卡智能商务手机安全钛金威图",
                            price:"11999.00",
                            image:"https://gd3.alicdn.com/imgextra/i4/21678946/TB2rjSeq3JkpuFjSszcXXXfsFXa_!!21678946.jpg_400x400.jpg_.webp"
                        },
                        {
                            title:"【分期购送豪礼】Huawei/华为 mate 10 pro 全网通全面屏4G手机",
                            price:"3361.00",
                            image:"https://gd1.alicdn.com/imgextra/i2/488391281/TB2Fjehbzgy_uJjSZLeXXaPlFXa_!!488391281.jpg_400x400.jpg"
                        },
                        {
                            title:"【现货分期】Apple/苹果 iPhone 8苹果8手机iphone8plus国行8p 8x",
                            price:"3750.00",
                            image:"https://gd3.alicdn.com/imgextra/i2/57209708/TB29GmNmQSWBuNjSszdXXbeSpXa_!!57209708.jpg_400x400.jpg_.webp"
                        },
                        {
                            title:"优尚丰 B6000军工三防全网通4G电信防水安卓智能手机超长待机对讲",
                            price:"2680.00",
                            image:"https://gd2.alicdn.com/imgextra/i2/1653210727/TB20sxjXZH_F1JjSZFKXXbcvFXa_!!1653210727.jpg_400x400.jpg_.webp"
                        },
                        {
                            title:"现货速发Apple/苹果 iPhone X 港版国行iphonex 苹果8x 苹果x手机",
                            price:"7499.00",
                            image:"https://gd4.alicdn.com/imgextra/i3/57209708/TB2WTGjd3aTBuNjSszfXXXgfpXa_!!57209708.jpg_400x400.jpg"
                        },
                        {
                            title:"Philips/飞利浦X598安卓智能手机 4+64G全网通电信4G智能机长待机",
                            price:"1799.00",
                            image:"https://gd1.alicdn.com/imgextra/i1/757287527/TB2v1JObdrJ8KJjSspaXXXuKpXa_!!757287527.jpg"
                        },
                        {
                            title:"honor/荣耀 荣耀9全网通4G手机 双卡双待 高配6+64G/128G指纹解锁",
                            price:"1743.00",
                            image:"https://g-search1.alicdn.com/img/bao/uploaded/i4/TB11.D5RFXXXXbXaXXXXXXXXXXX.jpg_180x180.jpg_.webp"
                        },
                        {
                            title:"Apple/苹果 iPhone 7 Plus苹果7代7pluss国行美版三网5.5寸7p手机",
                            price:"3150.00",
                            image:"https://gd3.alicdn.com/imgextra/i4/2729943633/TB2_hZHwxGYBuNjy0FnXXX5lpXa_!!2729943633.jpg"
                        },
                        {
                            title:"优惠700元 Samsung/三星 Galaxy S8+ SM-G9550 4+64G 全网通 手机",
                            price:"4999.00",
                            image:"https://img.alicdn.com/imgextra/i4/370627083/TB2FDUJv1J8puFjy1XbXXagqVXa-370627083.jpg_430x430q90.jpg"
                        },
                        {
                            title:"超萌华为mate9pro钢化水凝膜mate9全屏覆盖原装曲面mate10无白边前后蓝光pro手机膜",
                            price:"21.00",
                            image:"https://img.alicdn.com/imgextra/i4/2424475267/TB2jMznniCYBuNkHFCcXXcHtVXa_!!2424475267-0-item_pic.jpg_430x430q90.jpg"
                        }
                    ],
                    mainusername:'',
                    mainpassword:'',
                    mainindex:''
                }
            },
            template:`
                <div class="container">
                    <input type="text" id="search" class="form-control mb-3" placeholder="search" v-model="search">
                    <div class="row">
                        <div class="col-3">
                            <ul class="nav flex-column">
                                <li class="nav-item pt-3 pb-4 mb-4">
                                    <a class="nav-link h6" href="#body">男友&运动</a>
                                </li>
                                <li class="nav-item pt-3 pb-4 mb-4">
                                    <a class="nav-link h6" href="#girl">女鞋&包包</a>
                                </li>
                                <li class="nav-item pt-3 pb-4 mb-4">
                                    <a class="nav-link h6" href="#book">书籍</a>
                                </li>
                                <li class="nav-item pt-3 pb-4 mb-4">
                                    <a class="nav-link h6" href="#phone">手机</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-9">
                            <div id="broadcast" class="carousel slide" data-ride="carousel">
                                <ul class="carousel-indicators">
                                    <li data-target="#broadcast" data-slide-to="0" class="active"></li>
                                    <li data-target="#broadcast" data-slide-to="1"></li>
                                    <li data-target="#broadcast" data-slide-to="2"></li>
                                    <li data-target="#broadcast" data-slide-to="3"></li>
                                </ul>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://image.suning.cn/uimg/aps/material/152712767828919618.jpg">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://image.suning.cn/uimg/aps/material/152853942270061223.jpg">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://image.suning.cn/uimg/aps/material/152827202694281656.jpg">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://image.suning.cn/uimg/aps/material/152846001684303365.jpg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container mt-4">
                        <h2 class="text-primary" v-show="!this.search" id="body">男友&运动</h2>
                        <hr class="bg-danger" v-show="!this.search">
                        <div class="row">
                            <div class="col-lg-2 col-sm-4" style="width:200px" v-for="(item,index) in searchmsg.slice(0,24)">
                                <img class="card-img-top" :src="item.image" alt="Card image" style="width:100%;height:150px" :title="item.title">
                                <small>{{item.title.slice(0,11)}}</small>
                                <br >
                                <label class="card-title text-danger">￥{{item.price}}</label>
                                <button class="float-right btn btn-sm btn-warning border-0 rounded-circle" :class={disabled:!state.logined} v-on:click="add(item)">+</button>
                            </div>
                        </div>

                        <h2 class="text-primary" v-show="!this.search" id="girl">女鞋&包包</h2>
                        <hr class="bg-danger" v-show="!this.search">
                        <div class="row">
                            <div class="col-lg-2 col-sm-4" style="width:200px" v-for="(item,index) in searchmsg.slice(24,48)">
                                <img class="card-img-top" :src="item.image" alt="Card image" style="width:100%;height:150px" :title="item.title">
                                <small>{{item.title.slice(0,11)}}</small>
                                <br >
                                <label class="card-title text-danger">￥{{item.price}}</label>
                                <button class="float-right btn btn-sm btn-warning border-0 rounded-circle" :class={disabled:!state.logined} v-on:click="add(item)">+</button>
                            </div>
                        </div>

                        <h2 class="text-primary" v-show="!this.search" id="book">书籍</h2>
                        <hr class="bg-danger" v-show="!this.search">
                        <div class="row">
                            <div class="col-lg-2 col-sm-4" style="width:200px" v-for="(item,index) in searchmsg.slice(48,60)">
                                <img class="card-img-top" :src="item.image" alt="Card image" style="width:100%;height:150px" :title="item.title">
                                <small>{{item.title.slice(0,11)}}</small>
                                <br >
                                <label class="card-title text-danger">￥{{item.price}}</label>
                                <button class="float-right btn btn-sm btn-warning border-0 rounded-circle" :class={disabled:!state.logined} v-on:click="add(item)">+</button>
                            </div>
                        </div>

                        <h2 class="text-primary" v-show="!this.search" id="phone">手机</h2>
                        <hr class="bg-danger" v-show="!this.search">
                        <div class="row">
                            <div class="col-lg-2 col-sm-4" style="width:200px" v-for="(item,index) in searchmsg.slice(60,72)">
                                <img class="card-img-top" :src="item.image" alt="Card image" style="width:100%;height:150px" :title="item.title">
                                <small>{{item.title.slice(0,11)}}</small>
                                <br >
                                <label class="card-title text-danger">￥{{item.price}}</label>
                                <button class="float-right btn btn-sm btn-warning border-0 rounded-circle" :class={disabled:!state.logined} v-on:click="add(item)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            methods:{
                add(item){
                    if(!this.state.logined){
                        alert("你还没有登录哦！")
                    }else{
                        this.users.forEach((user,index)=>{
                            if(user.username == this.mainusername){
                                this.mainindex = index
                            }
                        })
                        this.users[this.mainindex].shop.unshift(item)
                        console.log(this.users[this.mainindex].shop)
                        alert("添加成功,可在购物车查看!")
                    }
                }
            },
            computed:{
                searchmsg(){
                    return this.goodslist.filter((item)=>{
                        return item.title.match(this.search)
                    })
                }
            },
            mounted(){
                vm.$on('get',user=>{
                    this.mainusername = user.name;
                    this.mainpassword = user.password;
                })
            }
        },
        'shopfooter':{
            template:`
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row text-center">
                    <div class="col-2 col-md">
                        <h5>购物指南</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">购物流程</a></li>
                            <li><a class="text-muted" href="#">会员介绍</a></li>
                            <li><a class="text-muted" href="#">常见问题</a></li>
                            <li><a class="text-muted" href="#">大家电</a></li>
                            <li><a class="text-muted" href="#">联系客服</a></li>
                        </ul>
                    </div>
                    <div class="col-2 col-md">
                        <h5>配送方式</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">上门自提</a></li>
                            <li><a class="text-muted" href="#">211限时达</a></li>
                            <li><a class="text-muted" href="#">服务配送查询</a></li>
                            <li><a class="text-muted" href="#">配送费收取标准</a></li>
                            <li><a class="text-muted" href="#">海外配送</a></li>
                        </ul>
                    </div>
                    <div class="col-2 col-md">
                        <h5>支付方式</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">货到付款</a></li>
                            <li><a class="text-muted" href="#">在线支付</a></li>
                            <li><a class="text-muted" href="#">分期付款</a></li>
                            <li><a class="text-muted" href="#">邮局汇款</a></li>
                            <li><a class="text-muted" href="#">公司转账</a></li>
                        </ul>
                    </div>
                    <div class="col-2 col-md">
                        <h5>售后服务</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">售后政策</a></li>
                            <li><a class="text-muted" href="#">价格保护</a></li>
                            <li><a class="text-muted" href="#">退款说明</a></li>
                            <li><a class="text-muted" href="#">返修/退换货</a></li>
                            <li><a class="text-muted" href="#">取消订单</a></li>
                        </ul>
                    </div>
                    <div class="col-2 col-md">
                        <h5>特色服务</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">夺宝岛</a></li>
                            <li><a class="text-muted" href="#">DIY装机</a></li>
                            <li><a class="text-muted" href="#">延保服务</a></li>
                            <li><a class="text-muted" href="#">XXE卡</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            `
        },
        'loginregister':{
            props:{
                state:{
                    type:Object
                },
                users:{
                    type:Array
                }
            },
            data(){
                return{
                    user:{
                        name:'',
                        password:'',
                    }
                }
            },
            template:`
            <div class="container fixed-top jumbotron w-25 mt-5 border border-primary" >
                <form>
                    <div class="form-group">
                        <label>用户名:</label>
                        <input type="text" class="form-control" placeholder="请输入用户名..." v-model='user.name'>
                    </div>
                    <div class="form-group">
                        <label>密 码:</label>
                        <input type="password" class="form-control" placeholder="请输入密码..." v-model='user.password'>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary float-left" v-on:click='logined(user)'>登录</button>
                        <button class="btn btn-success" v-on:click='registered'>注册</button>
                        <button class="btn btn-danger float-right" v-on:click='cancle'>取消</button>
                    </div>
                </form>
            </div>
            `,
            methods:{
                cancle(){
                    this.state.islogin = false;
                    this.state.isregister = false;
                },
                logined(user){
                    this.users.forEach((ele,index) => {
                        if(this.user.name == ele.username && this.user.password == ele.password){
                            alert('登陆成功！')
                            this.user.words = ele.words
                            this.state.logined = true;
                            this.state.islogin = false;
                            this.state.isregister = false;
                            vm.$emit('get',user)
                            vm.$emit('index',index)
                        }
                    });
                    if(!this.state.logined){
                        alert('输入的账号或密码不正确！')
                    };
                    if(this.state.logined){
                        this.user.name = '',
                        this.user.password = ''
                    }
                },
                registered(){
                    this.users.push({
                        username: this.user.name,
                        password: this.user.password,
                        shop:[]
                    });
                    alert("注册成功,请登录！");
                    this.state.islogin = false,
                    this.state.isregister = false,
                    this.user.name = '',
                    this.user.password = ''
                }
            }
        },
        'shopping':{
            props:{
                state:{
                    type:Object
                },
                users:{
                    type:Array
                }
            },
            data(){
                return{
                    count:0,
                    shopusername:'',
                    shoppassword:'',
                    index:0
                }
            },
            template:`
            <div class="container w-50 border fixed-top mt-5 jumbotron pre-scrollable" v-show="state.isshop">
                <template v-if="users[index].shop.length==0">
                    <h5 class="text-danger">您的购物车是空的哟,快去添加吧！</h5>
                </template>
                <template v-else>
                    <h5 class="text-info">您好{{this.shopusername}},您的购物车内容如下:</h5>
                    <hr>
                </template>
                <div class="p-2 text-left text-dark mt-2" v-for="(item,index) in users[index].shop" :key="index">
                    <img :src="item.image" alt="" class="float-left mt-1" style="width:100px;height:100px">
                    <div class="ml-5">
                        <h6 class="font-weight-bold pl-5 pr-5">{{item.title}}</h6>
                        <label class="mt-4 pl-5">￥{{item.price}}</label>
                        <button class="btn btn-danger float-right mr-5" v-on:click="del(item)">删除</button>
                    </div>
                </div>
                <template v-if="users[index].shop.length!=0">
                    <p class="mt-2">你一共花费:<span class="text-primary font-weight-bold">￥{{price}}</span></p>
                    <button class="btn btn-primary float-left mr-5">去结算</button>
                </template>
                <button class="btn btn-info float-right mr-5" v-on:click="isoff">关闭</button>
            </div>
            `,
            mounted(){
                vm.$on('get',user=>{
                    this.shopusername = user.name;
                    this.shoppassword = user.password;
                }),
                vm.$on('index',index=>{
                    this.index = index;
                })
            },
            methods:{
                del(item){
                    this.users[this.index].shop.splice(this.users[this.index].shop.indexOf(item),1)
                    console.log(this.index)
                },
                isoff(){
                    this.state.isshop = false
                }
            },
            computed:{
                price(){
                    this.count = 0;
                    for(let item=0;item<this.users[this.index].shop.length;item++){
                        this.count+=parseFloat(this.users[this.index].shop[item].price)
                    }
                    return this.count;
                }
            }
        }
    }
})
