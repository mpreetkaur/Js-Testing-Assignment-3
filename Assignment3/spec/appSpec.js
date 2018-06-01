describe("App", () => {
  let clicker = document.querySelector("#click-me");
  let count = document.querySelector("#counter");
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      clicker.click();
      expect(count.textContent).toBe("120");
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(clicker.id).toBe('click-me');
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toBe(120);
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-9)).toBe(1);
    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
      let myComputer = new Computer();
      expect(myComputer.hardDriveSpace).toBe(512)
    })

    describe("installProgram", () => {
      let myComputer = new Computer();
      beforeEach(function (done) {
        myComputer.installProgram(35, function () {
          done();
        })
      })
      it("can install a program if there is sufficient space", (done) => {
        expect(myComputer.hardDriveSpace).toBe(477);
        done();
      })
    })

    describe("installProgram", () => {
      let myComputer = new Computer();
      beforeEach(function (done) {
        myComputer.installProgram(700, function () {
          done();
        })
      })
      it("will not install the program if there is insufficient space", (done) => {
        expect(myComputer.hardDriveSpace).toBe(512);
        done();
      })
    })

    describe("format", () => {
      let myComputer = new Computer();
      beforeEach(function (done) {
        myComputer.installProgram(35, function () {
          done();
        })
      })

      it("resets the hard drive to 512, even after programs have been installed", (done) => {
        myComputer.format()
        expect(myComputer.hardDriveSpace).toBe(512);
        done()
      });
    })
  })
})