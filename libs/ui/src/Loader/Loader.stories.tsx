import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loader } from './Loader';

const Story: ComponentMeta<typeof Loader> = {
  component: Loader,
  title: 'Badge',
};
export default Story;

const Template: ComponentStory<typeof Loader> = (args) => <Loader />;

export const Primary = Template.bind({});
