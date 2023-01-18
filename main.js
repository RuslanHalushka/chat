const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


const socket = io();

const form = document.getElementById('form2');
const input = document.getElementById('input2');
const name = document.getElementById('name');

btn1.onclick = (e) =>{
    e.preventDefault();
    const userName = document.getElementById('input1').value;
    if(userName === ''){
        alert('Enter your name');
        return
    }
    name.innerHTML = userName;
    console.log(userName);
    document.getElementById('header').style.display = 'block';
    document.getElementById('form1').style.display = 'none';
    const form = document.getElementById('form2');
    btn2.onclick = (ev) =>{
        ev.preventDefault();

        if(input.value){
            console.log('eeeeee', input.value);
            socket.emit('chat message', {    
                message: input.value,
                name: userName
            })
            input.value = '';
        }
    }

    const messages = document.querySelector('.messages');
    socket.on('chat message', (data)=>{
        console.log(data, '------');
        const someMess = document.createElement('li');
        someMess.innerHTML = `${data.name}: ${data.message}`;
        console.log(someMess);
        messages.appendChild(someMess);
        
        
    })
}


