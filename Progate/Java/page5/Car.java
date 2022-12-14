class Car extends Vehicle {
  private int fuel = 50;

  public int getFuel() {
    return this.fuel;
  }
  
  // Define the printData instance method
  public void printData(){
    System.out.println("Name: " + this.getName());
    System.out.println("Color: " + this.getColor());
    System.out.println("Distance: " + this.getDistance() + "km");
    System.out.println("Fuel: " + this.fuel + "L");
  }

  public void charge(int litre) {
    System.out.println("Adding " + litre + "L ...");
    if (litre <= 0) {
      System.out.println("No fuel added");
    } else if (litre + this.fuel >= 100) {
      System.out.println("Tank now full");
      this.fuel = 100;
    } else {
      this.fuel += litre;
    }
    System.out.println("Fuel: " + this.fuel + "L");
  }
}
