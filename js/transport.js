// Функция для открытия модального окна
function openModal() {
  document.getElementById('modal-category').style.display = 'block';
  // Добавляем обработчик событий для клика на весь документ
  document.addEventListener('click', outsideModalClick);
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  // Удаляем обработчик событий для клика на весь документ
  document.removeEventListener('click', outsideModalClick);
}

// Функция, которая проверяет, был ли клик совершен вне модального окна
function outsideModalClick(event) {
  const modal = document.getElementById('modal-category');
  // Проверяем, был ли клик совершен вне модального окна
  if (event.target === modal) {
      // Если да, закрываем модальное окно
      closeModal('modal-category');
  }
}// Функция для открытия модального окна
function openModal() {
  document.getElementById('modal-category').style.display = 'block';
  // Добавляем обработчик событий для клика на весь документ
  document.addEventListener('click', outsideModalClick);
}

// Функция для закрытия модального окна
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  // Удаляем обработчик событий для клика на весь документ
  document.removeEventListener('click', outsideModalClick);
}

// Функция, которая проверяет, был ли клик совершен вне модального окна
function outsideModalClick(event) {
  const modal = document.getElementById('modal-category');
  // Проверяем, был ли клик совершен вне модального окна
  if (event.target === modal) {
      // Если да, закрываем модальное окно
      closeModal('modal-category');
  }
}


// Обработка выбранной категории
function processCategory(category) {
  switch(category) {
      case 1:
          // Логика для легкового автомобиля
          document.getElementById('modal-question').style.display = 'block';
          document.getElementById('question-content').innerHTML = "<h2>У вас электромобиль?</h2><button class='button' onclick='processElectricCar(true)'>Да</button><button class='button' onclick='processElectricCar(false)'>Нет</button>";
          break;
      case 2:
          // Логика для грузового и специального автотранспорта
          document.getElementById('modal-question').style.display = 'block';
          document.getElementById('question-content').innerHTML = "<h2>Укажите грузоподъёмность вашего грузового, специального автотранспорта:</h2><button class='button' onclick='processCargo(\"1\")'>до 1 тонны включительно</button><button class='button' onclick='processCargo(\"2\")'>свыше 1 тонны до 1.5 тонны включительно</button><button class='button' onclick='processCargo(\"3\")'>свыше 1.5 до 5 тонн включительно</button><button class='button' onclick='processCargo(\"4\")'>свыше 5 тонн</button>";
          break;

          case 3:
            document.getElementById('modal-question').style.display = 'block';
            document.getElementById('question-content').innerHTML = "<h2>Выберите количество посадочных мест:</h2><button class='button' onclick='processBusSeats(1)'>до 12 посадочных мест включительно</button><button class='button' onclick='processBusSeats(2)'>свыше 12 до 25 посадочных мест включительно</button><button class='button' onclick='processBusSeats(3)'>свыше 25 посадочных мест</button>";
            break;
        
            case 4:
              document.getElementById('modal-question').style.display = 'block';
              document.getElementById('question-content').innerHTML = "<h2>Укажите мощность двигателя:</h2><button class='button' onclick='processMotorPower(1)'>Не более 55 кВт</button><button class='button' onclick='processMotorPower(2)'>Свыше 55 кВт</button>";
              break;
      
  }
  closeModal('modal-category'); // Закрываем модальное окно выбора категории
}

// Обработка выбора электромобиля
function processElectricCar(isElectric) {
  if (isElectric) {
    displayResult("Поздравляю! Вы освобождены от уплаты налога!");
      document.getElementById('modal-result').style.display = 'block';
  } else {
    document.getElementById('modal-question').style.display = 'block';
    document.getElementById('question-content').innerHTML = "<h2>Объем вашего легкового автомобиля свыше 3000 кубических сантиметров?</h2><button class='button' onclick='processLargeEngine(true)'>Да</button><button class='button' onclick='processLargeEngine(false)'>Нет</button>";
  }
}

// Обработка выбора объема двигателя большого легкового автомобиля
function processLargeEngine(hasLargeEngine) {
  if (hasLargeEngine) {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Автомобиль был произведен, изготовлен, собран в Республике Казахстан или ввезен на территорию Республики Казахстан после 31 декабря 2013 года?</h2><button class='button' onclick='processMadeInKazakhstan(true)'>Да</button><button class='button' onclick='processMadeInKazakhstan(false)'>Нет</button>";
  } else {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Укажите объем двигателя вашего легкового автомобиля:</h2><button class='button' onclick='processSmallEngine(\"1\")'>от 500 до 1100</button><button class='button' onclick='processSmallEngine(\"2\")'>свыше 1100 до 1500</button><button class='button' onclick='processSmallEngine(\"3\")'>свыше 1500 до 2000</button><button class='button' onclick='processSmallEngine(\"4\")'>свыше 2000 до 2500</button><button class='button' onclick='processSmallEngine(\"5\")'>свыше 2500 до 3000</button><button class='button' onclick='processSmallEngine(\"6\")'>свыше 3000 до 4000</button><button class='button' onclick='processSmallEngine(\"7\")'>свыше 4000</button>";
  }
}

// Обработка выбора малого объема двигателя
function processSmallEngine(volume) {
  switch(volume) {
      case "1":
          displayResult("Результат: 3692 тенге");
          break;
      case "2":
          displayResult("Результат: 7384 тенге");
          break;
      case "3":
          displayResult("Результат: 11 076 тенге");
          break;
      case "4":
          displayResult("Результат: 22 152 тенге");
          break;
      case "5":
          displayResult("Результат: 33 228 тенге");
          break;
      case "6":
          displayResult("Результат: 55 380 тенге");
          break;
      case "7":
          displayResult("Результат: 431 964 тенге");
          break;
  }
  document.getElementById('modal-question').style.display = 'none'; // Закрываем модальное окно с вопросом
  document.getElementById('modal-result').style.display = 'block'; // Показываем модальное окно с результатом
}

// Функция для отображения результата
function displayResult(resultText) {
  document.getElementById('result-text').innerHTML = resultText;
}

// Обработка выбора большого объема двигателя
function processMadeInKazakhstan(madeInKazakhstan) {
  if (madeInKazakhstan) {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Укажите объем двигателя вашего легкового автомобиля:</h2><button class='button' onclick='processLargeEngineVolume(\"1\")'>свыше 3000 – до 3200</button><button class='button' onclick='processLargeEngineVolume(\"2\")'>свыше 3200 до 3500</button><button class='button' onclick='processLargeEngineVolume(\"3\")'>свыше 3500 до 4000</button><button class='button' onclick='processLargeEngineVolume(\"4\")'>свыше 4000 до 5000</button><button class='button' onclick='processLargeEngineVolume(\"5\")'>свыше 5000</button>";
  } else {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Укажите объем двигателя вашего легкового автомобиля:</h2><button class='button' onclick='processSmallEngine(\"1\")'>от 500 до 1100</button><button class='button' onclick='processSmallEngine(\"2\")'>свыше 1100 до 1500</button><button class='button' onclick='processSmallEngine(\"3\")'>свыше 1500 до 2000</button><button class='button' onclick='processSmallEngine(\"4\")'>свыше 2000 до 2500</button><button class='button' onclick='processSmallEngine(\"5\")'>свыше 2500 до 3000</button><button class='button' onclick='processSmallEngine(\"6\")'>свыше 3000 до 4000</button><button class='button' onclick='processSmallEngine(\"7\")'>свыше 4000</button>";
  }
}

// Обработка выбора объема двигателя большого легкового автомобиля
function processLargeEngineVolume(volume) {
  switch(volume) {
      case "1":
          displayResult("Результат: 129 220 тенге");
          break;
      case "2":
          displayResult("Результат: 169 832 тенге");
          break;
      case "3":
          displayResult("Результат: 243 672 тенге");
          break;
      case "4":
          displayResult("Результат: 479 960 тенге");
          break;
      case "5":
          displayResult("Результат: 738 400 тенге");
          break;
  }
  document.getElementById('modal-question').style.display = 'none'; // Закрываем модальное окно с вопросом
  document.getElementById('modal-result').style.display = 'block'; // Показываем модальное окно с результатом
}

// Обработка выбора грузоподъёмности грузового транспорта
function processCargo(payload) {
  switch(payload) {
      case "1":
          displayResult("Результат: 11 076 тенге");
          break;
      case "2":
          displayResult("Результат: 18 460 тенге");
          break;
      case "3":
          displayResult("Результат: 25 844 тенге");
          break;
      case "4":
          displayResult("Результат: 33 228 тенге");
          break;  
  }

  // Закрыть модальное окно с вопросом
  document.getElementById('modal-question').style.display = 'none';
  // Открыть модальное окно с результатом
  document.getElementById('modal-result').style.display = 'block';
}

function processBusSeats(seats) {
  switch(seats) {
      case 1:
          displayResult("Результат: 33 228 тенге");
          break;
      case 2:
          displayResult("Результат: 51 688 тенге");
          break;
      case 3:
          displayResult("Результат: 73 840 тенге");
          break;
  }

  // Закрыть модальное окно с вопросом
  document.getElementById('modal-question').style.display = 'none';
  // Открыть модальное окно с результатом
  document.getElementById('modal-result').style.display = 'block';
}

function processMotorPower(power) {
  switch(power) {
      case 1:
          displayResult("Результат: 3 692 тенге");
          break;
      case 2:
          displayResult("Результат: 36 920 тенге");
          break;
  }

  // Закрыть модальное окно с вопросом
  document.getElementById('modal-question').style.display = 'none';
  // Открыть модальное окно с результатом
  document.getElementById('modal-result').style.display = 'block';
}



// Обработка выбранной категории
function processCategory(category) {
  switch(category) {
      case 1:
          // Логика для легкового автомобиля
          document.getElementById('modal-question').style.display = 'block';
          document.getElementById('question-content').innerHTML = "<h2>У вас электромобиль?</h2><button class='button' onclick='processElectricCar(true)'>Да</button><button class='button' onclick='processElectricCar(false)'>Нет</button>";
          break;
      case 2:
          // Логика для грузового и специального автотранспорта
          document.getElementById('modal-question').style.display = 'block';
          document.getElementById('question-content').innerHTML = "<h2>Укажите грузоподъёмность вашего грузового, специального автотранспорта:</h2><button class='button' onclick='processCargo(\"1\")'>до 1 тонны включительно</button><button class='button' onclick='processCargo(\"2\")'>свыше 1 тонны до 1.5 тонны включительно</button><button class='button' onclick='processCargo(\"3\")'>свыше 1.5 до 5 тонн включительно</button><button class='button' onclick='processCargo(\"4\")'>свыше 5 тонн</button>";
          break;

          case 3:
            document.getElementById('modal-question').style.display = 'block';
            document.getElementById('question-content').innerHTML = "<h2>Выберите количество посадочных мест:</h2><button class='button' onclick='processBusSeats(1)'>до 12 посадочных мест включительно</button><button class='button' onclick='processBusSeats(2)'>свыше 12 до 25 посадочных мест включительно</button><button class='button' onclick='processBusSeats(3)'>свыше 25 посадочных мест</button>";
            break;
        
            case 4:
              document.getElementById('modal-question').style.display = 'block';
              document.getElementById('question-content').innerHTML = "<h2>Укажите мощность двигателя:</h2><button class='button' onclick='processMotorPower(1)'>Не более 55 кВт</button><button class='button' onclick='processMotorPower(2)'>Свыше 55 кВт</button>";
              break;
      
  }
  closeModal('modal-category'); // Закрываем модальное окно выбора категории
}

// Обработка выбора электромобиля
function processElectricCar(isElectric) {
  if (isElectric) {
    displayResult("Поздравляю! Вы освобождены от уплаты налога!");
      document.getElementById('modal-result').style.display = 'block';
  } else {
    document.getElementById('modal-question').style.display = 'block';
    document.getElementById('question-content').innerHTML = "<h2>Объем вашего легкового автомобиля свыше 3000 кубических сантиметров?</h2><button class='button' onclick='processLargeEngine(true)'>Да</button><button class='button' onclick='processLargeEngine(false)'>Нет</button>";
  }
}

// Обработка выбора объема двигателя большого легкового автомобиля
function processLargeEngine(hasLargeEngine) {
  if (hasLargeEngine) {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Автомобиль был произведен, изготовлен, собран в Республике Казахстан или ввезен на территорию Республики Казахстан после 31 декабря 2013 года?</h2><button class='button' onclick='processMadeInKazakhstan(true)'>Да</button><button class='button' onclick='processMadeInKazakhstan(false)'>Нет</button>";
  } else {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Укажите объем двигателя вашего легкового автомобиля:</h2><button class='button' onclick='processSmallEngine(\"1\")'>от 500 до 1100</button><button class='button' onclick='processSmallEngine(\"2\")'>свыше 1100 до 1500</button><button class='button' onclick='processSmallEngine(\"3\")'>свыше 1500 до 2000</button><button class='button' onclick='processSmallEngine(\"4\")'>свыше 2000 до 2500</button><button class='button' onclick='processSmallEngine(\"5\")'>свыше 2500 до 3000</button><button class='button' onclick='processSmallEngine(\"6\")'>свыше 3000 до 4000</button><button class='button' onclick='processSmallEngine(\"7\")'>свыше 4000</button>";
  }
}

// Обработка выбора малого объема двигателя
function processSmallEngine(volume) {
  switch(volume) {
      case "1":
          displayResult("Результат: 3692 тенге");
          break;
      case "2":
          displayResult("Результат: 7384 тенге");
          break;
      case "3":
          displayResult("Результат: 11 076 тенге");
          break;
      case "4":
          displayResult("Результат: 22 152 тенге");
          break;
      case "5":
          displayResult("Результат: 33 228 тенге");
          break;
      case "6":
          displayResult("Результат: 55 380 тенге");
          break;
      case "7":
          displayResult("Результат: 431 964 тенге");
          break;
  }
  document.getElementById('modal-question').style.display = 'none'; // Закрываем модальное окно с вопросом
  document.getElementById('modal-result').style.display = 'block'; // Показываем модальное окно с результатом
}

// Функция для отображения результата
function displayResult(resultText) {
  document.getElementById('result-text').innerHTML = resultText;
}

// Обработка выбора большого объема двигателя
function processMadeInKazakhstan(madeInKazakhstan) {
  if (madeInKazakhstan) {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Укажите объем двигателя вашего легкового автомобиля:</h2><button class='button' onclick='processLargeEngineVolume(\"1\")'>свыше 3000 – до 3200</button><button class='button' onclick='processLargeEngineVolume(\"2\")'>свыше 3200 до 3500</button><button class='button' onclick='processLargeEngineVolume(\"3\")'>свыше 3500 до 4000</button><button class='button' onclick='processLargeEngineVolume(\"4\")'>свыше 4000 до 5000</button><button class='button' onclick='processLargeEngineVolume(\"5\")'>свыше 5000</button>";
  } else {
      document.getElementById('modal-question').style.display = 'block';
      document.getElementById('question-content').innerHTML = "<h2>Укажите объем двигателя вашего легкового автомобиля:</h2><button class='button' onclick='processSmallEngine(\"1\")'>от 500 до 1100</button><button class='button' onclick='processSmallEngine(\"2\")'>свыше 1100 до 1500</button><button class='button' onclick='processSmallEngine(\"3\")'>свыше 1500 до 2000</button><button class='button' onclick='processSmallEngine(\"4\")'>свыше 2000 до 2500</button><button class='button' onclick='processSmallEngine(\"5\")'>свыше 2500 до 3000</button><button class='button' onclick='processSmallEngine(\"6\")'>свыше 3000 до 4000</button><button class='button' onclick='processSmallEngine(\"7\")'>свыше 4000</button>";
  }
}

// Обработка выбора объема двигателя большого легкового автомобиля
function processLargeEngineVolume(volume) {
  switch(volume) {
      case "1":
          displayResult("Результат: 129 220 тенге");
          break;
      case "2":
          displayResult("Результат: 169 832 тенге");
          break;
      case "3":
          displayResult("Результат: 243 672 тенге");
          break;
      case "4":
          displayResult("Результат: 479 960 тенге");
          break;
      case "5":
          displayResult("Результат: 738 400 тенге");
          break;
  }
  document.getElementById('modal-question').style.display = 'none'; // Закрываем модальное окно с вопросом
  document.getElementById('modal-result').style.display = 'block'; // Показываем модальное окно с результатом
}

// Обработка выбора грузоподъёмности грузового транспорта
function processCargo(payload) {
  switch(payload) {
      case "1":
          displayResult("Результат: 11 076 тенге");
          break;
      case "2":
          displayResult("Результат: 18 460 тенге");
          break;
      case "3":
          displayResult("Результат: 25 844 тенге");
          break;
      case "4":
          displayResult("Результат: 33 228 тенге");
          break;  
  }

  // Закрыть модальное окно с вопросом
  document.getElementById('modal-question').style.display = 'none';
  // Открыть модальное окно с результатом
  document.getElementById('modal-result').style.display = 'block';
}

function processBusSeats(seats) {
  switch(seats) {
      case 1:
          displayResult("Результат: 33 228 тенге");
          break;
      case 2:
          displayResult("Результат: 51 688 тенге");
          break;
      case 3:
          displayResult("Результат: 73 840 тенге");
          break;
  }

  // Закрыть модальное окно с вопросом
  document.getElementById('modal-question').style.display = 'none';
  // Открыть модальное окно с результатом
  document.getElementById('modal-result').style.display = 'block';
}

function processMotorPower(power) {
  switch(power) {
      case 1:
          displayResult("Результат: 3 692 тенге");
          break;
      case 2:
          displayResult("Результат: 36 920 тенге");
          break;
  }

  // Закрыть модальное окно с вопросом
  document.getElementById('modal-question').style.display = 'none';
  // Открыть модальное окно с результатом
  document.getElementById('modal-result').style.display = 'block';
}


let dohod = 0; // Доход
let corr = 0; // Корректировки

// Открыть модальное окно для выбора месяца
function openModalIPN() {
    document.getElementById('modal-question-ipn').style.display = 'block';
}

// Закрыть модальное окно
function closeModalIPN(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Обработка выбранного месяца
function processMonthIPN(month, year) {
    // Сохраняем выбранный месяц и год
    // Дополнительная логика может быть добавлена здесь, если нужно
    openModalDohod();
}

// Открыть модальное окно для ввода дохода
function openModalDohod() {
    document.getElementById('modal-dohod').style.display = 'block';
}

// Сохранить введенный пользователем доход
function saveDohod() {
    dohod = parseInt(document.getElementById('dohod-input').value) || 0; // Преобразуем введенное значение в число
    closeModalDohod();
    openModalCorr();
}

// Закрыть модальное окно для ввода дохода
function closeModalDohod() {
    document.getElementById('modal-dohod').style.display = 'none';
}

// Открыть модальное окно для вопроса о корректировках
function openModalCorr() {
    document.getElementById('modal-corr').style.display = 'block';
}

// Сохранить введенные пользователем корректировки
function saveCorr() {
    corr = parseInt(document.getElementById('corr-input').value) || 0; // Преобразуем введенное значение в число
    closeModalCorr();
    calculateIPN();
}

// Закрыть модальное окно для вопроса о корректировках
function closeModalCorr() {
    document.getElementById('modal-corr').style.display = 'none';
}

// Расчет налогов и вывод результатов
function openModalResultIPN(opv, voms, ipn) {
  document.getElementById('modal-result-ipn').style.display = 'block';
  // Заполнение элементов с результатами
  document.getElementById('opv').innerHTML = opv;
  document.getElementById('voms').innerHTML = voms;
  document.getElementById('ipn').innerHTML = ipn;
}

// Расчет налогов и вывод результатов
function calculateIPN() {
  const opv = dohod * 0.1; // ОПВ
  let voms = dohod * 0.02; // ВОМС
  if (dohod > 850000) {
      voms = 17000; // Если доход больше 850000, то ВОМС равен 17000 тенге
  }
  const ipn = (dohod - opv - voms - corr) * 0.1; // Налог ИПН
  openModalResultIPN(opv, voms, ipn); 
}

// Закрыть модальное окно с результатами ИПН
function closeModalResultIPN() {
    document.getElementById('modal-result-ipn').style.display = 'none';
}

// Открыть модальное окно для рассчета социальных налогов и отчислений
function openModalSocial() {
  const opv = dohod * 0.1; // ОПВ
  let voms = dohod * 0.02; // ВОМС
  if (dohod > 850000) {
      voms = 17000; // Если доход больше 850000, то ВОМС равен 17000 тенге
  }

  const socNalog = (dohod - opv - voms) * 0.095; // Социальный налог
  const socOtchis = (dohod - opv) * 0.035; // Социальные отчисления
  const socNalogKUplate = socNalog - socOtchis; // Социальный налог к уплате

  // Проверяем, что переменные не равны NaN
  if (!isNaN(socNalog) && !isNaN(socOtchis) && !isNaN(socNalogKUplate)) {
      // Отображение результатов в модальном окне
      document.getElementById('soc-nalog').innerHTML = socNalog;
      document.getElementById('soc-otchis').innerHTML = socOtchis;
      document.getElementById('soc-nalog-k-uplate').innerHTML = socNalogKUplate;
  } else {
      // Если одна из переменных равна NaN, выводим сообщение об ошибке
      alert('Ошибка расчета социальных налогов и отчислений. Пожалуйста, проверьте введенные данные.');
  }

  // Открытие модального окна
  document.getElementById('modal-social').style.display = 'block';
}


// Закрыть модальное окно для рассчета социальных налогов и отчислений
function closeModalSocial() {
    document.getElementById('modal-social').style.display = 'none';
}















var residency;
var god_dohod;
var vycheti;
var nod;
var avans;

function openModalKPN() {
  document.getElementById('myModal').style.display = 'block';
  residency = undefined;
  god_dohod = undefined;
  vycheti = undefined;
  nod = undefined;
  avans = undefined;
  askResidency();
}

function closeModalKPN() {
  document.getElementById('myModal').style.display = 'none';
}

function askResidency() {
  document.getElementById('residencyQuestion').style.display = 'block';
}

function residencyCheck(isResident) {
  residency = isResident;
  document.getElementById('residencyQuestion').style.display = 'none';
  document.getElementById('godDohodQuestion').style.display = 'block';
}

function saveGodDohod() {
  god_dohod = parseFloat(document.getElementById('god_dohod').value);
  document.getElementById('godDohodQuestion').style.display = 'none';
  document.getElementById('vychetiQuestion').style.display = 'block';
}

function saveVycheti() {
  vycheti = parseFloat(document.getElementById('vycheti').value);
  document.getElementById('vychetiQuestion').style.display = 'none';
  document.getElementById('nodQuestion').style.display = 'block';
}

function saveNod() {
  var sp_help = document.getElementById('sp_help').checked;
  var op_obuch = document.getElementById('op_obuch').checked;
  var ubytki = document.getElementById('ubytki').checked;
  var invalid = document.getElementById('invalid').checked;
  avans = parseFloat(document.getElementById('avans').value);

  nod = 0;
  if (sp_help) nod += 1;
  if (op_obuch) nod += 1;
  if (ubytki) nod += 1;
  if (invalid) nod += 1;

  document.getElementById('nodQuestion').style.display = 'none';
  document.getElementById('submitButton').style.display = 'block';
}

function calculateKPN() {
  var nod_res = god_dohod - vycheti - nod;
  var kpn_res = (residency ? nod_res * 0.15 : nod_res * 0.20) - avans;

  document.getElementById('result').innerHTML = 'Сумма налога КПН: ' + kpn_res.toFixed(2);
}


