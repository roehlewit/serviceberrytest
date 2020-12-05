// Variable for Form
const data = [];
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const eventType = document.querySelectorAll('.eventOption');
for (let i =0; i < eventType.length; i++){
	console.log(eventType[i].innerHTML);
}
const submit = document.getElementById('submit');


//Sends form to AirTable
async function postForm(data) {
	const response = await fetch(
		'https://api.airtable.com/v0/appg4xJvDB5W2nTa4/Inquiries?api_key=keykjl1ZxJZeGqJcK',
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer keykjl1ZxJZeGqJcK',
			},
			body: JSON.stringify({
				records: [
					{
						fields: {
							'Last Name': lastName.value,
							'First name': firstName.value,
							Phone: phone.value,
							Date: date.value,
							Email: email.value,
							'Food Styles': []


						},
					},
				],
			})
		})

	const resData = await response.json();
	return resData;
};


//Event listener
submit.addEventListener('click', function submitForm(e) {
	postForm(data)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

	
	e.preventDefault();
});
