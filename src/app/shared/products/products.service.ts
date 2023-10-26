import { Injectable } from '@angular/core';
import { ProductsModel } from './producs.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  getProducts(){
    return this.products.slice();
  }
  getItem(name: string){
    const index = this.getProducts().findIndex(x => x.name ===name);
    return this.products[index];
  }
  getItemId(id:number){
    return this.products[id];
  }

  getProductsCategory(category: string){
    const products: ProductsModel[] = [];
    this.getProducts().forEach(element => {
      if (element.category === category){
        if(element.imagePath===undefined){
           element.imagePath = 'https://th.bing.com/th/id/OIG.5wfy6w_logjuUqG.QnfO?pid=ImgGn&w=1024&h=1024&rs=1';
          }
        products.push(element);
      }
    });
    return products;
  }

  products: ProductsModel[] = [
    { id: 1, name: 'Beef Steak', amount: 10, category: 'freshmeat', description: 'Delicious beef steak aged 8 months', price: 14.99 },
    { id: 2, name: 'Salmon Fillet', amount: 15, category: 'freshfish', description: 'Fresh salmon fillet, great for grilling or baking', price: 18.75 },
    { id: 3, name: 'Carrots', amount: 20, category: 'veggies', description: 'Organic carrots, packed with nutrients and flavor', price: 5.99 },
    { id: 4, name: 'Whole Wheat Bread', amount: 18, category: 'bread', description: 'Healthy whole wheat bread, freshly baked every morning', price: 3.49 },
    { id: 5, name: 'Chocolate Cake', amount: 8, category: 'cakes', description: 'Decadent chocolate cake, perfect for celebrations', price: 22.50 },
    { id: 6, name: 'Frozen Mixed Vegetables', amount: 25, category: 'frozenVeggies', description: 'A mix of peas, carrots, and corn, ideal for quick meals', price: 7.85 },
    { id: 7, name: 'Pineapple Pizza', amount: 12, category: 'pizzas', description: 'Hawaiian-style pizza with pineapple and ham', price: 13.99 },
    { id: 8, name: 'Vanilla Ice Cream', amount: 30, category: 'icecreams', description: 'Creamy vanilla ice cream, a classic dessert choice', price: 9.99 },
    { id: 9, name: 'Mineral Water', amount: 40, category: 'water', description: 'Purified mineral water, refreshing and healthy', price: 1.99 },
    { id: 10, name: 'Cola', amount: 35, category: 'sodas', description: 'Classic cola soda, fizzy and satisfying', price: 1.49 },
    { id: 11, name: 'Red Wine', amount: 28, category: 'wines', description: 'Fine red wine, perfect for dinner parties', price: 19.99 },
    { id: 12, name: 'Spaghetti Pasta', amount: 22, category: 'pasttandrice', description: 'Traditional spaghetti pasta, great with various sauces', price: 2.99 },
    { id: 13, name: 'Black Pepper', amount: 50, category: 'spices', description: 'Premium black pepper, adds flavor to any dish', price: 4.75 },
    { id: 14, name: 'Olive Oil', amount: 45, category: 'oil', description: 'Extra virgin olive oil, ideal for cooking and salads', price: 7.99 },
    { id: 15, name: 'Moisturizing Shampoo', amount: 18, category: 'shampoos', description: 'Moisturizing shampoo for soft and silky hair', price: 6.50 },
    { id: 16, name: 'Lavender Shower Gel', amount: 15, category: 'shower', description: 'Soothing lavender shower gel, promotes relaxation', price: 5.25 },
    { id: 17, name: 'Hair Conditioner', amount: 20, category: 'conditioner', description: 'Rich hair conditioner for smooth and manageable hair', price: 8.99 },
    { id: 18, name: 'Fresh Citrus Deodorant', amount: 30, category: 'deodorants', description: 'Citrus-scented deodorant for long-lasting freshness', price: 4.25 },
    { id: 19, name: 'Potato Chips', amount: 42, category: 'chips', description: 'Crunchy potato chips, a popular snack choice', price: 3.75 },
    { id: 20, name: 'Gummy Bears', amount: 55, category: 'candies', description: 'Colorful and chewy gummy bears, loved by kids and adults', price: 2.99 },
    { id: 21, name: 'Milk Chocolate Bar', amount: 25, category: 'chocolates', description: 'Smooth milk chocolate bar, a classic treat', price: 1.99 },
    { id: 22, name: 'Honey Nut Cereal', amount: 38, category: 'cereals', description: 'Crunchy honey nut cereal, a delicious breakfast option', price: 4.49 },
    { id: 23, name: 'Ribeye Steak', amount: 14, category: 'freshmeat', description: 'Juicy ribeye steak, perfect for grilling', price: 16.75 },
    { id: 24, name: 'Tuna Steak', amount: 18, category: 'freshfish', description: 'Fresh tuna steak, a healthy choice for seafood lovers', price: 22.50 },
    { id: 25, name: 'Broccoli', amount: 23, category: 'veggies', description: 'Nutrient-rich broccoli, great for stir-fries and salads', price: 3.99 },
    { id: 26, name: 'Baguette', amount: 30, category: 'bread', description: 'Crusty baguette, freshly baked for your enjoyment', price: 2.49 },
    { id: 27, name: 'Cheesecake', amount: 10, category: 'cakes', description: 'Creamy cheesecake with a graham cracker crust', price: 18.99 },
    { id: 28, name: 'Frozen Spinach', amount: 27, category: 'frozenVeggies', description: 'Frozen spinach, convenient for soups and casseroles', price: 6.99 },
    { id: 29, name: 'Pepperoni Pizza', amount: 16, category: 'pizzas', description: 'Classic pepperoni pizza, a favorite for pizza lovers', price: 14.99 },
    { id: 30, name: 'Chocolate Chip Ice Cream', amount: 35, category: 'icecreams', description: 'Vanilla ice cream with chocolate chips, a delightful dessert', price: 8.25 },
    { id: 31, name: 'Sparkling Water', amount: 48, category: 'water', description: 'Refreshing sparkling water, a guilt-free fizzy drink', price: 1.29 },
    { id: 32, name: 'Orange Soda', amount: 42, category: 'sodas', description: 'Bubbly orange soda, a burst of citrus flavor', price: 1.49 },
    { id: 33, name: 'White Wine', amount: 32, category: 'wines', description: 'Crisp white wine, perfect for summer gatherings', price: 15.99 },
    { id: 34, name: 'Macaroni Pasta', amount: 25, category: 'pasttandrice', description: 'Elbow macaroni pasta, great for macaroni and cheese', price: 2.75 },
    { id: 35, name: 'Garlic Powder', amount: 55, category: 'spices', description: 'Aromatic garlic powder, enhances the flavor of various dishes', price: 3.99 },
    { id: 36, name: 'Canola Oil', amount: 40, category: 'oil', description: 'Light and versatile canola oil, suitable for cooking and baking', price: 6.49 },
    { id: 37, name: 'Volumizing Shampoo', amount: 17, category: 'shampoos', description: 'Shampoo for volume and shine, adds body to your hair', price: 5.99 },
    { id: 38, name: 'Coconut Shower Gel', amount: 14, category: 'shower', description: 'Coconut-scented shower gel, tropical and invigorating', price: 4.25 },
    { id: 39, name: 'Deep Repair Conditioner', amount: 22, category: 'conditioner', description: 'Intensive conditioner for damaged hair, restores and strengthens', price: 7.50 },
    { id: 40, name: 'Lavender Deodorant', amount: 28, category: 'deodorants', description: 'Gentle lavender-scented deodorant, keeps you fresh all day', price: 4.99 },
    { id: 41, name: 'Tortilla Chips', amount: 37, category: 'chips', description: 'Crunchy tortilla chips, perfect for dipping in salsa or guacamole', price: 3.49 },
    { id: 42, name: 'Fruit Gummies', amount: 50, category: 'candies', description: 'Assorted fruit gummies, chewy and flavorful', price: 2.99 },
    { id: 43, name: 'Dark Chocolate Truffles', amount: 24, category: 'chocolates', description: 'Luxurious dark chocolate truffles, a decadent treat', price: 9.99 },
    { id: 44, name: 'Granola Cereal', amount: 33, category: 'cereals', description: 'Healthy granola cereal with nuts and dried fruits', price: 5.79 },
    { id: 45, name: 'Pork Chops', amount: 14, category: 'freshmeat', description: 'Tender pork chops, perfect for grilling or frying', price: 12.50 },
    { id: 46, name: 'Shrimp', amount: 20, category: 'freshfish', description: 'Fresh shrimp, versatile and delicious in various dishes', price: 20.99 },
    { id: 47, name: 'Bell Peppers', amount: 18, category: 'veggies', description: 'Colorful bell peppers, great for salads and stir-fries', price: 4.95 },
    { id: 48, name: 'Bagels', amount: 25, category: 'bread', description: 'Soft and chewy bagels, ideal for breakfast sandwiches', price: 1.99 },
    { id: 49, name: 'Red Velvet Cake', amount: 10, category: 'cakes', description: 'Moist red velvet cake with cream cheese frosting', price: 28.75 },
    { id: 50, name: 'Mixed Berries', amount: 30, category: 'frozenVeggies', description: 'Frozen mixed berries, perfect for smoothies and desserts', price: 6.99 },
    { id: 51, name: 'Margherita Pizza', amount: 16, category: 'pizzas', description: 'Classic margherita pizza with tomatoes, mozzarella, and basil', price: 12.99 },
    { id: 52, name: 'Mint Chocolate Chip Ice Cream', amount: 35, category: 'icecreams', description: 'Refreshing mint ice cream with chocolate chips', price: 7.50 },
    { id: 53, name: 'Coconut Water', amount: 48, category: 'water', description: 'Natural coconut water, hydrating and packed with electrolytes', price: 2.99 },
    { id: 54, name: 'Lemonade', amount: 42, category: 'sodas', description: 'Sweet and tangy lemonade, a classic summer drink', price: 1.75 },
    { id: 55, name: 'Chardonnay', amount: 32, category: 'wines', description: 'Smooth chardonnay wine, pairs well with seafood and poultry', price: 18.25 },
    { id: 56, name: 'Rice Noodles', amount: 25, category: 'pasttandrice', description: 'Thin rice noodles, essential for Asian-inspired dishes', price: 3.49 },
    { id: 57, name: 'Cumin Powder', amount: 55, category: 'spices', description: 'Ground cumin powder, adds a warm flavor to curries and stews', price: 4.99 },
    { id: 58, name: 'Sesame Oil', amount: 40, category: 'oil', description: 'Toasty sesame oil, enhances the taste of Asian cuisine', price: 7.25 },
    { id: 59, name: 'Tea Tree Shampoo', amount: 17, category: 'shampoos', description: 'Shampoo with tea tree oil, invigorating and promotes scalp health', price: 6.99 },
    { id: 60, name: 'Lavender Bubble Bath', amount: 14, category: 'shower', description: 'Relaxing lavender-scented bubble bath for a spa-like experience', price: 5.75 },
    { id: 61, name: 'Keratin Conditioner', amount: 22, category: 'conditioner', description: 'Keratin-infused conditioner for strong and silky hair', price: 8.50 },
    { id: 62, name: 'Sandalwood Deodorant', amount: 28, category: 'deodorants', description: 'Natural sandalwood-scented deodorant, free from harsh chemicals', price: 4.75 },
    { id: 63, name: 'Chocolate Chip Cookies', amount: 28, category: 'sweets', description: 'Homemade chocolate chip cookies, perfect for dessert lovers', price: 6.99 },
    { id: 64, name: 'Gummy Worms', amount: 40, category: 'sweets', description: 'Colorful and chewy gummy worms, a favorite among kids', price: 3.25 },
    { id: 65, name: 'Salted Pretzels', amount: 22, category: 'salted', description: 'Crunchy salted pretzels, great for snacking', price: 2.99 },
    { id: 66, name: 'Mixed Nuts', amount: 18, category: 'salted', description: 'Assorted salted nuts, a healthy and satisfying snack', price: 5.49 },
    { id: 67, name: 'Frozen Chicken Breast', amount: 15, category: 'frozenmeatfish', description: 'Individually packed frozen chicken breast, convenient for cooking', price: 9.99 },
    { id: 68, name: 'Salmon Fillet (Frozen)', amount: 12, category: 'frozenmeatfish', description: 'Frozen salmon fillet, preserved at its peak freshness', price: 15.75 },
    { id: 69, name: 'Whiskey', amount: 10, category: 'liquors', description: 'Premium whiskey, smooth and rich in flavor', price: 29.99 },
    { id: 70, name: 'Vodka', amount: 8, category: 'liquors', description: 'High-quality vodka, ideal for cocktails and mixed drinks', price: 24.50 },
    { id: 71, name: 'IPA Beer', amount: 30, category: 'beers', description: 'India Pale Ale beer, known for its hoppy and bitter taste', price: 11.99 },
    { id: 72, name: 'Stout Beer', amount: 25, category: 'beers', description: 'Dark and robust stout beer, perfect for chilly evenings', price: 12.75 },
    { id: 73, name: 'Lamb Chops', amount: 12, category: 'freshmeat', description: 'Tender lamb chops, perfect for grilling or roasting', price: 18.95 },
  { id: 74, name: 'Cod Fillet', amount: 15, category: 'freshfish', description: 'Mild and flaky cod fillet, versatile for various recipes', price: 14.50 },
  { id: 75, name: 'Asparagus', amount: 20, category: 'veggies', description: 'Fresh asparagus spears, great for grilling or steaming', price: 6.75 },
  { id: 76, name: 'Rye Bread', amount: 18, category: 'bread', description: 'Hearty rye bread, perfect for sandwiches and toasts', price: 4.99 },
  { id: 77, name: 'Cheese Platter', amount: 8, category: 'appetizers', description: 'Assorted cheese platter with crackers and fruits', price: 22.99 },
  { id: 78, name: 'Frozen Pizza Rolls', amount: 25, category: 'frozenSnacks', description: 'Crunchy pizza rolls, a quick and tasty snack choice', price: 8.25 },
  { id: 79, name: 'Mango Sorbet', amount: 10, category: 'desserts', description: 'Refreshing mango sorbet, dairy-free and delicious', price: 5.99 },
  { id: 80, name: 'Sparkling Rosé', amount: 32, category: 'wines', description: 'Bubbly rosé wine, perfect for celebrations', price: 17.75 },
  { id: 81, name: 'Fettuccine Pasta', amount: 22, category: 'pasttandrice', description: 'Wide fettuccine pasta, ideal for creamy Alfredo sauce', price: 3.89 },
  { id: 82, name: 'Paprika Powder', amount: 50, category: 'spices', description: 'Vibrant paprika powder, adds color and flavor to dishes', price: 2.95 },
  { id: 83, name: 'Avocado Oil', amount: 40, category: 'oil', description: 'Nutrient-rich avocado oil, suitable for high-heat cooking', price: 9.49 },
  { id: 84, name: 'Anti-Dandruff Shampoo', amount: 15, category: 'shampoos', description: 'Shampoo for controlling dandruff and maintaining scalp health', price: 7.50 },
  { id: 85, name: 'Citrus Body Wash', amount: 18, category: 'shower', description: 'Invigorating citrus-scented body wash, energizes your shower routine', price: 4.99 },
  { id: 86, name: 'Leave-In Conditioner', amount: 20, category: 'haircare', description: 'Leave-in conditioner for smooth and frizz-free hair', price: 10.75 },
  { id: 87, name: 'Scented Candles', amount: 30, category: 'home', description: 'Aromatic scented candles, creates a cozy atmosphere at home', price: 12.99 },
  { id: 88, name: 'Trail Mix', amount: 25, category: 'snacks', description: 'Healthy trail mix with nuts, seeds, and dried fruits', price: 7.25 },
  { id: 89, name: 'Chia Seeds', amount: 12, category: 'superfoods', description: 'Nutrient-packed chia seeds, a great addition to smoothies', price: 6.99 },
  { id: 90, name: 'Quinoa', amount: 18, category: 'superfoods', description: 'High-protein quinoa, versatile for salads and main dishes', price: 4.50 },
  { id: 91, name: 'Herbal Tea Assortment', amount: 15, category: 'beverages', description: 'Assorted herbal tea bags, relaxing and caffeine-free', price: 3.99 },
  { id: 92, name: 'Almond Butter', amount: 10, category: 'spreads', description: 'Creamy almond butter, a healthy spread for toast and fruits', price: 8.25 },
 { id: 94, name: 'White Chocolate Bar', amount: 25, category: 'chocolates', description: 'Smooth white chocolate bar, a sweet indulgence', price: 2.49 },
  { id: 95, name: 'Chocolate Covered Almonds', amount: 20, category: 'chocolates', description: 'Crunchy almonds coated in rich milk chocolate', price: 4.99 },
  { id: 96, name: 'Hazelnut Chocolate Bar', amount: 18, category: 'chocolates', description: 'Creamy chocolate bar with roasted hazelnuts', price: 3.75 },
  { id: 97, name: 'Raspberry Dark Chocolate', amount: 15, category: 'chocolates', description: 'Dark chocolate with a burst of raspberry flavor', price: 4.25 },
  { id: 98, name: 'Mint Chocolate Bark', amount: 22, category: 'chocolates', description: 'Crunchy chocolate bark infused with mint', price: 3.99 },
  { id: 99, name: 'Caramel Filled Chocolates', amount: 28, category: 'chocolates', description: 'Rich milk chocolate filled with smooth caramel', price: 5.49 },
  { id: 100, name: 'Orange Dark Chocolate', amount: 25, category: 'chocolates', description: 'Dark chocolate with a hint of zesty orange', price: 4.75 },
  { id: 122, name: 'Coconut Chocolate Truffles', amount: 20, category: 'chocolates', description: 'Creamy chocolate truffles with a coconut twist', price: 6.99 },
  { id: 123, name: 'Peanut Butter Chocolate Cups', amount: 24, category: 'chocolates', description: 'Milk chocolate cups filled with smooth peanut butter', price: 3.25 },
  { id: 124, name: 'Toffee Crunch Chocolate', amount: 22, category: 'chocolates', description: 'Milk chocolate with crunchy toffee bits', price: 2.99 }

  ];
  
  
  

  constructor() { }
}
