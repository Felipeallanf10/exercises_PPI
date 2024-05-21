const btn = document.querySelector('button');
const txt = document.querySelector('p');
   
   
btn.addEventListener('click', updateBtn);
  
function updateBtn() {
  if(btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started';
    addStateAndDate('The machine was stopped at ')
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
    addStateAndDate('The machine started at')
  }
}

function addStateAndDate(state){
  let dataNow = new Date().toLocaleTimeString();
  let li =  document.createElement('li');
  li.textContent = `${state} ${dataNow}`;
  document.querySelector('ul').appendChild(li);
}

