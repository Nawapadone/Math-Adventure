var userName = document.getElementById('player').value;

firebase.database().ref().child('judger/start').on('value' , snap => 
{
    if( snap.val() == true ) 
    {
        window.location.href = "http://13.251.25.72/quiz" + userName;
    }
})