var string = 'String';
var number = 01234;
var array = [0, 1, 2];
var boolean = false;
var object = {
  val1: [0,1,2],
  val2: 'val2',
  val3: function(){
    console.log('hello');
  }
}

var CAPS = 'test';

function test(val1){
  if(val1 > 0){
    console.log('hello')
  } else {
    this.obj = object;
  }
}

var testresult = test(true);

object.val1[0];
object.val3();
