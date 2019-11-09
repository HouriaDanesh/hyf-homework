class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        const matchedIndex = this.products.indexOf (product);
    
        if (matchedIndex > -1) {
          this.products.splice (matchedIndex, 1);
        }
      }
    
    searchProduct(productName)
     {
        const searchPro = this.products.filter(product => {
            if (product.name === productName){
                return true;
            }
        })
    
     }

    getTotal() {
        const totalPrice = this.products.reduce(function(total, product) {
            return total + product.price;
        }, 0)
        return totalPrice;
        }
            }
        
    renderProducts() {
        const Ul = document.createElement('ul');
        document.body.appendChild(Ul)
        for ( let i = 0; i < this.products.length; i++) {
            const Li = document.createElement('li')
            Li.innerHTML = `${this.products[i].name}: ${this.products[i].price} KR`;
            Ul.appendChild (Li)
        }
    }
    

    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
}

}


shoppingCart.addProduct (oneplusMcLaren)
shoppingCart.removeProduct (fridge)
shoppingCart.searchProduct (keyboard)
shoppingCart.getTotal()
shoppingCart.getUser()

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);


