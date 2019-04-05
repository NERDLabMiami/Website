// Code below will run only when DOM content is loaded
// to make sure all elements that we are trying to listen
// are actually exists on the page
document.addEventListener("DOMContentLoaded", function () {

  // Add event listener for each link that starts with # sign
  // when user cliks any of those links scrollHandler() is called
  var scrollLinks = document.querySelectorAll('[href^="#"]');
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', scrollHandler);
  }

  // scrollHandler()
  function scrollHandler(event) {

    // This prevents page url to change.
    // Without this code if user clicks the link,
    // url will change to hamzafidan.com/#portfolio
    // and the code below this line will work after
    // browser fulfills the default event.
    // In this case scroll position will jump to the
    // target and then it will try to scroll smoothly
    // with the given numbers (currentPosition, goToPosition)
    event.preventDefault();

    // Get how much we scrolled from top of the page
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Target element's id is href attribute of the clicked link.
    // We get href attribute of clicked link with this.getAttribute('href')
    // this returns #portfolio. To get the actual id, we use split('#')
    // this returns an array = ["","portfolio"] and we use [1] to get the
    // second element of this array
    var targetElementId = this.getAttribute('href').split('#')[1];
    // Get the distance between target element and the top of the page
    var goToPosition = document.getElementById(targetElementId).offsetTop;
    // Get the distance between the target and the current position.
    // If the target is below the current position result is positive,
    // if the target is above the current position the result is negative
    var distance = goToPosition - currentPosition;

    // step * interval time = (40 * 10 in this example)
    // 1 jumps in 10 ms
    // 10 jumps in 100 ms
    // 100 jumps in 1 second
    // you do the math :)
    var totalStep = 40;
    var currentStep = 0;
    // Increasing this value make the scroll less soomother.
    // Decreasing this value completes the scroll a lot faster
    // Change the step instead if you want slower or faster scroll
    var intervalTime = 10;

    // This finds how far we are from the target and
    // divides into equal steps (40 in this example)
    var scrollby = distance / totalStep;

    var isScrollElementBody = document.scrollingElement && document.scrollingElement.tagName == 'BODY';

    // Interval repeats the same function every given time (intervalTime = 10ms in this example)
    // untill we clear it using clearInterval()
    var interval = setInterval(function () {
      // Previously we divided the distance between target and current position by 40 equal step.
      // If currentStep is smaller than the total step number
      // add 1/40 of the total distance to the current position (document.documentElement.scrollTop)
      // if the distance is negative the page will scroll upwards
      if (currentStep < totalStep) {
        isScrollElementBody ? document.body.scrollTop += scrollby : document.documentElement.scrollTop += scrollby;
        currentStep++;
      } else {
        // If there is no other step left to add to the current position stop the interval
        clearInterval(interval);
      }
    }, intervalTime);

  }

});
