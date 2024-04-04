Გააკეთედ აუქციონის API 
Გააკეთედ აუქციონის აპლიკაციის api, აპლიკაციის მთავარი ფუნქციონალი შემდეგია
user შეეძლებათ დადონ პროდუქტები გასაყიდათ აუქციონზე, და სხვა user ებს შეეძლებათ რომ იყიდონ პროდუქტები აუქციონის პრინციპით
Აუქციონის მუშაობის პროცესი
User შეუძლია რომ დადოს bid სასურველ პროდუქტზე bid მეტი უნდა იყოს საწყის ფასეზე მინიმუმ 50 ლარით ან თუ უკვე არსებობს სხვა ბიდები ბოლო ბიდზე მეტი უნდა იყოს ასევე 50 ლარით 
Იმარჯვებს user ვისი ბიდის შემდეგაც გავა ერთი საათი, თუ ბოლო ბიდიდან გავიდა ერთი საათი product owner შეეძლება რო გამოაცხადოს აუქციონი დახურულად და ამ დროს users ვინც დადო ბოლო ბიდი wonProducts:[] ჩაემატება მოგებული პროდუქტი

USER  
Მომხმარებლის ობიექტის სტურუქტურა

{
	_id: ”მომხმარებლის აიდი”,
	username: ”სახელი”,
	wonProducts: [{product}],
	sellProducts: [{product}],
	role: [“bidder”, ”seller”]
}

// Create User 

POST:  /api/users - მომხმარებლის შექმნისთვის განკუთვნილი რექვესთი რომელმაც უნდა შექმნას მომხამრებელი username ის და role პარამეტრის გადცემით 
DELETE: /api/users/:userId მომხმარებლის წაშლის რექვესთი
GET: /api/users/:userId ერთი მომხამრებლის წამოღება

Product 
Პროდუქტის ობიექტის სტურუქტურა

{
	_id: ”მომხმარებლის აიდი”,
	title: ”პროდუქტის სახელი”,
	basePrice: 1200,
	bids: [],
	sold: false,
	seller: {user}
}

Create product 
post /api/products - გასაყიდი პროდუქტის შექმნა აუცილებელი ველებია title,basePrice,seller

Mark as sold
put /api/products - პროდუქტის გაყიდულად გამოცხადება, აუცილებელი ველია product, გაყიდულლად გამოცხადება შეიძლება მხოლოდ მაშინ თუ ბოლო ბიდიდან გასულია მინიმუმ 1 საათი


Bid Structure
ბიდის სტურქტურა
{
	Product: პროდუქტი,
	Bidder: ვინც დაბიდა,
	Amount: რამდენი დაბიდა,
	createdAt: როდის დაბიდა
}

Create bid
Post /api/bids - აუცილებელი ველებია product, bidder, amount
Get /api/bids/:productId - ბიდების წამოღება უნდა შეგვეძოს მხოლოდ პროდუქტის ჭრილში 

Მონახაზი make as sold ფუნქციონალის
/api/close/auction/:productId

Const lastbid = Product.bids[product.bids.length - 1]
Const bidTime = Product.bids[product.bids.length - 1].createdAt 
if(date.now() - bidTime  > 1hour) {
	Product.closed = true;
	Lastbid.bidder.wonProducts.push(product)
}
