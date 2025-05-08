import logo from './images/herreBurger.png'
function renderHome(){
    const section = document.createElement('section');
    section.id = 'home';

    // create heading of home page
    const title = document.createElement('h1');
    title.textContent = "Welcome to HerreBurgers!"

    // Put image 
    const img = document.createElement('img');
    img.src = logo // Relative to your 'dist/' folder after bundling
    img.alt = "HerreBurger logo";
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    section.appendChild(img);

    // create description of restaurant
    const info = document.createElement('div');
    info.textContent = `At HerreBurger, we serve mouth-watering gourmet burgers made with 100% locally sourced ingredients. 
Whether you're craving a classic cheeseburger or a bold new creation, our menu has something for everyone. 
Join us for great food, friendly service, and an unforgettable dining experience.`;

section.appendChild(title);
section.appendChild(img);
section.appendChild(info);

return section;
}

export default renderHome;