import {Component, EventEmitter, Input, Output} from '@angular/core';

type ButtonType = 'primary' | 'outline' | 'default';

@Component({
    selector: 'union-button',
    templateUrl: './union-button.component.html',
    styleUrls: ['./union-button.component.scss']
})
export class UnionButtonComponent {
    @Input() label: string = 'Button';
    @Input() variant: 'primary' | 'outline' = 'primary';
    @Input() disabled: boolean = false;

    @Output() clicked = new EventEmitter<void>();

    onClick(): void {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
