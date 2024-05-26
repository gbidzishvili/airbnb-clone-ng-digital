import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../../home-pg/models/hotel.model';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrl: './host-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostProfileComponent {
  @Input() hotel!:Hotel;

}
