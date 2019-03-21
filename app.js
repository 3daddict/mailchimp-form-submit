
document.getElementById("mailChimpForm").onsubmit = function (e) {
    e.preventDefault();
    ajaxCall();

}

function ajaxCall() {
    const form = document.getElementById("mailChimpForm");
    const MC_URL = "";//Enter the MailChimp URL Here
    const MC_ID = "";//Enter the MailChimp ID Here

    const settings = {
        //MailChimp URL
        //**NOTE**
        //url must send post-json not post
        //add &c=? at end for jsonp submittion
        url: `${MC_URL};id=${MC_ID}&c=?`,
        data: $('#mailChimpForm').serialize(),
        dataType: 'jsonp'
    }

    $.ajax(settings).done(function (response) {
        //reset form after submit
        form.reset();
        console.log('Form Done:', response)
        //Code to run after submit done
    }).fail(function (error) {
        //Error Handling on fail
        console.log(`Form error: ${error}. please try again later or contact support`);
    });
}
