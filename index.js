function getIPFromAmazon() {
    fetch('https://checkip.amazonaws.com/')
      .then((res) => res.text())
      .then((data) => console.log(data));
  }
  
  getIPFromAmazon(); // IP

  fetch('https://ipapi.co/json/')
  .then(d => d.json())
  .then(d => document.querySelector('#ip').innerHTML = d.ip);


  console.log(window.location.pathname); // где находится файл программы
  console.log(document.referrer); // откуда приходил пользователь
  console.log(history.length); // история посещения сайтов - количество
  console.log(navigator); // информация о браузере
  console.log(info.dataCookies()); // история посещения сайтов - количество

