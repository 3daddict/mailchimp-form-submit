# MailChimp Form Submission Template
This is a basic template to submit a form to MailChimp using AJAX and JSONP.

## AJAX Call
    const settings = {
	    url: `${MC_URL};id=${MC_ID}&c=?`,
        data: $('#mailChimpForm').serialize(),
        dataType: 'jsonp'
	}
	$.ajax(settings).done(function(response) {
	//reset form after submit
        form.reset();
        console.log('Form Done:', response)
        //Code to run after submit done
	}).fail(function(error) {
	//Error Handling on fail
        console.log(`Form error: ${error}. please try again later or contact support`);
	});
