import { expect } from 'chai';
import moment from 'moment';
import dateMapper from '../../src/utils/dateMapper';

describe('DateMapper', () => {
  describe('#formatDate', () => {
    it('should return DD-MM-YYYY when given isoDate ', () => {
      const isoDate = '1995-05-30T00:00:00.000Z';
      const actualDate = dateMapper.formatDate(isoDate);

      const expectedDate = '30-05-1995';

      expect(actualDate).to.eq(expectedDate);
    });

    it('should return current date formatted to DD-MM-YYYY if the isoDate is not specified', () => {
      const actualDate = dateMapper.formatDate();
      const expectedDate = moment().format('DD-MM-YYYY');

      expect(actualDate).to.eq(expectedDate);
    });
  });
});
