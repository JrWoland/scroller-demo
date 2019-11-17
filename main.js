document.addEventListener('DOMContentLoaded', function () {
  const scroller = new Scroller('#root')
  console.log(scroller);


  document.addEventListener('wheel', event => scroller.listenScroll(event))
  document.addEventListener('swipeUp', (event) => scroller.scroll(1))
  document.addEventListener('swipeDown', (event) => scroller.scroll(-1))
})