import type { ComponentStoryObj } from '@storybook/react';

import { Button } from './Button';

export default { component: Button };

export const Primary: ComponentStoryObj<typeof Button> = {
  args: { children: 'button' },
};
