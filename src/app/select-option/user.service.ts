import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IssuerInfo } from './issuer-info.model';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor() {}

  general(): Observable<User> {
    let usr: User = {
      id: 16753,
      login: '111',
      firstName: null,
      lastName: null,
      email: '111@e',
      activated: true,
      langKey: 'en',
      createdBy: 'admin',
      lastModifiedBy: 'admin',
      authorities: ['ROLE_USER', 'ROLE_ADMIN'],
      issuerInfos: [
        {
          id: 88,
          issuerId: 59546,
          issuerRef: '59546',
          issuerName: 'ATTIJARIWAFA BANK EUROPE (Maestro)',
          origin: 'CENTAURUS',
          isGroup: false,
          active: true,
          parentIssuerId: 99912,
        },
        {
          id: 89,
          issuerId: 59547,
          issuerRef: '59547',
          issuerName: 'EUROPE (Maestro)',
          origin: 'CENTAURUS',
          isGroup: false,
          active: true,
          parentIssuerId: 9991,
        },
      ],
    };

    return of(usr);
  }

  issuerInfos(): Observable<IssuerInfo[]> {
    let infos: IssuerInfo[] = [
      {
        id: 88,
        issuerId: 59546,
        issuerRef: '59546',
        issuerName: 'ATTIJARIWAFA BANK EUROPE (Maestro)',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99912,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },

      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
      {
        id: 90,
        issuerId: 59547,
        issuerRef: '59547',
        issuerName: 'Mehdi BANK EUROPE',
        origin: 'CENTAURUS',
        isGroup: false,
        active: true,
        parentIssuerId: 99913,
      },
    ];
    return of(infos);
  }

  authorities(): Observable<string[]> {
    let au: string[] = [
      'ROLE_ADMIN',
      'ROLE_ALL_ISSUERS',
      'ROLE_INTEGRATOR',
      'ROLE_USER',
      'ROLE_WL_CONTACT',
    ];
    return of(au);
  }
}