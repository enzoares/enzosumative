
const data = {
    "heavy-foods": [
        {id:1, nama:"Ribeye Steak Wagyu", harga:150000, desc:"Daging sapi Wagyu MB5 premium.", img:"wagyu.jpg"},
        {id:2, nama:"Beef Lasagna", harga:85000, desc:"Pasta lapis keju mozarella Italia.", img:"lasagna.jpg"},
        {id:3, nama:"Grilled Salmon", harga:120000, desc:"Salmon segar dengan saus lemon.", img:"salmon.jpg"},
        {id:4, nama:"Spaghetti Carbonara", harga:75000, desc:"Saus krim telur dan keju asli.", img:"67.jpg"},
        {id:5, nama:"Chicken Parmigiana", harga:80000, desc:"Ayam goreng tepung dengan saus tomat.", img:"E1.jpg"},
        {id:6, nama:"Truffle Risotto", harga:95000, desc:"Nasi creamy dengan jamur truffle.", img:"risotto.jpg"}
    ],
    "snacks": [
        {id:7, nama:"Truffle Fries", harga:45000, desc:"Kentang goreng dengan minyak truffle.", img:"s1.jpg"},
        {id:8, nama:"Crispy Calamari", harga:55000, desc:"Cumi goreng tepung renyah.", img:"s2.jpg"},
        {id:9, nama:"Chicken Wings", harga:50000, desc:"Sayap ayam bumbu pedas manis.", img:"s3.jpg"},
        {id:10, nama:"Garlic Bread", harga:35000, desc:"Roti panggang mentega bawang.", img:"s4.jpg"},
        {id:11, nama:"Bruschetta Tomat", harga:40000, desc:"Roti panggang topping tomat segar.", img:"s5.jpg"},
        {id:12, nama:"Nachos Cheese", harga:45000, desc:"Keripik jagung dengan saus keju.", img:"s6.jpg"}
    ],
    "soft-drinks": [
        {id:13, nama:"Lemon Squash", harga:30000, desc:"Soda lemon yang sangat segar.", img:"d1.jpg"},
        {id:14, nama:"Cola Float", harga:25000, desc:"Cola dengan topping es krim vanila.", img:"d2.jpg"},
        {id:15, nama:"Strawberry Mojito", harga:35000, desc:"Soda strawberry dan daun mint.", img:"d3.jpg"},
        {id:16, nama:"Iced Peach Tea", harga:28000, desc:"Teh rasa persik dingin.", img:"d4.jpg"},
        {id:17, nama:"Blue Lagoon", harga:32000, desc:"Minuman soda biru menyegarkan.", img:"d5.jpg"},
        {id:18, nama:"Mineral Water", harga:15000, desc:"Air mineral kemasan kaca premium.", img:"d6.jpg"}
    ],
    "classic-drinks": [
        {id:19, nama:"Espresso", harga:25000, desc:"Ekstrak kopi hitam pekat.", img:"d7.jpg"},
        {id:20, nama:"Caffe Latte", harga:35000, desc:"Kopi dengan susu lembut.", img:"d8.jpg"},
        {id:21, nama:"Cappuccino", harga:35000, desc:"Kopi dengan busa susu tebal.", img:"d9.jpg"},
        {id:22, nama:"Earl Grey Tea", harga:30000, desc:"Teh Inggris klasik aroma bergamot.", img:"d10.jpg"},
        {id:23, nama:"Hot Chocolate", harga:40000, desc:"Cokelat panas kental premium.", img:"d11.jpg"},
        {id:24, nama:"Machiato", harga:30000, desc:"Espresso dengan sedikit susu.", img:"d12.jpg"}
    ],
    "gelato": [
        {id:25, nama:"Vanila Madagascar", harga:35000, desc:"Gelato vanila asli.", img:"g1.jpg"},
        {id:26, nama:"Dark Chocolate", harga:35000, desc:"Gelato cokelat pekat.", img:"g2.jpg"},
        {id:27, nama:"Pistachio", harga:40000, desc:"Gelato rasa kacang pistachio.", img:"g3.jpg"},
        {id:28, nama:"Salted Caramel", harga:35000, desc:"Gelato karamel gurih manis.", img:"g4.jpg"},
        {id:29, nama:"Strawberry Sorbet", harga:35000, desc:"Es buah strawberry segar.", img:"g5.jpg"},
        {id:30, nama:"Matcha Zen", harga:38000, desc:"Gelato teh hijau Jepang.", img:"g6.jpg"}
    ],
    "cakes": [
        {id:31, nama:"Tiramisu Klasik", harga:55000, desc:"Kue kopi khas Italia.", img:"c1.jpg"},
        {id:32, nama:"Red Velvet", harga:50000, desc:"Kue lembut warna merah mewah.", img:"c2.jpg"},
        {id:33, nama:"Cheesecake", harga:55000, desc:"Kue keju panggang lembut.", img:"c3.jpg"},
        {id:34, nama:"Choco Lava", harga:45000, desc:"Kue cokelat isi cokelat lumer.", img:"c4.jpg"},
        {id:35, nama:"Apple Pie", harga:40000, desc:"Pai apel bumbu kayu manis.", img:"c5.jpg"},
        {id:36, nama:"Mille Crepes", harga:48000, desc:"Kue lapis krim vanila.", img:"c6.jpg"}
    ],
    "bundle-pack": [
        {id:37, nama:"Couple Bundle", harga:180000, desc:"2 Steak + 2 Minuman.", img:"p1.jpg"},
        {id:38, nama:"Family Pack", harga:350000, desc:"4 Makanan + 4 Minuman.", img:"p2.jpg"},
        {id:39, nama:"Snack Party", harga:120000, desc:"3 Jenis Snack berbeda.", img:"p3.jpg"},
        {id:40, nama:"Sweet Bundle", harga:90000, desc:"2 Cake + 2 Kopi.", img:"images.png"},
        {id:41, nama:"Office Lunch", harga:60000, desc:"1 Makanan + 1 Es Teh.", img:"p4.jpg"},
        {id:42, nama:"Dessert Box", harga:100000, desc:"3 Variant Gelato cup.", img:"p6.jpg"}
    ],
    "weekend-deal": [
        {id:43, nama:"Saturday Steak", harga:130000, desc:"Diskon khusus hari Sabtu.", img:"wagyu.jpg"},
        {id:44, nama:"Sunday Brunch", harga:110000, desc:"Menu spesial hari Minggu.", img:"cabonara.jpg"},
        {id:45, nama:"Happy Hour Drink", harga:20000, desc:"Semua minuman diskon.", img:"p.jpg"},
        {id:46, nama:"Weekend Sweet", harga:40000, desc:"Semua cake harga rata.", img:"p10.jpg"},
        {id:47, nama:"Holiday Platter", harga:200000, desc:"Menu porsi besar.", img:"p11.jpg"},
        {id:48, nama:"Kids Meal Promo", harga:45000, desc:"Menu anak + mainan.", img:"p12.jpg"}
    ]
};


function renderProducts() {
    const container = document.getElementById("produk-container");
    if (!container) return; 
    
    const page = window.location.pathname.split("/").pop().replace(".html", "");

    if (data[page]) {
        container.innerHTML = ""; 
        data[page].forEach(product => {
            container.innerHTML += `
                <div class="card">
                    <img src="${product.img}" alt="${product.nama}" onerror="this.src='https://placehold.co/400x300/1a1a1a/c9a96e?text=${product.nama}'">
                    <div class="info">
                        <h3>${product.nama}</h3>
                        <p>${product.desc}</p>
                        <span class="price">Rp ${product.harga.toLocaleString()}</span>
                        <button onclick="addToCart(${product.id}, '${page}')">BUY NOW</button>
                    </div>
                </div>`;
        });
    }
}


window.addToCart = (id, kategori) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = data[kategori].find(item => item.id === id);

    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(product.nama + " berhasil masuk keranjang!");
    }
};

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total-price");
    if (!cartItems) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Keranjang kosong.</p>";
        totalDisplay.innerText = "Total: Rp 0";
        return;
    }

    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        total += item.harga;
        cartItems.innerHTML += `
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #333; padding:10px 0;">
                <span>${item.nama}</span>
                <span>Rp ${item.harga.toLocaleString()} <button onclick="removeItem(${index})" style="background:red; color:white; border:none; margin-left:10px; cursor:pointer;">X</button></span>
            </div>`;
    });
    totalDisplay.innerText = "Total Bayar: Rp " + total.toLocaleString();
}

window.removeItem = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};


document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    displayCart();
});