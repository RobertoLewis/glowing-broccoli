var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date(); // Create Date object.

  // currentTime will look like '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' + // Set year
          (currentDate.getMonth() + 1)+ '-' + // Set month
          currentDate.getDate() + ' at ' +   // Set day of the month
          currentDate.getHours() + ':' +  // Set hours (military time)
          currentDate.getMinutes() + ':' + // Set minutes
          currentDate.getSeconds();  // Set seconds
