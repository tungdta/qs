export class BlackListModel {
  public blackListId: number;
  public caller: string;
  public lineId: string;
  public totalCall: number;
  public lockLevelName: string;
  public lastLockTimeFmt: string;
  public lastUnlockTimeFmt: string;
  public lastLockActor: string;
  public lastUnlockActor: string;
  public smsStatusName: string;
  public description: string;
  constructor() { }
}
