/* eslint-disable */

import React from 'react';
import Brand from './Brand/index';
import RightIcons from './RightIcons';
import LeftIcons from './LeftIcons';
import * as S from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

const header = () => {
	return (
		<S.Container>
			<LeftIcons />
			<Brand />
			<RightIcons />
		</S.Container>
	);
}

export default header;
