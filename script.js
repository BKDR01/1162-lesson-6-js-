// let apiUrl = 'https://fakestoreapi.com/products';
// let searchInput = document.querySelector('#searchInput')
// let row = document.querySelector('#row')
// let loader = document.querySelector('#loader')
// let products = []

// async function Glfunc() {
//     try {
//         loader.style.display = 'flex';         

//         let response = await fetch(apiUrl)
//         products = await response.json()    

//         loader.style.display = 'none'
//         console.log(products);
//         productCardData(products)
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// function productCardData(data) {
//     row.innerHTML = ''
//     data.forEach((item, index) => {
//         let card = document.createElement('div')
//         card.innerHTML = `
//             <div class="w-[400px] h-[500px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-6 rounded-lg bg-white text-center">
//                 <img src="${item.image}" class="mx-auto w-[200px] h-[200px]" alt="Product Image">
//                 <h2 class="font-bold my-[10px]">${item.title}</h2>
//                 <p class="text-[10px] my-[10px]">${item.description}</p>
//                 <div class="flex justify-between items-center mx-auto w-[130px] h-[50px]">
//                     <h2 class="text-indigo-500 mx-auto">${item.price} $</h2>
//                     <button class="w-[50px] h-[30px] rounded-[10px] bg-indigo-500 text-white my-[20px] mx-auto" onclick="onCheng(${item.id})">Buy</button>
//                 </div>
//             </div>`   
//         row.appendChild(card)
//     })
// }

// searchInput.addEventListener('input', () => {
//     const query = searchInput.value.toLowerCase();
//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(query) ||
//         product.description.toLowerCase().includes(query)
//     );
//     productCardData(filteredProducts);
// });

// function onCheng(productId) {
//     const item = products.find(product => product.id === productId);
//     if (!item) return;

//     document.body.innerHTML = `
//             <div class="w-[400px] h-[500px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] p-6 rounded-lg bg-white text-center mx-auto mt-10">
//             <img src="${item.image}" class="mx-auto w-[200px] h-[200px]" alt="Product Image">
//             <h2 class="font-bold my-[10px]">${item.title}</h2>
//             <p class="text-[10px] my-[10px]">${item.description}</p>
//             <h2 class="text-indigo-500 mx-auto">${item.price} $</h2>
//             <button class="w-[100px] h-[40px] rounded-[10px] bg-indigo-500 text-white mt-5" onclick="location.reload()">Add</button>
//         </div>
//         <button class="w-[100px] h-[40px] rounded-[10px] bg-indigo-500 text-white mt-5" onclick="location.reload()">Go Back</button>
//     ` 
// }

// Glfunc()







let name = document.querySelector('#name')
let fristNAme = document.querySelector('#fristName')
let age = document.querySelector('#Age')

let EnterName = prompt('Ismingizni kiriting')
let EnterFrist = prompt('Familiyangizni kiriting')
let Enterage = prompt('yoshingizni kiriting')
let Upp = +prompt('Kiritgan malumotingiz Katta yoki kichkana harifda chiqsnmi ? \n 1)Katta \n 2)Kichkina')


switch (Upp) {
    case 1:
        name.style.textTransform = 'uppercase';
        fristNAme.style.textTransform = 'uppercase'
        age.style.textTransform = 'uppercase'
    break;

    case 2:
        name.style.textTransform = 'lowercase';
        fristNAme.style.textTransform = 'lowercase'
        age.style.textTransform = 'lowercase'
    break;

    default:
        alert("Notog'ri iltimos faqat 1 yoki 2 sonini kiriting !")
        break;
}

name.innerHTML = EnterName
fristNAme.innerHTML = EnterFrist
age.innerHTML = Enterage