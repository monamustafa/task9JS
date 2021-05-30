// first way
// function FirstBg() {
//     document.querySelector('body').style.backgroundColor = "#e17055";
// }
// function secondBg() {
//     document.querySelector('body').style.backgroundColor = "#81ecec";
// }
// function thirdBg() {
//     document.querySelector('body').style.backgroundColor = "#6c5ce7";
// }



// anther way 
document.querySelectorAll('.buttons button').forEach(item => {
    item.addEventListener('click', function () {
        console.log(item.value);
        document.querySelector('body').style.backgroundColor = item.value;
    })
})
