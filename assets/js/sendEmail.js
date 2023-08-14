function sendMail(contactForm) {
    emailjs.send("service_bkenz7b","cristina", {
        "from_name": contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response)
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}