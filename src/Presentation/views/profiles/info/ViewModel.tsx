import React from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/usecases/userLocal/RemoveUserLocal';

export const ProfileInfoViewModel = () => {
    const removeSession = async () => {
        await RemoveUserLocalUseCase();
    }
  return {
    removeSession
  }
}

export default ProfileInfoViewModel;
