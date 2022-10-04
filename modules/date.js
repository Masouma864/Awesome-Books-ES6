// Add Time and Date
import { DateTime } from './luxon.js';

const theDate = new Date().toUTCString();
const dateDiv = document.querySelector('.time');
dateDiv.innerHTML = theDate;
dateDiv.innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);