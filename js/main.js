// Reference the various elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

setTimeout(function(){
    chatbotSendMessage("Hi from ChatBot");
},1000)



function chatbotSendMessage(messageText){

    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sn');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span> Chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});   

    chatContainer.appendChild(messageElement);
}

function sendMesaage(messageText){
    
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sn');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = "<span> Me: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});

    chatContainer.appendChild(messageElement);

    makeRequest(messageText);
};

function makeRequest(messageText){
    //ajax
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET','chatbot.php?message='+messageText,true);
    httpRequest.send();
    httpRequest.onreadystatechange = chatbotSendMessage;
};

sendBtn.addEventListener('click',function(e){

    if(textbox.value == ""){
        alert('Please type in a message');
    }
    else{
    let messageText = textbox.value;
    sendMesaage(messageText);
    textbox.value = "";
    }
});