import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrl: './host-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostProfileComponent {

}
