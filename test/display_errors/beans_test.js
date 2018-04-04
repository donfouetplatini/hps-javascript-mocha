describe('Beans', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../actionwords.js').Actionwords);
    this.actionwords.sut = require('../../src/coffee_machine.js').CoffeeMachine();
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // And I handle everything except the beans
    this.actionwords.iHandleEverythingExceptTheBeans();
  });

  it('Message "Fill beans" is displayed after 38 coffees are taken (uid:ed5e0c79-d18d-4194-9b04-f94171f9658e)', function () {
    // Tags: priority:high
    // When I take "38" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(38);
    // Then message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
  });

  it('It is possible to take 40 coffees before there is really no more beans (uid:4bb2134a-a542-4c51-bbaf-455af8404b79)', function () {
    // Tags: priority:low
    // When I take "40" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(40);
    // Then coffee should be served
    this.actionwords.coffeeShouldBeServed();
    // When I take a coffee
    this.actionwords.iTakeACoffee();
    // Then coffee should not be served
    this.actionwords.coffeeShouldNotBeServed();
    // And message "Fill beans" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Fill beans");
  });

  it('After adding beans, the message "Fill beans" disappears (uid:552fb5d6-4a80-4e8a-8da6-c5a8a063dddf)', function () {
    // Tags: priority:high
    // When I take "40" coffees
    this.actionwords.iTakeCoffeeNumberCoffees(40);
    // And I fill the beans tank
    this.actionwords.iFillTheBeansTank();
    // Then message "Ready" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("Ready");
  });
});
