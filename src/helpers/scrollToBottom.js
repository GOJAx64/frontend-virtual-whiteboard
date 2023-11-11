import { animateScroll } from 'react-scroll';

export const scrollToBottom = (id) => {
  console.log('scroll botton ', id)
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 0
  })
};

export const scrollToBottomAnimated = (id) => {
  console.log('scroll botton animated')  
  animateScroll.scrollToBottom({
      containerId: id,
      duration: 250
  });
};