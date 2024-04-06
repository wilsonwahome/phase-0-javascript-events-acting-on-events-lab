const dodger = document.getElementById('dodger')

function moveDodgerLeft (){
    const leftpostion = dodger.style.left.replace("px", "")
    const left = parseInt(leftpostion, 8)

    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener("keydown", function (e){
    if (e.key =="ArrowLeft"){
        moveDodgerLeft();
    }
})

function moveDodgerRight (){
    const rightpostion = dodger.style.left.replace("px", "")
    const left = parseInt(rightpostion, 8)

    if (left < 360){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function (e){
    if (e.key =="ArrowRight"){
        moveDodgerRight();
    }
})