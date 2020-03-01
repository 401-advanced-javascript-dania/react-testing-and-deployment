import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Main from '../modules/main.js';
describe('<Main/>',()=>{
    it('exists at the start of our app',()=>{
        let app =shallow(<Main/>);
        expect(app.find('h2').exists()).toBeTruthy();
    })
    it('increament the number on click',()=>{
        let app = mount(<Main/>);
        let button=app.find('.one');
        button.simulate('click');
        expect(app.state('counter')).toEqual(1);
    })
    it('render correctly',() =>{
        const tree = renderer.create(<Main/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
})