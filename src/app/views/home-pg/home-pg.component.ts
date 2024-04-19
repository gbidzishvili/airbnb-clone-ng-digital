import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'app-home-pg',
    templateUrl: './home-pg.component.html',
    styleUrl: './home-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class HomePgComponent {
    @Input() title!: any;
}
