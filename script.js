let box = document.querySelector(`.box`)
let p = document.querySelector(`.p`)
fetch(`https://fakestoreapi.com/products?limit=10`)
.then((res)=>res.json())
.then((data)=>{
data.map((item)=>{
    box.innerHTML += `

    <div class="di">

        <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <p>${item.category}</p>
            <div>            <h2>${item.price}$</h2>
            <button onclick="kor()">Sotib olish</button>
            </div>
    </div>
`
})

})

let kor = ()=>{
    alert(`Mahsulot savatga solindi`)
    p.value = item.price.value
}