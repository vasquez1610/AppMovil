import { UserLocalRepositoryImp } from '../../../Data/repositories/UserLocalrepository';
import { User } from '../../entities/User';
const { remove } = new UserLocalRepositoryImp();

export const RemoveUserLocalUseCase = async () => {
    return await remove();
}
