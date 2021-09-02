/**
 * Code that runs twice every second to detect
 * changes on the route, if it is the case
 * we call init() from mermaid to make sure
 * the diagrams are rendered, otherwise mermaid
 * will render just once because it listens only to
 * the window event 'load', that happens just when
 * the browser load/refreshes the site completely
 */
let currentPage = location.href;
 setInterval(() =>{
  if (currentPage != location.href)
  {
    currentPage = location.href;
    executeKeyFunctions();
  }
}, 500);

const executeKeyFunctions = () => {
  mermaid.init();
}

window.addEventListener('load', ()=>{
  executeKeyFunctions();
});
