import history from '../store/History';

export const gotoRoute = (route, state = {}) => {
  history.push(route, state);
};

export const navigateToPreviousRoute = () => {
  history.goBack();
};

export const scrollTop = () => {
  window.scrollTo(0, 0);
};
