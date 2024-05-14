//Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isOver = true;
            return isOver;



            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "70px";

        }
    });
};
