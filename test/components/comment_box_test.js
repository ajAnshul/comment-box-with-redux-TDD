import {renderComponent, expect} from '../test_helper';
import Comment_box from '../../src/components/comment_box';


describe('Comment Box',() => {

  let component;

  beforeEach(() =>{
    component = renderComponent(Comment_box);
  })
  it('has a class',() =>{
    expect(component).to.have.class('comment_box');
  })
  it('has a text area',() =>{
    expect(component.find('textarea')).to.exist;

  })
  it('has a button',() =>{
    expect(component.find('button')).to.exist;
  })

  describe('Entering some text',() =>{
    // first parent foreach then this one will execute for each it statement
    beforeEach(() =>{
      // to simulate the change event in the perticular html tag, second parameter is new commnet
      component.find('textarea').simulate('change','new comment');
    })
    it('shows the text in textarea',() =>{
      expect(component.find('textarea')).to.have.value('new comment');
    })

    it('when form is submitted, text should get clear',() =>{
      // to simulate the submit of form
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    })



  })
})
