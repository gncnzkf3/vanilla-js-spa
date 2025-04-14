import Component from "../core/Component.js";

export default class Items extends Component {
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
