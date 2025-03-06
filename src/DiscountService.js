class DiscountService {
    constructor() {
      this.strategy = null; 
      this.history = []; 
    }
  
    setDiscountStrategy = (strategy) => {
      this.strategy = strategy;
    };
  

    getFinalPrice = (price) => {

      if (!this.strategy) {
        throw new Error('Стратегия скидок не установлена');
      }

      const discountedPrice = this.strategy.apply(price);

      this.history.push({ originalPrice: price, discountedPrice });

      return discountedPrice;
    };
  

    getDiscountHistory = () => {
      return this.history;
    };

    clearHistory = () => {
      this.history = [];
    };
  }
  export default DiscountService;
