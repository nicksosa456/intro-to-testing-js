// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
   it('should be a defined function', function() {
       expect(typeof sayHello).toBe('function');
   });
   it('should return a string when called.', function() {
       expect(typeof sayHello()).toBe('string');
   });
   it('should return the string "Hello, Jane!" when executed', function() {
       expect(sayHello("Jane")).toBe("Hello, Jane!");
   });
   it('should return the string "Hello, Alex!" when passed "Alex"', function() {
       expect(sayHello("Alex")).toBe("Hello, Alex!");
   });
   it('should return the string "Hello, Pat!" when passed "Pat"', function() {
       expect(sayHello("Pat")).toBe("Hello, Pat!");
   });
   it('should return the string "Hello, World!"', function() {
       expect(sayHello()).toBe("Hello, World!");
   });
    it('should return the string "Hello, World!" when passed true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when passed false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

// describe('add', function() {
//    it('should be a defined function', function() {
//        expect(typeof add).toBe('function');
//    });
//    it('should return 5 when adding 3 and 2',function() {
//        expect(add(3,2)).toBe(5);
//    });
//    it('should return false when adding two strings',function() {
//        expect(add("black", "bird")).toBe(false);
//    })
// });