import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.state = {
      items:[
        {
          id: 0, 
          content: 'item1',
          active: true, 
        },
        {
          id: 1,
          content: 'item2',
          active: true,
        }
      ] 
    } 
  }

  template() {
    const listItem = this.state.items;
    return `
        <input type="text" class="textInput" placeholder="아이템 내용 입력" />
        <ul>
          ${listItem.map(({id, content, active}) => (`
            <li>
              ${content}  
              <button type="button" class="toggleBtn" style="color: ${active ? `#09F` : `#F09`}">
              ${active ? `활성` : `비활성` }
              </button>
              <button type="button" class="deleteBtn" data-index=${id}>삭제</button>
            </li>
            `)).join('')}
        </ul>
        <button type="button" class="filterBtn" data-filter="0">전체보기</button>
        <button type="button" class="filterBtn" data-filter="1">활성보기</button>
        <button type="button" class="filterBtn" data-filter="2">비활성보기</button>
    `
  }

  setEvent() {

    this.addEvent('keyup', '.textInput', (event) => {
      const items = this.state.items;
      if(event.key === 'Enter') {
        this.setState({items : [...items, {
          id : Math.max(...items.map(({id}) => (id))) + 1, 
          content : event.target.value,
          active: true,
        }]})
      }
    })

    this.addEvent('click', '.deleteBtn', (event) => {
      const items = this.state.items;

      console.log(items.map(({id}) => id))
      // items.splice(event.target.dataset.index, 1);
      // this.setState({items})
    })
  }
}
