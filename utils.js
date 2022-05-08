export function renderOil(oil) {
    const oilClass = document.createElement('oil');

    let img = document.createElement('img');
    img.src = oil.price;

    let h2 = document.createElement('h2');
    h2.textContent = '';

    let h5 = document.createElement('h5');
    h5.textContent = '';

    let p = document.createElement('p');
    p.textContent = '';

    oilClass.append(img, h2, h5, p);
}