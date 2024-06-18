// Task 2
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    alert("hello, "+ name + "! Form submitted successfully.");
    function Submission(name, email, message) {
        this.name=name;
        this.email=email;
        this.message=message;
    };
    let submit= new Submission(name, email, message);
    console.log(submit)
    document.getElementById("myForm").reset();
}
