import React from 'react'
import { mount } from 'enzyme'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import { Header } from './../components/'
import TaskInput from './../components/TaskList/TaskInput'
import TaskItem from './../components/TaskList/TaskItem'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

function setup() {
  const props = {
    dispatch: jest.fn(),
  }
  const store = mockStore({
    api: {
      result: [
        {
          id: 1,
          name: 'Do homework',
          complete: false,
        },
      ],
    },
    isFetching: false,
  })
  const enzymeWrapper = mount(<Header {...props} store={store} />)
  return {
    props,
    enzymeWrapper,
  }
}

describe('Header component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('h1').text()).toBe('Tasks')
    expect(enzymeWrapper.find('TaskInput').length).toBe(1)
    expect(enzymeWrapper.find('TaskList').length).toBe(1)
    expect(enzymeWrapper.find('TaskItem').length).toBe(1)
  })

  it('should invoke addTask dispatch call if the input value is not empty', () => {
    const props = { addTask: jest.fn() }
    const enzymeWrapper = mount(<TaskInput {...props} />)
    const input = enzymeWrapper.find('input')
    input.node.value = 'Drink Milk'
    // simulate click on submit button does not submit the form
    // you can find detail in https://github.com/airbnb/enzyme/issues/308
    enzymeWrapper.find('[type="submit"]').get(0).click()
    expect(props.addTask.mock.calls.length).toBe(1)
  })

  it('should render Task item with props', () => {
    const props = {
      name: 'Drink Milk',
      complete: false,
      onClick: jest.fn(),
      deleteTask: jest.fn(),
    }
    const enzymeWrapper = mount(<TaskItem {...props} />)
    const span = enzymeWrapper.find('span')
    const li = enzymeWrapper.find('li')
    const btn = enzymeWrapper.find('button')
    // should render span tag with props.name
    expect(span.text()).toBe(props.name)
    // li tag should have textDecoration none
    expect(li.get(0).style.textDecoration).toBe('none')
    span.simulate('click')
    expect(props.onClick.mock.calls.length).toBe(1)
    btn.simulate('click')
    expect(props.deleteTask.mock.calls.length).toBe(1)
  })
})
