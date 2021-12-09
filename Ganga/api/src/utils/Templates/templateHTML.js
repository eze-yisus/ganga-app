function templateSuccessEmail(address, mail) {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
    <h1>PAGO APROBADO</h1>
    <h2>Hola ${mail} estamos felices porque tu pedido será despachado a la siguiente direccion: ${address}. que lo disfurtes :)</h2>
    </body>
    </html>
  `;
  return html;
}

function templateFailmail(mail) {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
    <h1>PAGO NO REALIZADO</h1>
    <h2>Hola ${mail} no se ha podido hacer el pago correctamente </h2>
    </body>
    </html>
  `;
  return html;
}

function userMessageTemplate(nombre, ciudad, telefono, correo, mensaje) {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
    <h2>Usuario: ${correo}</h2>
    <h3>Nombre: ${nombre}</h3>
    <h3>Ciudad: ${ciudad}</h3>
    <h3>Comunicado: ${mensaje}</h3>
    </body>
    </html>
  `;
  return html;
}

module.exports = {
  templateSuccessEmail,
  templateFailmail,
  userMessageTemplate,
};
