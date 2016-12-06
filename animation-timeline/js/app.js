$(document).ready(() => {
  init();
});

function init() {
  const toolTimeline = new TimelineLite({ paused: true });
  const duration = 1;

  toolTimeline.add(TweenLite.to('#toolBox', duration, {
    y: -100,
    ease: Linear.easeInOut
  }));

  toolTimeline.add(TweenLite.to('#weightLifter', duration, {
    y: -100,
    ease: Bounce.easeInOut
  }));

  toolTimeline.add(TweenLite.to('#crazy', duration, {
    y: -100,
    ease: Elastic.easeInOut
  }));

  toolTimeline.add(TweenLite.to('#leaf', duration, {
    y: -100,
    ease: Back.easeInOut
  }));

  $('#start').click(() => {
    toolTimeline.play();
  });

  $('#stop').click(() => {
    toolTimeline.stop();
  });

  $('#pause').click(() => {
    toolTimeline.pause();
  });

  $('#reverse').click(() => {
    toolTimeline.reverse();
  });
}
