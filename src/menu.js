function renderMenu(){
    const section = document.createElement('section');
    section.id = 'menu';

    // Create big title
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    
    // Create entry subtitle
    const subtitle1 = document.createElement('h3');
    subtitle1.textContent = "Entries";

    // Create list of available dishes
    const list1 = document.createElement('ul');
    const nachos = document.createElement('li');
    nachos.textContent = 'Nachos (Melted cheese, jalapeños, sour cream)';
    const wings = document.createElement('li');
    wings.textContent = 'Buffalo Wings (Spicy chicken wings with blue cheese dip)';
    const quesadilla = document.createElement('li');
    quesadilla.textContent = 'Cheese Quesadilla (Grilled tortilla filled with cheese)';

    list1.appendChild(nachos);
    list1.appendChild(wings);
    list1.appendChild(quesadilla);

    const subtitle2 = document.createElement('h3');
    subtitle2.textContent = "Mains";

    const list2 = document.createElement('ul');
    const burger = document.createElement('li');
    burger.textContent = 'HerreBurger (Beef patty, cheddar, lettuce, tomato, house sauce)';
    const veganBurger = document.createElement('li');
    veganBurger.textContent = 'Vegan Burger (Plant-based patty, vegan mayo, lettuce, tomato)';
    const ribs = document.createElement('li');
    ribs.textContent = 'BBQ Ribs (Slow-cooked pork ribs with BBQ sauce)';

    list2.appendChild(burger);
    list2.appendChild(veganBurger);
    list2.appendChild(ribs);

    const subtitle3 = document.createElement('h3');
    subtitle3.textContent = "Desserts";

    const list3 = document.createElement('ul');
    const brownie = document.createElement('li');
    brownie.textContent = 'Chocolate Brownie (Served warm with vanilla ice cream)';
    const churros = document.createElement('li');
    churros.textContent = 'Churros (With cinnamon sugar and chocolate dip)';
    const flan = document.createElement('li');
    flan.textContent = 'Flan (Traditional caramel custard)';

    list3.appendChild(brownie);
    list3.appendChild(churros);
    list3.appendChild(flan);

    section.appendChild(title);
    section.appendChild(subtitle1);
    section.appendChild(list1);
    section.appendChild(subtitle2);
    section.appendChild(list2);
    section.appendChild(subtitle3);
    section.appendChild(list3);

    return section;
}

export default renderMenu;