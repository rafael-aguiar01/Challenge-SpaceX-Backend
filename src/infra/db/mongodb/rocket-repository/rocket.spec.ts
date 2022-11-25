import { MongoHelper } from '../helpers/mongo-helper'
import { RocketMongoRepository } from './rocket'

describe('Rocket Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const rocketCollection = await MongoHelper.getCollection('rockets')
    await rocketCollection.deleteMany({})
  })

  const makeSut = (): RocketMongoRepository => {
    return new RocketMongoRepository()
  }

  test('Should return an rocket on success', async () => {
    const sut = makeSut()
    const rocket = await sut.add({
      height: { height: 'valid_height' },
      diameter: { height: 'valid_height' },
      mass: { height: 'valid_height' },
      first_stage: { height: 'valid_height' },
      second_stage: { height: 'valid_height' },
      engines: { height: 'valid_height' },
      landing_legs: { height: 'valid_height' },
      payload_weights: { height: 'valid_height' },
      flickr_images: { height: 'valid_height' },
      name: 'valid_name',
      type: 'valid_type',
      active: true,
      stages: 123,
      boosters: 123,
      cost_per_launch: 123,
      success_rate_pct: 123,
      first_flight: 'valid_flight',
      country: 'valid_country',
      company: 'valid_company',
      wikipedia: 'valid_company',
      description: 'valid_company',
      id: '136127638721632'
    })
    expect(rocket).toBeTruthy()
    expect(rocket.id).toBe('136127638721632')
  })
})
