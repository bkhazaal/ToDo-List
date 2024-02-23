const BUTTON = document.getElementById('addlist');

BUTTON.addEventListener('click', () => {

    const P1 = document.createElement("p")
    P1.textContent = "List Name:";
    const INPUT1 = document.createElement("input");
    const newlistDiv = document.getElementById('newlist');
    newlistDiv.appendChild(P1);
    newlistDiv.appendChild(INPUT1);
    
    const P2 = document.createElement("p")
    P2.textContent = "Description:";
    const INPUT2 = document.createElement("input");
    const newlistDiv2 = document.getElementById('newlist2');
    newlistDiv2.appendChild(P2);
    newlistDiv2.appendChild(INPUT2);


    console.log('yay!');
    
},{once : true});