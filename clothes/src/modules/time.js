const initTime = new Date();
const timeObj = {
  hour: initTime.getHours(),
  minute: initTime.getMinutes()
};

const timeReducer = (state = timeObj, action) => {
  switch (action.type) {
  default:
    const currentTime = new Date();
    return {
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes()
    }
  }
};

export default timeReducer;