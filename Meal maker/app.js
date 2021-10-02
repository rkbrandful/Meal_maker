const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers(){
      return this._courses.appetizers
    },
    get mains(){
      return this._courses.mains
    },
    get desserts(){
      return this._courses.desserts
    },
    set appetizers(appetizers){
      this._courses.appetizers = appetizers;
    },
    set mains(mains){
      this._courses.mains = mains;
    },
    set desserts(desserts){
      this._courses.desserts = desserts;
    },
    get courses() {
     return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
     }
    }, 
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice,
      }
      return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price; 
      return `Your meal is ${appetizer.name},${main.name}, ${dessert.name} and your cost is ${totalPrice} cedis`
    }
    };
    
    menu.addDishToCourse('appetizers', 'salad', 4.80);
    menu.addDishToCourse('appetizers', 'choco', 4.50);
    menu.addDishToCourse('appetizers', 'milk', 4.00);
    
    menu.addDishToCourse('mains', 'waakye', 5.00);
    menu.addDishToCourse('mains', 'jollof', 5.00);
    menu.addDishToCourse('mains', 'banku', 5.00);
    
    menu.addDishToCourse('desserts', 'icecream', 2.00);
    menu.addDishToCourse('desserts', 'pinot', 1.50);
    menu.addDishToCourse('desserts', 'cappoccino', 3.00);
    
    const meal = menu.generateRandomMeal();
    console.log(meal)
    