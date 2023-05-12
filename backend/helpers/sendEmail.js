const apiKey = "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";

const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey(apiKey);

const sendEmailReset = (to, url, text, name) => {
    const messageData = {
        to: to,
        from: "capstoneArgonauts@gmail.com",
        subject: "BioJewellery - Reset Password",
        html: `<html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
          <title>Passioncorners | Account Activation</title>
          <style>
            body {
              background-color: #333333;
              height: 100vh;
              font-family: "Roboto", sans-serif;
              color: #fff;
              position: relative;
              text-align: center;
            }
            .container {
              max-width: 700px;
              width: 100%;
              height: 100%;
              margin: 0 auto;
            }
            .wrapper {
              padding: 0 15px;
            }
            .card {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
            }
            span {
              color: #07484A;
            }
            button {
              padding: 1em 6em;
              border-radius: 5px;
              border: 0;
              color: white;
              background-color: #07484A;
              transition: all 0.3s ease-in;
              cursor: pointer;
            }
            button:hover {
              background-color: #072D2E;
              transition: all 0.3s ease-in;
            }
            .spacing {
              margin-top: 5rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="wrapper">
              <div class="card">
                <h1><span>Hey</span> ${name}</h1>
                <p>Please click the button below to reset your password. 🙂</p>
                <a href=${url}><button>${text}</button></a>
                <p class="spacing">
                  If the button above does not work, please navigate to the link
                  provided below 👇🏻
                </p>
                <div>${url}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };
    try {
        sendGrid.send(messageData);
        console.log("message sent");
    }
    catch (error) {
        console.log(error);
    }
}

const returnRequestEMail = (from, invoice, content, name) => {
  const messageData = {
      to: "capstoneArgonauts@gmail.com",
      from: "capstoneArgonauts@gmail.com",
      replyTo: from,
      subject: "Return Request - Important",
      html: `<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <title>Passioncorners | Account Activation</title>
        <style>
          body {
            background-color: #333333;
            height: 100vh;
            font-family: "Roboto", sans-serif;
            color: #fff;
            position: relative;
            text-align: center;
          }
          .container {
            max-width: 700px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
          .wrapper {
            padding: 0 15px;
          }
          .card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
          span {
            color: #07484A;
          }
          button {
            padding: 1em 6em;
            border-radius: 5px;
            border: 0;
            color: white;
            background-color: #07484A;
            transition: all 0.3s ease-in;
            cursor: pointer;
          }
          button:hover {
            background-color: #072D2E;
            transition: all 0.3s ease-in;
          }
          
          
        </style>
      </head>
      <body>
        <div class="container">
          <div class="wrapper">
            <div class="card">
              <h1><span>This is an email from: </span> ${name}</h1>
              <h2>Invoice number:</h2>
              <p class="spacing">
                ${invoice}
              </p>
              <br>
              <h2>Message from the client:</h2>
              <p class="spacing">
                ${content}
              </p>
              <br>
              <h2>Reply to:</h2>
              <p class="spacing">
                ${from}
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  };
  try {
      sendGrid.send(messageData);
      console.log("message sent");
  }
  catch (error) {
      console.log(error);
  }
}

module.exports = { sendEmailReset, returnRequestEMail };