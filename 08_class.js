describe ("Class", function() {

  it ("is defined using the class keyword", function() {
    class Character {
    }

    const warrior = new Character()             // Has a constructor by default
    expect(warrior instanceof Character).toBeTruthy()  // warrior is an instance of its constructor
  })

  it ("default constructor can be overriden by a custom one", function () {
    class Character {
       Character(hp) {
        this.hp = hp
      }
    }

    const warrior = new Character()
    expect(warrior.hp).toBeUndefined()
    expect(warrior.hp).toEqual(undefined)
    expect(warrior.hasOwnProperty("hp")).toBeDefined()
  })

  it ("methods are actually added to the class prototype", function () {
    class Character {
      constructor(hp) {
        this.hp = hp
      }

      shout () {
        return "FUS"
      }
    }

    const warrior = new Character()
    expect(warrior.shout).toBeDefined()
    expect(warrior.shout()).toEqual('FUS')
    expect(warrior.hasOwnProperty("shout")).toBeDefined()
    expect(Character.prototype.hasOwnProperty("shout")).toBeDefined()
  })

  it ("are just special functions", function() {
    class Character {
      Character(hp) {
        this.hp = hp
      }

      shout () {
        return "FUS"
      }
    }

    expect(typeof Character).toEqual('function')
    expect(Character instanceof Function).toBeTruthy()
  })
})
