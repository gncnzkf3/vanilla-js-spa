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
          ${items.map((item, idx)=> `
            <li>
              ${item}
              <button type="button" class="deleteBtn" data-index="${idx}">삭제</button>
            </li>`).join('')}
        </ul>
        <button type="button" class="addBtn">추가</button>
    `
  }

  setEvent() {
    this.$target.addEventListener('click', ({target}) => {
      const {items} = this.state;
      if(target.classList.contains('addBtn')) {
        this.setState({items : [...items, `item${items.length + 1}`]})
      }

      if(target.classList.contains('deleteBtn')) {
        items.splice(target.dataset.index, 1);
        this.setState({items})
      }
    })
  }
}
