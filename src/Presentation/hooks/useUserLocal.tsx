import React, { useEffect, useState } from 'react'
import { GetUserLocalUseCase } from '../../Domain/usecases/userLocal/GetUserLocal';
import { User } from '../../Domain/entities/User';

export const useUserLocal = () => {

    const [user, setUser] = useState<User>()
    useEffect(() => { //Permite efectos secundarios. obtiene el usuario de la sesion 
        getUserSession();
    }, []);

    const getUserSession = async () => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }
    return {
        user,
        getUserSession
    }
}
