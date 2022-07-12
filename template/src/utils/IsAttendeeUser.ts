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
import {useMeetingInfo} from '../components/meeting-info/useMeetingInfo';
import {useLiveStreamDataContext} from '../components/contexts/LiveStreamDataContext';

function useIsAttendee() {
  if ($config.EVENT_MODE) {
    const {audienceUids} = useLiveStreamDataContext();
    const isAttendee = (uid: string | number) => {
      const attendeeId = typeof uid === 'number' ? uid : parseInt(uid);
      return audienceUids.filter((audienceUid) => audienceUid === attendeeId)
        .length
        ? true
        : false;
    };
    return isAttendee;
  } else {
    const {isHost} = useMeetingInfo();
    const isAttendee = (uid: string | number) => {
      return !isHost ? true : false;
    };
    return isAttendee;
  }
}

export default useIsAttendee;
