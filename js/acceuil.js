const slides = document.querySelector('.slider').children
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const indicator = document.querySelector('.indicator')
let index = 0

prev.addEventListener('click', (e) => {
    prevSlide()
    updateCircleIndicator()
    resetTimer()
})

next.addEventListener('click', (e) => {
    nextSlide()
    updateCircleIndicator()
    resetTimer()
})

const circleIndicator = () => {
    for(let i = 0; i < slides.length; i++) {
        const div = document.createElement('div')
        div.innerHTML = i+1
        div.setAttribute('onclick', 'indicateSlide(this)')
        div.id=i
        if(i == 0) {
            div.className="active"
        }
        indicator.appendChild(div)
    }
}

circleIndicator()

const indicateSlide = element => {
    index= element.id
    changeSlide()
    updateCircleIndicator()
}

const updateCircleIndicator = () => {
    for(let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove('active')
    }
    indicator.children[index].classList.add('active')
}

// controls
const prevSlide = () => {
    if(index == 0) {
        index == slides.length - 1
    }else{
        index--
    }
    changeSlide()
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0
    }else{
        index++
    }
    changeSlide()
}

const changeSlide = () => {
   for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active')
   }
    slides[index].classList.add('active')
}