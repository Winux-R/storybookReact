import React from 'react';
import { configure, addDecorator } from '@storybook/react';
/*
require.context是webpack里面的东西且需要4以下版本支持
 */
const req = require.context('../.stories', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
/*
  用一组通用组件对所有story进行配置
 */
addDecorator(story => (
  <div style={{textAlign: 'center'}}>
    {story()}
  </div>
));

configure(loadStories, module);
