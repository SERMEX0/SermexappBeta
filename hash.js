const bcrypt = require("bcrypt");

bcrypt.hash("123456", 10, (err, hash) => {
  if (err) throw err;
  console.log("Contraseña encriptada:", hash);
});
