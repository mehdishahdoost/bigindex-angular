export interface IIssuerInfo {
  id?: number;
  issuerId?: number;
  issuerRef?: string;
  issuerName?: string;
  isGroup?: boolean;
  active?: boolean;
  parentIssuerId?: number;
  origin?: string;
}

export class IssuerInfo implements IIssuerInfo {
  constructor(
    public id?: number,
    public issuerId?: number,
    public issuerRef?: string,
    public issuerName?: string,
    public isGroup?: boolean,
    public active?: boolean,
    public parentIssuerId?: number,
    public origin?: string
  ) {}
}
