const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_8d9b1di';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                swal({
                    title: "Message Sent!",
                    text: "I will respond within 24-48 hours!",
                    icon: "success",
                    button: "Back To Site!",
                })
            }, (err) => {
                btn.value = 'Send Email';
                swal({
                    title: "Error!",
                    text: "Ooops, looks like something went wrong!",
                    icon: "error",
                    button: "Try Again!",
                });
                alert(JSON.stringify(err));
            });
    });