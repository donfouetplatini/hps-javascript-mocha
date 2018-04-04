describe('Support internationalisation', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    this.actionwords.sut = require('../src/coffee_machine.js').CoffeeMachine();
  });

  describe('Messages are based on language', function () {
    function messagesAreBasedOnLanguage (language, ready_message) {
      // Tags: priority:medium
      // When I start the coffee machine using language "<language>"
      this.actionwords.iStartTheCoffeeMachineUsingLanguageLang(language);
      // Then message "<ready_message>" should be displayed
      this.actionwords.messageMessageShouldBeDisplayed(ready_message);
    }

    it('English (uid:d0ea589b-21c2-4c49-b4c6-8539841ae0f0)', function () {
      messagesAreBasedOnLanguage.apply(this, ['en', 'Ready']);
    });

    it('French (uid:93b02222-348a-4374-b79e-1803cf126db5)', function () {
      messagesAreBasedOnLanguage.apply(this, ['fr', 'Pret']);
    });
  });


  it('No messages are displayed when machine is shut down (uid:c414a32b-9be6-4775-bccb-b3507825d4bb)', function () {
    // Tags: priority:medium
    // Given the coffee machine is started
    this.actionwords.theCoffeeMachineIsStarted();
    // When I shutdown the coffee machine
    this.actionwords.iShutdownTheCoffeeMachine();
    // Then message "" should be displayed
    this.actionwords.messageMessageShouldBeDisplayed("");
  });
});
