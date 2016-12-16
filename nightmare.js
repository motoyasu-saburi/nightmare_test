var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('http://yahoo.co.jp')
  // .type('form[action*="/search"] [name=email]', 'motoyasu.saburi@bizreach.co.jp')
  // .type('form[action*="/search"] [name=password]', 'password')
  // .click('form[action*="/search"] [type=submit]')
  // .wait('#main')
  // .evaluate(function () {
  //   return document.querySelector('#main .searchCenterMiddle li a').href
  // })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
