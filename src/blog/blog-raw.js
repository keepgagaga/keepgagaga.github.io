const blogRaw = new Map();

let firstBlogContent =
 `# 折腾的快乐

可能每个做前端的都希望有个自己的网站吧，也知道没多少人访问，但还是想建立一个，主要是自己的地方，想怎么弄都行（当然不能违法）。

而时代也从没有像如今这样为个人建站提供如此多的便利，无论是网站模板还是静态页面生成，以及云服务的发展，都为我们提供了很多方便。

而如果你实在不想花什么成本，也不想运营一个服务器，那么 GitHub Pages 服务则是首选，不需要任何成本和维护，只要你上传静态文件就行。

而相比于博客模板，我还是更喜欢自己亲自来折腾，虽然限于审美的匮乏，经常把页面搞得很丑，但这种自己写作品的过程还是很爽的，就是享受折腾的快乐。

这次博客页面直接不加修饰了，就用最基础的 HTML，反正博客的核心向来是内容，样式只是锦上添花的事情。

目标是尽量一天更新一篇，逼着自己去输出内容，毕竟不逼着自己，永远不知道自己的极限。
`

let doSomething = 
`# 得之我幸，失之我命

不可能所有的好事都让你遇见。

重要的是能把握的事尽量把握就行。

尽力了，得到了开心，得不到放宽心，然后眼光立马往别处看。

你的时间就这么几十年，每一天每一刻才是最珍贵的。

不要浪费在懊悔自责中，又不是没机会了。

无论什么时候，我们最不缺的都是机会。

多往别处看看，会发现更多惊喜的。

人生的路又不是只有一条。
`

let record = 
`# 为自己写传记

人这一辈子真的很快

以前从没想过30岁是什么场景

从没想过自己以后会干什么工作

但一转眼竟也过来了，一切都是那么顺其自然，也终于理解了什么叫车到山前必有路这句话

回想过去的岁月，最大的遗憾就是没有留下一些记录

如果能记录下自己当时的思想，当时的生活，现在回看起来一定很有意思

好在还不算晚，从现在开始没事多记录一下，也算是留下一些痕迹了，权当做给自己的晚年留点记忆
`

let flutterBugOne =
`# flutter bug ---> 有时不显示图片

今天往图片文件夹里丢了一张图片，照例 pub get 一下，然后引用，却奇怪地没有显示出来，也没有报错

怀疑是地址写错了，仔细检查了很多遍发现没有错，又 restart 了一次，还是不显示

最后只能重新 run 一遍整个项目，这时图片才显示出来，总算解决了

目前还不知道具体原因，先记录一下
`

let flutterBugTwo =
`# flutter bug --->打包后的 app 某些页面只显示一层灰色

打包后用来测试的 app 突然在点击某些页面时变成灰色，并且无法继续点击，只能杀掉 app

后来查找到原因，是因为某些错误导致的，比如图片地址为空

今天遇到的就是这种情况，设计不在，还缺了一张图，就空着了

因为这类错误在 debug 模式下不影响使用，就没在意

但是在 release 模式下就会触发页面变灰无法点击的问题，解决办法就是回到 debug 模式，把问题排查清楚再打包就行了
`

let flutterRecordOne = 
`# flutter record ---> 如何做图片缓存

网络请求的图片需要在请求完成后缓存下来留作下次使用，以减少请求次数，加快图片显示

由于没有仔细查过 SharedPreferences 是干嘛的，只是在项目中看到它可以用来存储数据，就想到了把获取到的图片转为 base64 存起来，用的时候再从存储里拿的方法

结果因为我在调试时频繁操作，导致内存溢出，去搜索才发现这个库仅仅是作为轻量级存储使用的，用来存图片很容易就会溢出

于是去找了下，发现了 cached_network_images 这个库可以做缓存

但是因为我们的图片 URL 是不会因为图片更新变化的，导致上传了新图片后也无法更新

所以只能采用在请求的 URL 后加入更新参数来触发更新缓存，这个问题算是解决了
`

let flutterRecordTwo = 
`# flutter record ---> 既要又要往往是烦恼的根源

做 app ，写网页，好不好做？

说好做挺好做的，就去写嘛，哪有写不出的效果呢？

可是有时候却很烦，为什么，因为现实的效果往往不是 demo 那么简单

demo 很多只是需要某一个功能或效果

而现实往往是既要这个也要那个

当你要这个效果时，很快就能做出来

当你要那个效果时，也很快就能做出来

但当你既想要这个效果，同时还想要那个效果时

就不是简单的 1 + 1 = 2 了

困难度往往直线上升

好在在下班前把长度不定的可拖动排序列表做完了，吐槽下，下周继续
`

let flutterRecordThree = 
`# flutter record ---> flutter build web 打包后无法加载资源

flutter 更新 2.0.0 后就立马尝试了下 web，打包后访问发现无法加载资源，导致一直白屏

后来发现是 index.html 中有一行
 
    <base href="/">

导致的，将这一行注释掉就可以了

然后在写这一篇的时候没给代码用代码块包起来，结果又查看时会自己跳到首页

检查 URL 也没错，标题也没错啊，也有做转义，就是没想到这行代码的原因...

搜索 MDN 发现 base 元素指定用于一个文档中包含的所有相对 URL 的根 URL

我们上面那行代码的意思就是后面的所有路由都是相对于根路由的，就导致总是跳转到首页
`

let flutterRecordFour = 
`# ListView item 自动铺满屏幕宽度

使用 ListView 做列表的时候会遇到一个问题，就是子项的宽度没法指定，会自适应屏幕宽度，导致一些效果没法实现

可以使用 Align 组件包裹住子组件，这样给子组件设置的宽度就生效了

另一种方式则是 ListView 和 Wrap 的组合， Wrap 负责自动换行组件，ListView 负责滚动
`

let javaScriptRecordOne = 
`# 闭包

闭包只是一个绑定了执行环境的函数

它和普通函数的区别是，它携带了执行环境

或者和类来对比的话，函数因为自身的特性，并没有完成地表达信息，因为程序不能只有方法没有状态

那么闭包在一定程度上就是为了表达状态
`

let javaScriptRecordTwo = 
`#箭头函数和普通函数的区别

最直观的区别就是写法上了，箭头函数还是比普通函数更加简洁的，能少些几个字符也算是省了一些力气

箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值，定义的时候就确定并固定了

箭头函数不能作为构造函数使用，也不能使用 new 关键字，因为箭头函数没有自己的 this， 它的 this 是继承了外层环境的 this

且 this 指向永远不会改变，而作为构造函数的话 this 需要指向新创建的对象

箭头函数没有自己的 arguments 

call、apply、bind 并不会影响 this 的指向

箭头函数没有 prototype

箭头函数不能当作 Generator 函数，不能使用 yield 关键字
`

let javaScriptRecordThree = 
`# var，let 和 const 的区别

var 声明的变量存在变量提升，即变量可以在声明之前使用，但值为 undefined

let 和 const 则没有这个问题

var 不存在块级作用域，let 和 const 存在块级作用域

var 允许变量重复声明，let 和 const 在同一作用域不允许重复声明变量

const 声明一个只读的常量，其声明时就要赋值，不然会报错

但如果声明的是一个对象，对象里的属性是可以变的，原因是 const 声明的对象只保存着对象的引用地址，只要地址不变，就不会出错

我们如果想要声明一个绝对不可变的对象，可以使用 Object.freeze(obj) 冻结对象， 对于已经冻结的属性还是对象的，可以使用递归的方法全部冻结
`

let javaScriptRecordFour = 
`# 基本类型和引用类型的区别

## 基本类型数据

+ 基本类型数据的值是不可变的，我们常用的对字符串和数字的方法都是带有返回值的，而不是改变原字符串或数字

+ 基本类型数据不可以添加属性和方法，虽然不会报错，但只是一瞬间转为了相应包装对象，操作完又转化为原基本类型数据，不会保存结果

+ 基本类型数据的赋值是简单赋值，基本类型数据的比较是值的比较

+ 基本类型数据是存放在栈区的

## 引用类型

+ 引用类型数据的值是可以改变的，比如对象就可以通过修改对象属性值更改对象

+ 引用类型可以添加属性和方法

+ 引用类型的赋值是对象引用，即声明的变量标识符存储的只是对象的指针地址

+ 引用类型的比较是引用的比较

+ 引用类型是同时保存在栈区和堆区的，栈区保存变量标识符和指向堆内存的地址
`

let javaScriptRecordFive = 
`# defer 和 async 的区别

defer 表示脚本立即下载但延迟执行

同时 defer 脚本还遵循浏览器按照脚本出现的先后顺序执行的规则，同是 defer 脚本，第一个还是比第二个先执行

async 与 defer 类似，但多个 async 脚本并不按照它们的先后顺序执行

指定 async 属性的目的是不让页面等待脚本下载和执行，从而异步加载其他内容，常用于互不依赖的脚本

浏览器在构建 DOM 树的时候因为 JS 可能会修改 DOM 树的结构，所以节点是 JS 代码的话会停止当前 DOM 树的构建，直到 JS 加载并执行完毕才会继续 DOM 树的构建

这里如果处理不当就会产生阻塞，造成白屏问题，而 defer 和 async 则可以一定程度上解决这个问题
`

let javaScriptRecordSix = 
`# async await 对比 promise 的优缺点

## async await 的优点

+ 真正做到了串行同步的写法，非常易于阅读理解，在处理复杂流程时，更能体现出它的优势

+ 对于条件语句和其他流程语句比较友好，可以直接写在判断条件里面

## async await 的缺点

+ 无法处理 promise 返回的 reject 对象，要借助 try ... catch ...

+ 用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码丧失了并发性

+ try catch 内部的变量无法传递给下一个 try catch，而 promise 的 then 和 catch 内部定义的变量能通过 then 链条的参数传递给下一个 then 和 catch，
但是 async 和 await 的 try 内部的变量，如果用 let 或 const 定义则无法传递给下一个 try catch，只能在外层作用域先定义好

## promise 的缺点

+ 一旦执行，无法中途取消，链式调用多个 then 中间不能随便跳出来

+ 错误无法在外部捕获到，只能在内部进行预判处理，如果不设置回调函数，promise 内部抛出的错误不会反应到外部

+ promise 内部如何执行检测起来很难，当处于 pending 状态时，无法得知目前进展到哪一个阶段
`

let javaScriptRecordSeven = 
`# get、post 漫谈

get 请求将参数放在 URL 中进行传递，post 请求则主要将参数放在 body 中进行传递，参数不会像 get 请求那样显示在 URL 中，所以在安全性上 post 要更好

get 请求提交的数据有长度限制，HTTP 本身没有做限制，主要是浏览器自身做的限制

post 请求提交的数据没有长度限制

get 请求返回的内容会被浏览器缓存起来，而 post 请求则没有这个待遇，也因为这个原因，更推荐使用 post 进行处理敏感数据

我们常用 get 进行数据读取，用 post 进行增删改，但更好的方法是使用 put 进行改，使用 delete 进行删除，这样更符合语义
`

let javaScriptRecordEight = 
`# react、vue 对比

react 自身的特色是极致的组件化，包括整个 react 生态也是如此，react 并没有做一系列的工具然后打包给大家使用，而是选择让社区共同合作，开发出一些低耦合的工具组合起来形成一个生态

vue 提供的则是管家式的服务，整个生态中相对核心的工具我都给你造好，组合好，你拿来用就行了，不用操心太多事情
`

let javaScriptRecordNine = 
`# cookie、session

cookie 保存在客户端，session 保存在服务端

单个 cookie 保存的数据 <= 4KB，一个站点最多保存20个cookie，而session则没有上限

cookie 只能保存 unicode 字符串或二进制数据，而 session 则能保存任意类型数据

cookie 对客户端是可见的，有一定安全风险，而session保存在服务器上，对客户端是透明的，风险较低

cookie 可以通过设置属性使得 cookie 长期有效，而 session 关闭窗口就会失效
`

let javaScriptRecordTen = 
`# 宏观任务和微观任务

宿主发起的任务称为宏观任务，JS 引擎发起的任务称为微观任务

setTimeOut 等宿主 API 添加宏观任务， Promise 添加微观任务

每个宏观任务中包含一个微观任务队列

因此在混用 setTimeOut 和 Promise 时，Promise 的代码永远比 setTimeOut 先执行
`

let javaScriptRecordEleven = 
`# AJAX、axios、fetch

AJAX 是 Asynchronous JavaScript and XML 的缩写，核心是使用 XMLHttpRequest 对象，只能使用回调函数的方式来使用

axios 是一个基于 Promise 的用于浏览器和 node 端的 HTTP 客户端，本质上是对原生 XMLHttpRequest 的封装，只不过是基于 Promise 的版本

fetch 被称为下一代 AJAX 技术，采用 Promise 方式来处理数据，是一种简洁明了的 API，比 XMLHttpRequest 更加简洁易用
`

let javaScriptRecordTwelve = 
`
`

let javaScriptRecordThirteen = 
`# bind、call、apply

三者都可以改变函数的 this 对象指向

三者的第一个参数都是 this 要指向的对象，如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window

三者都可以传参，但 apply 是传数组，而 call 是传参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以多次传入

bind 改变 this 指向后不会立即执行，而是返回一个永久改变 this 指向的函数便于稍后调用

apply 和 call 则是立即调用
`

let devEnvOne = 
`# 命令行访问 GitHub 出现超时或 SSL 证书问题

网页可以正常访问 GitHub，但 pull or push 仓库时常出现 443 和 SSL_ERROR 的错误

解决方法是在 DNS 设置里加上 114.114.114.114 和 8.8.8.8 即可解决
`

blogRaw.set('折腾的快乐', firstBlogContent);
blogRaw.set('得之我幸，失之我命', doSomething);
blogRaw.set('为自己写传记', record);
blogRaw.set('flutter ---> 有时不显示图片', flutterBugOne);
blogRaw.set('flutter ---> 打包后的 app 某些页面只显示一层灰色', flutterBugTwo);
blogRaw.set('flutter ---> 缓存图片', flutterRecordOne);
blogRaw.set('flutter ---> 既要又要往往是烦恼的根源', flutterRecordTwo);
blogRaw.set('flutter ---> flutter build web后无法加载资源', flutterRecordThree);
blogRaw.set('flutter ---> ListView item 自动铺满屏幕宽度', flutterRecordFour);
blogRaw.set('javaScript ---> 闭包', javaScriptRecordOne);
blogRaw.set('javaScript ---> 箭头函数和普通函数的区别', javaScriptRecordTwo);
blogRaw.set('javaScript ---> var， let 和 const 的区别', javaScriptRecordThree);
blogRaw.set('javaScript ---> 基本类型和引用类型的区别', javaScriptRecordFour);
blogRaw.set('javaScript ---> defer 和 async 的区别', javaScriptRecordFive);
blogRaw.set('javaScript ---> async await 对比 promise 的优缺点', javaScriptRecordSix);
blogRaw.set('javaScript ---> get、post 漫谈', javaScriptRecordSeven);
blogRaw.set('javaScript ---> react 和 vue 对比', javaScriptRecordEight);
blogRaw.set('javaScript ---> cookie、session，cookie、sessionStorage、localStorage', javaScriptRecordNine);
blogRaw.set('javaScript ---> 宏观任务和微观任务', javaScriptRecordTen);
blogRaw.set('javaScript ---> AJAX、axios、fetch', javaScriptRecordEleven);
// blogRaw.set('javaScript ---> 堆、栈和队列', javaScriptRecordTwelve);
blogRaw.set('javaScript ---> bind、call、apply', javaScriptRecordThirteen);
blogRaw.set('javaScript ---> typeScript 概述', javaScriptRecordFourteen);
blogRaw.set('devEnv ---> 命令行访问 GitHub 出现超时或 SSL 证书问题', devEnvOne);