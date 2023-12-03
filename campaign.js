document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Submission Successful!");
    this.reset();
});