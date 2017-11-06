//testing_viraj Manjarekar
import $ from 'jquery';
class Formhandler{

  constructor(selector){
    if(!selector){
      throw new Error('No Selector Provided');
    }

    this.$formElement = $(selector);
    this.state = this.$formElement;
    this
    console.log(this.$formElement);
    if(this.$formElement.length===0){
      throw new Error('Could not find element with selector' + selector);
    }
    console.log("Constructor created");
  }

    addSubmitHandler(fn){
    console.log(this.$formElement);
    // console.log(this.$formElement.length);
    console.log('Setting Submit Handler');
    this.$formElement.on('submit', (event) => {
      event.preventDefault();
      let data = {};
      // let coll=(this.$formElement).serializeArray();
      (this.$formElement).serializeArray().forEach((item,index) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });

      console.log(data);
      fn(data);

    });
  }
//  console.log(data);
  //fn(data);



}
export default Formhandler;
