import { AppDataSource } from './data-source';
import { User } from './Entity/User';

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.firstName = '';
    user.lastName = '';
    user.age = 0;
    await AppDataSource.manager.save(user);

    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');

    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);

    console.log(
      'Here you can setup and run express / fastify / any other framework.',
    );
  })
  .catch((error) => console.log(error));
