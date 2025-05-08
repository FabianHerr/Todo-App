function renderAbout(){
  const section = document.createElement('section');
  section.setAttribute('id', 'about');

  const title = document.createElement('h2');
  title.textContent = 'About HerreBurger';

  const paragraph1 = document.createElement('p');
  paragraph1.textContent = "At HerreBurger, we're passionate about crafting mouthwatering burgers with the freshest ingredients. Founded in 2025, our restaurant brings a blend of tradition and innovation to every plate.";

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = "Whether you're craving a classic beef burger or a plant-based alternative, our menu has something for everyone. Join us for a laid-back atmosphere, friendly service, and unforgettable flavors.";

  section.appendChild(title);
  section.appendChild(paragraph1);
  section.appendChild(paragraph2);

  return section;
}

export default renderAbout;