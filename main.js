document.addEventListener('DOMContentLoaded', function () {
  const scroller = new Scroller('#root')
  console.log(scroller);


  document.addEventListener('wheel', event => scroller.listenScroll(event))

  function scroll(direction) {

  }


})