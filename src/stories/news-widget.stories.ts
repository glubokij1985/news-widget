import { CommonModule } from '@angular/common';
import type { Meta, StoryFn } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import type { ICollection } from '@storybook/angular/dist/client/types.js';
import { NewsWidgetComponent } from '../app/components/news-widget/news-widget.component';

export default {
    component: NewsWidgetComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                NewsWidgetComponent,
            ],
        }),
    ],
    title: 'Widgets/NewsWidget',
} as Meta;

const Template: StoryFn = (args: ICollection) => ({
    props: args,
});

export const Default = Template.bind({});

Default.args = {
    // your @Input() values
};
