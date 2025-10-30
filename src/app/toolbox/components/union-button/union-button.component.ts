import { Component, Input } from '@angular/core';

type ButtonType = 'primary' | 'outline' | 'default';

@Component({
    selector: 'union-button',
    templateUrl: './union-button.component.html',
    styleUrls: ['./union-button.component.scss']
})
export class UnionButtonComponent {
    @Input() type: ButtonType = 'default';
    @Input() disabled = false;
    @Input() fullWidth = false;  // opzione per bottone a tutta larghezza
    @Input() ariaLabel: string = 'button';

    get classes(): string {
        let base = 'btn';
        if (this.type === 'primary') base += ' btn-primary';
        else if (this.type === 'outline') base += ' btn-outline';
        // 'default' lascia solo btn di base
        if (this.fullWidth) base += ' full-width';
        return base;
    }
}
