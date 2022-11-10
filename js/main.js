const contactForm = document.getElementById('contact_form');
const contactFormName = document.getElementById('name');
const contactFormEmail = document.getElementById('email');
const contactFormMessage = document.getElementById('message');
const contactFormContactMessage = document.getElementById('contact_message');




// function for send mail

const sendMail = (e) => {   
    e.preventDefault();
   
    // check if the field has a value 

    if(contactFormName.value === '' || contactFormEmail.value === '' || contactFormMessage.value === '') {

        // show message error
        contactFormContactMessage.innerHTML = 'Please fill out all the fields';
        contactFormContactMessage.style.color = 'red';    
    }
    else{
        // service id - template id - #form  - publish key

        emailjs.sendForm('service_b4l8ixa', 'template_hgq9x99', '#contact_form', 'm5sQGN8ktFI5mpzHj')
        .then(() =>{
            // show message success
            contactFormContactMessage.innerHTML = 'Message sent successfully';
            contactFormContactMessage.style.color = 'green';


            // remove message after 5 seconds

            setTimeout(() => {  
                contactFormContactMessage.innerHTML = '';
            }, 5000);
        })
    }
};


contactForm.addEventListener('submit', sendMail);