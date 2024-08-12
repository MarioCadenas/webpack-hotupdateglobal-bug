console.log('Im just a separate entry point! All alone!');

console.log('hello extra.js')

document.getElementById('change').innerHTML = 'test'

if (module.hot) {
  module.hot.accept();
}