import { HttpHeaders } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseProxyService } from '../../core/services/base-proxy.service';

@Component({
    selector: 'app-update-info-pg',
    templateUrl: './update-info-pg.component.html',
    styleUrl: './update-info-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateInfoPgComponent implements OnInit {
    constructor(public baseProxyService: BaseProxyService) {}
    ngOnInit(): void {
        this.updateUser();
    }
    // new HttpHeaders().set("authrized":token)
    updateUser() {
        this.baseProxyService
            .updateFullModel(
                {
                    id: 'string1',
                    userName: 'string1',
                    email: 'string1',
                    newPassword: 'string1',
                    phone: 'string1',
                    personalNumber: 'string1',
                    gender: 'string1',
                },
                'http://www.airbnb-digital-students.somee.com/api/User/updateuserdata'
            )
            .subscribe((v) => console.log(v));
    }
}
