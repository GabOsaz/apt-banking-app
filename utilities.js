  const desiredDaysRange = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const numberOfDaysInCurrMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date().getUTCDate();
    const rangeStart1 = today - 9;
    const rangeEnd = today + 7;
    const currentMonth = new Date().getMonth();
    const previousMonth = currentMonth - 1;
    const nextMonth = currentMonth + 1;

    if(rangeStart1 <= 0) {
      let prevMnthDaysArr = []
      const difference = Math.abs(today - 9)
      let daysInPrevMonth = new Date(year, month, 0).getDate();
      const prevMonthStartDate = daysInPrevMonth - difference;
      
      for (let i = prevMonthStartDate; i <= daysInPrevMonth; i++) {
        prevMnthDaysArr.push({
          month: previousMonth,
          day: i
        });
      }

      const daysInPreviousMonth = prevMnthDaysArr; // Negative days (previous month)
      
      const daysInCurrentMonth = [];

      for (let i = 1; i <= today +7; i++) {
        daysInCurrentMonth.push({
          month: currentMonth,
          day: i
        })
      }

      const mergedDays = [...daysInPreviousMonth, ...daysInCurrentMonth]
      return mergedDays

    } else if(rangeEnd > numberOfDaysInCurrMonth) {
      const daysDifference = rangeEnd - numberOfDaysInCurrMonth
      let daysInCurrentMonth = [];

      for (let i = rangeStart1; i <= numberOfDaysInCurrMonth; i++) {
        daysInCurrentMonth.push({
          month: currentMonth,
          day: i
        })
      }

      let daysInNextMonth = [];
      for (let i = 1; i <= daysDifference; i++) {
        daysInNextMonth.push({
          month: nextMonth,
          day: i
        })
        
      }

      const mergedDays = [...daysInCurrentMonth, ...daysInNextMonth]
      return mergedDays

    } else {
      let rangeArr = [];

      for (let i = rangeStart1; i <= rangeEnd; i++) {
        rangeArr.push({
          month: currentMonth,
          day: i
        });
      };

      return rangeArr
    }
  }

  const getWeekDday = (date) => {
    let month;
    switch (date.month){
      case 0:
          month = 'January';
          break;
      case 1:
          month = 'February';
          break;
      case 2:
          month = 'March';
          break;
      case 3:
          month = 'April';
          break;
      case 4:
          month = 'May';
          break;
      case 5:
          month = 'June';
          break;
      case 6:
          month = 'July';
          break;
      case 7:
          month = 'August';
          break;
      case 8:
          month = 'September';
          break;
      case 9:
          month = 'October';
          break;
      case 10:
          month = 'November';
          break; 
      case 11:
          month = 'December';
          break;
          default: month = 0
    };

    const dateObj = new Date(`${month} ${date.day}, ${new Date().getUTCFullYear()}`);
    const weekDayCode = dateObj.getDay();
    let weekDay = '';

    switch (weekDayCode) {
      case 0:
        weekDay = 'S'
        break;
      case 1:
        weekDay = 'M'
        break;
      case 2:
        weekDay = 'T'
        break;
      case 3:
        weekDay = 'W'
        break;
      case 4:
        weekDay = 'T'
        break;
      case 5:
        weekDay = 'F'
        break;
      case 6:
        weekDay = 'S'
        break;
      default: ''
        break;
    }

    return weekDay
  }

  export { desiredDaysRange, getWeekDday };