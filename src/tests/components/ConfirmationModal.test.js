import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

test('Should render ConfirmationModal', () => {
    const wrapper = shallow(<ConfirmationModal modalState={true}/>);

    expect(wrapper).toMatchSnapshot();
});