import {SAVE_COMMENTS} from '../../src/actions/types';
import {saveComments} from '../../src/actions';
import {expect} from '../test_helper';

describe('Test all the actions',() =>{

  describe('Save Comments actions',() =>{

    it('has correct type of save comment',() =>{
      const action = saveComments();
      expect(action.type).to.equal(SAVE_COMMENTS);
    })

    it('has correct payload of saveComments',() =>{
      const action = saveComments('new Comment');
      expect(action.payload).to.equal('new Comment');
    })

  })

})
