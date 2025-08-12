let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")

let pointH = 0
let pointA = 0

function home1point() {
    pointH += 1
    homeEl.textContent = pointH
}

function home2point() {
    pointH += 2
    homeEl.textContent = pointH
}

function home3point() {
    pointH += 3
    homeEl.textContent = pointH
}

function away1point() {
    pointA += 1
    awayEl.textContent = pointA
}

function away2point() {
    pointA += 2
    awayEl.textContent = pointA
}

function away3point() {
    pointA += 3
    awayEl.textContent = pointA
}