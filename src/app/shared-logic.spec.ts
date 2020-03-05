import { shuffle } from './shared-logic';


describe('SharedLogic', () => {
  it('should shuffle array randomly', () => {
    let arr = ['s'];
    let expected;
    expected = shuffle(arr); 
    expect(arraysAreEqual(arr, expected)).toBeTruthy();
  });
});


function arraysAreEqual(before, after){
  if(before.length !== after.length){
      return false;
  }
  for(var i = 0; i < before.length; i++){
      if(before[i] !== after[i]){
          return false;
      }
  }
  return true;
}

