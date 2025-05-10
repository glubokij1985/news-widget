/* eslint-disable @angular-eslint/no-output-on-prefix */
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    imports: [CommonModule],
    selector: 'storybook-button',
    standalone: true,
    styleUrls: ['./button.css'],
    template: ` <button
  type="button"
  (click)="onClick.emit($event)"
  [ngClass]="classes"
  [ngStyle]="{ 'background-color': backgroundColor }"
>
  {{ label }}
</button>`,
})
export class ButtonComponent {
    /** Is this the principal call to action on the page? */
    @Input() public primary: boolean = false;

    /** What background color to use */
    @Input() public backgroundColor?: string;

    /** How large should the button be? */
    @Input() public size: 'small' | 'medium' | 'large' = 'medium';

    /**
     * Button contents
     *
     * @required
     */
    @Input() public label: string = 'Button';

    /** Optional click handler */
    @Output() public readonly onClick: EventEmitter<Event> = new EventEmitter<Event>();

    public get classes(): string[] {
        const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

        return ['storybook-button', `storybook-button--${this.size}`, mode];
    }
}
