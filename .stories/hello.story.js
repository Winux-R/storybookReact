import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/*
  addon-notes这玩意儿暂时不好使，以后有时间再调
 */
import { withNotes } from '@storybook/addon-notes';
import Hello from "../component/hello";
import  markdown from "../README.md";

storiesOf("Button/Demo", module)
  .addDecorator(story => (
    /*
      用一组通用组件配置story
     */
    <div style={{textAlign: "center"}}>
      {story()}
    </div>
  ))
  .add('with text', () => (<button onClick={action('clicked')}>Hello Button</button>))
  .add("with some emoji", () => (<button onClick={action("clicked")}>小东西</button>));

const words = 'victorJin';
storiesOf("Component/Demo", module)
  .add('show hello', withNotes(markdown)(() => <Hello words={words}/>));

/*
  有空看看 ，基于__dirname生成嵌套路径 storiesOf(`Other|${base}/Dirname Example`, module)
 */