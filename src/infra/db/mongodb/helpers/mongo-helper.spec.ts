import { MongoHelper as sut } from './mongo-helper'

describe('Mongo Helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect
  })

  test('Should reconnect', async () => {
    let rocketCollection = await sut.getCollection('rockets')
    expect(rocketCollection).toBeTruthy()
    await sut.disconnect()
    rocketCollection = await sut.getCollection('rockets')
    expect(rocketCollection).toBeTruthy()
  })
})
