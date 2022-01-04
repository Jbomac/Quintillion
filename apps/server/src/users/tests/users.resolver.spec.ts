import { HttpModule } from '@nestjs/axios'
import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Model } from 'mongoose'
import { User } from 'src/schemas'
import { UsersService } from 'src/users/services/users.service'

import { UsersResolver } from '../resolvers/users.resolver'

describe('UsersResolver', () => {
  let resolver: UsersResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        UsersResolver,
        { provide: 'USERS_SERVICE', useClass: UsersService },
        {
          provide: getModelToken(User.name),
          useValue: Model,
        },
      ],
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})