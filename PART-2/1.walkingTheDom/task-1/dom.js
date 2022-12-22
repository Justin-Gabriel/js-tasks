/*

<html>
<body>
  <div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

*/

/*

For each of the following, give at least one way of how to access them:

The <div> DOM node?
The <ul> DOM node?
The second <li> (with Pete)?

*/

// <div>
document.body.firstElementChild
document.body.children[0]
document.body.childNodes[1]

// <ul>
document.body.lastElementChild
document.body.children[1]

// second <li>

document.body.lastElementChild.lastElementChild