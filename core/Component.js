export default class Component {
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setEvent(); 
  }

  setup() {}
  template() {return ``}
  render() {
    this.$target.innerHTML = this.template();
  }
  setEvent() {}
  setState(newState) {
    this.state = {...this.state, ...newState}
    this.render();
    console.log(this.state)
  }
  addEvent(eventType, selector, callback) {
    const children = [...document.querySelectorAll(selector)];
    this.$target.addEventListener(eventType, (event) => {
      if(!event.target.closest(selector)) return false;
      callback(event)
    }) 
  }
}