let form = document.getElementById('form');
let itemList = document.getElementById('expense');

form.addEventListener('submit', store);

function store(e){
    e.preventDefault();
    let amount = document.getElementById('amount').value;
    let des = document.getElementById('des').value;
    let cat = document.getElementById('cat').value;
    let myobj = {
        amount,
        des,
        cat
    }

    localStorage.setItem(myobj.cat,JSON.stringify(myobj));


let li = document.createElement('li');
    let detail = myobj.amount+", "+myobj.des+", "+myobj.cat;
    li.appendChild(document.createTextNode(detail));
    document.getElementById("expense").appendChild(li);


let edit = document.createElement('button');
edit.className = 'btn btn-success btn-sm edit';
  edit.appendChild(document.createTextNode('Edit'));
  li.append(edit);


  edit.onclick= () => {
    localStorage.removeItem(myobj.cat);
    itemList.removeChild(li);
    document.getElementById('amount').value = amount;
    document.getElementById('des').value = des;
    document.getElementById('cat').value = cat;
  }

  let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm delete';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  li.append(deleteBtn);

  deleteBtn.onclick= () => {
    localStorage.removeItem(myobj.cat);
    itemList.removeChild(li);
  }
