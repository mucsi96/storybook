import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Button } from './Button';

storiesOf('Button', module)
    .addDecorator(withInfo)
    .add(
        'simple button',
        () => <Button onClick={action('button clicked')} />,
        { info: { inline: true } }
    );
