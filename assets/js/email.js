console.log("hello world");
function sendMail(contactForm) {
    emailjs.send("service_bq4sfkm", "tashi", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "query_request": contactForm.userquery.value
    })
        .then(
            function (response) {
                console.log("success", response);
                document.querySelector('.contact-container').innerHTML = `<h3 class="text-center">We will reply to your query Shortly</h3>
                                                                        <div id="BtnDiv">
                                                                        <button type="button" id="formSubmitted">Finish</button>
                                                                        </div>`;
                document.querySelector('#formSubmitted').onclick = () => {
                    location.reload();
                }
            },
            function (error) {
                console.log("failed", error);
            }
        )
    return false;
}


