
const products = [
    {
        "id": 1,
        "type": "drinks",
        "name": "Mocha Latte",
        "price": 50,
        "ingredients": ["Coffee", "Milk", "Sugar"],
        "image": "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : true

    },
    {
        "id": 2,
        "type": "drinks",
        "name": "Matcha Latte",
        "price": 60,
        "ingredients": ["Matcha", "Honey", "Ice"],
        "image": "https://media.istockphoto.com/id/1325991061/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%93%E0%B8%B0%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%96%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%82%E0%B8%9F%E0%B8%A1%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%9A%E0%B8%99%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88-%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B8%8A%E0%B8%B2%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%84%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99.jpg?s=612x612&w=0&k=20&c=TNLj0898s1fUZ7OtzQKXX1QRLS2YYz-f5CMyah9YD_A=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 3,
        "type": "drinks",
        "name": "Orange Smoothie",
        "price": 45,
        "ingredients": ["Green Tea", "Lemon", "Honey"],
        "image": "https://media.istockphoto.com/id/474939212/photo/orange-fruit-smoothie-in-a-stemless-glass.webp?b=1&s=612x612&w=0&k=20&c=TmYiDZjdVZTHF2xTnrpVNfqsvHgt5aBi4Zc8zkKYd4U=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 4,
        "type": "drinks",
        "name": "Cappuccino",
        "price": 55,
        "ingredients": ["Coffee", "Milk", "Sugar"],
        "image": "https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_640.jpg",
        "quantity": 1,
        "BestSeller" : true
        
    },
    {
        "id": 5,
        "type": "drinks",
        "name": "Super Strawberry",
        "price": 65,
        "ingredients": ["Strawberry", "Ice", "Sugar"],
        "image": "https://cdn.pixabay.com/photo/2018/05/05/22/22/smoothie-3377379_640.jpg",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 6,
        "type": "drinks",
        "name": "Hot Chocolate",
        "price": 55,
        "ingredients": ["Cocoa", "Milk", "Sugar"],
        "image": "https://cdn.pixabay.com/photo/2020/12/13/13/29/hot-chocolate-5828239_640.jpg",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 7,
        "type": "drinks",
        "name": "Iced Lemon Tea",
        "price": 40,
        "ingredients": ["Green Tea", "Lemon", "Sugar", "Ice"],
        "image": "https://cdn.pixabay.com/photo/2020/03/06/14/34/drinks-4907217_640.jpg",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 8,
        "type": "drinks",
        "name": "Coconut Latte",
        "price": 55,
        "ingredients": ["Coffee", "Coconut", "Sugar", "Milk"],
        "image": "https://media.istockphoto.com/id/1126415678/photo/coconut-flavoured-coffee.webp?b=1&s=612x612&w=0&k=20&c=e0UQ-KwdaEREabjAQtXEHH0wvX5VXCKL7YkEMLYZdkk=",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 9,
        "type": "drinks",
        "name": "Yogurt Smoothie",
        "price": 45,
        "ingredients": ["Yogurt", "Fruit", "Sugar"],
        "image": "https://media.istockphoto.com/id/1194152250/photo/vegan-banana-and-oatmeal-smoothie-in-glass-jar-on-the-light-background.webp?b=1&s=612x612&w=0&k=20&c=mxoe4d6EPDWhFsH15oCKFyWjPIqzDeGBxhqwQhHCXUM=",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 10,
        "type": "drinks",
        "name": "Mint Choc Mocha",
        "price": 60,
        "ingredients": ["Mint", "Chocolate", "Sugar", "Milk"],
        "image": "https://images.pexels.com/photos/3551717/pexels-photo-3551717.png?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 11,
        "type": "drinks",
        "name": "Hot Lemon Tea",
        "price": 40,
        "ingredients": ["Green Tea", "Lemon", "Sugar"],
        "image": "https://media.istockphoto.com/id/1422461090/photo/herbal-tea-with-ginger-mint-and-lemon.webp?b=1&s=612x612&w=0&k=20&c=VEMxlc_w_r9ID1aH5LOhJTQFQtVMpa7rnIvhTmxLjuQ=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 12,
        "type": "drinks",
        "name": "Organic Lemonade",
        "price": 50,
        "ingredients": ["Green Tea", "Lemon", "Honey", "Ice"],
        "image": "https://cdn.pixabay.com/photo/2018/06/13/17/19/juice-3473197_640.jpg",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 13,
        "type": "drinks",
        "name": "Caramel Macchiato",
        "price": 55,
        "ingredients": ["Coffee", "Milk", "Caramel"],
        "image": "https://media.istockphoto.com/id/658462544/it/foto/caff%C3%A8-macchiato-al-caramello-caldo.jpg?b=1&s=170667a&w=0&k=20&c=yoSO4h6iks5TrVWc99g4O1Xgf9AkS1TTPSCswYfDCsY=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 14,
        "type": "drinks",
        "name": "Strawberry Smoothie",
        "price": 50,
        "ingredients": ["Strawberry", "Yogurt", "Sugar"],
        "image": "https://media.istockphoto.com/id/1145964402/photo/fresh-homemade-strawberry-smoothies.jpg?b=1&s=170667a&w=0&k=20&c=pWdPVai_hr76lBK6YAKYCgi7NznXtRMBJqEY8JKgoIY=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 15,
        "type": "drinks",
        "name": "Choco Mint Mocha",
        "price": 65,
        "ingredients": ["Chocolate", "Mocha", "Milk", "Sugar"],
        "image": "https://images.pexels.com/photos/17014655/pexels-photo-17014655.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 16,
        "type": "drinks",
        "name": "Lemonade Italian",
        "price": 55,
        "ingredients": ["Lemon", "Sugar", "Ice"],
        "image": "https://images.pexels.com/photos/6542761/pexels-photo-6542761.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 17,
        "type": "drinks",
        "name": "Peach Iced Tea",
        "price": 45,
        "ingredients": ["Tea", "Peach", "Sugar", "Ice"],
        "image": "https://cdn.pixabay.com/photo/2020/04/21/09/05/food-5072245_1280.jpg",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 18,
        "type": "drinks",
        "name": "Mint Chocolate Chip",
        "price": 50,
        "ingredients": ["Mint", "Chocolate", "Sugar"],
        "image": "https://images.pexels.com/photos/17032142/pexels-photo-17032142.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 21,
        "name": "Chocolate Cake",
        "price": 150,
        "type": "desserts",
        "image": "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1, 
        "BestSeller" : true
    },
    {
        "id": 22,
        "name": "Cheesecake",
        "price": 120,
        "type": "desserts",
        "image": "https://cdn.pixabay.com/photo/2023/02/17/16/24/cake-7796383_640.jpg",
        "quantity": 1, 
        "BestSeller" : true
    },
    {
        "id": 23,
        "name": "Tiramisu",
        "price": 180,
        "type": "desserts",
        "image": "https://media.istockphoto.com/id/1351167325/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%AD%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%94%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A1%E0%B8%97%E0%B8%B4%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%AA%E0%B8%B8%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%81%E0%B8%84%E0%B8%99%E0%B9%82%E0%B8%99%E0%B8%A5%E0%B8%B5%E0%B8%9A%E0%B8%99%E0%B8%88%E0%B8%B2%E0%B8%99.webp?b=1&s=612x612&w=0&k=20&c=4iVrP8nH9Zw0tgyj-J2sS87OxffP4jJ-AYEXcf--Crs=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 24,
        "name": "Panna Cotta",
        "price": 130,
        "type": "desserts",
        "image": "https://media.istockphoto.com/id/1433384761/it/foto/delizioso-dessert-invernale-panna-cotta-italiana-con-gelatina-di-melograno-e-menta-cucina.webp?b=1&s=612x612&w=0&k=20&c=MhGW2CnTlIY-n79_X0nJfXpd2yNOg5xio03H9b1APBY=",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 25,
        "name": "Strawberry Shortcake",
        "price": 160,
        "type": "desserts",
        "image": "https://cdn.pixabay.com/photo/2023/05/07/01/06/strawberry-7975371_640.jpg",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 26,
        "name": "Macarons",
        "price": 80,
        "type": "desserts",
        "image": "https://cdn.pixabay.com/photo/2018/04/11/21/32/macaroons-3311851_640.jpg",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 27,
        "name": "Creme Brulee",
        "price": 140,
        "type": "desserts",
        "image": "https://cdn.pixabay.com/photo/2022/02/06/19/05/dessert-6997861_640.jpg",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 28,
        "name": "Banana Split",
        "price": 170,
        "type": "desserts",
        "image": "https://media.istockphoto.com/id/166667609/pl/zdj%C4%99cie/banana-split.webp?b=1&s=612x612&w=0&k=20&c=-ujmF819FieT7mQ4jh941Kz91cD1p44Odipcax3M7ns=",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 29,
        "name": "Apple Pie",
        "price": 110,
        "type": "desserts",
        "image": "https://media.istockphoto.com/id/1406904032/photo/delicious-apple-cheddar-pie-with-crispy-crust-close-up-on-a-plate-horizontal.webp?b=1&s=612x612&w=0&k=20&c=vI_Rjq0m8QTre3Fb7u6s_wrZ70zgLOrt1bigNajS5f0=",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 30,
        "name": "Chocolate Lava Cake",
        "price": 190,
        "type": "desserts",
        "image": "https://images.pexels.com/photos/47013/pexels-photo-47013.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : false
    },
    {
        "id": 31,
        "name": "Fruit Tart",
        "price": 140,
        "type": "desserts",
        "image": "https://cdn.pixabay.com/photo/2018/07/01/19/50/muffin-3510308_640.jpg",
        "quantity": 1,
        "BestSeller" : true
    },
    {
        "id": 32,
        "name": "Ice Cream Sundae",
        "price": 100,
        "type": "desserts",
        "image": "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=600",
        "quantity": 1,
        "BestSeller" : false
    },

]

export default products
