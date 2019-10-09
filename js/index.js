// Your code goes here



// nav h1 can change h1 font color to a different one as listed
// MOUSE OVER

const colors = ['blue', 'red', 'pink']

let h1Color = 0

const navH1 = document.querySelector('.nav-container h1')

navH1.addEventListener('mouseenter', () => {
  navH1.style.color = colors[h1Color]
})

// changes "Fun Bus" color back to black each time the cursor leaves
// the hover position with length added to extend the entire text
// 

navH1.addEventListener('mouseleave', () => {

    navH1.style.color = 'black'

    h1Color = h1Color === colors.length - 1 ? 0 : h1Color + 1
  })

// rotate body background color on scroll
// WHEEL SCROLL

const bodySelector = document.querySelector('body')

let backgroundGrey = false

document.querySelector('body').addEventListener('wheel', () => {

  bodySelector.style.background = !backgroundGrey ? 'grey' : 'pink'

  backgroundGrey = !backgroundGrey ? true : false
})


// this sends an alert each time the header is clicked upon or in 
//stating "header clicked"
//SELECT


const headerSelector = document.querySelector('header')

headerSelector.addEventListener('click', () => {

alert('header clicked')
})

// code rotates nav links 30 degrees each time the link is clicked and
// must continue to click to go all the way around
// because code contains the event propagation and prevents nav link
// from going back to default

const navItems = document.querySelectorAll('nav a')
const rotations = [...Array(navItems.length)].map(() => 30)

navItems.forEach((item, i) =>
  item.addEventListener('click', event => {

    event.stopPropagation()
    event.preventDefault()

    item.style.transform = `rotateZ(${rotations[i]}deg)`
    rotations[i] += 30
  })
)

// loops through first paragraph text bolds it word by word when hovering and 
// slighty increases font size 
// RESIZE

let wordIndex = 0

const introParagraph = document.querySelector('.home p')
const introParagraphContent = introParagraph.innerHTML

introParagraph.addEventListener('mousemove', () => {
  introParagraph.innerHTML = introParagraphContent

    .split(' ')
    .map(
      (element, i) =>
        i === wordIndex ? `<span class='red-word'>${element}</span>` : element
    )
    .join(' ')
  document.querySelector('.home p .red-word').style.fontWeight = 'bold'
  document.querySelector('.home p .red-word').style.fontSize = '2.4rem'

  wordIndex =
    wordIndex === introParagraphContent.split(' ').length - 1
      ? 0
      : wordIndex + 1
})

// when doubleclickng anywhere it applies a toggles/inversion of images
// from neagtive effect back to original image 
// DOUBLE CLICK FOCUS 

let inverted = false

const images = document.querySelectorAll('img')

document.querySelector('body').addEventListener('dblclick', () => {
  images.forEach(
    image => (image.style.filter = !inverted ? 'invert(1)' : 'invert(0)')
  )
  inverted = inverted ? false : true
})

// border thickness is increased on image as it gets dragged
// for "Lets Go" image border will continue to expand while img is dragged 
// DRAG DROP

let borderThickness = 0

const firstSectionImage = document.querySelector('section img')
firstSectionImage.addEventListener('drag', event => {

  console.log(event)

  firstSectionImage.style.border = `${borderThickness}px solid blue`
  borderThickness++
})

firstSectionImage.addEventListener('dragend', event => {

  console.log(event)

  firstSectionImage.style.border = ''
  borderThickness = 0
})


// applies border with bounce effect to first image upon load
// LOAD

let firstImageBorder = 0
let assending = true

const firstImage = document.querySelector('.home img')

firstImage.addEventListener('load', () => {
   setInterval(() => {

    firstImage.style.border = `${firstImageBorder}px double black`
    if (assending) {
      if (firstImageBorder === 10) {
        assending = false
      }
      firstImageBorder++
    } else {
      if (firstImageBorder === 0) {
        assending = true
      }
      firstImageBorder--
    }
  }, 10)
})

// overwrite text on keypress
// KEYDOWN

//const sectionToOverwrite = document.querySelector('.logo-heading')



//document.querySelector('keydown').addEventListener('keydown', event => {

  //  }
//)
//end of my code