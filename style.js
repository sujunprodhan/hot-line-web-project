
// call funcion 
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart icon start here

const heartIcon = document.getElementsByClassName('heart_icon')
const heartBtn = getElement('heart_btn').innerText
let countHeartButton = Number(heartBtn)

// heart icon end here

// call button praent
const ProductBox = getElement('product_box')
ProductBox.addEventListener('click', function (e) {
  if (e.target.className.includes('call_butoon')) {
    const buttonEvent = e.target
    const cardtitle = buttonEvent.parentNode.parentNode.children[1].innerText
    const callNumber = buttonEvent.parentNode.parentNode.children[3].innerText
    const asideContainer = getElement('cart_container')
    console.log(asideContainer);

    const div = document.createElement('div')
    const currentDate = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const currentTime12Hour = currentDate.toLocaleString("en-BD", options);
    div.innerHTML = `
           <div class="flex justify-between items-center">
            <div>
              <h2>${cardtitle}</h2>
              <h2>${callNumber}</h2>
            </div>
            <p>${currentTime12Hour}</p>
          </div>
    `
    asideContainer.appendChild(div);
    return alert(`📞 Calling ${cardtitle}, ${callNumber}...`);
    console.log(cardtitle, callNumber);
  }
})


const coinBtn = getElement('coin_btn')
const callButton = getElement('call_btn_1')
const coinIcon = getElement('coin_icon')
const copyButton = getElement('copyBtn')

// hear icon loop start here

for (let hert of heartIcon) {
  hert.addEventListener('click', function () {
    countHeartButton += 1;
    document.getElementById('heart_btn').innerText = countHeartButton
    console.log('click heart');
  })
}
// hear icon loop end here

// call button js here
