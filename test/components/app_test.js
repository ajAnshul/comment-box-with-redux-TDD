import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App',()=>{
  let component;

  beforeEach(() =>{
    component = renderComponent(App);
  })

  it('App component has class comment_box',() =>{
    expect(component.find('.comment_box')).to.exist;
  })

  it('Check comment list class is their',() =>{
    expect(component.find('.comment_list')).to.exist;
  })

});
