// document.addEventListener('DOMContentLoaded', (event) => {

  const mediaQueryMobile = 600;
  const body = document.querySelector('body');
  const tools = document.querySelector('.tools-wrapper');

  const myObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
      const contentWidth = entry.contentRect.width;
      if (contentWidth > mediaQueryMobile) {
        console.log({mediaQueryMobile})
      }
    });
  });
  
  myObserver.observe(body);

  function toggleTools() {
    tools.classList.toggle('show');
    // console.log(paint.isDrawing)
  }

//});