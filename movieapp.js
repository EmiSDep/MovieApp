document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    //delete movies
    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    // add movies
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');
    const completeBtn = document.createElement('span');

    //add text content
    movieName.textContent = value;
    deleteBtn.textContent = 'delete';
    completeBtn.textContent = 'complete';

    // add classes
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');
    completeBtn.classList.add('complete')

    // append to DOM
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    list.appendChild(li)
    });

    // hide movies
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display = "none";
        } else {
            list.style.display = "initial";
        }
    });

    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('panel');
    tabs.addEventListener('click', (e) => {
        if(e.target.tagName == 'LI'){
            const targetPanel = document.querySelector(e.target.dataset.target);
            Array.from(panels).forEach((panel) => {
                if(panel == targetPanel){
                    panel.classList.add('active');
                }else{
                    panel.classList.remove('active');
                }
            });
        }
    });

})