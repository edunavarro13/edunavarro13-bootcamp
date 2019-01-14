var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000")
.then(function (id) {
    return qhttp.read("http://localhost:7001/"+id);
})
.then(function (objeto) {
  console.log(JSON.parse(objeto));
})
.then(null, console.error)
.done()