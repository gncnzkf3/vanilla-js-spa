// 추상화

const $app = document.querySelector('#app');

class Component {
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }

  setup() {}
  template() {return ``}
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent(); 
  }
  setEvent() {}
  setState(newState) {
    this.state = {...this.state, ...newState}
    this.render();
  }
}

class App extends Component {
  setup() {
    this.state = {
      items: ['item1', 'item2', 'item3', 'item4']
    }
  }

  template() {
    const {items} = this.state;
    return `
        <ul>
          ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <button type="button" class="addBtn">추가</button>
    `
  }

  setEvent() {
    const {items} = this.state;
    document.querySelector('.addBtn').addEventListener('click', () => {
      this.setState({items : [...items, `item${items.length + 1}`]})
    })
  }
}

const main = new App($app);