import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
    args: {
        onCreateAccount: fn(),
        onLogin: fn(),
        onLogout: fn(),
    },
    component: HeaderComponent,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    title: 'Example/Header',
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const LoggedIn: Story = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};

export const LoggedOut: Story = {};
