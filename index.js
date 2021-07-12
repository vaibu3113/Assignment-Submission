let cards =[
    {
    image : "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
    value:1,
    status:"closed"
    },
    {
    image: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
    value:1,
    status:"closed"
    },
    {
    image: "https://image.shutterstock.com/image-photo/samutprakarn-june-21-ironman-figure-260nw-1433636699.jpg",
    value:2,
    status:"closed"
    },
    {
    image : "https://image.shutterstock.com/image-photo/samutprakarn-june-21-ironman-figure-260nw-1433636699.jpg",
    value:2,
    status:"closed"
    },
    {
    image : "https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
    value:3,
    status:"closed"
    },
    {
    image : "https://i.pinimg.com/236x/23/24/91/2324912e2b8aa4710839b47c0db66d78.jpg",
    value:3,
    status:"closed"
    },
    {
    image:"https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
    value:4,
    status:"closed"
    },
    {
    image: "https://cdn.theatlantic.com/thumbor/cTP7DsiUyI81zFg8c-FDnIoCBhA=/540x0:2340x1800/540x540/media/img/mt/2016/01/superman/original.jpg",
    value:4,
    status:"closed"
    },
    {
    image : "https://i.pinimg.com/236x/c6/90/54/c69054417c134ff5f425198fbb799cff.jpg",
    value:5,
    status:"closed"
    },
    {
    image : "https://i.pinimg.com/236x/c6/90/54/c69054417c134ff5f425198fbb799cff.jpg",
    value:5,
    status:"closed"
    },
]

// durnsten algo (shutffling) 

let temp ;
for(let i = cards.length-1 ; i>=0 ; i--){
    let j = Math.floor(Math.random()*(i+1));
    temp = cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

function displayCards(data){
    let cardsString = "";

    data.forEach(function(card,index){
        cardsString+= 
        `<div class = "card" style="background-image:url('${card.image}')">
            <div class = " overlay ${card.status}" onclick = "openCard(${index})">

            </div>
        </div>
        `
    })
    document.getElementById('cards').innerHTML = cardsString;

}

displayCards(cards);

let cardCount = 1; 
let val1 = null , val2 = null;
let score = 0;

function openCard(index){
    
    cards[index].status = "opened";
    if(cardCount === 1){
        val1=cards[index].value;
        cardCount++
    }
    else if(cardCount === 2){
        val2=cards[index].value;
        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after guessing
            val1 = null;
            val2 = null;
            cardCount=1;
        }
        else{
            alert("Game Over");
            location.reload();
        }
    }
    displayCards(cards);
}