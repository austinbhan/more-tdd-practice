
export function renderOil(oil) {
    const div = document.createElement('div');
    div.classList.add(oil);
    // Add Div Class List
    let img = document.createElement('img');
    img.src = oil.image;

    let h2 = document.createElement('h2');
    h2.textContent = `Say Hello to ${oil.ingredient} oil!`;

    let h5 = document.createElement('h5');
    h5.textContent = `Its smoke point is ${oil.smokePoint}`;

    let p = document.createElement('p');
    p.textContent = `It's ${oil.price}`;

    div.append(img, h2, h5, p);
    return div;
    // Add Div
}