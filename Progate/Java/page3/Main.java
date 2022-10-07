class Main {
  public static void main(String[] args) {
    Car car = new Car();
    // Set the name of car to "Ferrari" using the setName method
    car.setName("Ferrari");
    car.setColor("Red");
    
    // Set the color of car to "Red" using the setColor method
    
    Bicycle bicycle = new Bicycle();
    // Set the name of bicycle to "Bianchi" using the setName method
    bicycle.setName("Bianchi");
    bicycle.setColor("Green");
    
    // Set the color of bicycle to "Green" using the setColor method
    
    
    System.out.println("【Car Info】");
    car.printData();

    System.out.println("=================");
    System.out.println("【Bicycle Info】");
    bicycle.printData();
  }
}
