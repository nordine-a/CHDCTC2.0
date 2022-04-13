
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('QdpXd-86HPbVZU1dE');
})();

window.onload = function() {
    let contactForm= document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
              alert("messaggio inviato con successo, grazie per avermi contattato.");
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
                alert("Messaggio NON inviato, riprovare");
            });

      //clean form inputs
      for (let elem of contactForm.elements){
        if (elem.type == "submit") continue;
        elem.value= "";
      }

    });
}
