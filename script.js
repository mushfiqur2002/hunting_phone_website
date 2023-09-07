// let ele = document.querySelector('.cards');
let cards = document.querySelector('.cards .container');
let image = document.querySelector('.image');
let srcBtn = document.querySelector('.btn.src');
let srcfield = document.querySelector('.srcInput');
 
 
 const loadPhone = async (searchText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data;
    displayPhoneCard(phone);
    
 }
loadPhone();
 // display phone item
 //.....method 01
 const displayPhoneCard =(phoneData)=>{
    let element = phoneData.map(event =>{
        return `<div class="card">
                    <div class="container">
                        <div class="image">
                            <img src="${event.image}">
                        </div>
                        <div class="details">
                            <h1 class="phoneName">${event.phone_name}</h1>
                            <p class="paragraph">There are many variations of passages of available, but the majority have suffered.</p>
                            <p class="price"><span>$</span><span class="money">999</span></p>
                            <div class="button">
                                <button class="btn" onclick="shwdtls('${event.slug}')">Show Details</button>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    let disEle = element.join('');
    cards.innerHTML = disEle;
 }


//.....method 02
//  const displayPhoneCard = phoneData =>{
//     cards.textContent ='';
//     phoneData.forEach(event =>{
//         const phoneCard = document.createElement('div');
//         phoneCard.innerHTML = `<div class="card">
//         <div class="container">
//             <div class="image">
//                 <img src="${event.image}">
//             </div>
//             <div class="details">
//                 <h1 class="phoneName">${event.phone_name}</h1>
//                 <p class="paragraph">There are many variations of passages of available, but the majority have suffered.</p>
//                 <p class="price"><span>$</span><span class="money">999</span></p>
//                 <div class="button">
//                     <button class="btn" onclick="shwdtls()">Show Details</button>
//                 </div>
//             </div>
//         </div>
//     </div>`;
//     cards.appendChild(phoneCard);
//     });
//  }



// click search button 
 srcBtn.addEventListener('click',function(){
    let srcValue = srcfield.value;
    console.log(srcValue);
    loadPhone(srcValue)
 });

// show details 
const shwdtls = async(id) =>{
    const phoneInfo = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const dataList = await phoneInfo.json();
    console.log(dataList.data);
    shwdtlsData(dataList.data);
    phone_dtls.showModal()
}
const shwdtlsData =(data)=>{
    let brandName = document.querySelector('.phone_dtls_name');
    let para = document.querySelector('.phone_dtls_para');
    brandName.innerText = data.name;
}
