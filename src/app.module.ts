import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//! ConfigModule.forRoot({ isGlobal: true }) => allows me to use .env across the applicatoin .
//we creating an interface then implements it with another class , maybe for mutiple databases connections .
