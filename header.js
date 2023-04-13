const template = document.createElement('template');

template.innerHTML = `
<div class="container-fluid section1" id="home">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid navContain">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav">
                    <li class="nav-item"> <a class="nav-link active tag2" href="index.html">Home</a></li>
                    <li class="nav-item dropdown dropdown-hover">
                    <a style="color: black;" class="nav-link dropdown-toggle tag" href="#" role="button"
                        data-bs-hover="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <div class="dropdown-menu" data-bs-toggle="dropdown" data-bs-target=".navbar-collapse.show">
                        <a href="PortaPrinter.html" class="porta-tag">
                            <span class="red">porta</span><span class="blue">Printer</span>
                        </a>
                        <a href="PortaConnect.html" class="porta-tag">
                            <span class="red">porta</span><span class="blue">Connect</span>
                        </a>
                    </div>
                    </li>
                    <li class="nav-item"> <a class="nav-link active tag2" href="OurStory.html">Our Story</a></li>
                    <li class="nav-item"> <a class="nav-link active tag2"
                        href="https://linktr.ee/byldinnovations"
                        target="_blank" rel="noreferrer noopenner">Connect</a>
                    </li>
                    <li class="nav-item"> <a class="nav-link active tag2"
                        href="https://docs.google.com/forms/u/2/d/e/1FAIpQLSc9UI212fVjJ-LgJx5cHYRNCJs2SDvPg8ZTVK_LArRaL7Rhjg/viewform?usp=send_form"
                        target="_blank" rel="noreferrer noopenner">Join our waitlist</a>
                    </li>
                </ul>
            </div>

            <a id="brandName" class="navbar-brand" href="#home">
                <img src="images/current/BYLD 1 - orange.png" alt="logo" width="100px" class="d-inline-block align-text-center">
            </a>
        </div>
    </nav>
</div>
`;


// Insert the header at the beginning of the body element
document.body.insertBefore(template.content, document.body.firstChild);

const dropdown = document.querySelector('.dropdown-menu');

// Get the dropdown button
const dropdownButton = document.querySelector('.dropdown-toggle');

// Add an event listener to the window to hide the dropdown when clicked outside
window.addEventListener('click', function(event) {
  // Check if the event target is not the dropdown button and not inside the dropdown
  if (!event.target.matches('.dropdown-toggle') && !dropdown.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});

// Add an event listener to the dropdown button to toggle the dropdown on click
dropdownButton.addEventListener('click', function() {
  dropdown.classList.toggle('show');
});

// Add event listeners to the dropdown button to toggle the dropdown on hover
dropdownButton.addEventListener('mouseenter', function() {
  dropdown.classList.add('show');
});

dropdownButton.addEventListener('mouseleave', function() {
  dropdown.classList.remove('show');
});

const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = this.href;
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function(event) {
    
  // Get the p tag by ID
  var productTitle = document.getElementById("product-title");

  setTimeout(function() {
    productTitle.style.opacity = "0";
  }, 3000);

});