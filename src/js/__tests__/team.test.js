import Team from '../Team';
import Character from '../Character';

const team = new Team();
const char1 = new Character('char1');
const char2 = new Character('char2');
const char3 = new Character('char3');

describe('add() method', () => {
    
    test('should add unique character', () => {
        team.members.clear();
        team.add(char1);
        expect(team.members.has(char1)).toBe(true);
    });
    
    test('should throw error when adding duplicate', () => {
        expect(() => team.add(char1)).toThrow(Error("Персонаж уже в команде"));
    });
});

describe('addAll() method', () => {
    
    test('should add multiple unique characters', () => {
        team.members.clear();
        team.addAll(char1, char2, char3);
        expect(team.members.size).toBe(3);
    });

    test('should ignore duplicates', () => {
        team.members.clear();
        team.addAll(char1, char1, char2);
        expect(team.members.size).toBe(2);
    });
});

describe('toArray() method', () => {
    
    test('should return array of characters', () => {
        team.members.clear();
        team.addAll(char1, char2, char3);
        const result = team.toArray();
        const expected = [
            {"name": "char1",},
            {"name": "char2",},
            {"name": "char3",},
            ];
        expect(result).toEqual(expected);
    });
});

