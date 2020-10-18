function sendJSON() {
  let obj = { table: [] };
  obj.table.push({
    login: document.getElementById("login").value,
    password:document.getElementById("password").value,
    email:document.getElementById("email").value
  });
  var json = JSON.stringify(obj);
  console.log(obj);
}