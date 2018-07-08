/**
 * Represents Utils for formatting date
 */
import moment from 'moment';

/**
 * This function is to format isoDate into DD-MM-YYYY
 * @param isoDate
 * @returns {string} formated isoDate into DD-MM-YYYY
 */
const formatDate = (isoDate) => {
  if (isoDate) {
    return moment(isoDate).format('DD-MM-YYYY');
  }

  return moment().format('DD-MM-YYYY');
};

module.exports = {
  formatDate,
};
