import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import _controllers from './controllers';
import _services from './services';
import _providers from './providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ ..._controllers ],
  providers: [
    ..._services,
    ..._providers,
  ],
})

export default class AppModule {}
