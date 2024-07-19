let slide_down_icons = document.querySelectorAll('i:nth-child(3)')
let close_icons = document.querySelectorAll('i:nth-child(4)')
let answers = document.querySelectorAll('p:nth-child(2)')
let faqs = document.querySelectorAll('.faq')

slide_down_icons.forEach((element, i) => {
    element.addEventListener('click', function(){
        element.style.display = 'none'
        close_icons[i].style.display = 'inline'
        answers[i].style.height = 'auto'
        faqs[i].style.backgroundColor = 'white'
    })
})

close_icons.forEach((element, i) => {
    element.addEventListener('click', function(){
        element.style.display = 'none'
        slide_down_icons[i].style.display = 'inline'
        answers[i].style.height = '0' 
        faqs[i].style.backgroundColor = '#F0F0F0'
    })
})

