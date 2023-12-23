let nowTime = new Date();
let hiniti = nowTime.getDate();

keizoku();
setInterval('keizoku()',1000);

function santa() {
    document.getElementById('santa').style.animationPlayState = 'running';
    document.getElementById('HO').style.display = 'block';
}




function keizoku() {
    hiniti = nowTime.getDate();
    if (hiniti === 25) {
        document.getElementById('tree').src = 'https://4.bp.blogspot.com/-xC3fKIfunTo/VkqPNryifwI/AAAAAAAA0ho/kWbucZsAKwU/s800/christmastree_decoration.png';
        document.getElementById('snow').style.display = 'block';
    }
}
