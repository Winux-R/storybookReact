import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hello from "../component/index";

storiesOf("Button", module)
  .add('with text', () => (<button onClick={action('clicked')}>Hello Button</button>))
  .add("with some emoji", () => (<button onClick={action("clicked")}>小东西</button>));

const words = 'victorJin';
storiesOf("Component", module)
  .add('show hello', () => (<Hello words={words}/>));