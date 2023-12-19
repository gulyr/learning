// 1- Sipariş bilgilerini object içerisinde saklayınız.
// 2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

// sipariş id: 101
// sipariş tarihi: 31.12.2022
// ödeme şekli: kredi kartı
// kargo adresi: Yahya kaptan mah. Kocaeli İzmit
// satın alınan ürünler:
//     ürün id: 5
//     ürün başlığı: IPhone 13 Pro
//     ürün url: http://abc.com/iphone-13-pro
//     ürün fiyatı: 22000

//     ürün id: 6
//     ürün başlığı: IPhone 13 Pro Max
//     ürün url: http://abc.com/iphone-13-pro-max
//     ürün fiyatı: 25000

// müşteri:
//     müşteri id: 12

// satıcı:
//     firma id: 34
//     firma adı: Apple Türkiye

// sipariş id: 102
// sipariş tarihi: 30.12.2022
// ödeme şekli: kredi kartı
// kargo adresi: Yahya kaptan mah. Kocaeli İzmit
// satın alınan ürünler:

//     ürün id: 6
//     ürün başlığı: IPhone 13 Pro Max
//     ürün url: http://abc.com/iphone-13-pro-max
//     ürün fiyatı: 25000

// müşteri:
//     müşteri id: 12

// satıcı:
//     firma id: 34
//     firma adı: Apple Türkiye

let result
let order1 = {
  orderID: 101,
  orderDate: new Date('31.12.2022'),
  paymentMethod: 'card',
  cargoAddress: 'Yahya kaptan mah. Kocaeli İzmit',
  purchasedProducts: [
    {
      productID: 5,
      productHeader: 'IPhone 13 Pro',
      productUrl: 'http://abc.com/iphone-13-pro',
      productPrice: 22000,
    },
    {
      productID: 6,
      productHeader: 'IPhone 13 Pro Max',
      productUrl: 'http://abc.com/iphone-13-pro-max',
      productPrice: 25000,
    },
  ],
  customer: {
    customerID: 12,
  },
  salesPerson: {
    companyID: 34,
    companyName: 'Apple Türkiye',
  },
}

let order2 = {
  orderID: 102,
  orderDate: new Date('30.12.2022'),
  paymentMethod: 'card',
  cargoAddress: 'Yahya kaptan mah. Kocaeli İzmit',
  purchasedProducts: {
    productID: 6,
    productHeader: 'IPhone 13 Pro Max',
    productUrl: 'http://abc.com/iphone-13-pro-max',
    productPrice: 25000,
  },
  customer: {
    customerID: 12,
  },
  salesPerson: {
    companyID: 34,
    companyName: 'Apple Türkiye',
  },
}
