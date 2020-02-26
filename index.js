import App from './components/App.html';
<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQda4fa-FrZoQvHY4lPyU4E3D8R8hla95jlUe--eL-HkhlacvaCDou4XanEVkhd5tJrcPXn6e-dphO6/pubchart?oid=301322602&amp;format=interactive"></iframe>

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});