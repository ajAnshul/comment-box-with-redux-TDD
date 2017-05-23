import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comments_list';


describe('CommentList',() =>{
  let component;
  beforeEach(() =>{
    const props = {comments:["new comment", "other new comment"]}
    component = renderComponent(CommentList, null, props);
  })

  it('shows li for each comment',() =>{
    expect(component.find('li').length).to.equal(2);
  })

  it('show all the comments which is provided',() =>{
    expect(component).to.contain("new comment");
    expect(component).to.contain("other new comment");
  })

})
