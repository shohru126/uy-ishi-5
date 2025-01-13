document.addEventListener("DOMContentLoaded", () => {
    const decrementBtn = document.getElementById("decrement-btn");
    const incrementBtn = document.getElementById("increment-btn");
    const counterValue = document.getElementById("counter-value");
    const sendBtn = document.getElementById("send-btn");
    const numberInput = document.getElementById("number-input");
    const colorPicker = document.getElementById("color-picker");
  
    let counter = 0;
  
   
    function updateCounter(value) {
      counter = value;
      counterValue.textContent = counter;
    }
    decrementBtn.addEventListener("click", () => {
      updateCounter(counter - 1);
    });
    incrementBtn.addEventListener("click", () => {
      updateCounter(counter + 1);
    });
    sendBtn.addEventListener("click", () => {
      const inputValue = parseInt(numberInput.value, 10);
      if (!isNaN(inputValue)) {
        updateCounter(inputValue);
      }
    });
    colorPicker.addEventListener("input", () => {
      counterValue.style.color = colorPicker.value;
    });
  });
  