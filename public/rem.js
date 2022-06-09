function resetRootFontSize(){
    let html = document.querySelector('html')
    let width = html.getBoundingClientRect().width
    html.style.fontSize = width/10 + 'px'
}
resetRootFontSize()

window.addEventListener('resize',()=>resetRootFontSize())