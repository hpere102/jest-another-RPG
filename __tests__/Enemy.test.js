

const Enemy = require('../lib/Enemy');

// test 1
test('creates an enemy object', () => {
    const enemy = new Enemy('Tank');
  
    expect(enemy.name).toBe('Tank');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));

    expect(enemy.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );

 });

// test 2
      test("gets enemy's stats as an object", () => {
        const enemy = new Enemy('Tank');
      
        expect(enemy.getStats()).toHaveProperty('potions');
        expect(enemy.getStats()).toHaveProperty('health');
        expect(enemy.getStats()).toHaveProperty('strength');
        expect(enemy.getStats()).toHaveProperty('agility');
      });

  // test 3      
  test('gets inventory from enemy or returns false', () => {
    const enemy = new Enemy('Tank');
  
    expect(enemy.getInventory()).toEqual(expect.any(Array));
  
    enemy.inventory = [];
  
    expect(enemy.getInventory()).toEqual(false);
  });