# storybookReact
##react组件设计
自己做的比较简单，照着文档和博客扒了一个，因为最近要用storybook，就提前学习了基础的东西吧！

话不多说，看着代码听我慢慢讲，讲错的地方记得批评指正哈

**先把代码跑起来看看那效果**
* npm install
* npm run storybook

整体结构是这样的
* stories文件夹
* storybook文件夹
* out文件夹
* component文件夹
* package.json


现在我一个一个的介绍
###stories
stories里面住着的东西说白了就是把你需要展示的组件利用storybook语法进行一个汇总
 
    import React from 'react';
    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    storiesOf("Button/Demo", module)
    .addDecorator(story => (
        <div style={{textAlign: "center"}}>
          {story()}
        </div>
      ))
      .add('with text', () => (<button onClick={action('clicked')}>Hello Button</button>))
          
对这个进行下解释，要想使用storybook进行模组的展示，就必须引入storiesOf方法，第一个参数是层级名字，可用“/”弄出多级分类，第二个就目前我接触的只有module（可能只能写module吧，哈哈哈）

addDecorator方法，这个其实就是storiesOf下的所有需要展示的结构和模组提供一个公共的壳子，这东西写在这和写在storybook里面的config.js里面都行，只不过就是一个队固定的stories有用，一个对整个工程有用

add方法，最重要的东西，你想展示的模组都得需要他进行处理，第一个参数是你模组的名字，第二个回调函数就是你的模组啦

action这东西suo起来有点麻烦，慢慢看着，这东西要引插件的，还要把插件import到storybook里面的addons.js中，像这样
    
    import '@storybook/addon-actions/register';

然后这边定义完就可以在stories中使用了，import引用过来就ok，一个action处理器就完成了。

###storybook       
里面定义点配置啥的，什么storybook的配置啊、webpack的配置啊、插件的配置啊，对了，babelrc也能放在里面

着重说下config.js 干啥的？？ 配置storybook的最重要的js文件
    
    import React from 'react';
    import { configure, addDecorator } from '@storybook/react';
    const req = require.context('../.stories', true, /\.story\.js$/);
    function loadStories() {
      req.keys().forEach((filename) => req(filename));
    }
    addDecorator(story => (
      <div style={{textAlign: 'center'}}>
        {story()}
      </div>
    ));
    configure(loadStories, module);
    
解释下这玩意，configure这个方法我觉得就是将一个个的组件按层次处理成页面中显得样子
看见addDecorator了吧，认识不，眼熟不，就是刚才在stories里面定义的组件壳子，不解释啦这个。
说下require.context这个东西是webpack里面，webpack 4版本一下才可以用，四以上就报错，req.keys()顾名思义就是刚才获取到的整个story文件的列表key值

###component
这个东西相信写组件开发的都不陌生，就是把你项目中可以独立的组件摘出来就行啦 

###out 
打包的静态文件，可以拿到到处用的

###package.json
这玩意不陌生吧 
就说下script里面的几个属性吧 storybook的value -p 就是port -c 就是加载配置文件目录 -o 告诉在哪里存储打包构建的文件

#先说这么多吧，欢迎指正，后续更正添加新内容
   

  
  