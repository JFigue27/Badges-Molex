import { CRUDFactory } from '../../core/CRUDFactory';
// import UtilsService from '../../core/UtilsService';

///start:slot:dependencies<<<///end:slot:dependencies<<<

// const utilsService = new UtilsService();

export default class BadgeService extends CRUDFactory {
  constructor() {
    super({
      EndPoint: 'Badge'
    });
  }
  ADAPTER_IN(entity) {
    entity.ConvertedCheckIn = entity.CheckIn ? new Date(entity.CheckIn) : null;
    entity.ConvertedCheckOut = entity.CheckOut ? new Date(entity.CheckOut) : null;
    ///start:slot:adapterIn<<<///end:slot:adapterIn<<<
    return entity;
  }

  ADAPTER_OUT(entity) {
    entity.CheckIn = this.toServerDate(entity.ConvertedCheckIn);
    entity.CheckOut = this.toServerDate(entity.ConvertedCheckOut);
    ///start:slot:adapterOut<<<///end:slot:adapterOut<<<
  }

  ///start:slot:service<<<///end:slot:service<<<
}
