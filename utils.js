export function renderOil(oil) {
    const div = document.createElement('div');
    div.classList.add('oil');
    // Add Div Class List
    let img = document.createElement('img');
    img.src = oil.price;

    let h2 = document.createElement('h2');
    h2.textContent = 'Text';

    let h5 = document.createElement('h5');
    h5.textContent = 'Text';

    let p = document.createElement('p');
    p.textContent = 'Text';

    div.append(img, h2, h5, p);
    return div;
    // Add Div
}