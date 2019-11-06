document.addEventListener('DOMContentLoaded', function () {
  console.log('witaj')

  const rootElement = document.querySelector('#root')
  const sections = document.querySelectorAll('section')

  document.addEventListener('mousewheel', function (event) {
    console.log(event);

  })
})