const areDasTarefas = document.querySelector('.area-das-tarefas')
const inputTarefa = document.querySelector('.input-tarefa')
let setClassNumber = 0;

let criaritem = () => {
    if(inputTarefa.value === '') {
        alert('preencha o campo com uma tarefa')
    } else {
            areDasTarefas.innerHTML += `<div
            id=${setClassNumber}
            class="tarefa">
            <input  type="checkbox">
            <span> ${document.querySelector('.input-tarefa').value}
            </span> <button onclick="remover()"
                class="delete">
                <img src="images/remover.png" alt="">
                </button>
                </div>`;
            }
    inputTarefa.value = '';
    setClassNumber += 1;
    console.log(setClassNumber)
};

function adicionaritem(e) {
    if (e.keyCode == 13) {
        criaritem();
    }
};


function remover() {
    event.currentTarget.parentElement.remove();
};