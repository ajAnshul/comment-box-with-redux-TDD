import {expect} from '../test_helper';
import {SAVE_COMMENTS} from '../../src/actions/types';
import saveCommentsReducer from '../../src/reducers/comments';


describe('Tests of Reducers',() =>{

  it('handles with unknown type of actions ',() =>{
    expect(saveCommentsReducer(undefined,{})).to.be.instanceof(Array);
    expect(saveCommentsReducer(undefined,{})).to.eql([]);

  })
  it('handles the actions of type save comments',() =>{
    const action = {type:SAVE_COMMENTS,payload:'new comments'};
    expect(saveCommentsReducer([],action)).to.eql(['new comments'])
  })
})
