// 기능구현
// 상태가 변하면 dom이 변한다. 
// state - setState - render

const $app = document.querySelector('#app');

let state = {
  items: ['item1', 'item2', 'item3', 'item4']
}

const render = () => {
  const {items} = state;

  $app.innerHTML = `
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}
      <button type="button" class="addBtn">추가</button>
    </ul>
  `

  document.querySelector('.addBtn').addEventListener('click', () => {
    setState({items : [...items, `item${items.length + 1}`]})
  })
}

const setState = (newState) => {
  state = {...state, ...newState}
  render();
}

render();