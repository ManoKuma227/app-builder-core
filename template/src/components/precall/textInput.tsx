/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/

import React from 'react';
import TextInput from '../../atoms/TextInput';
import {usePreCall} from '../../components/precall/usePreCall';
import {useString} from '../../utils/useString';
import {useMeetingInfo} from '../meeting-info/useMeetingInfo';

const PreCallTextInput: React.FC = () => {
  const userNamePlaceholder = useString('userNamePlaceholder')();
  const fetchingNamePlaceholder = useString('fetchingNamePlaceholder')();
  const {username, setUsername} = usePreCall();
  const {isJoinDataFetched} = useMeetingInfo();

  return (
    <TextInput
      value={username}
      onChangeText={(text) => setUsername(text ? text.trim() : text)}
      onSubmitEditing={() => {}}
      placeholder={
        isJoinDataFetched ? userNamePlaceholder : fetchingNamePlaceholder
      }
      editable={isJoinDataFetched}
    />
  );
};

export default PreCallTextInput;
