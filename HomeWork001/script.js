scheduleData = [
  {
    object: "Алгебра",
    date: "20.01.2024",
    maxQuantity: 20,
    currentQuantity: 10,
  },
  {
    object: "Геометрия",
    date: "20.01.2024",
    maxQuantity: 15,
    currentQuantity: 7,
  },
  {
    object: "Физика",
    date: "21.01.2024",
    maxQuantity: 8,
    currentQuantity: 8,
  },
  {
    object: "Химия",
    date: "22.01.2024",
    maxQuantity: 11,
    currentQuantity: 3,
  },
  {
    object: "Физика",
    date: "22.01.2024",
    maxQuantity: 17,
    currentQuantity: 15,
  },
];

const scheduleElem = document.querySelector(".schedule");

function printSchedule() {
  for (const item of scheduleData) {

    const divElem = document.createElement("div");
    divElem.classList.add("item");
    scheduleElem.appendChild(divElem);

    const h2Elem = document.createElement("h2");
    h2Elem.classList.add("object_title");
    h2Elem.textContent = item.object;
    divElem.appendChild(h2Elem);

    const divInfoElem = document.createElement("div");
    divInfoElem.classList.add("info");
    divElem.appendChild(divInfoElem);

    const dataElem = document.createElement("div");
    dataElem.textContent = `Дата: ${item.date}`;
    divInfoElem.appendChild(dataElem);

    const maxPersonElem = document.createElement("div");
    maxPersonElem.textContent = `Максимум участников: ${item.maxQuantity}`;
    divInfoElem.appendChild(maxPersonElem);

    const currentPersonElem = document.createElement("div");
    currentPersonElem.classList.add("currentPerson");
    if (item.currentQuantity === item.maxQuantity) {
      currentPersonElem.classList.add("red-text")
    }
    currentPersonElem.textContent = `Кол-во участников: ${item.currentQuantity}`;
    divInfoElem.appendChild(currentPersonElem);

    const divButtonsElem = document.createElement("div");
    divButtonsElem.classList.add("btn");
    divElem.appendChild(divButtonsElem);

    const signBtnElem = document.createElement("button");
    signBtnElem.classList.add("btn_item");
    signBtnElem.classList.add("btn_in");
    signBtnElem.textContent = "Записаться";
    signBtnElem.disabled = item.currentQuantity === item.maxQuantity;
    divButtonsElem.appendChild(signBtnElem);

    const subscribeOutBtnElem = document.createElement("button");
    subscribeOutBtnElem.classList.add("btn_item");
    subscribeOutBtnElem.classList.add("btn_out");
    subscribeOutBtnElem.textContent = "Отменить";
    divButtonsElem.appendChild(subscribeOutBtnElem);
  }
}

printSchedule();

let arrayButtonsInElem = document.querySelectorAll(".btn_in");
let arrayButtonsOutElem = document.querySelectorAll(".btn_out");
const currentPersonElem = document.querySelectorAll('.currentPerson')

for (let index = 0; index < arrayButtonsInElem.length; index++) {
  arrayButtonsInElem[index].addEventListener("click", () => {
    if (scheduleData[index].currentQuantity < scheduleData[index].maxQuantity) {
      scheduleData[index].currentQuantity = scheduleData[index].currentQuantity + 1;
      arrayButtonsOutElem[index].disabled = false;
      if (scheduleData[index].currentQuantity === scheduleData[index].maxQuantity) {
        arrayButtonsInElem[index].disabled = true;
        currentPersonElem[index].classList.add('red-text');
      }
      currentPersonElem[index].textContent=`Кол-во участников: ${scheduleData[index].currentQuantity}`;
    }
  });
}

for (let index = 0; index < arrayButtonsOutElem.length; index++) {
  arrayButtonsOutElem[index].addEventListener("click", () => {
    if (scheduleData[index].currentQuantity > 0) {
      scheduleData[index].currentQuantity = scheduleData[index].currentQuantity - 1;
      arrayButtonsInElem[index].disabled = false;
      currentPersonElem[index].textContent=`Кол-во участников: ${scheduleData[index].currentQuantity}`;
      currentPersonElem[index].classList.remove('red-text');
      arrayButtonsOutElem[index].disabled = scheduleData[index].currentQuantity === 0
    }
  });
}
