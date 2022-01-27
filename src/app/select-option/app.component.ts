import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from './user.service';
import { IssuerInfo } from './issuer-info.model';
import { User } from './user.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private user: UserService, private fb: FormBuilder) {}

  issuerInfos: IssuerInfo[] = [];
  authorities: string[] = [];
  editForm = this.fb.group({
    issuerInfos: [],
    authorities: [],
  });
  user2: User;

  ngOnInit(): void {
    this.user.general().subscribe((user) => {
      this.user2 = user;
    });

    this.user.authorities().subscribe((uauthser) => {
      this.authorities = uauthser;
    });

    this.user.issuerInfos().subscribe((issuerInfos) => {
      this.issuerInfos = issuerInfos;
    });

    setInterval(() => {
      this.updateForm(this.user2);
    }, 10);
  }

  private updateForm(user: User): void {
    this.editForm.patchValue({
      authorities: user.authorities,
      issuerInfos: user.issuerInfos,
    });
  }

  comFun(a, b) {
    return a.issuerName === b.issuerName;
  }
}
