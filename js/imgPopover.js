const popover = document.querySelector('#popover')
const popoverTrigger = document.querySelector('#popover-trigger')
const popoverCloseBtn = document.querySelector('#popover-closeBtn')


const show = () => {
    popover.setAttribute('data-show', '')
}

const hide = () => {
    popover.removeAttribute('data-show')
}

popoverTrigger.addEventListener('click', show)
popoverCloseBtn.addEventListener('click', hide)