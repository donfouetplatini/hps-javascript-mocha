exports.Actionwords = {
  iStartTheCoffeeMachineUsingLanguageLang: function (lang) {
    // TODO: Implement action: "Start the coffee machine using language " + String(lang)
    throw 'Not implemented';
  },
  iShutdownTheCoffeeMachine: function () {
    // TODO: Implement action: "Shutdown coffee machine"
    throw 'Not implemented';
  },
  messageMessageShouldBeDisplayed: function (message) {
    // TODO: Implement result: "Displayed message is \"" + String(message) + "\""
    throw 'Not implemented';
  },
  coffeeShouldBeServed: function () {
    // TODO: Implement result: "Coffee is served :)"
    throw 'Not implemented';
  },
  coffeeShouldNotBeServed: function () {
    // TODO: Implement result: "No coffee is served :("
    throw 'Not implemented';
  },
  iTakeACoffee: function () {
    // TODO: Implement action: "Take a coffee"
    throw 'Not implemented';
  },
  iEmptyTheCoffeeGrounds: function () {
    // TODO: Implement action: "Empty coffee grounds"
    throw 'Not implemented';
  },
  iFillTheBeansTank: function () {
    // TODO: Implement action: "Fill beans"
    throw 'Not implemented';
  },
  iFillTheWaterTank: function () {
    // TODO: Implement action: "Fill water tank"
    throw 'Not implemented';
  },
  iTakeCoffeeNumberCoffees: function (coffee_number) {

  },
  theCoffeeMachineIsStarted: function () {
    this.iStartTheCoffeeMachineUsingLanguageLang("en");
  },
  iHandleEverythingExceptTheWaterTank: function () {
    this.iHandleCoffeeGrounds();
    this.iHandleBeans();
  },
  iHandleWaterTank: function () {

  },
  iHandleBeans: function () {

  },
  iHandleCoffeeGrounds: function () {

  },
  iHandleEverythingExceptTheBeans: function () {
    this.iHandleWaterTank();
    this.iHandleCoffeeGrounds();
  },
  iHandleEverythingExceptTheGrounds: function () {
    this.iHandleWaterTank();
    this.iHandleBeans();
  },
  displayedMessageIs: function (__free_text) {
    this.messageMessageShouldBeDisplayed(__free_text);
  },
  iSwitchToSettingsMode: function () {

  },
  settingsShouldBe: function (__datatable) {

  }
};